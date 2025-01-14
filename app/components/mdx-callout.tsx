import { ReactNode } from "react";

interface CalloutProps {
  children?: ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={`my-6 items-start rounded-2xl border px-5 w-full dark:max-w-none ${
        type === "warning"
          ? "border-yellow-500 bg-yellow-50 dark:border-yellow-600 dark:bg-yellow-800"
          : type === "danger"
          ? "border-red-500 bg-red-50 dark:border-red-700 dark:bg-red-900"
          : ""
      }`}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
