import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(135deg, #1a1a1a, #2d1a2e)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#c9a84c",
            fontSize: 100,
            fontWeight: 700,
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          P
        </span>
        <div
          style={{
            width: 60,
            height: 2,
            background: "linear-gradient(to right, #c9a84c, #e8c97e)",
            marginTop: 8,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
