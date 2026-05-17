import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a2e 40%, #1a1a2e 70%, #0d0d0d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(201,168,76,0.4)",
            borderRadius: "9999px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <div style={{ color: "#c9a84c", fontSize: 14, letterSpacing: "0.3em", textTransform: "uppercase" }}>
            ★  Award-Winning Makeup Artist  ★
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            color: "white",
            fontSize: 100,
            fontWeight: 300,
            letterSpacing: "-2px",
            marginBottom: "16px",
          }}
        >
          Poonam
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: "200px",
            height: "2px",
            background: "linear-gradient(to right, #c9a84c, #e8c97e, #a07830)",
            marginBottom: "24px",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            color: "#9ca3af",
            fontSize: 22,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Professional Makeup Artist
        </div>

        <div style={{ color: "#c9a84c", fontSize: 18, letterSpacing: "0.2em" }}>
          Mumbai · Pune · Nashik · Nagpur · Maharashtra
        </div>

        {/* Bottom stats */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "2500+", label: "Happy Clients" },
            { value: "4.9★", label: "Average Rating" },
          ].map(({ value, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ color: "#c9a84c", fontSize: 32, fontWeight: 700 }}>{value}</span>
              <span style={{ color: "#6b7280", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
