import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const items = [
  {
    title: "멜라토닌 마그네슘 성분 비교, 작용 원리와 국내 구매 규정",
    link: `${SITE_URL}/compare`,
    description: "멜라토닌은 국내 전문의약품, 마그네슘은 건강기능식품으로 유통되는 차이를 정리했습니다.",
  },
  {
    title: "상황별 수면 영양제 선택 가이드",
    link: `${SITE_URL}/scenarios`,
    description: "시차적응, 스트레스성 불면, 만성 불면 등 상황별로 무엇이 맞는지 정리했습니다.",
  },
];

export async function GET() {
  const lastBuildDate = new Date("2026-08-23").toUTCString();

  const itemsXml = items
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${lastBuildDate}</pubDate>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ko-kr</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
