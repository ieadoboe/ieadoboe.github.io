// src/app/page.tsx
import Tile from '@/components/Tile';

const Home = () => {
  const tilesData = [
    {
      imageSrc: '/images/tile1.jpg', // replace with your image path
      title: 'Tile 1 Title',
      subtext: 'This is some description text for tile 1.',
    },
    {
      imageSrc: '/images/tile2.jpg', // replace with your image path
      title: 'Tile 2 Title',
      subtext: 'This is some description text for tile 2.',
    },
    {
      imageSrc: '/images/tile3.jpg', // replace with your image path
      title: 'Tile 3 Title',
      subtext: 'This is some description text for tile 3.',
    },
  ];

  return (
    <div className="tileContainer">
      {tilesData.map((tile, index) => (
        <Tile
          key={index}
          imageSrc={tile.imageSrc}
          title={tile.title}
          subtext={tile.subtext}
        />
      ))}
    </div>
  );
};

export default Home;