export interface QSection {
  heading?: string;
  body: string;
}

export interface MiniFaq {
  q: string;
  a: string;
}

export interface Question {
  slug: string;
  category: string;
  question: string;
  dateAnswered: string;
  intro: string;
  sections: QSection[];
  miniFaq: MiniFaq[];
  relatedSlugs: string[];
  sources: { title: string; url: string }[];
}

// 2026-08-23 기준 취합. 의학 정보 사이트, 식약처 관련 보도 기반. 일반 정보 제공 목적이며 진단, 처방을 대체하지 않습니다.
export const questions: Question[] = [
  {
    slug: "melatonin-prescription-which-department",
    category: "멜라토닌",
    question: "멜라토닌 처방은 어디서, 어느 과에서 받나요",
    dateAnswered: "2026-08-23",
    intro: "정신건강의학과, 신경과, 가정의학과에서 처방받을 수 있고, 불면 증상을 진료하는 내과에서도 처방이 가능한 경우가 있습니다.",
    sections: [
      {
        heading: "향정신성의약품이 아니라 처방 문턱이 낮은 편입니다",
        body: "멜라토닌은 마약류나 향정신성의약품, 오남용 우려 의약품으로 분류돼 있지 않아 의사 판단에 따라 비교적 자유롭게 처방됩니다. 신분증과 건강보험증만 있으면 병원 방문 후 상담을 거쳐 처방받을 수 있고, 수면 일지가 있으면 진료에 도움이 되지만 필수는 아닙니다.",
      },
      {
        heading: "비대면 진료도 가능합니다",
        body: "향정신성의약품이 아니기 때문에 비대면 진료를 통한 처방도 가능한 경우가 많습니다. 다만 병원, 플랫폼마다 운영 방식이 다를 수 있어 이용 전 확인이 필요합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["melatonin-overseas-purchase-import-ban"],
    sources: [
      { title: "멜라토닌 처방받으려면 어느 과로 가야되나요, 하이닥 건강Q&A", url: "https://mobile.hidoc.co.kr/healthqna/view/C0000738372" },
    ],
  },
  {
    slug: "melatonin-magnesium-together",
    category: "병행 복용",
    question: "멜라토닌이랑 마그네슘, 같이 먹어도 되나요",
    dateAnswered: "2026-08-23",
    intro: "두 성분의 작용 기전이 달라 병행이 가능하다고 알려져 있지만, 멜라토닌은 국내 전문의약품이므로 처방 의사와 상담 후 결정해야 합니다.",
    sections: [
      {
        body: "임의로 해외직구한 멜라토닌을 마그네슘과 함께 복용하는 것은 권장되지 않습니다. 멜라토닌은 반드시 국내 처방을 통해 구하고, 처방 의사에게 마그네슘 병행 복용 여부를 함께 상담하는 것이 안전합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["melatonin-prescription-which-department", "magnesium-overdose-side-effects"],
    sources: [
      { title: "한국에서 멜라토닌이 건강기능식품으로 허가가 나지 않는 이유, 헬스경향", url: "http://www.k-health.com/news/articleView.html?idxno=90991" },
    ],
  },
  {
    slug: "melatonin-overseas-purchase-import-ban",
    category: "멜라토닌",
    question: "멜라토닌을 해외직구로 사도 되나요",
    dateAnswered: "2026-08-23",
    intro: "권장되지 않습니다. 함량이나 유래와 상관없이 국내 반입차단 대상 원료, 성분으로 지정되어 있어 통관에서 제한될 수 있습니다.",
    sections: [
      {
        body: "식물성 멜라토닌이 함유된 해외 식품도 반입차단 대상으로 지정돼 있어, 온라인에서 쉽게 구매할 수 있는 다른 나라와 달리 국내로 들여오는 데 제약이 있습니다. 국내에서 합법적으로 사용하려면 병원 처방을 받는 것이 원칙입니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["melatonin-prescription-which-department"],
    sources: [
      { title: "전문의약품 멜라토닌 해외직구 프리패스, 식약처 세관 구멍, 헬스코리아뉴스", url: "https://www.hkn24.com/news/articleView.html?idxno=320131" },
    ],
  },
  {
    slug: "magnesium-overdose-side-effects",
    category: "마그네슘",
    question: "마그네슘 많이 먹으면 부작용 있나요",
    dateAnswered: "2026-08-23",
    intro: "가장 흔한 부작용은 설사, 복통입니다. 신장 기능이 약한 경우에는 고마그네슘혈증 위험이 커질 수 있습니다.",
    sections: [
      {
        heading: "흔한 부작용",
        body: "마그네슘을 과다 섭취하면 장내 수분이 늘어 설사가 생길 수 있고, 복통이나 메스꺼움이 동반되기도 합니다. 국내 성인 권장 섭취량은 남성 400~420mg, 여성 310~320mg 수준입니다.",
      },
      {
        heading: "신장 기능이 약하다면 더 주의해야 합니다",
        body: "신장 기능이 정상인 성인은 식품, 보충제로 인한 마그네슘 과다 섭취가 드물지만, 신장 기능이 저하된 경우 마그네슘 배설이 원활하지 않아 고마그네슘혈증(저혈압, 두통, 오심 등)의 위험이 커질 수 있습니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["magnesium-type-difference"],
    sources: [
      { title: "고마그네슘혈증, 서울아산병원(공식)", url: "https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=32303" },
    ],
  },
  {
    slug: "magnesium-type-difference",
    category: "마그네슘",
    question: "마그네슘은 아무 종류나 먹어도 되나요",
    dateAnswered: "2026-08-23",
    intro: "구연산 마그네슘, 글리시네이트 마그네슘 등 결합된 화합물에 따라 흡수율과 위장 부담이 다르다고 알려져 있습니다.",
    sections: [
      {
        body: "위가 약한 편이라면 흡수율이 좋고 위장 부담이 적은 형태를 고르는 게 도움이 될 수 있습니다. 정확한 본인 상태에 맞는 종류 선택은 약사나 의사와 상담하는 걸 권장합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["magnesium-overdose-side-effects"],
    sources: [
      { title: "마그네슘 분석, 흡수율과 복용 시 위험 신호, 소셜타임스", url: "https://www.esocialtimes.com/news/articleView.html?idxno=31462" },
    ],
  },
  {
    slug: "sleeping-pill-dependency-cbt-alternative",
    category: "수면 관리",
    question: "수면제 계속 먹으면 의존성이 생기나요, 대안은 없나요",
    dateAnswered: "2026-08-23",
    intro: "네, 의존성과 내성이 생길 수 있습니다. 국립정신건강센터는 불면증의 일차 치료로 인지행동치료(CBT-I)를 권장하고 있습니다.",
    sections: [
      {
        heading: "의존성이란",
        body: "처음엔 한 알로 충분했던 약이 시간이 지나며 효과가 떨어지고, 같은 효과를 위해 더 많은 양이 필요해지는 내성이 생길 수 있습니다. 중단했을 때 불쾌감을 피하려고 계속 약을 찾게 되는 것이 의존성입니다.",
      },
      {
        heading: "인지행동치료(CBT-I)라는 대안",
        body: "수면제한, 자극조절치료, 이완훈련, 인지전략, 수면위생 교육 등으로 구성된 인지행동치료는 부작용이 적고 효과에 대한 근거가 확립돼 있어 만성 불면증의 일차 치료로 점차 주목받고 있습니다. 전문의와 상담해 인지행동치료를 포함한 종합적인 치료 계획을 세우는 것이 바람직합니다.",
      },
    ],
    miniFaq: [],
    relatedSlugs: ["melatonin-prescription-which-department"],
    sources: [
      { title: "수면제에 관한 오해와 진실, 국립정신건강센터(공식)", url: "https://ncmh.go.kr/ncmh/board/boardView.do?bn=newsView&fno=39&menu_cd=02_06_01&no=5068" },
      { title: "불면증의 인지행동치료, 대한의사협회지", url: "https://jkma.org/journal/view.php?number=3144&viewtype=pubreader" },
    ],
  },
];

export function getQuestion(slug: string): Question | undefined {
  return questions.find((q) => q.slug === slug);
}
