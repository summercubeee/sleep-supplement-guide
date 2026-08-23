"use client";

import { useState } from "react";
import { scenarios } from "@/data/sleep";

export default function MyCaseClient() {
  const [selected, setSelected] = useState(0);
  const [result, setResult] = useState<(typeof scenarios)[number] | null>(null);

  return (
    <div>
      <div className="mb-8 space-y-3 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <p className="mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          지금 나의 상황과 가장 가까운 것은?
        </p>
        {scenarios.map((s, i) => (
          <label key={s.situation} className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="scenario"
              checked={selected === i}
              onChange={() => setSelected(i)}
              className="h-4 w-4"
            />
            {s.situation}
          </label>
        ))}

        <button
          type="button"
          onClick={() => setResult(scenarios[selected])}
          className="mt-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-600"
        >
          참고 결과 보기
        </button>
      </div>

      {result && (
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900/40 dark:bg-indigo-950/20">
          <p className="mb-2 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
            {result.recommendation}
          </p>
          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{result.reason}</p>
        </div>
      )}

      <p className="mt-6 text-xs text-zinc-400">
        이 결과는 일반 정보를 취합한 참고용이며 의학적 진단이 아닙니다. 멜라토닌은 국내 전문의약품이므로
        반드시 의사와 상담 후 복용하세요.
      </p>
    </div>
  );
}
