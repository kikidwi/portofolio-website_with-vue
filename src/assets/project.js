// Satu sumber data untuk Home & Projects
const gh = "https://github.com/kikidwi";

export const projects = [
  {
    id: 1,
    title: "Company Profile Website Journal1z Adv",
    subtitle: "Web development",
    tags: ["WordPress", "Landing Page"],
    thumb: "src/assets/images/projects/web-9.png",
    repo: gh,
  },
  {
    id: 2,
    title: "Landing Page PT. Semesta Teknologi Terpadu",
    subtitle: "Web development",
    tags: ["WordPress", "Landing Page"],
    thumb: "src/assets/images/projects/web-10.png",
    repo: gh,
  },
  {
    id: 3,
    title: "Landing Page Restaurant Mangankuy",
    subtitle: "Web development",
    tags: ["HTML", "CSS", "JavaScript"],
    thumb: "src/assets/images/projects/web-11.png",
    repo: gh,
  },
  {
    id: 4,
    title: "Humic Dashboard Survey",
    subtitle: "Web development",
    tags: ["Dashboard", "Survey", "Data Viz"],
    thumb: "src/assets/images/projects/web-1.png",
    repo: gh,
  },
  {
    id: 5,
    title: "Gary's Florists",
    subtitle: "Web development",
    tags: ["Static Site"],
    thumb: "src/assets/images/projects/web-2.png",
    repo: gh,
  },
  {
    id: 6,
    title: "Ellie's Fashion Blog",
    subtitle: "Web development",
    tags: ["Blog", "Static Site"],
    thumb: "src/assets/images/projects/web-3.png",
    repo: gh,
  },
  {
    id: 7,
    title: "Cat Facts",
    subtitle: "Web development",
    tags: ["API", "Vanilla JS"],
    thumb: "src/assets/images/projects/web-4.png",
    repo: gh,
  },
  {
    id: 8,
    title: "Valorant Agent Web Clone",
    subtitle: "Web development",
    tags: ["API", "Clone"],
    thumb: "src/assets/images/projects/web-5.png",
    repo: gh,
  },
  {
    id: 9,
    title: "Fitness Flow",
    subtitle: "Web development",
    tags: ["Landing Page"],
    thumb: "src/assets/images/projects/web-6.png",
    repo: gh,
  },
  {
    id: 10,
    title: "Simple Notes",
    subtitle: "Web development",
    tags: ["Laravel", "CRUD"],
    thumb: "src/assets/images/projects/web-7.png",
    repo: gh,
  },
  {
    id: 11,
    title: "Creative Agency",
    subtitle: "Web development",
    tags: ["Landing Page"],
    thumb: "src/assets/images/projects/web-8.png",
    repo: gh,
  },
  {
    id: 12,
    title: "Rubist (Rubbish Sorting Assistant)",
    subtitle: "Mobile development",
    tags: ["Android", "ML"],
    thumb: "src/assets/images/projects/app-1.png",
    repo: gh,
  },
  {
    id: 13,
    title: "Course Schedule",
    subtitle: "Mobile development",
    tags: ["Android"],
    thumb: "src/assets/images/projects/app-2.png",
    repo: gh,
  },
  {
    id: 14,
    title: "Todo List App",
    subtitle: "Mobile development",
    tags: ["Android"],
    thumb: "src/assets/images/projects/app-3.png",
    repo: gh,
  },
  {
    id: 15,
    title: "Catalog Produk Journal1z.com",
    subtitle: "Mobile design",
    tags: ["Figma", "Design"],
    thumb: "src/assets/images/projects/wd-1.png",
    repo: gh,
  },
  {
    id: 16,
    title: "Landing Page Journal1z.com (Design)",
    subtitle: "Mobile design",
    tags: ["Figma", "Design"],
    thumb: "src/assets/images/projects/wd-2.png",
    repo: gh,
  },
];

// Kategori otomatis dari subtitle/tags
export function categoryOf(p) {
  const s = (p.subtitle || "").toLowerCase();
  if (s.includes("mobile development")) return "Mobile";
  if (s.includes("mobile design")) return "Design";
  return "Web";
}
