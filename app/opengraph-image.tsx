import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const dynamic = "force-static";
export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #ffffff, #f7f7f7)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "4px solid #14B8A6",
            borderRadius: "16px",
            padding: "40px",
            backgroundColor: "white",
            maxWidth: "90%",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              margin: "0 0 20px 0",
            }}
          >
            Isaac Adoboe
          </h1>
          <h2
            style={{
              fontSize: "32px",
              color: "#14B8A6",
              margin: "0 0 40px 0",
              textAlign: "center",
            }}
          >
            Data Science & Research
          </h2>
          <p
            style={{
              fontSize: "24px",
              color: "#666",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0",
            }}
          >
            {siteConfig.description}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
