export interface EvidenceSection {
  heading: string;
  body: string;
}

export interface SourceLink {
  title: string;
  url: string;
}

export type EvidenceLevel = "강함" | "중간" | "제한적";

export interface Supplement {
  slug: string;
  name: string;
  englishName: string;
  category: string;
  mechanism: string;
  koreaStatus: string;
  bestFor: string;
  evidenceLevel: EvidenceLevel;
  evidenceSummary: string;
  evidenceDetail: EvidenceSection[];
  interactions: string;
  suitedFor: string;
  sources: SourceLink[];
  dateReviewed: string;
}

// 2026-08-24 기준 취합. 실제 학술 논문(체계적 문헌고찰/메타분석/RCT 우선)을 근거로 정리했으며,
// 근거가 약하거나 예비 연구 수준인 경우 evidenceLevel과 본문에서 명확히 구분해 표기합니다.
// 일반 정보 제공 목적이며 진단, 처방을 대체하지 않습니다. 복용 전 전문가 상담을 권장합니다.
export const supplements: Supplement[] = [
  {
    slug: "melatonin",
    name: "멜라토닌",
    englishName: "Melatonin",
    category: "수면 유도 호르몬 보충",
    mechanism:
      "뇌의 송과선에서 분비되는 수면 유도 호르몬을 외부에서 보충해 생체리듬(서카디안 리듬)을 조절합니다. 직접적인 진정 작용보다는 뇌에 밤이 됐다는 신호를 보내는 방식으로 작용합니다.",
    koreaStatus:
      "국내에서는 전문의약품으로 분류돼 의사 처방이 있어야 구매 가능합니다. 식물성 멜라토닌 함유 식품도 반입차단 대상 원료로 지정돼 있어 해외직구가 사실상 제한됩니다.",
    bestFor: "시차적응, 교대근무로 인한 생체리듬 붕괴, 수면위상지연증후군(처방 하에)",
    evidenceLevel: "강함",
    evidenceSummary:
      "국제 학술지 메타분석에서 수면잠복시간과 총 수면시간 개선이 확인됐지만, 효과 크기는 수면제보다 작습니다.",
    evidenceDetail: [
      {
        heading: "메타분석에서 확인된 수치",
        body: "PLoS ONE에 실린 2013년 메타분석(19개 RCT, 총 1683명 대상)에 따르면 멜라토닌 복용군은 위약군 대비 수면잠복시간이 평균 7.06분 단축됐고, 총 수면시간은 평균 8.25분 증가했으며, 전반적인 수면의 질도 통계적으로 유의하게 개선됐습니다. 다만 연구진은 이 효과가 기존 수면제에 비하면 절대적 크기가 작다고 밝혔습니다.",
      },
      {
        heading: "효과가 뚜렷한 상황은 따로 있습니다",
        body: "수면의학 전문가들은 멜라토닌이 생체시계가 실제 시간과 어긋난 경우(시차, 교대근무, 수면위상지연증후군)에서 상대적으로 효과가 뚜렷하다고 설명합니다. 스트레스나 노화로 인한 일반적인 불면증에서는 수면제만큼의 효과가 보장되지 않습니다.",
      },
    ],
    interactions:
      "항응고제(와파린 등), 면역억제제, 경구피임약, 당뇨약과 상호작용할 수 있다고 보고돼 있습니다. 국내에서는 전문의약품이므로 임의로 복용량을 조절하거나 다른 약과 병행하기 전 반드시 처방 의사와 상담해야 합니다.",
    suitedFor:
      "해외여행 시차적응이 필요하거나, 교대근무로 수면 패턴이 흐트러진 경우, 잠드는 시간이 계속 늦어지는 수면위상지연증후군이 있는 경우 처방을 통해 고려할 수 있습니다.",
    sources: [
      { title: "Ferracioli-Oda E, Qawasmi A, Bloch MH. Meta-Analysis: Melatonin for the Treatment of Primary Sleep Disorders, PLoS ONE 2013", url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0063773" },
      { title: "김희진 교수의 수면의학, 멜라토닌은 만병통치약?, 헬스경향", url: "https://www.k-health.com/news/articleView.html?idxno=82615" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "magnesium",
    name: "마그네슘",
    englishName: "Magnesium",
    category: "미네랄 보충(간접적 이완 보조)",
    mechanism:
      "근육과 신경계의 긴장을 완화하는 미네랄로, 직접적인 수면 유도가 아니라 이완을 통한 간접적인 수면의 질 개선을 돕는다고 알려져 있습니다.",
    koreaStatus: "건강기능식품 또는 일반식품으로 유통되며, 약국/마트에서 자유롭게 구매 가능합니다.",
    bestFor: "스트레스로 인한 근육 긴장, 잦은 뒤척임, 다리 저림 등으로 수면의 질이 떨어지는 경우",
    evidenceLevel: "강함",
    evidenceSummary:
      "노인 대상 메타분석에서 수면잠복시간 단축 효과가 확인됐지만, 총 수면시간 증가는 통계적으로 유의하지 않았습니다.",
    evidenceDetail: [
      {
        heading: "메타분석에서 확인된 수치",
        body: "BMC Complementary Medicine and Therapies 2021년 체계적 문헌고찰 및 메타분석에 따르면 노인 151명을 대상으로 한 연구를 종합한 결과, 마그네슘 섭취군의 수면잠복시간이 평균 17.36분 줄었습니다(95% 신뢰구간 -27.27~-7.44분, p=0.0006). 다만 총 수면시간 증가폭(+16.06분)은 통계적으로 유의하지 않았습니다.",
      },
      {
        heading: "국내 체계적 문헌고찰도 있습니다",
        body: "고려대학교에서 진행된 국내 체계적 문헌고찰(DBpia 게재)은 PubMed, Embase, Cochrane 데이터베이스의 2022년까지 자료를 분석해, 마그네슘 섭취가 혈중 렌닌/멜라토닌 농도를 높이고 코르티솔을 낮추는 생리적 변화를 동반하며, 고령층/여성일수록 수면 건강에 긍정적 영향이 나타나는 경향을 확인했습니다.",
      },
    ],
    interactions:
      "테트라사이클린/퀴놀론계 항생제, 비스포스포네이트(골다공증약)의 흡수를 방해할 수 있어 복용 시간을 나눠야 합니다. 신장 기능이 저하된 경우 배설이 원활하지 않아 고마그네슘혈증 위험이 커질 수 있습니다.",
    suitedFor:
      "스트레스로 몸이 긴장돼 잘 뒤척이거나, 다리 저림/쥐가 잦아 수면의 질이 떨어지는 경우, 평소 마그네슘 섭취가 부족했던 고령층에게 상대적으로 효과가 일관되게 나타납니다.",
    sources: [
      { title: "Oral magnesium supplementation for insomnia in older adults: a Systematic Review and Meta-Analysis, BMC Complementary Medicine and Therapies 2021", url: "https://link.springer.com/article/10.1186/s12906-021-03297-z" },
      { title: "마그네슘 섭취가 수면건강에 미치는 영향, 체계적 문헌 고찰, 고려대학교(DBpia)", url: "https://www.dbpia.co.kr/journal/detail?nodeId=T16956034" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "l-theanine",
    name: "L-테아닌",
    englishName: "L-theanine",
    category: "아미노산(긴장 완화)",
    mechanism:
      "녹차에 함유된 아미노산으로, 뇌에서 글루타메이트 수용체에 약하게 작용하고 GABA 합성을 촉진해 진정 효과 없이 긴장을 완화한다고 알려져 있습니다.",
    koreaStatus:
      "국내에서 스트레스로 인한 긴장 완화 기능성을 인정받은 건강기능식품 원료입니다. 하루 200~250mg 섭취 시 긴장 완화에 도움을 줄 수 있다는 기능성 표시가 가능합니다.",
    bestFor: "카페인 섭취 후에도 각성 상태가 이어지거나, 긴장으로 잠들기 어려운 경우",
    evidenceLevel: "강함",
    evidenceSummary:
      "897명 규모 메타분석에서 주관적 수면 질과 입면 관련 지표 개선이 확인됐지만, 총 수면시간 증가 근거는 부족합니다.",
    evidenceDetail: [
      {
        heading: "메타분석에서 확인된 효과",
        body: "2025년 학술지에 실린 체계적 문헌고찰 및 메타분석(897명, 18개 연구 종합)에 따르면 L-테아닌은 주관적 수면잠복시간, 주간기능장애, 전반적 주관적 수면의 질 점수를 유의하게 개선했습니다. 하루 200~450mg 섭취가 안전하고 효과적인 범위로 제시됐습니다. 다만 총 수면시간이 늘어난다는 근거는 부족했습니다.",
      },
      {
        heading: "복합 성분 연구도 있습니다",
        body: "락티움과 L-테아닌을 함께 섭취한 이중맹검 무작위 대조 크로스오버 시험에서는 수면의 질이 낮은 성인의 수면 지표가 개선됐습니다. 다만 이는 단일 성분이 아닌 복합 섭취 결과라는 점을 감안해야 합니다.",
      },
    ],
    interactions:
      "전반적으로 안전성이 높은 편이지만, 혈압강하제와 병용 시 혈압이 추가로 낮아질 수 있다는 보고가 있어 저혈압 경향이 있다면 주의가 필요합니다.",
    suitedFor:
      "카페인을 마신 뒤에도 긴장이 풀리지 않거나, 진정 작용이 강한 성분보다는 부드럽게 이완되는 방식을 선호하는 경우에 적합합니다.",
    sources: [
      { title: "The effects of L-theanine consumption on sleep outcomes: A systematic review and meta-analysis, PubMed 2025", url: "https://pubmed.ncbi.nlm.nih.gov/40056718/" },
      { title: "Effect of Alpha-S1-Casein Tryptic Hydrolysate and L-Theanine on Poor Sleep Quality: A Double Blind, Randomized Placebo-Controlled Crossover Trial, PMC", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8838692/" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "glycine",
    name: "글리신",
    englishName: "Glycine",
    category: "아미노산(체온 하강 보조)",
    mechanism:
      "억제성 신경전달물질로 작용하는 아미노산으로, 잠들기 위해 필요한 심부체온 하강을 돕는 방식으로 작용한다고 알려져 있습니다.",
    koreaStatus:
      "일반식품/건강기능식품 원료로 유통되지만, 국내에서 수면 관련 기능성으로 개별인정된 원료는 아닙니다.",
    bestFor: "잠들기까지 시간이 오래 걸리거나 얕은 잠을 자주 자는 경우",
    evidenceLevel: "중간",
    evidenceSummary:
      "소규모 수면다원검사 연구에서 입면시간 단축과 서파수면 진입이 빨라지는 효과가 확인됐지만, 대규모 연구는 부족합니다.",
    evidenceDetail: [
      {
        heading: "수면다원검사로 확인된 효과",
        body: "2007년 학술지 Sleep and Biological Rhythms에 실린 무작위 대조시험에서, 평소 수면에 불만족하던 참가자가 취침 전 글리신 3g을 섭취했을 때 수면다원검사(PSG) 상 입면까지 걸리는 시간과 서파수면 진입 시간이 단축됐고, 주관적 수면의 질과 수면효율도 개선됐습니다. 수면 구조 자체를 바꾸지 않으면서 벤조디아제핀계 수면제와는 다른 방식으로 작용한다고 연구진은 설명합니다.",
      },
      {
        heading: "다음날 기능에도 영향",
        body: "같은 연구에서 글리신 섭취군은 주간 졸림이 줄고 기억 재인 과제 수행이 개선된 것으로 나타나, 수면의 질뿐 아니라 다음날 컨디션에도 도움이 될 수 있음을 시사했습니다.",
      },
    ],
    interactions:
      "일반적으로 안전성이 높다고 알려져 있으나, 조현병 보조 치료로 쓰이는 클로자핀과 병용 시 글리신이 약효를 감소시킬 수 있다는 연구가 있어 정신과 약물을 복용 중이라면 상담이 필요합니다.",
    suitedFor: "잠드는 데 시간이 오래 걸리거나, 자고 일어나도 개운하지 않다고 느끼는 경우에 적합합니다.",
    sources: [
      { title: "Yamadera W, et al. Glycine ingestion improves subjective sleep quality in human volunteers, correlating with polysomnographic changes, Sleep and Biological Rhythms 2007", url: "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1479-8425.2007.00262.x" },
      { title: "The effect of glycine administration on the characteristics of physiological systems in human adults: A systematic review, PMC", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10828290/" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "gaba",
    name: "GABA",
    englishName: "Gamma-aminobutyric acid",
    category: "아미노산(억제성 신경전달물질)",
    mechanism:
      "뇌의 대표적인 억제성 신경전달물질로, 경구로 섭취한 GABA가 혈액뇌장벽을 통과해 직접 작용하는지에 대해서는 학계에서 논쟁이 있는 상태입니다.",
    koreaStatus: "건강기능식품 원료로 유통되고 있으며, 발효 원료(현미 배아 발효 등) 기반 제품이 많습니다.",
    bestFor: "불면 증상이 있으면서 스트레스로 인한 긴장을 함께 느끼는 경우",
    evidenceLevel: "중간",
    evidenceSummary:
      "소규모 무작위 대조시험에서 수면잠복시간 단축이 반복적으로 보고됐지만, 표본 크기가 작고 대부분 일본/한국 연구에 편중돼 있습니다.",
    evidenceDetail: [
      {
        heading: "무작위 대조시험 결과",
        body: "발효현미 배아 유래 GABA(300mg/일)를 4주간 투여한 무작위, 이중맹검, 위약대조 시험(불면 증상 호소자 40명, The Journal of Clinical Neurology 2018)에서 수면잠복시간이 평균 13.4분에서 5.7분으로 단축되고 수면효율이 개선됐습니다(p=0.001).",
      },
      {
        heading: "근거 수준의 한계",
        body: "2020년 발표된 체계적 문헌고찰(PMC)은 GABA의 스트레스/수면 관련 인체 연구들을 종합한 결과 유의미한 효과를 보고한 연구가 있지만, 표본 크기가 작고 연구 기간이 짧으며 방법론적 편차가 커 근거 수준이 제한적이라고 결론지었습니다.",
      },
    ],
    interactions:
      "항불안제, 신경안정제 등 진정 작용이 있는 약물과 병용하면 진정 효과가 중첩될 수 있습니다. 경구 GABA의 실제 작용 기전이 명확히 규명되지 않은 만큼 만성 불면 치료제로 대체하기는 이릅니다.",
    suitedFor: "불면과 함께 스트레스성 긴장을 동시에 느끼는 경우, 순한 강도의 보조 수단을 찾는 경우에 고려할 수 있습니다.",
    sources: [
      { title: "Safety and Efficacy of Gamma-Aminobutyric Acid from Fermented Rice Germ in Patients with Insomnia Symptoms: A Randomized, Double-Blind Trial, The Journal of Clinical Neurology 2018", url: "https://www.thejcn.com/DOIx.php?id=10.3988%2Fjcn.2018.14.3.291" },
      { title: "Effects of Oral Gamma-Aminobutyric Acid (GABA) Administration on Stress and Sleep in Humans: A Systematic Review, PMC", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7527439/" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "tryptophan",
    name: "트립토판",
    englishName: "L-tryptophan",
    category: "아미노산(세로토닌/멜라토닌 전구체)",
    mechanism:
      "체내에서 세로토닌과 멜라토닌으로 전환되는 필수 아미노산으로, 이 전환 경로를 통해 수면을 간접적으로 돕는다고 알려져 있습니다.",
    koreaStatus:
      "식품 원료로는 등재돼 있으나, 국내 건강기능식품 개별인정형 기능성 원료로는 등록돼 있지 않아 수면 기능성 표시를 한 제품은 제한적입니다.",
    bestFor: "잠든 후 자주 깨는 경우(수면유지장애)",
    evidenceLevel: "강함",
    evidenceSummary:
      "18개 연구를 종합한 메타분석에서 잠든 후 깨어있는 시간(WASO) 단축 효과가 확인됐습니다.",
    evidenceDetail: [
      {
        heading: "메타분석에서 확인된 효과",
        body: "Nutrition Reviews 2022년 체계적 문헌고찰, 메타분석, 메타회귀분석(18개 연구 종합, 4개 연구 정량 분석)에 따르면 트립토판 보충은 수면 중 깨어있는 시간(WASO)을 평균 81.03분/g 단축시켰습니다(표준화평균차 -1.08, 95% 신뢰구간 -1.89~-0.28). 1g 미만/1g 이상 용량에 따른 효과 차이도 분석됐습니다.",
      },
      {
        heading: "특정 집단 대상 무작위 대조시험",
        body: "신종 약물 의존 환자 80명을 대상으로 한 무작위 이중맹검 위약대조시험(트립토판 1000mg/일, 2주간)에서도 수면장애 지표가 위약군 대비 유의하게 개선됐습니다.",
      },
    ],
    interactions:
      "SSRI, SNRI, MAOI 등 세로토닌계 약물과 병용하면 세로토닌 증후군 위험이 있어 반드시 의료진과 상담해야 합니다. 특히 항우울제를 복용 중이라면 임의로 병행하지 않는 것이 안전합니다.",
    suitedFor: "잠은 들지만 자주 깨서 다시 잠들기 어려운 수면유지장애 경향이 있는 경우에 적합합니다.",
    sources: [
      { title: "The impact of tryptophan supplementation on sleep quality: a systematic review, meta-analysis, and meta-regression, Nutrition Reviews 2022", url: "https://pubmed.ncbi.nlm.nih.gov/33942088/" },
      { title: "Tryptophan for the sleeping disorder and mental symptom of new-type drug dependence: A randomized, double-blind, placebo-controlled trial, PMC", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4956795/" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "valerian",
    name: "발레리안(길초근)",
    englishName: "Valerian root",
    category: "허브(진정 보조)",
    mechanism: "GABA 분해를 억제하고 GABA 수용체에 작용해 진정 효과를 낸다고 알려진 서양 전통 약초입니다.",
    koreaStatus: "국내에서는 건강기능식품 개별인정형 원료로 등록돼 있지 않아 대부분 수입 일반식품이나 허브차 형태로 유통됩니다.",
    bestFor: "가벼운 불면을 겪으면서 약초 기반 성분을 선호하는 경우",
    evidenceLevel: "중간",
    evidenceSummary:
      "6894명 규모 체계적 문헌고찰에서 주관적 수면 질 개선이 확인됐지만, 객관적 측정에서는 효과가 뚜렷하지 않고 제품 품질 편차가 큽니다.",
    evidenceDetail: [
      {
        heading: "대규모 체계적 문헌고찰",
        body: "2020년 발표된 체계적 문헌고찰(60개 연구, 총 6894명)은 그중 10개 연구(1065명)를 메타분석해 발레리안이 주관적 수면의 질을 개선한다고 밝혔습니다. 다만 결과가 일관되지 않은 이유는 사용된 추출물의 품질 편차 때문일 가능성이 크며, 정제 추출물보다는 뿌리, 뿌리줄기 원형에서 더 신뢰할 만한 효과가 나타났다고 분석했습니다.",
      },
      {
        heading: "이전 메타분석과의 비교",
        body: "2010년 무작위 위약대조시험을 종합한 메타분석(Sleep Medicine)도 발레리안이 주관적 불면 개선에 효과가 있다고 결론지었지만, 정량적/객관적 측정(수면다원검사 등)에서는 효과가 입증되지 않았다고 밝혔습니다.",
      },
    ],
    interactions:
      "벤조디아제핀계 수면제, 알코올, 다른 진정제와 병용하면 진정 작용이 과도하게 겹칠 수 있습니다. 드물게 간독성이 보고된 사례가 있어 간질환이 있다면 주의가 필요합니다.",
    suitedFor: "약국 수면제보다는 약초 기반의 순한 보조제를 원하는 가벼운 불면 증상자에게 적합할 수 있습니다.",
    sources: [
      { title: "Valerian Root in Treating Sleep Problems and Associated Disorders, A Systematic Review and Meta-Analysis, 2020", url: "https://journals.sagepub.com/doi/10.1177/2515690X20967323" },
      { title: "Effectiveness of Valerian on insomnia: A meta-analysis of randomized placebo-controlled trials, Sleep Medicine 2010", url: "https://www.sciencedirect.com/science/article/abs/pii/S1389945710001000" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "ashwagandha",
    name: "아쉬와간다",
    englishName: "Ashwagandha (Withania somnifera)",
    category: "허브(아답토젠)",
    mechanism: "인도 전통 의학(아유르베다)에서 쓰여온 약초로, 코르티솔 수치를 낮추고 스트레스 반응을 조절해 간접적으로 수면을 돕는다고 알려져 있습니다.",
    koreaStatus:
      "2018년 식약처 수입 통관금지 대상에서 해제돼 원료 반입은 가능해졌지만, 건강기능식품 개별인정형 기능성 원료로는 등록돼 있지 않아 국내에서는 대부분 수입 일반식품 형태로 유통됩니다.",
    bestFor: "불안/스트레스가 심해 불면 진단을 받은 경우, 고용량 장기 복용이 가능한 경우",
    evidenceLevel: "강함",
    evidenceSummary:
      "5개 RCT(400명) 메타분석에서 전체적으로 작지만 유의한 수면 개선 효과가 확인됐고, 불면증 진단군/8주 이상 복용/고용량에서 효과가 더 뚜렷했습니다.",
    evidenceDetail: [
      {
        heading: "메타분석에서 확인된 효과",
        body: "PLOS ONE 2021년 체계적 문헌고찰 및 메타분석(5개 RCT, 400명)에 따르면 아쉬와간다 추출물은 전반적인 수면에 작지만 유의한 개선 효과를 보였습니다. 특히 불면증으로 진단받은 하위집단, 하루 600mg 이상 복용, 8주 이상 복용한 경우에 효과가 더 뚜렷했습니다. 정신 각성도와 불안 수준도 함께 개선됐습니다.",
      },
      {
        heading: "개별 무작위 대조시험",
        body: "Cureus에 실린 이중맹검 위약대조시험에서는 아쉬와간다 뿌리 추출물을 10주간 복용한 군의 입면시간이 위약군 대비 유의하게 단축된 것으로 나타났습니다.",
      },
    ],
    interactions:
      "갑상선호르몬 수치를 높일 수 있어 갑상선 질환자는 주의해야 합니다. 면역계를 자극할 수 있어 자가면역질환자, 임신 중에는 권장되지 않으며, 진정제/갑상선약과 병용 시 상담이 필요합니다.",
    suitedFor: "불안이나 만성 스트레스가 원인이 되는 불면 경향이 있고, 8주 이상 꾸준히 복용할 수 있는 경우에 적합합니다.",
    sources: [
      { title: "Effect of Ashwagandha (Withania somnifera) extract on sleep: A systematic review and meta-analysis, PLOS ONE 2021", url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0257843" },
      { title: "Efficacy and Safety of Ashwagandha (Withania somnifera) Root Extract in Insomnia and Anxiety: A Double-blind, Randomized, Placebo-controlled Study, PMC", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6827862/" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "rhodiola",
    name: "홍경천(로디올라)",
    englishName: "Rhodiola rosea",
    category: "허브(아답토젠)",
    mechanism: "북유럽/아시아 고산지대에서 자생하는 약초로, 코르티솔을 조절해 피로와 스트레스를 완화하는 아답토젠으로 주로 연구돼 왔습니다.",
    koreaStatus: "국내에서 피로 개선 등 기능성으로 유통되는 건강기능식품 원료가 있지만, 수면 개선 기능성으로 별도 인정된 원료는 아닙니다.",
    bestFor: "피로/스트레스로 인한 컨디션 저하가 수면에도 영향을 주는 경우",
    evidenceLevel: "제한적",
    evidenceSummary:
      "로디올라 단독의 수면 관련 임상 연구는 매우 적고, 대부분 피로/스트레스 개선을 다룬 연구입니다. 수면 관련 근거는 복합 성분 예비 연구 수준입니다.",
    evidenceDetail: [
      {
        heading: "수면 관련 근거는 아직 예비 연구 단계입니다",
        body: "2024년 Nutrients에 실린 소규모 파일럿 연구는 로디올라와 연꽃(Nelumbo nucifera) 추출물을 혼합해(750mg/일) 경계성 불면 성인에게 투여한 결과, 불면 심각도와 수면의 질 지수 일부 항목이 개선됐다고 보고했습니다. 다만 이는 로디올라 단독이 아닌 복합제 연구이며, 표본 규모도 크지 않습니다.",
      },
      {
        heading: "임상 근거의 대부분은 피로/스트레스 영역",
        body: "로디올라 관련 임상 연구를 정리한 리뷰들은 피로, 번아웃, 스트레스성 증상 완화에 대한 근거가 상대적으로 축적돼 있다고 평가하며, 수면에 대한 직접적 임상 자료는 다른 아답토젠(아쉬와간다 등)에 비해 아직 제한적이라고 밝히고 있습니다.",
      },
    ],
    interactions:
      "각성 효과가 있어 저녁 늦게 복용하면 오히려 잠들기 어려워질 수 있습니다. 조증/양극성 장애 병력이 있는 경우와 항우울제(SSRI 등) 병용 시 주의가 필요합니다.",
    suitedFor: "밤보다는 낮 시간 피로/스트레스 관리를 통해 간접적으로 수면 리듬을 개선하고 싶은 경우에 고려할 수 있으며, 직접적인 수면 유도 효과를 기대하고 복용하기에는 근거가 부족합니다.",
    sources: [
      { title: "Mixture of Rhodiola rosea and Nelumbo nucifera Extracts Ameliorates Sleep Quality of Adults with Sleep Disturbance, Nutrients 2024", url: "https://doi.org/10.3390/nu16121867" },
      { title: "The Effectiveness of Rhodiola rosea L. Preparations in Alleviating Various Aspects of Life-Stress Symptoms and Stress-Induced Conditions, PMC", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9228580/" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "chamomile",
    name: "카모마일",
    englishName: "Chamomile (Matricaria chamomilla)",
    category: "허브(진정 보조)",
    mechanism: "아피게닌 성분이 뇌의 GABA-A 수용체에 결합해 가벼운 진정 효과를 낸다고 알려진 대중적인 허브차 원료입니다.",
    koreaStatus: "국내에서는 허브차/일반식품으로 자유롭게 유통되며, 별도의 건강기능식품 기능성 인정 원료는 아닙니다.",
    bestFor: "약한 강도의 취침 전 루틴을 원하거나, 카페인 없는 대체 음료를 찾는 경우",
    evidenceLevel: "강함",
    evidenceSummary:
      "772명 규모 메타분석에서 PSQI 점수(주관적 수면의 질) 유의한 개선이 확인됐지만, 불면증 심각도 자체를 낮춘다는 근거는 약합니다.",
    evidenceDetail: [
      {
        heading: "최신 메타분석 결과",
        body: "2024년 발표된 체계적 문헌고찰 및 메타분석(10개 연구, 772명)에서는 카모마일 섭취군의 피츠버그 수면의 질 지수(PSQI) 점수가 위약군 대비 유의하게 감소했습니다.",
      },
      {
        heading: "이전 메타분석은 다소 엇갈린 결과",
        body: "2019년 Phytotherapy Research 메타분석(12개 RCT)에서는 6개 연구에서 수면의 질 개선이 확인됐지만, 불면증 심각도 척도(ISI)를 사용한 1개 연구에서는 유의한 변화가 없었습니다. 즉 카모마일은 전반적인 주관적 수면 만족도를 높이는 데는 근거가 있지만, 임상적 불면증 자체를 치료한다는 근거는 상대적으로 약합니다.",
      },
    ],
    interactions:
      "국화과 식물(돼지풀, 금잔화 등)에 알레르기가 있다면 교차반응이 있을 수 있습니다. 쿠마린 유사 성분이 있어 와파린 등 항응고제 복용자는 출혈 위험 증가 가능성에 주의해야 합니다.",
    suitedFor: "부담 없이 취침 전 루틴으로 곁들이고 싶거나, 강한 성분보다는 순한 이완 효과를 원하는 경우에 적합합니다.",
    sources: [
      { title: "Effects of chamomile (Matricaria chamomilla L.) on sleep: A systematic review and meta-analysis of clinical trials, 2024", url: "https://pubmed.ncbi.nlm.nih.gov/39106912/" },
      { title: "Therapeutic efficacy and safety of chamomile for state anxiety, generalized anxiety disorder, insomnia, and sleep quality: A systematic review and meta-analysis, Phytotherapy Research 2019", url: "https://onlinelibrary.wiley.com/doi/10.1002/ptr.6349" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "5-htp",
    name: "5-HTP",
    englishName: "5-Hydroxytryptophan",
    category: "아미노산 유도체(세로토닌 전구체)",
    mechanism:
      "트립토판이 세로토닌으로 전환되는 중간 대사물로, 세로토닌/멜라토닌 합성 경로에 트립토판보다 한 단계 더 가깝게 작용한다고 알려져 있습니다.",
    koreaStatus: "국내에서 수면 기능성으로 인정된 건강기능식품 원료가 아니며, 대부분 수입 일반식품 형태로 유통됩니다.",
    bestFor: "다른 성분보다 근거가 약하다는 점을 감안하고 시도해보려는 경우",
    evidenceLevel: "제한적",
    evidenceSummary:
      "미국 국립보건원 산하 NCCIH도 5-HTP의 불면 개선 근거가 매우 제한적이라고 명시하고 있으며, 관련 연구는 대부분 소규모입니다.",
    evidenceDetail: [
      {
        heading: "공식 기관의 평가",
        body: "미국 국립보건원 산하 국립보완통합보건센터(NCCIH)는 5-HTP가 진정 효과를 갖고 있지만 작용 기전이 불분명하고, 불면증에 대한 효과를 뒷받침하는 데이터가 매우 제한적이라고 밝히고 있습니다.",
      },
      {
        heading: "소규모 무작위 대조시험",
        body: "2024년 Clinical Nutrition에 실린 무작위 대조시험은 고령자 30명에게 5-HTP 100mg을 매일 투여해 일부 수면의 질 지표와 혈중 세로토닌 농도가 개선됐다고 보고했습니다. 다만 연구진 스스로도 표본이 작아 불면증 치료 효과를 입증하는 근거로 보기는 이르다고 밝혔습니다.",
      },
    ],
    interactions:
      "SSRI, SNRI, MAOI 등 세로토닌계 약물과 병용하면 세로토닌 증후군 위험이 있어 절대 임의로 병행해서는 안 됩니다. 파킨슨병 치료제 카르비도파와 병용 시 피부경화 유사 부작용이 보고된 바 있습니다.",
    suitedFor: "다른 성분보다 근거 수준이 낮다는 점을 명확히 인지하고, 항우울제 등 세로토닌계 약물을 복용하지 않는 경우에 한해 신중히 고려할 수 있습니다.",
    sources: [
      { title: "Sleep Disorders and Complementary Health Approaches: Usefulness and Safety, NCCIH(미국 국립보완통합보건센터, 공식)", url: "https://www.nccih.nih.gov/health/sleep-disorders-and-complementary-health-approaches" },
      { title: "The impact of 5-hydroxytryptophan supplementation on sleep quality and gut microbiota composition in older adults: A randomized controlled trial, Clinical Nutrition 2024", url: "https://pubmed.ncbi.nlm.nih.gov/38309227/" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "cbd",
    name: "CBD(칸나비디올)",
    englishName: "Cannabidiol",
    category: "대마 유래 성분",
    mechanism: "대마에서 추출되는 비환각성 성분으로, 해외에서는 엔도카나비노이드 시스템을 통해 불안 완화와 수면 개선을 목적으로 연구되고 있습니다.",
    koreaStatus:
      "국내에서는 대법원 판례상 추출 부위와 무관하게 대마의 주성분으로 간주돼 마약류로 규제됩니다. 해외에서 합법적으로 유통되는 제품이라도 국내 반입, 소지, 사용은 마약류관리법 위반으로 처벌 대상이 될 수 있습니다.",
    bestFor: "국내에서는 합법적으로 사용할 수 없는 성분입니다",
    evidenceLevel: "제한적",
    evidenceSummary:
      "해외 무작위 대조시험에서는 효과가 엇갈립니다. 무엇보다 국내에서는 법적으로 사용할 수 없다는 점이 가장 중요한 정보입니다.",
    evidenceDetail: [
      {
        heading: "해외 임상시험 결과는 엇갈립니다",
        body: "Journal of Clinical Sleep Medicine 2024년 무작위 대조 예비시험에서는 원발성 불면증 환자에게 CBD 150mg을 2주간 야간 투여한 결과, 대부분의 수면 지표에서 위약과 유사했지만 주관적 웰빙 개선은 더 크게 나타나, 신체적 효과보다 심리적 효과가 두드러질 가능성이 제기됐습니다. 반면 CBD와 테르펜을 조합한 제형 연구에서는 서파수면/렘수면이 늘었다는 결과도 있어, 제형과 용량에 따라 결과가 크게 달라집니다.",
      },
      {
        heading: "국내 법적 지위가 핵심입니다",
        body: "2025년 대법원은 CBD가 대마초 중 제외 부위(종자, 뿌리, 성숙한 줄기)에서 추출됐더라도 대마의 주성분인 이상 마약류관리법상 대마의 정의에 포함된다고 판결했습니다. 즉 해외 직구나 여행 중 구매를 포함해 국내 반입, 소지, 사용 자체가 처벌 대상이 될 수 있습니다.",
      },
    ],
    interactions:
      "해외 연구 기준으로 간 대사효소(CYP3A4, CYP2C19)를 통해 다른 약물의 혈중 농도를 변화시킬 수 있다고 보고돼 있습니다. 다만 국내에서는 합법적 사용 경로 자체가 없으므로 이 정보는 참고용입니다.",
    suitedFor: "국내 거주/체류 중이라면 합법적으로 선택할 수 없는 성분입니다. 해외의 수면 관련 연구 동향을 이해하는 참고 정보로만 활용하시기 바랍니다.",
    sources: [
      { title: "Cannabidiol for moderate to severe insomnia: a randomized controlled pilot trial of 150 mg of nightly dosing, Journal of Clinical Sleep Medicine 2024", url: "https://jcsm.aasm.org/doi/10.5664/jcsm.10998" },
      { title: "대마초 어느 부위서 추출해도 불법, 칸나비디올 성분 제품 주의, 경향신문", url: "https://www.khan.co.kr/article/202506101423001" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "ecklonia-cava",
    name: "감태추출물",
    englishName: "Ecklonia cava extract",
    category: "해조류 추출물",
    mechanism: "제주도 등에서 자생하는 갈조류 감태에서 추출한 폴리페놀(플로로타닌) 성분으로, GABA 수용체를 활성화해 수면을 돕는다고 규명돼 있습니다.",
    koreaStatus:
      "국내 식약처로부터 수면의 질 개선에 도움을 줄 수 있음 이라는 기능성으로 개별인정형 건강기능식품 원료 인정을 받았습니다. 이후 스트레스로 인한 긴장완화 기능성도 추가로 인정받았습니다.",
    bestFor: "국내산 원료를 선호하거나, 식약처 개별인정을 받은 근거를 우선시하는 경우",
    evidenceLevel: "중간",
    evidenceSummary:
      "서울수면센터/서울대 공동 인체적용시험에서 깊은 수면 증가와 각성시간 감소가 확인돼 국내 최초로 수면개선 기능성 개별인정을 받았습니다.",
    evidenceDetail: [
      {
        heading: "국내 인체적용시험과 식약처 인정",
        body: "한국식품연구원 연구팀이 서울수면센터, 서울대학교와 공동으로 진행한 인체적용시험에서 감태추출물 섭취군은 깊고 안정적인 수면시간 증가, 수면 중 각성시간 감소, 수면 시 호흡장애지수 감소가 확인됐습니다. 이 결과를 바탕으로 감태추출물은 국내 최초로 식약처의 수면개선 건강기능식품 개별인정을 받았습니다.",
      },
      {
        heading: "국제 학술지의 기전 리뷰",
        body: "해양 폴리페놀 플로로타닌 계열 성분의 진정/수면 관련 작용을 정리한 국제 리뷰(PMC)는 감태 유래 플로로타닌이 GABA-A 수용체의 벤조디아제핀 결합 부위에 작용해 수면을 돕는다고 설명하며, 기존 천연 수면 보조제 대비 동물실험에서 우수한 결과를 보였다고 정리했습니다.",
      },
    ],
    interactions: "해조류/갑각류 알레르기가 있다면 섭취 전 성분을 확인하는 것이 안전합니다. 현재까지 심각한 이상반응 보고는 많지 않은 편입니다.",
    suitedFor: "식약처의 개별인정 절차를 거친 근거를 우선시하거나, 수면과 스트레스성 긴장을 함께 관리하고 싶은 경우에 적합합니다.",
    sources: [
      { title: "감태추출물, 수면개선 건기식 개별인정, 의학신문", url: "https://www.bosa.co.kr/news/articleView.html?idxno=585033" },
      { title: "Marine Polyphenol Phlorotannins as a Natural Sleep Aid for Treatment of Insomnia: A Review of Sedative-Hypnotic Effects and Mechanism of Action, PMC", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9780786/" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "lactium",
    name: "락티움(가수분해 카제인)",
    englishName: "Lactium (alpha-s1 casein hydrolysate)",
    category: "우유 단백 유래 펩타이드",
    mechanism: "우유의 알파에스원카제인을 가수분해해 얻은 성분으로, 핵심 물질인 알파카소제핀이 GABA-A 수용체의 오메가2 결합부위에 작용해 진정 효과 없이 긴장을 완화한다고 알려져 있습니다.",
    koreaStatus: "국내에서도 건강기능식품/일반식품 원료로 유통되고 있으며, 다른 이완 성분(테아닌, 트립토판 등)과 조합된 복합 제품이 많습니다.",
    bestFor: "스트레스성 긴장으로 인한 수면 문제를 겪는 경우",
    evidenceLevel: "중간",
    evidenceSummary:
      "일부 연구에서는 PSQI 개선이 확인됐지만, 최근 수면다원검사를 포함한 연구에서는 위약과 유의한 차이가 없어 결과가 엇갈립니다.",
    evidenceDetail: [
      {
        heading: "긍정적 결과를 보인 연구",
        body: "이중맹검 무작위 위약대조 크로스오버 시험(PMC)에서 락티움을 섭취한 군은 피츠버그 수면의 질 지수(PSQI)가 2주 후부터 유의하게 개선됐고, 4주 후에는 수면잠복시간과 주간기능장애 지표도 함께 개선됐습니다.",
      },
      {
        heading: "엇갈리는 최신 연구 결과",
        body: "반면 2024년 발표된 만성 불면증 대상 무작위 대조시험은 수면 관련 설문 및 수면다원검사 지표에서 위약군과 통계적으로 유의한 차이를 발견하지 못해, 보다 명확한 임상 근거가 추가로 필요하다고 결론지었습니다. 즉 락티움은 연구에 따라 결과가 엇갈리는 성분입니다.",
      },
    ],
    interactions: "우유 단백(카제인) 유래 성분이므로 우유 알레르기가 있다면 섭취해서는 안 됩니다. 그 외 보고된 약물 상호작용은 많지 않은 편입니다.",
    suitedFor: "우유 알레르기가 없으면서 스트레스성 긴장이 수면에 영향을 주는 경우 시도해볼 수 있지만, 연구 결과가 엇갈린다는 점을 감안해야 합니다.",
    sources: [
      { title: "A Double-Blind, Randomized, Placebo-Controlled Crossover Clinical Study of the Effects of Alpha-s1 Casein Hydrolysate on Sleep Disturbance, PMC", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6682925/" },
      { title: "The impact of Alpha-s1 Casein hydrolysate on chronic insomnia: A randomized, double-blind controlled trial, 2024", url: "https://www.sciencedirect.com/science/article/abs/pii/S0261561424003972" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "tart-cherry",
    name: "타트체리",
    englishName: "Tart cherry (Montmorency/Prunus cerasus)",
    category: "과일 추출물",
    mechanism: "산도가 높은 체리 품종으로, 미량의 멜라토닌과 항산화 폴리페놀 성분이 함께 작용해 수면을 돕는다고 알려져 있습니다.",
    koreaStatus: "국내에서는 농축액/주스 형태의 일반식품으로 유통되며, 전문의약품인 멜라토닌과 달리 별도 처방이 필요하지 않습니다.",
    bestFor: "멜라토닌 성분에 대한 거부감 없이 음료 형태로 편하게 시도하고 싶은 경우",
    evidenceLevel: "강함",
    evidenceSummary:
      "고령 불면증 환자 대상 파일럿 연구와 후속 체계적 문헌고찰 모두에서 수면시간 증가와 각성시간 감소가 확인됐습니다.",
    evidenceDetail: [
      {
        heading: "고령 불면증 환자 대상 연구",
        body: "Journal of Medicinal Food 2010년 파일럿 연구(고령 불면증 환자 15명)에서 타트체리 주스를 2주간 섭취한 결과, 위약 대비 불면증 심각도가 유의하게 낮아졌고 잠든 후 깨어있는 시간이 평균 17분 줄었습니다.",
      },
      {
        heading: "체계적 문헌고찰에서의 종합",
        body: "2025년 Food Science & Nutrition에 실린 체계적 문헌고찰은 타트체리의 수면 효과를 다룬 임상 연구 6건을 검토해, 그중 5건에서 유의한 수면의 질 개선이 보고됐다고 정리했습니다. 다만 일부 연구에서는 멜라토닌 수치 변화 없이도 수면의 질만 개선되는 경우가 있어, 멜라토닌 함량만으로 효과를 설명하기는 어렵다는 점도 함께 지적됐습니다.",
      },
    ],
    interactions: "당 함량이 높은 제품이 많아 혈당 관리가 필요한 경우 섭취량에 주의해야 합니다. 현재까지 알려진 약물 상호작용 보고는 많지 않습니다.",
    suitedFor: "캡슐형 보충제보다 음료 형태를 선호하거나, 멜라토닌 처방 없이 가볍게 시도해보고 싶은 경우에 적합합니다.",
    sources: [
      { title: "Effects of a tart cherry juice beverage on the sleep of older adults with insomnia: a pilot study, Journal of Medicinal Food 2010", url: "https://pubmed.ncbi.nlm.nih.gov/20438325/" },
      { title: "The Effect of Tart Cherry on Sleep Quality and Sleep Disorders: A Systematic Review, Food Science & Nutrition 2025", url: "https://onlinelibrary.wiley.com/doi/10.1002/fsn3.70923" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "passionflower",
    name: "패션플라워(시계꽃)",
    englishName: "Passiflora incarnata",
    category: "허브(진정 보조)",
    mechanism: "크리신, 비텍신 등 플라보노이드 성분이 GABA-A 수용체에 부분적으로 작용해 진정 효과를 낸다고 알려진 약초입니다.",
    koreaStatus: "국내에서는 허브차/일반식품 형태로 유통되며, 건강기능식품 개별인정 원료로는 등록돼 있지 않습니다.",
    bestFor: "스트레스와 함께 가벼운 불면을 겪는 경우",
    evidenceLevel: "강함",
    evidenceSummary:
      "여러 무작위 대조시험에서 주관적 수면의 질과 총 수면시간 개선이 확인됐고, 벤조디아제핀 대비 의존성/내성 보고가 없다는 점이 특징입니다.",
    evidenceDetail: [
      {
        heading: "허브차 형태 무작위 대조시험",
        body: "이중맹검 위약대조시험에서 참가자들이 취침 전 패션플라워 허브티를 1주간 섭취했을 때, 위약 대비 주관적 수면의 질 평점이 유의하게 더 높게 나타났습니다.",
      },
      {
        heading: "불면증 진단군 대상 연구",
        body: "2024년 Cureus에 실린 무작위 대조시험(스트레스/수면 문제 참가자 65명)에서는 패션플라워 추출물을 30일간 복용한 군의 수면 관련 지표가 위약군보다 유의하게 개선됐습니다. 다른 수면다원검사 기반 연구에서도 총 수면시간과 수면효율 개선이 보고돼 있습니다.",
      },
    ],
    interactions:
      "벤조디아제핀, 알코올 등 진정 작용이 있는 약물/성분과 병용 시 진정 효과가 과도하게 겹칠 수 있습니다. MAOI 계열 약물과의 상호작용 가능성도 보고돼 있어 병용 전 상담이 필요합니다.",
    suitedFor: "벤조디아제핀 계열 수면제의 의존성이 걱정돼 약초 기반의 순한 대안을 찾는 가벼운 불면/스트레스성 수면 문제를 겪는 경우에 적합합니다.",
    sources: [
      { title: "A Double-blind, Placebo-controlled Investigation of the Effects of Passiflora incarnata (Passionflower) Herbal Tea on Subjective Sleep Quality, Phytotherapy Research 2011", url: "https://pubmed.ncbi.nlm.nih.gov/21294203/" },
      { title: "Randomized, Double-Blind, Placebo-Controlled, Clinical Study of Passiflora incarnata in Participants With Stress and Sleep Problems, Cureus 2024", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11026993/" },
    ],
    dateReviewed: "2026-08-24",
  },
  {
    slug: "ziziphus-spinosa",
    name: "산조인",
    englishName: "Ziziphus spinosa (Suanzaoren)",
    category: "한약재(전통 수면 보조)",
    mechanism: "묏대추나무 씨앗으로, 중의학/한의학에서 오래전부터 불면 치료에 사용돼 왔으며 GABA-A 수용체 활성화를 통한 진정 작용이 동물실험에서 규명돼 있습니다.",
    koreaStatus: "한약재로는 한의원 처방을 통해, 식품용 원료로는 일반식품 형태로 유통됩니다. 건강기능식품 개별인정 원료는 아닙니다.",
    bestFor: "심신 불안이 동반된 불면 증상을 한방적 접근으로 관리하고 싶은 경우",
    evidenceLevel: "중간",
    evidenceSummary:
      "예비 단계의 무작위 대조 교차시험에서 실현 가능성이 확인됐지만, 대규모 임상시험은 아직 부족한 상태입니다.",
    evidenceDetail: [
      {
        heading: "예비 임상시험",
        body: "무작위, 위약대조, 교차설계로 진행된 실현가능성 임상시험(ScienceDirect)은 산조인 씨앗이 불면증에 미치는 영향을 평가했으며, 향후 본 임상시험 설계를 위한 실현 가능성과 초기 효과 신호를 확인했습니다.",
      },
      {
        heading: "전통적 사용과 약리 기전 리뷰",
        body: "산조인의 전통적 활용과 화학성분, 약리학적 특성을 정리한 리뷰(PMC)는 150종 이상의 화합물이 확인됐으며 추출물과 정제 화합물이 진정/최면 효과를 보인다고 정리했습니다. 다만 대규모 인체 대상 무작위 대조시험은 아직 충분히 축적되지 않았다고 평가합니다.",
      },
    ],
    interactions: "다른 진정 작용이 있는 한약재나 양약(수면제, 항불안제)과 병용할 경우 한의사/약사와 상담해 용량을 조절하는 것이 안전합니다. 임신 중에는 전문가 상담 후 사용해야 합니다.",
    suitedFor: "한방적 접근을 선호하거나, 심신 불안이 함께 동반된 불면 증상을 겪는 경우 한의사 상담을 통해 고려할 수 있습니다.",
    sources: [
      { title: "Medicinal seeds Ziziphus spinosa for insomnia: A randomized, placebo-controlled, cross-over, feasibility clinical trial, ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S0965229920319245" },
      { title: "Botanical and Traditional Uses and Phytochemical, Pharmacological, Pharmacokinetic, and Toxicological Characteristics of Ziziphi Spinosae Semen: A Review, PMC", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7368963/" },
    ],
    dateReviewed: "2026-08-24",
  },
];

export function getSupplement(slug: string): Supplement | undefined {
  return supplements.find((s) => s.slug === slug);
}
