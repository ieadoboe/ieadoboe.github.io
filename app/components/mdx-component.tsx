import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { Callout } from "@/app/components/mdx-callout";
import { CenteredImage } from "@/app/components/mdx-centered-image";
import { Pre } from "@/app/components/mdx-pre";
import SideNote from "@/app/components/mdx-sidenote";
import ImageLightbox from "@/app/components/image-lightbox";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

// Wrapper for markdown images to add lightbox
interface MDXImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const MDXImage = ({ src, alt, width, height }: MDXImageProps) => {
  return (
    <ImageLightbox
      src={src}
      alt={alt || ""}
      width={width || 800}
      height={height || 600}
      className=""
    />
  );
};

const components = {
  Image,
  img: MDXImage,
  Link,
  Callout,
  CenteredImage,
  SideNote,
  pre: Pre,
};

interface MDXProps {
  code: string;
}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
