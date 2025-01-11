import Image from "next/image";

interface CenteredImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function CenteredImage({
  src,
  alt,
  height = 800,
  width = 600,
  ...props
}: CenteredImageProps) {
  return (
    <div className={`flex items-center w-full justify-center`} {...props}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        layout="intrinsic"
        quality={100}
      />
    </div>
  );
}
