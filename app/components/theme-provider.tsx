"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark"; // Add resolved theme for components to use
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Function to determine the actual theme based on system preference and user choice
  const resolveTheme = useCallback((themeValue: Theme): "light" | "dark" => {
    if (themeValue === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return themeValue;
  }, []);

  // Apply the current theme
  const applyTheme = useCallback(
    (themeValue: Theme) => {
      const root = window.document.documentElement;
      const resolvedValue = resolveTheme(themeValue);

      // Set the resolved theme for components to use
      setResolvedTheme(resolvedValue);

      // Update the class on the html element
      if (resolvedValue === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      // Store the user's explicit preference
      if (themeValue !== "system") {
        localStorage.setItem("theme", themeValue);
      } else {
        localStorage.setItem("theme", "system");
      }
    },
    [resolveTheme]
  );

  // Initialize theme on first mount
  useEffect(() => {
    // Ensure we're running on client
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme) {
        setTheme(savedTheme);
        applyTheme(savedTheme);
      } else {
        applyTheme("system");
      }
    }
  }, [applyTheme]);

  // Update when theme state changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Add listener for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Function to handle system theme change
    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    // Initial check
    handleSystemThemeChange();

    // Add listener for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () =>
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemThemeChange);
      return () => mediaQuery.removeListener(handleSystemThemeChange);
    }
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
