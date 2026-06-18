// Centralized site content — faithful to her live site's copy and offering.
// Demo only; nothing is wired to a backend. NO invented pricing (she lists
// "contact for pricing"), no fabricated reviews, no commerce.

export const CONTACT = {
  phone: "+1 (929) 267-9869",
  phoneHref: "tel:+19292679869",
  email: "aphroditescoloranalysis@gmail.com",
  emailHref: "mailto:aphroditescoloranalysis@gmail.com",
  location: "Bronx, New York · Virtual, worldwide",
  hours: [
    ["Mon – Sat", "By appointment"],
    ["Sunday", "Closed"],
  ] as [string, string][],
};

export const NAV = [
  { label: "The Reading", href: "/#reading" },
  { label: "The Method", href: "/#method" },
  { label: "What You Receive", href: "/#receive" },
  { label: "The Bracelet", href: "/#bracelet" },
  { label: "The Tool", href: "/intake" },
  { label: "Contact", href: "/#contact" },
];

export type Season = {
  name: string;
  hex: string;
  feeling: string;
  swatches: string[];
};

export const SEASONS: Season[] = [
  {
    name: "Spring",
    hex: "#f0a884",
    feeling: "Warm, clear and bright — first light through new leaves.",
    swatches: ["#f7c59f", "#f0a884", "#e98c6a", "#9bbf8a", "#6fb6c1", "#f4e285"],
  },
  {
    name: "Summer",
    hex: "#d49aac",
    feeling: "Cool, soft and hazy — colors seen through morning mist.",
    swatches: ["#dcc1cf", "#d49aac", "#a98bb0", "#8fa9c9", "#9fc0bd", "#e7d3d8"],
  },
  {
    name: "Autumn",
    hex: "#c07b3e",
    feeling: "Warm, rich and earthy — spice, rust and golden field.",
    swatches: ["#d6a45e", "#c07b3e", "#8a4b2c", "#6f7a3c", "#9c6b3f", "#c98f4a"],
  },
  {
    name: "Winter",
    hex: "#7a4b6e",
    feeling: "Cool, deep and vivid — jewel tones against fresh snow.",
    swatches: ["#3a3f6b", "#7a4b6e", "#8e2f4a", "#1f6f6a", "#b0b6c4", "#e7e9ef"],
  },
];

export const METHOD = [
  {
    title: "Esthetics",
    body: "A trained eye for your skin, your undertone, and the quiet contrast between your features.",
  },
  {
    title: "Traditional color analysis",
    body: "The classic seasons and sub-tones — the grammar that gives your palette its structure.",
  },
  {
    title: "Colors found in nature",
    body: "Palettes the world already arranges beautifully — petals, stone, water and light.",
  },
  {
    title: "World art history",
    body: "Centuries of how artists have used color to move people, borrowed for your skin.",
  },
  {
    title: "Your environment",
    body: "The light you actually live in and the life you dress for, woven into the reading.",
  },
];

export type Deliverable = {
  name: string;
  body: string;
  points: string[];
};

export const RECEIVE: Deliverable[] = [
  {
    name: "A written color report",
    body: "A keepsake you'll return to for years — your colors, set down in your own study.",
    points: [
      "Your season and the colors that flatter you most",
      "Your best neutrals and the shades to set aside",
      "Makeup tones and the metals that suit your skin",
    ],
  },
  {
    name: "A gemstone bracelet",
    body: "The part no one else offers — a bracelet of stones chosen to live inside your unique color set.",
    points: [
      "Natural stones, hand-matched to your palette",
      "Made for you alone — one of one",
      "Your colors, carried with you long after the session",
    ],
  },
];

export type Step = {
  no: string;
  title: string;
  body: string;
  free?: boolean;
};

export const JOURNEY: Step[] = [
  {
    no: "01",
    title: "Your intake",
    body: "A quiet five minutes before we ever meet. Capture your skin in honest daylight, share your style goals, and bring your questions — so our session opens already knowing you.",
    free: true,
  },
  {
    no: "02",
    title: "Your virtual session",
    body: "We meet, face to face, over video — entirely human, no AI and no filters. I read your colors against your skin and we land on your palette together, grounded in your input today.",
  },
  {
    no: "03",
    title: "Your written report",
    body: "After our session, a written color analysis with concrete recommendations: your palette, your neutrals, your makeup tones and metals.",
  },
  {
    no: "04",
    title: "Your gemstone bracelet",
    body: "And a bracelet made of stones in your unique color set — so you don't just learn your colors, you wear them.",
  },
];

export type Faq = { q: string; a: string };

export const FAQ: Faq[] = [
  {
    q: "Is it really done by a person — no AI or filters?",
    a: "Entirely. Forget AI and filters — your reading is done live by a beauty artist whose job is to bring the real you out of the canvas of life. It's a conversation, not an algorithm.",
  },
  {
    q: "Can a virtual session capture my colors accurately?",
    a: "Yes — with honest daylight and a trained eye. The free intake before our session is built to help you get good photos gently: face a window, skip makeup and filters, and capture your face, neck and inner wrist so your true undertone comes through.",
  },
  {
    q: "What exactly do I receive?",
    a: "After your single virtual session you receive a written report of your color analysis with concrete recommendations, and a bracelet made of stones in your unique color set — one of one, made for you.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is shared by consultation — reach out through the form below and we'll send it over. It's kept personal, and it's set at a price you can't afford to miss.",
  },
  {
    q: "How are my intake photos handled?",
    a: "Your intake photos are previewed right in your browser and are used only to prepare your analysis — never sold, never used for advertising, never handed to a tracker.",
  },
];

export const STYLE_GOALS = [
  "Dress with more confidence",
  "Shop less, wear more",
  "Find my best makeup tones",
  "A full wardrobe refresh",
  "The gemstone bracelet keepsake",
  "Look great on camera",
  "Build a capsule wardrobe",
  "Understand my undertone",
];

export const QUESTION_CHIPS = [
  "Is photo-based analysis accurate?",
  "Help with makeup colors",
  "Help me build a capsule wardrobe",
  "Which metals suit me — gold or silver?",
  "What colors should I avoid?",
];
