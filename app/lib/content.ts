// Centralized site content — copy seeds developed from the brand research spec.
// Demo data only; nothing here is wired to a backend.

export const CONTACT = {
  phone: "+1 (929) 267-9869",
  phoneHref: "tel:+19292679869",
  email: "aphroditescoloranalysis@gmail.com",
  emailHref: "mailto:aphroditescoloranalysis@gmail.com",
  location: "Bronx, New York · Virtual worldwide",
  instagram: "@aphroditescoloranalysis",
};

export const NAV = [
  { label: "The Method", href: "/#method" },
  { label: "How It Works", href: "/#journey" },
  { label: "The Bracelet", href: "/#bracelet" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Stories", href: "/#stories" },
  { label: "The Artist", href: "/#artist" },
];

export type Season = {
  name: string;
  token: string; // css var name
  hex: string;
  feeling: string;
  swatches: string[];
};

export const SEASONS: Season[] = [
  {
    name: "Spring",
    token: "spring",
    hex: "#f2a98c",
    feeling: "Warm, clear and bright — like first light through new leaves.",
    swatches: ["#f7c59f", "#f2a98c", "#e98c6a", "#9bbf8a", "#6fb6c1", "#f4e285"],
  },
  {
    name: "Summer",
    token: "summer",
    hex: "#cf97a8",
    feeling: "Cool, soft and hazy — colors seen through morning mist.",
    swatches: ["#dcc1cf", "#cf97a8", "#a98bb0", "#8fa9c9", "#9fc0bd", "#e7d3d8"],
  },
  {
    name: "Autumn",
    token: "autumn",
    hex: "#b9763f",
    feeling: "Warm, rich and earthy — spice, rust and golden field.",
    swatches: ["#d6a45e", "#b9763f", "#8a4b2c", "#6f7a3c", "#9c6b3f", "#c98f4a"],
  },
  {
    name: "Winter",
    token: "winter",
    hex: "#5b3a59",
    feeling: "Cool, deep and vivid — jewel tones against fresh snow.",
    swatches: ["#3a3f6b", "#5b3a59", "#8e2f4a", "#1f6f6a", "#b0b6c4", "#e7e9ef"],
  },
];

export type Pkg = {
  name: string;
  tagline: string;
  price: string;
  note: string;
  featured?: boolean;
  includes: string[];
  bracelet: "—" | "Add-on" | "Included" | "Heirloom";
};

export const PACKAGES: Pkg[] = [
  {
    name: "The Essential",
    tagline: "Your season, read by a human eye.",
    price: "$185",
    note: "≈ 60-minute live virtual session",
    bracelet: "Add-on",
    includes: [
      "Free pre-session color intake",
      "60-minute live virtual analysis",
      "Your season + sub-season identified",
      "Written color report (digital)",
      "12-color core palette card",
      "Gemstone bracelet available as add-on",
    ],
  },
  {
    name: "The Signature",
    tagline: "The full study — and a palette you can wear.",
    price: "$320",
    note: "≈ 90-minute live virtual session",
    featured: true,
    bracelet: "Included",
    includes: [
      "Everything in The Essential",
      "90-minute deep live analysis",
      "48-color expanded palette + colors to avoid",
      "Makeup & metals guidance",
      "Custom gemstone bracelet in your palette",
      "Two weeks of follow-up questions",
    ],
  },
  {
    name: "The Atelier",
    tagline: "A complete colour wardrobe, start to finish.",
    price: "$540",
    note: "≈ two sessions + styling",
    bracelet: "Heirloom",
    includes: [
      "Everything in The Signature",
      "Second styling & wardrobe session",
      "Capsule wardrobe colour map",
      "Personal shopping color guide (PDF)",
      "Heirloom gemstone bracelet, upgraded stones",
      "One month of follow-up support",
    ],
  },
];

export const COMPARISON_ROWS: {
  feature: string;
  values: [string, string, string];
}[] = [
  { feature: "Free pre-session intake", values: ["✓", "✓", "✓"] },
  { feature: "Live, human-led session", values: ["60 min", "90 min", "2 sessions"] },
  { feature: "Written color report", values: ["✓", "✓", "✓"] },
  { feature: "Palette size", values: ["12 colors", "48 colors", "48 + capsule"] },
  { feature: "Makeup & metals guidance", values: ["—", "✓", "✓"] },
  { feature: "Custom gemstone bracelet", values: ["Add-on", "Included", "Heirloom"] },
  { feature: "Follow-up support", values: ["—", "2 weeks", "1 month"] },
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
    title: "Your color intake",
    body: "A quiet five minutes before we ever meet. You capture your skin in honest daylight, name your style goals, and bring your questions — so our session opens already knowing you.",
    free: true,
  },
  {
    no: "02",
    title: "Your live session",
    body: "We meet, face to face, over video. I read your colors the way an artist reads a canvas — undertone, contrast, the light you live in — and we land on your season together.",
  },
  {
    no: "03",
    title: "Your written study",
    body: "A keepsake report you'll return to for years: your palette, your best neutrals, the colors to set aside, makeup tones and the metals that flatter you most.",
  },
  {
    no: "04",
    title: "Your gemstone bracelet",
    body: "The part no one else offers. I hand-match natural stones to live inside your exact palette and string them into a bracelet — one of one, like you, worn long after the PDF is filed away.",
  },
];

