// src/components/Tile.tsx
import Image from "next/image";
import styles from "@/styles/Tile.module.css";

type TileProps = {
  imageSrc: string;
  title: string;
  subtext: string;
};

const Tile = ({ imageSrc, title, subtext }: TileProps) => {
  return (
    <div className={styles.tile}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtext}>{subtext}</p>
      </div>
    </div>
  );
};

export default Tile;
