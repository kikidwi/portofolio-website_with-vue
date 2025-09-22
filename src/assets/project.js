// src/assets/project.js
// Satu sumber data untuk Home & Projects
const gh = "https://github.com/kikidwi";

export const projects = [
  {
    id: 1,
    title: "Company Profile Website Journal1z Adv",
    subtitle: "Web development",
    tags: ["WordPress", "Landing Page", "SEO"],
    thumb: "/assets/images/projects/web-9.png",
    demo: "https://journal1zadv.com",
    description:
      "Company profile untuk agensi Journal1z Advertising dengan desain modern, optimasi SEO, dan manajemen konten yang mudah. Dibuat menggunakan WordPress dengan kustomisasi tema.",
    features: [
      "Responsive di semua device",
      "Optimasi SEO (meta, sitemap, GSC)",
      "Custom theme & section builder",
      "Integrasi contact form",
      "Portfolio showcase",
      "Blog/News management",
    ],
    techStack: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "SEO"],
  },
  {
    id: 12,
    title: "Company Profile Website Intelligo ID",
    subtitle: "Web development",
    tags: ["WordPress", "Landing Page", "SEO"],
    thumb: "/assets/images/projects/web-12.png",
    demo: "https://www.intelligo.id/",
    description:
      "Website company profile untuk Intelligo ID, platform EduTech Data Science & AI dengan tampilan modern, responsif, dan informatif mengenai program Bootcamp, Course, serta Workshop.",
    features: [
      "Responsive di semua device",
      "Optimasi SEO (meta, sitemap, GSC)",
      "Custom theme & section builder",
      "Integrasi contact form",
      "Portfolio showcase",
      "Blog/News management",
      "Mega Menu",
    ],
    techStack: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "SEO"],
  },
  {
    id: 2,
    title: "Landing Page PT. Semesta Teknologi Terpadu",
    subtitle: "Web development",
    tags: ["WordPress", "Landing Page", "Corporate"],
    thumb: "/assets/images/projects/web-10.png",
    demo: "https://sttech.com",
    description:
      "Landing page korporat untuk perusahaan solusi teknologi. Menonjolkan layanan inti, CTA konversi, dan performa yang cepat.",
    features: [
      "Desain korporat profesional",
      "Service portfolio yang ringkas",
      "Form lead generation",
      "Performance optimized",
      "Mobile-first",
      "CMS untuk konten",
    ],
    techStack: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript"],
  },
  {
    id: 3,
    title: "Landing Page Restaurant Mangankuy",
    subtitle: "Web development",
    tags: ["HTML", "CSS", "JavaScript", "Restaurant"],
    thumb: "/assets/images/projects/web-11.png",
    repo: "https://github.com/kikidwi/Landing-page-Restaurant-Mangankuy",
    demo: "https://kikidwi.github.io/Landing-page-Restaurant-Mangankuy",
    description:
      "Landing page restoran dengan menu interaktif, reservasi. Fokus pada UX dan performa.",
    features: ["Menu interaktif & gallery", "Integrasi lokasi & kontak", "Animasi halus"],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    id: 4,
    title: "Humic Dashboard Survey",
    subtitle: "Web development",
    tags: ["Dashboard", "Survey", "Data Visualization"],
    thumb: "/assets/images/projects/web-1.png",
    repo: "https://github.com/kikidwi/humic-survey-dashboard",
    description:
      "Dashboard survei untuk Research Center of Human Centric Engineering. Role-based access, manajemen survei, dan visualisasi data realtime.",
    features: [
      "Autentikasi & role-based access",
      "Pembuatan & manajemen survei",
      "Visualisasi data realtime",
      "Integrasi MySQL",
      "Responsive admin panel",
      "Export data (CSV/Excel)",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Chart.js"],
  },
  {
    id: 5,
    title: "Gary's Florists",
    subtitle: "Web development",
    tags: ["Static Site", "E-commerce", "Florist"],
    thumb: "/assets/images/projects/web-2.png",
    repo: "https://github.com/kikidwi/Gary-s-Florists",
    description:
      "Website statis florist dengan katalog produk, koleksi musiman, dan informasi kontak. Fokus pada visual dan navigasi yang simpel.",
    features: [
      "Katalog produk",
      "Koleksi musiman",
      "Optimasi gambar",
      "SEO-friendly structure",
      "Navigasi sederhana",
      "Performa cepat",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Static Site"],
  },
  {
    id: 6,
    title: "Ellie's Fashion Blog",
    subtitle: "Web development",
    tags: ["Blog", "Static Site", "Fashion"],
    thumb: "/assets/images/projects/web-3.png",
    repo: "https://github.com/kikidwi/Ellie-s-Fashion-Blog",
    description:
      "Blog fashion dengan manajemen artikel, kategori, dan layout yang fokus pada tipografi serta gambar.",
    features: [
      "Kategori & pencarian artikel",
      "Gallery responsif",
      "Tipografi yang bersih",
      "Integrasi share sosial",
      "Pengalaman baca mobile",
      "Struktur SEO dasar",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Static Site Generator"],
  },

  // ===== Web Apps (tambahan detail) =====
  {
    id: 7,
    title: "Cat Facts",
    subtitle: "Web development",
    tags: ["API", "Vanilla JS"],
    thumb: "/assets/images/projects/web-4.png",
    repo: "https://github.com/kikidwi/Cat_Facts_Web_Application-using_api",
    description:
      "Mini app yang menampilkan fakta kucing acak dari public API dengan UX ringan dan cepat.",
    features: [
      "Fetch fakta acak dari API",
      "Tombol refresh & copy",
      "Skeleton loading & error state",
      "Responsive layout",
      "Dark theme sederhana",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Fetch API"],
  },
  {
    id: 8,
    title: "Valorant Agent Web Clone",
    subtitle: "Web development",
    tags: ["API", "Clone"],
    thumb: "/assets/images/projects/web-5.png",
    repo: "https://github.com/kikidwi/Valorant-Agent-using-API",
    description:
      "Clone website daftar agen Valorant dengan data publik, menampilkan role, kemampuan, dan pencarian.",
    features: [
      "List & detail agen",
      "Pencarian & filter by role",
      "Grid responsif",
      "Modal detail ringan",
      "Fallback & error handling",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 9,
    title: "Fitness Flow",
    subtitle: "Web development",
    tags: ["Landing Page"],
    thumb: "/assets/images/projects/web-6.png",
    repo: gh,
    description: "Landing page bertema fitness dengan CTA, section program, dan highlight manfaat.",
    features: [
      "Hero & CTA jelas",
      "Section program/konten",
      "Animasi scroll halus",
      "Optimasi performa dasar",
      "Struktur SEO dasar",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 10,
    title: "Simple Notes",
    subtitle: "Web development",
    tags: ["Laravel", "CRUD"],
    thumb: "/assets/images/projects/web-7.png",
    repo: "https://github.com/kikidwi/SimpleNotes-laravel11",
    description:
      "Aplikasi catatan sederhana berbasis Laravel dengan fitur CRUD, validasi, dan flash message.",
    features: [
      "Create/Read/Update/Delete",
      "Validasi server-side",
      "Paginasi & pencarian sederhana",
      "Flash/success message",
      "Blade templating",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Blade"],
  },
  {
    id: 11,
    title: "Creative Agency",
    subtitle: "Web development",
    tags: ["Landing Page"],
    thumb: "/assets/images/projects/web-8.png",
    repo: gh,
    description:
      "Landing page agensi kreatif dengan showcase layanan, preview portfolio, dan CTA kontak.",
    features: [
      "Hero dengan highlight layanan",
      "Grid layanan & portfolio",
      "Contact CTA",
      "Animasi ringan",
      "Responsive",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },

  // ===== Mobile Apps =====
  {
    id: 12,
    title: "Rubist (Rubbish Sorting Assistant)",
    subtitle: "Mobile development",
    tags: ["Android", "ML"],
    thumb: "/assets/images/projects/app-1.png",
    repo: "https://github.com/berlianm/Rubist-Application",
    description:
      "Aplikasi Android untuk klasifikasi sampah berbasis on-device ML guna membantu pemilahan yang benar.",
    features: [
      "Klasifikasi gambar on-device",
      "Camera capture & gallery pick",
      "Offline inference",
      "Halaman edukasi jenis sampah",
      "Riwayat klasifikasi sederhana",
    ],
    techStack: ["Kotlin", "Android", "TensorFlow Lite", "CameraX"],
  },
  {
    id: 13,
    title: "Course Schedule",
    subtitle: "Mobile development",
    tags: ["Android"],
    thumb: "/assets/images/projects/app-2.png",
    repo: "https://github.com/kikidwi/CourseSchedule-App",
    description:
      "Aplikasi jadwal kuliah untuk mencatat mata kuliah per hari lengkap dengan pengingat.",
    features: [
      "CRUD jadwal",
      "Pengingat (notifikasi) dasar",
      "Tampilan mingguan",
      "Pencarian",
      "Penyimpanan lokal",
    ],
    techStack: ["Kotlin", "Android", "Room", "ViewModel"],
  },
  {
    id: 14,
    title: "Todo List App",
    subtitle: "Mobile development",
    tags: ["Android"],
    thumb: "/assets/images/projects/app-3.png",
    repo: "https://github.com/kikidwi/ToDoList-app",
    description:
      "Aplikasi to-do sederhana untuk mencatat tugas dengan filter status dan persistensi lokal.",
    features: [
      "Tambah/ubah/hapus tugas",
      "Tandai selesai",
      "Filter aktif/selesai",
      "Persisten lokal",
      "Desain ringan",
    ],
    techStack: ["Kotlin", "Android", "Room", "LiveData"],
  },

  // ===== Design (Figma) =====
  {
    id: 15,
    title: "Catalog Produk Journal1z.com",
    subtitle: "Mobile design",
    tags: ["Figma", "Design"],
    thumb: "/assets/images/projects/wd-1.png",
    repo: gh,
    description:
      "Desain UI katalog produk Journal1z untuk mobile: kartu produk, filter, dan detail produk.",
    features: [
      "Komponen reusable (card, badge, chips)",
      "Sistem warna & tipografi",
      "Variasi state (hover/active/empty)",
      "Prototype navigasi dasar",
    ],
    techStack: ["Figma", "Design System", "Prototype"],
  },
  {
    id: 16,
    title: "Landing Page Journal1z.com (Design)",
    subtitle: "Mobile design",
    tags: ["Figma", "Design"],
    thumb: "/assets/images/projects/wd-2.png",
    repo: gh,
    description:
      "Desain landing page mobile untuk Journal1z dengan hero, highlight layanan, dan CTA.",
    features: [
      "Hero dengan CTA menonjol",
      "Section layanan & benefit",
      "Footer ringkas",
      "Grid & spacing konsisten",
    ],
    techStack: ["Figma", "Design Tokens", "Prototype"],
  },
];

// Kategori otomatis dari subtitle
export function categoryOf(p) {
  const s = (p.subtitle || "").toLowerCase();
  if (s.includes("mobile development")) return "Mobile";
  if (s.includes("mobile design")) return "Design";
  return "Web";
}

export default projects;
