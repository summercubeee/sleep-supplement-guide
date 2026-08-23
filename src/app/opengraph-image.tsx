import { ImageResponse } from "next/og";

export const alt = "멜라토닌 vs 마그네슘 총정리";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #c7d2fe 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div style={{ fontSize: 64 }}>😴</div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              color: "#4338ca",
              background: "white",
              padding: "8px 20px",
              borderRadius: 999,
            }}
          >
            국내 처방/구매 규정 정리
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            color: "#1c1917",
            lineHeight: 1.25,
            maxWidth: 980,
          }}
        >
          멜라토닌일까요, 마그네슘일까요
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#57534e", marginTop: 24, maxWidth: 900 }}>
          작용 원리 / 구매 규정 / 상황별 선택 가이드
        </div>
      </div>
    ),
    { ...size }
  );
}
