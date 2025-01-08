import React from "react";

type SpotifyEmbedProps = {
  uri: string;
  width?: string;
  height?: string;
};

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
  uri,
  width = "100%",
  height = "352",
}) => {
  return (
    <div className="spotify-embed ">
      <iframe
        src={`https://open.spotify.com/embed/${uri}`}
        width={width}
        height={height}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-2xl shadow-md"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
