import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { Callout } from "@/app/components/mdx-callout";
import { CenteredImage } from "@/app/components/mdx-centered-image";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  CenteredImage,
};

interface MDXProps {
  code: string;
}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
