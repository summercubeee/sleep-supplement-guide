import Link from "next/link";
import { notFound } from "next/navigation";
import { supplements, getSupplement } from "@/data/supplements";

export function generateStaticParams() {
  return supplements.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/supplements/[slug]">) {
  const { slug } = await props.params;
  const s = getSupplement(slug);
  if (!s) return {};
  const title = `${s.name} 수면 효과, 근거 논문과 국내 구매 규정 정리`;
  return {
    title,
    description: s.evidenceSummary,
    openGraph: { title, description: s.evidenceSummary },
  };
}

const evidenceBadgeClass: Record<string, string> = {
  강함: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  중간: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  제한적: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
};

export default async function SupplementPage(props: PageProps<"/supplements/[slug]">) {
  const { slug } = await props.params;
  const s = getSupplement(slug);
  if (!s) notFound();

  const related = supplements.filter((r) => r.slug !== s.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${s.name} 수면 효과, 근거 논문과 국내 구매 규정 정리`,
    description: s.evidenceSummary,
    datePublished: s.dateReviewed,
    dateModified: s.dateReviewed,
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:text-indigo-600">홈</Link>
        <span className="mx-1">/</span>
        <Link href="/compare" className="hover:text-indigo-600">성분 비교</Link>
        <span className="mx-1">/</span>
        <span>{s.name}</span>
      </nav>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h1 className="text-2xl font-bold leading-snug sm:text-3xl">{s.name}</h1>
        <span className="text-base font-normal text-zinc-400">{s.englishName}</span>
      </div>
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
        <span>검토일 {s.dateReviewed}</span>
        <span className={`rounded-full px-2 py-0.5 font-medium ${evidenceBadgeClass[s.evidenceLevel]}`}>
          학술 근거 수준: {s.evidenceLevel}
        </span>
      </div>

      <div className="mb-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 text-sm leading-relaxed text-zinc-700 dark:border-indigo-900/40 dark:bg-indigo-950/20 dark:text-zinc-300">
        <p className="mb-2 font-semibold text-indigo-600 dark:text-indigo-400">한 줄 요약</p>
        <p>{s.evidenceSummary}</p>
      </div>

      <div className="mb-8 space-y-4 text-sm">
        <div>
          <h2 className="mb-2 text-lg font-bold">작용 원리</h2>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{s.mechanism}</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <h2 className="text-lg font-bold">실제 연구 근거는 어떨까요</h2>
        {s.evidenceDetail.map((sec, i) => (
          <div key={i}>
            <h3 className="mb-2 font-semibold">{sec.heading}</h3>
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{sec.body}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-2 text-base font-bold">국내 유통 상태</h2>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.koreaStatus}</p>
      </div>

      <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/40 dark:bg-amber-950/20">
        <h2 className="mb-2 text-base font-bold text-amber-700 dark:text-amber-400">상호작용 및 주의사항</h2>
        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{s.interactions}</p>
      </div>

      <div className="mb-10 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-2 text-base font-bold">이런 분에게 적합합니다</h2>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.suitedFor}</p>
      </div>

      {related.length > 0 && (
        <div className="mb-10">
          <h2 className="mb-3 text-lg font-bold">다른 성분도 함께 보면 좋아요</h2>
          <ul className="grid gap-2 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/supplements/${r.slug}`}
                  className="block rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
        <p className="mb-2 font-semibold text-zinc-700 dark:text-zinc-300">출처</p>
        <ul className="space-y-1">
          {s.sources.map((src) => (
            <li key={src.url}>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline dark:text-sky-400"
              >
                {src.title}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-zinc-400">
          이 페이지는 일반 정보 제공을 목적으로 하며 진단, 처방을 대체하지 않습니다. 개인 건강
          상태에 따라 효과와 부작용이 다를 수 있으니 복용 전 의료진 또는 약사와 상담하세요.
        </p>
      </div>

      <Link href="/compare" className="mt-10 inline-block text-sm text-zinc-500 hover:text-indigo-600">
        ← 수면 영양제 전체 비교로 돌아가기
      </Link>
    </div>
  );
}
