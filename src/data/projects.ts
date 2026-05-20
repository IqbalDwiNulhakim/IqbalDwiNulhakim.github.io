import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Aplikasi DPPGPP Gaji Direktorat Keuangan Angkatan Darat",
    description:
      "Sistem pengelolaan gaji dan kepegawaian untuk Direktorat Keuangan TNI AD dengan multi-role access control.",
    longDescription:
      "Aplikasi web untuk pengelolaan gaji dan administrasi kepegawaian di lingkungan Direktorat Keuangan TNI Angkatan Darat. Sistem ini mendukung tiga jenis pengguna (User, Verifikator, Admin) dengan workflow approval untuk pengajuan dan pengelolaan data gaji. Fitur termasuk registrasi dengan email verification, upload dokumen dengan approval system, reporting dashboard, dan manajemen pengguna.",
    image: "/images/Tampilanproyek1.png",
    technologies: [
      "CodeIgniter",
      "PHP",
      "Bootstrap",
      "JavaScript",
      "MySQL",
      "JWT",
    ],
    features: [
      "Multi-role authentication system (User, Verifikator, Admin)",
      "Email verification untuk registrasi user",
      "Document upload dengan approval workflow",
      "Reporting system dengan dashboard analytics",
      "Secure file storage dan validation",
      "Real-time notifications untuk status pengajuan",
      "Export laporan dalam format PDF/Excel",
    ],
    githubLink: "https://github.com/IqbalDwiNulhakim/dppgp-gaji-tniad",
    detailsLink: "/project1",
    category: "Full Stack Web",
  },
  {
    id: 2,
    title: "Sajiin Dong - Rekomendasi Makanan Diet dan Bulking",
    description:
      "Aplikasi mobile dengan machine learning untuk rekomendasi makanan berdasarkan tujuan fitness.",
    longDescription:
      "Aplikasi mobile yang memberikan rekomendasi makanan personalisasi untuk tujuan diet atau bulking menggunakan machine learning. Sistem menganalisis profil pengguna, preferensi makanan, dan tujuan fitness untuk memberikan rekomendasi yang optimal. Dilengkapi dengan tracking nutrisi, meal planning, dan progress monitoring.",
    image: "/images/Tampilanproyek2.png",
    technologies: [
      "Kotlin",
      "TensorFlow",
      "TensorFlow Lite",
      "TensorFlow.js",
      "Flask",
      "Google Cloud",
      "Machine Learning",
    ],
    features: [
      "Personalized food recommendations dengan ML",
      "Diet dan bulking meal planning",
      "Nutrition tracking dan calorie counting",
      "Progress monitoring dengan grafik",
      "Integration dengan Google Cloud untuk API",
      "User profile dengan fitness goals",
      "Mobile-first design dengan native performance",
    ],
    liveLink: "#",
    githubLink: "https://github.com/IqbalDwiNulhakim/sajiin-dong",
    detailsLink: "/project2",
    category: "Mobile & AI",
  },
  {
    id: 3,
    title: "Cakrawala Educentre - Platform Pendidikan Terpadu",
    description:
      "Platform edukatif komprehensif yang menyediakan berbagai layanan pendidikan dengan website utama React dan LMS terintegrasi.",
    longDescription:
      "Cakrawala Educentre adalah platform pendidikan terpadu yang menyediakan berbagai kebutuhan layanan edukatif. Sistem terdiri dari website utama yang dibangun dengan React untuk presentasi dan informasi lembaga, serta Learning Management System (LMS) berbasis Laravel yang dilengkapi dengan fitur Computer Based Testing (CBT) untuk tryout dan ujian online. Platform ini dirancang untuk memberikan pengalaman belajar yang komprehensif dan interaktif kepada siswa.",
    image: "/images/Tampilanproyek3.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "MySQL",
      "Rest API",
    ],
    features: [
      "Website responsif dengan presentasi materi pendidikan",
      "Learning Management System (LMS) terintegrasi",
      "Computer Based Testing (CBT) untuk tryout dan ujian",
      "Dashboard siswa untuk tracking progres belajar",
      "Manajemen kelas dan penugasan online",
      "Sistem kehadiran dan nilai terintegrasi",
      "Komunikasi real-time antara guru dan siswa",
      "Reportage dan analytics untuk monitor pembelajaran",
    ],
    liveLink: "https://cakrawalaeducentre.com",
    detailsLink: "/project3",
    category: "Full Stack Web",
  },
];

export const featuredProjects = projects.slice(0, 3);
