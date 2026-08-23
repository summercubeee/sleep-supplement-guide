import Link from "next/link";
import { notFound } from "next/navigation";
import { questions, getQuestion } from "@/data/questions";

export function generateStaticParams() {
  return questions.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const q = getQuestion(slug);
  if (!q) return {};
  return {
    title: `${q.question} | 멜라토닌 vs 마그네슘`,
    description: q.intro,
    openGraph: { title: q.question, description: q.intro },
  };
}

export default async function QuestionPage(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const q = getQuestion(slug);
  if (!q) notFound();

  const related = q.relatedSlugs
    .map((s) => getQuestion(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const qaJsonLd = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.intro },
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaJsonLd) }}
      />
      <nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:text-indigo-600">홈</Link>
        <span className="mx-1">/</span>
        <span>{q.category}</span>
      </nav>

      <h1 className="mb-3 text-2xl font-bold leading-snug sm:text-3xl">{q.question}</h1>
      <div className="mb-6 flex items-center gap-2 text-xs text-zinc-400">
        <span>답변일 {q.dateAnswered}</span>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          답변완료
        </span>
      </div>

      <div className="mb-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 text-sm leading-relaxed text-zinc-700 dark:border-indigo-900/40 dark:bg-indigo-950/20 dark:text-zinc-300">
        <p className="mb-2 font-semibold text-indigo-600 dark:text-indigo-400">공식 출처 기반 답변</p>
        <p>{q.intro}</p>
      </div>

      <div className="space-y-6">
        {q.sections.map((s, i) => (
          <div key={i}>
            {s.heading && <h2 className="mb-2 text-lg font-bold">{s.heading}</h2>}
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{s.body}</p>
          </div>
        ))}
      </div>

      {q.miniFaq.length > 0 && (
        <div className="mt-10 space-y-3">
          <h2 className="text-lg font-bold">이런 질문도 있어요</h2>
          {q.miniFaq.map((f) => (
            <div
              key={f.q}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="mb-1 font-semibold">Q. {f.q}</p>
              <p className="text-zinc-600 dark:text-zinc-400">A. {f.a}</p>
            </div>
          ))}
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-3 text-lg font-bold">이런 질문도 함께 보면 좋아요</h2>
          <ul className="space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/${r.slug}`}
                  className="block rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {r.question}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
        <p className="mb-2 font-semibold text-zinc-700 dark:text-zinc-300">출처</p>
        <ul className="space-y-1">
          {q.sources.map((s) => (
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

      <Link href="/questions" className="mt-10 inline-block text-sm text-zinc-500 hover:text-indigo-600">
        ← 다들 궁금해하는 질문 전체 보기
      </Link>
    </div>
  );
}
