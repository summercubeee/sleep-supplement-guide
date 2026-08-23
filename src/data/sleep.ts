export interface Supplement {
  name: string;
  category: string;
  mechanism: string;
  koreaStatus: string;
  bestFor: string;
}

export interface Scenario {
  situation: string;
  recommendation: string;
  reason: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

// 2026-08-23 기준 취합. 개인 건강상태에 따라 다를 수 있어 복용 전 전문가 상담을 권장합니다.
export const supplements: Supplement[] = [
  {
    name: "멜라토닌",
    category: "수면 유도 호르몬 보충",
    mechanism: "뇌의 송과선에서 분비되는 수면 유도 호르몬을 외부에서 보충해 생체리듬(서카디안 리듬)을 조절",
    koreaStatus: "국내에서는 전문의약품으로 분류돼 의사 처방이 있어야 구매 가능. 식물성 멜라토닌 함유 식품도 반입차단 대상 원료로 지정돼 있어 해외직구가 사실상 제한됨",
    bestFor: "시차적응, 교대근무로 인한 생체리듬 붕괴, 불면증 진단을 받은 경우(처방 하에)",
  },
  {
    name: "마그네슘",
    category: "미네랄 보충(간접적 이완 보조)",
    mechanism: "근육과 신경계의 긴장을 완화하는 미네랄로, 직접적인 수면 유도가 아니라 이완을 통한 간접적인 수면의 질 개선을 돕는다고 알려짐",
    koreaStatus: "건강기능식품 또는 일반식품으로 유통, 약국/마트에서 자유롭게 구매 가능",
    bestFor: "스트레스로 인한 근육 긴장, 잦은 뒤척임, 다리 저림 등으로 수면의 질이 떨어지는 경우",
  },
];

export const scenarios: Scenario[] = [
  {
    situation: "해외여행 시차적응이 필요할 때",
    recommendation: "멜라토닌(처방 필요)",
    reason: "생체리듬을 직접 재설정하는 데 특화된 성분이라 시차적응 목적에는 멜라토닌이 더 적합하다고 알려져 있습니다.",
  },
  {
    situation: "스트레스로 몸이 긴장돼 잠들기 어려울 때",
    recommendation: "마그네슘",
    reason: "근육과 신경의 긴장을 풀어주는 방식으로 작용해, 스트레스성 뒤척임에는 마그네슘이 접근하기 쉬운 선택지입니다.",
  },
  {
    situation: "만성 불면증이 의심될 때",
    recommendation: "전문의 상담 우선",
    reason: "멜라토닌은 국내에서 처방이 필요한 전문의약품이고, 마그네슘만으로 해결되지 않는 만성 불면은 원인 진단이 먼저 필요합니다.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "멜라토닌이랑 마그네슘, 같이 먹어도 되나요?",
    a: "일반적으로 두 성분의 작용 기전이 달라 병행이 가능하다고 알려져 있지만, 멜라토닌은 국내에서 전문의약품이므로 처방 의사와 상담 후 복용 여부를 결정해야 합니다. 임의로 해외직구한 멜라토닌을 마그네슘과 함께 복용하는 것은 권장되지 않습니다.",
  },
  {
    q: "멜라토닌을 해외직구로 사도 되나요?",
    a: "멜라토닌은 함량이나 유래와 상관없이 국내 반입차단 대상 원료, 성분으로 지정되어 있어 해외직구 시 통관에서 제한될 수 있습니다. 국내에서 합법적으로 사용하려면 병원 처방을 받는 것이 원칙입니다.",
  },
  {
    q: "마그네슘은 아무 종류나 먹어도 되나요?",
    a: "마그네슘은 구연산 마그네슘, 글리시네이트 마그네슘 등 결합된 화합물에 따라 흡수율과 위장 부담이 다르다고 알려져 있습니다. 위가 약하다면 흡수율이 좋고 위장 부담이 적은 형태를 고르는 게 도움이 될 수 있습니다.",
  },
];
