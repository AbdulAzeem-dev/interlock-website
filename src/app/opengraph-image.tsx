import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1d2d",
          color: "#f6f3ec",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 96,
            letterSpacing: 6,
            fontWeight: 600,
          }}
        >
          INTERLOCK
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 26,
            letterSpacing: 4,
            color: "#c6a25b",
            textTransform: "uppercase",
          }}
        >
          Fine Knitwear Manufacturers &middot; Since 1982
        </div>
      </div>
    ),
    { ...size }
  );
}
