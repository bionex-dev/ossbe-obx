import { ImageResponse } from "next/og";

export const alt = "OSBEE SOLUTIONS PRIVATE LIMITED - Economic Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const rings = [140, 230, 320, 410, 500];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 88px", background: "#0a1526", color: "#fff", position: "relative" }}>
        {rings.map((r) => (
          <div key={r} style={{ position: "absolute", right: -r / 2, bottom: -r / 2, width: r * 2, height: r * 2, borderRadius: "50%", border: "1.5px solid rgba(143,179,217,0.22)" }} />
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 6, color: "#8fb3d9" }}>
          <div style={{ width: 40, height: 3, background: "#c29a52" }} />
          ECONOMIC CONSULTANT
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontSize: 82, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
          <span>OSBEE SOLUTIONS</span>
          <span>PRIVATE LIMITED</span>
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 30, color: "#9aa8bc" }}>5.0 / 5 · Based on 1+ Google reviews</div>
      </div>
    ),
    size,
  );
}
