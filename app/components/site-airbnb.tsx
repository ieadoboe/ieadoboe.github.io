"use client";

import React, { useEffect } from "react";

interface AirbnbEmbedProps {
  uri: string;
  width?: string;
  height?: string;
}

const AirbnbEmbed: React.FC<AirbnbEmbedProps> = ({
  uri,
  width = "100%",
  height = "auto",
}) => {
  const roomId = uri.split("/").pop(); // Extract room ID from URI

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.airbnb.ca/embeddable/airbnb_jssdk";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

  return (
    <div
      className="airbnb-embed-frame"
      data-id={roomId}
      data-view="home"
      data-hide-price="false"
      style={{
        width: width,
        height: height,
        margin: "auto",
      }}
    >
      <a
        href={uri}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-2 text-center text-blue-500"
      >
        View On Airbnb
      </a>
      <a
        href={uri}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block text-center text-gray-700"
      >
        {/* Static or dynamically inserted title could go here */}
        Condo in Kumasi · ★4.83 · 1 bedroom · 2 beds · 1 bath
      </a>
    </div>
  );
};

export default AirbnbEmbed;
