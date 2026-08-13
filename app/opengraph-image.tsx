import { ImageResponse } from "next/og";

export const alt = "SMOKFFIA — UI/UX and web designer Sofia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#FFFFFF",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              background: "#CDFF00",
              borderRadius: 999,
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            SMOKFFIA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 900,
            }}
          >
            UI/UX & web design people remember
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#CDFF00",
              fontWeight: 700,
            }}
          >
            Sofia · designer portfolio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#B0B0B0",
          }}
        >
          <div>Websites · Landing pages · Branding · App Design</div>
          <div
            style={{
              background: "#FF2D9B",
              color: "#FFFFFF",
              padding: "10px 18px",
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            smokffia.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
