"use client";

import { useRef } from "react";
import { CopyButton } from "./copy-button";

interface PreProps {
  children?: React.ReactNode;
  raw?: string;
  [key: string]: any;
}

export function Pre({ children, raw, ...props }: PreProps) {
  const preRef = useRef<HTMLPreElement>(null);

  const getCodeText = (): string => {
    if (raw) return raw;

    // Extract text from the DOM element to preserve formatting
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      if (codeElement) {
        return codeElement.textContent || "";
      }
    }

    return "";
  };

  return (
    <div className="relative group">
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      <CopyButton getText={getCodeText} />
    </div>
  );
}
