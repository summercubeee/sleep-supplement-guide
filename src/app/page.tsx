import Link from "next/link";
import { supplements } from "@/data/supplements";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <section className="mb-16 text-center">
        <p className="mb-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          2026년 8월 기준 정리
        </p>
        <h1 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          잠이 안 올 때, <span className="text-indigo-500">멜라토닌일까요 마그네슘일까요</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          둘 다 수면과 관련 있지만 작용 원리가 완전히 다릅니다. 국내에서 멜라토닌은 처방이
          필요한 전문의약품이라는 점도 헷갈리는 부분입니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/compare"
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-600"
          >
            성분 비교 보기 →
          </Link>
          <Link
            href="/scenarios"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            내 상황엔 뭐가 맞을까
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="text-lg font-bold">이 사이트에서 다루는 수면 영양제 {supplements.length}가지</h2>
          <Link href="/compare" className="text-sm text-indigo-600 hover:underline dark:text-indigo-400">
            전체 비교표 보기 →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supplements.map((s) => (
            <Link
              key={s.slug}
              href={`/supplements/${s.slug}`}
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-indigo-300 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3 className="font-semibold text-indigo-600 dark:text-indigo-400">{s.name}</h3>
                <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  근거 {s.evidenceLevel}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{s.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
