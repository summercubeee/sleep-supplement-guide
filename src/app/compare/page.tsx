import { supplements, faq } from "@/data/sleep";

export const metadata = {
  title: "멜라토닌 마그네슘 차이, 작용 원리와 국내 구매 규정 총정리",
  description: "멜라토닌과 마그네슘의 작용 기전, 국내 구매/처방 규정을 비교했습니다.",
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
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">멜라토닌과 마그네슘, 근본적으로 다른 성분</h1>
      <p className="mb-10 max-w-3xl text-zinc-600 dark:text-zinc-400">
        둘 다 수면 관련 영양제로 묶여 이야기되지만, 하나는 호르몬 보충이고 하나는 미네랄
        보충입니다. 국내 구매 가능 여부도 크게 다릅니다.
      </p>

      <div className="mb-12 space-y-4">
        {supplements.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h2 className="mb-3 text-lg font-bold text-indigo-600 dark:text-indigo-400">{s.name}</h2>
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