export const METHOD = [
  {
    title: "Esthetics",
    body: "A trained eye for skin, undertone and the quiet contrast between your features.",
  },
  {
    title: "Seasonal analysis",
    body: "The classic four seasons and their sixteen sub-tones — the grammar of personal color.",
  },
  {
    title: "Colors in nature",
    body: "Palettes the world already arranges beautifully — petals, stone, water, light.",
  },
  {
    title: "Art history",
    body: "Centuries of how color has moved people, borrowed and brought to your skin.",
  },
  {
    title: "Your environment",
    body: "The light you actually live in, the life you dress for, the colors that feel like home.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  season: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I'd done one of those two-minute app quizzes and felt nothing. This was the opposite — she actually saw me. I wear my bracelet every day.",
    name: "Marisol R.",
    detail: "Signature · True Autumn",
    season: "#b9763f",
  },
  {
    quote:
      "The intake before our call was such a lovely touch. By the time we met she already understood what I wanted. No wasted minutes.",
    name: "Devon P.",
    detail: "Essential · Cool Summer",
    season: "#cf97a8",
  },
  {
    quote:
      "I finally stopped buying clothes that sat in the closet. The report is my shopping bible and the gemstones are genuinely beautiful.",
    name: "Aniyah J.",
    detail: "Atelier · Bright Winter",
    season: "#5b3a59",
  },
  {
    quote:
      "Warm, unhurried, and so knowledgeable about color in art. It felt like a studio visit, not a sales call.",
    name: "Grace L.",
    detail: "Signature · Light Spring",
    season: "#f2a98c",
  },
];

export type Faq = { q: string; a: string };

export const FAQ: Faq[] = [
  {
    q: "Can photos over video really capture my colors accurately?",
    a: "Yes — with honest daylight and a trained eye. The free intake is built specifically to help you get good photos gently: it guides you to face a window, skip makeup and filters, and capture your face, neck and inner wrist so your true undertone comes through. If anything looks too dark or backlit, you'll see a soft hint to retake before you send.",
  },
  {
    q: "What makes this different from an AI color quiz?",
    a: "Everything. No filter, no algorithm guessing in two minutes. A real person — with an eye trained in esthetics, seasonal analysis, art history and color in nature — studies the actual you and talks it through with you live. You also leave with something to wear, not just a file to forget.",
  },
  {
    q: "What is the gemstone bracelet, exactly?",
    a: "It's the signature of the studio. After your analysis, natural stones are hand-selected to live inside your personal palette and strung into a bracelet made only for you — one of one. Most analysts hand you a PDF; here you also carry your colors with you.",
  },
  {
    q: "What if I disagree with my season?",
    a: "You won't be handed a verdict and dismissed. We arrive at your colors together, on the call, and I'll show you why they work against your skin. If something feels off, we keep looking — the goal is colors you'll actually reach for, not a label.",
  },
  {
    q: "How are my photos handled?",
    a: "Your intake photos are previewed right in your browser and are used only to prepare your analysis. This is a quiet, personal studio — your images are never sold, never used for advertising, and never fed to a third-party tracker.",
  },
  {
    q: "How long until I get my report and bracelet?",
    a: "Your written color study arrives within about a week of our session. Your gemstone bracelet is hand-strung to order and typically ships within two to three weeks, with tracking.",
  },
  {
    q: "Can I gift a session to someone?",
    a: "Beautifully, yes. A color study plus a gemstone keepsake makes a rare, personal gift. Gift notes are sent digitally and the recipient picks a time that suits them.",
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
