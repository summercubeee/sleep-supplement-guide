import { scenarios } from "@/data/sleep";

export const metadata = {
  title: "상황별 수면 영양제 선택 가이드, 시차적응 스트레스성 불면 만성불면",
  description: "시차적응, 스트레스성 불면, 만성 불면 등 상황별로 멜라토닌과 마그네슘 중 무엇이 맞는지 정리했습니다.",
  openGraph: {
    title: "내 상황엔 뭐가 맞을까요",
    description: "시차적응, 스트레스성 불면, 만성 불면 등 상황별로 멜라토닌과 마그네슘 중 무엇이 맞는지 정리했습니다.",
  },
};

export default function ScenariosPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">내 상황엔 뭐가 맞을까요</h1>
      <p className="mb-10 max-w-3xl text-zinc-600 dark:text-zinc-400">
        같은 &apos;잠이 안 온다&apos;는 문제여도 원인에 따라 접근이 달라집니다. 아래는 일반적으로
        알려진 상황별 참고 정보이며, 최종 선택은 전문가 상담을 권장합니다.
      </p>

      <div className="space-y-4">
        {scenarios.map((s) => (
          <div
            key={s.situation}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h2 className="mb-1 font-semibold">{s.situation}</h2>
            <p className="mb-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {s.recommendation}
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
