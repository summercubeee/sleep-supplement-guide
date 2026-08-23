export const metadata = {
  title: "출처, 멜라토닌 vs 마그네슘 총정리",
  description: "이 사이트의 정보에 대한 출처 목록입니다.",
  openGraph: {
    title: "출처",
    description: "이 사이트의 정보에 대한 출처 목록입니다.",
  },
};

const links = [
  { title: "고마그네슘혈증, 서울아산병원(공식)", url: "https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=32303" },
  { title: "멜라토닌 처방받으려면 어느 과로 가야되나요, 하이닥", url: "https://mobile.hidoc.co.kr/healthqna/view/C0000738372" },
  { title: "멜라토닌, 나무위키", url: "https://namu.wiki/w/%EB%A9%9C%EB%9D%BC%ED%86%A0%EB%8B%88" },
  { title: "한국에서 멜라토닌이 건강기능식품으로 허가가 나지 않는 이유, 헬스경향", url: "http://www.k-health.com/news/articleView.html?idxno=90991" },
  { title: "전문의약품 멜라토닌 해외직구, 식약처 세관 규정, 헬스코리아뉴스", url: "https://www.hkn24.com/news/articleView.html?idxno=320131" },
];

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-2xl font-bold">출처</h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        이 사이트는 의료/건강 관련 언론보도와 공개 자료를 취합해 정리했습니다. 의학적 판단이
        필요한 사항은 반드시 전문의와 상담하세요.
      </p>
      <ul className="space-y-2 text-sm">
        {links.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline dark:text-sky-400"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
