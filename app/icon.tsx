import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "linear-gradient(135deg, #1a1a1a, #2d1a2e)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
        }}
      >
        <span
          style={{
            color: "#c9a84c",
            fontSize: 22,
            fontWeight: 700,
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          P
        </span>
      </div>
    ),
    { ...size }
  );
}
