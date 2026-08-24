import Link from "next/link";
import { faq } from "@/data/sleep";
import { supplements } from "@/data/supplements";

export const metadata = {
  title: "수면 영양제 성분 비교, 작용 원리와 근거 논문, 국내 구매 규정 총정리",
  description: "멜라토닌, 마그네슘부터 L-테아닌, 아쉬와간다, 감태추출물까지 수면 관련 성분의 작용 기전과 학술 근거, 국내 구매/처방 규정을 비교했습니다.",
  openGraph: {
    title: "수면 영양제 성분 비교, 근거 논문 기준 정리",
    description: "멜라토닌, 마그네슘부터 L-테아닌, 아쉬와간다, 감태추출물까지 수면 관련 성분의 작용 기전과 학술 근거, 국내 구매/처방 규정을 비교했습니다.",
  },
};

export default function ComparePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">수면 영양제 {supplements.length}종 비교, 근거 수준부터 국내 구매 규정까지</h1>
      <p className="mb-10 max-w-3xl text-zinc-600 dark:text-zinc-400">
        멜라토닌과 마그네슘뿐 아니라 국내에서 흔히 언급되는 수면 관련 성분을 실제 학술 논문
        기준으로 정리했습니다. 성분마다 작용 원리와 국내 구매 가능 여부가 다르고, 학술적 근거의
        수준도 서로 다릅니다. 이름을 누르면 근거 논문과 주의사항을 자세히 볼 수 있습니다.
      </p>

      <div className="mb-12 space-y-4">
        {supplements.map((s) => (
          <div
            key={s.slug}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Link
                href={`/supplements/${s.slug}`}
                className="text-lg font-bold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                {s.name}
              </Link>
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                근거 수준: {s.evidenceLevel}
              </span>
            </div>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="font-medium text-zinc-700 dark:text-zinc-300">분류</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">{s.category}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-zinc-700 dark:text-zinc-300">작용 원리</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">{s.mechanism}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-zinc-700 dark:text-zinc-300">국내 구매 규정</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">{s.koreaStatus}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-zinc-700 dark:text-zinc-300">적합한 상황</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">{s.bestFor}</dd>
              </div>
            </dl>
            <Link
              href={`/supplements/${s.slug}`}
              className="mt-4 inline-block text-sm text-indigo-600 hover:underline dark:text-indigo-400"
            >
              {s.name} 자세히 보기(근거 논문, 상호작용) →
            </Link>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-lg font-bold">자주 묻는 질문</h2>
      <div className="space-y-3">
        {faq.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <summary className="cursor-pointer list-none font-medium marker:content-none">
              {item.q}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
