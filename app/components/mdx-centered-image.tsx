import ImageLightbox from "@/app/components/image-lightbox";

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
    <div className={`flex items-center w-full justify-center my-8`} {...props}>
      <ImageLightbox
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
      />
    </div>
  );
}
