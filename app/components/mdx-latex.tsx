import React from "react";
import "katex/dist/katex.min.css";
import katex from "katex";

interface LatexProps {
  expression: string;
}

const Latex: React.FC<LatexProps> = ({ expression }) => {
  const html = katex.renderToString(expression, {
    throwOnError: false,
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Latex;
