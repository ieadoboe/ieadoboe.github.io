import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1.0625rem', // 17px base
            lineHeight: '1.75',
            maxWidth: 'none',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            h2: {
              fontSize: '1.875rem',
              marginTop: '2.5em',
              marginBottom: '1em',
              lineHeight: '1.3',
            },
            h3: {
              fontSize: '1.5rem',
              marginTop: '2em',
              marginBottom: '0.75em',
              lineHeight: '1.4',
            },
            h4: {
              fontSize: '1.25rem',
              marginTop: '1.75em',
              marginBottom: '0.5em',
            },
            'ul, ol': {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            blockquote: {
              fontStyle: 'normal',
              fontSize: '1.125rem',
              marginTop: '2em',
              marginBottom: '2em',
              paddingLeft: '1.5em',
            },
            pre: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            code: {
              fontSize: '0.9em',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem', // 18px for larger screens
            lineHeight: '1.8',
            p: {
              marginTop: '1.75em',
              marginBottom: '1.75em',
            },
            h2: {
              fontSize: '2rem',
              marginTop: '2.75em',
              marginBottom: '1.25em',
            },
            h3: {
              fontSize: '1.625rem',
              marginTop: '2.25em',
              marginBottom: '1em',
            },
            blockquote: {
              fontSize: '1.25rem',
              marginTop: '2.5em',
              marginBottom: '2.5em',
            },
          },
        },
      },
    },
  },
  plugins: [
    // require("daisyui"),
    typography,
  ],
} satisfies Config;
