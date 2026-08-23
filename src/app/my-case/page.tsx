import MyCaseClient from "./MyCaseClient";

export const metadata = {
  title: "나는 어디 해당되는데? 내 상황에 맞는 수면 영양제 찾기 | 멜라토닌 vs 마그네슘",
  description: "내 상황을 고르면 멜라토닌과 마그네슘 중 참고할 만한 쪽을 알려드립니다.",
  openGraph: {
    title: "나는 어디 해당되는데? 내 상황에 맞는 수면 영양제",
    description: "내 상황을 고르면 멜라토닌과 마그네슘 중 참고할 만한 쪽을 알려드립니다.",
  },
};

export default function MyCasePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">나는 어디 해당되는데?</h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        내 상황을 고르면 멜라토닌과 마그네슘 중 참고할 만한 쪽을 알려드립니다. 최종 선택은
        전문가 상담으로 결정하세요.
      </p>
      <MyCaseClient />
    </div>
  );
}
