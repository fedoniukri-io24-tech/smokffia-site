export type CaseShot = {
  src: string;
  width: number;
  height: number;
};

export type CaseLayout = "phones" | "wide-phone" | "duo" | "mixed";

export type CaseVisual = {
  id: string;
  title: string;
  bg: string;
  layout: CaseLayout;
  shots: CaseShot[];
  url: string;
  tilt: "left" | "center" | "right";
};

/** Featured on homepage (first 3). */
export const featuredCaseIds = [
  "butenko-fit",
  "trade-ground",
  "nieznany-piekarz",
] as const;

export const caseVisuals: CaseVisual[] = [
  {
    id: "butenko-fit",
    title: "BUTENKO FIT",
    bg: "#C5D4F5",
    layout: "mixed",
    tilt: "left",
    url: "https://www.butenkofit.com/",
    shots: [
      { src: "/images/cases/butenko-fit/01.webp", width: 703, height: 326 },
      { src: "/images/cases/butenko-fit/02.webp", width: 695, height: 973 },
      { src: "/images/cases/butenko-fit/03.webp", width: 703, height: 620 },
    ],
  },
  {
    id: "trade-ground",
    title: "TRADE GROUND",
    bg: "#C8F070",
    layout: "phones",
    tilt: "center",
    url: "https://tradegrnd.com/",
    shots: [
      { src: "/images/cases/trade-ground/01.webp", width: 516, height: 1081 },
      { src: "/images/cases/trade-ground/02.webp", width: 620, height: 1045 },
      { src: "/images/cases/trade-ground/03.webp", width: 286, height: 1026 },
    ],
  },
  {
    id: "nieznany-piekarz",
    title: "NIEZNANY PIEKARZ",
    bg: "#F5D0D8",
    layout: "duo",
    tilt: "right",
    url: "https://nieznanypiekarz.com/pl",
    shots: [
      { src: "/images/cases/nieznany-piekarz/01.webp", width: 697, height: 1086 },
      { src: "/images/cases/nieznany-piekarz/02.webp", width: 758, height: 729 },
    ],
  },
  {
    id: "new-study-line",
    title: "NEW STUDY LINE",
    bg: "#E8D0F0",
    layout: "duo",
    tilt: "left",
    url: "https://newstudyline.com.ua/",
    shots: [
      { src: "/images/cases/new-study-line/01.webp", width: 1172, height: 1355 },
      { src: "/images/cases/new-study-line/02.webp", width: 795, height: 1378 },
    ],
  },
  {
    id: "emvi-digital",
    title: "EMVI DIGITAL",
    bg: "#D5DCE8",
    layout: "wide-phone",
    tilt: "center",
    url: "https://emvi-digital.vercel.app/",
    shots: [
      { src: "/images/cases/emvi-digital/01.webp", width: 1040, height: 753 },
      { src: "/images/cases/emvi-digital/02.webp", width: 752, height: 1558 },
      { src: "/images/cases/emvi-digital/03.webp", width: 1080, height: 392 },
    ],
  },
  {
    id: "kavlora",
    title: "KAVLORA",
    bg: "#F5E68C",
    layout: "wide-phone",
    tilt: "right",
    url: "https://www.kavlora.com/en",
    shots: [
      { src: "/images/cases/kavlora/01.webp", width: 1149, height: 964 },
      { src: "/images/cases/kavlora/02.webp", width: 929, height: 1497 },
      { src: "/images/cases/kavlora/03.webp", width: 1249, height: 517 },
    ],
  },
  {
    id: "jobhack-it",
    title: "JOBHACK IT",
    bg: "#D4CCE8",
    layout: "duo",
    tilt: "left",
    url: "https://www.offer.dpuchkov.com/",
    shots: [
      { src: "/images/cases/jobhack-it/01.webp", width: 1469, height: 1600 },
      { src: "/images/cases/jobhack-it/02.webp", width: 731, height: 1600 },
    ],
  },
  {
    id: "kreona",
    title: "KREONA",
    bg: "#D2EB96",
    layout: "wide-phone",
    tilt: "center",
    url: "https://kreona.net/uk",
    shots: [
      { src: "/images/cases/kreona/01.webp", width: 1515, height: 719 },
      { src: "/images/cases/kreona/02.webp", width: 908, height: 1600 },
      { src: "/images/cases/kreona/03.webp", width: 1585, height: 957 },
    ],
  },
  {
    id: "13vplus",
    title: "13VPLUS",
    bg: "#F5C8DC",
    layout: "duo",
    tilt: "right",
    url: "https://13vplus.com/",
    shots: [
      { src: "/images/cases/13vplus/01.webp", width: 932, height: 1600 },
      { src: "/images/cases/13vplus/02.webp", width: 1437, height: 1600 },
    ],
  },
];

export const caseVisualById = Object.fromEntries(
  caseVisuals.map((c) => [c.id, c]),
) as Record<string, CaseVisual>;
