import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Database,
  Users,
  Bell,
  FileText,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Project1 = () => {
  const images = [
    {
      src: "/images/Login User.png",
      title: "Login User",
      description:
        "Halaman login dengan autentikasi untuk User, Verifikator, dan Admin",
    },
    {
      src: "/images/Form registrasi User.png",
      title: "Form Registrasi User",
      description: "Form pendaftaran pengguna baru dengan validasi data",
    },
    {
      src: "/images/Email Aktivasi User.png",
      title: "Email Aktivasi",
      description: "Email verifikasi untuk aktivasi akun pengguna",
    },
    {
      src: "/images/Halaman utama setelah login User.png",
      title: "Dashboard User",
      description:
        "Dashboard utama setelah login dengan statistik dan menu akses",
    },
    {
      src: "/images/Halaman upload&approval dan lampiran User.png",
      title: "Upload & Approval",
      description: "Halaman upload dokumen dengan sistem approval workflow",
    },
    {
      src: "/images/Halaman Laporan I dan Laporan II.png",
      title: "Laporan User",
      description: "Halaman laporan dengan filter dan export data",
    },
    {
      src: "/images/Halaman Verifikator.png",
      title: "Dashboard Verifikator",
      description: "Panel verifikator untuk review dan approval dokumen",
    },
    {
      src: "/images/Halaman Admin.png",
      title: "Dashboard Admin",
      description: "Panel admin untuk manajemen pengguna dan sistem",
    },
  ];

  const features = [
    {
      icon: <Users />,
      title: "Multi-Role System",
      description:
        "Tiga jenis pengguna: User, Verifikator, dan Admin dengan hak akses berbeda",
    },
    {
      icon: <Shield />,
      title: "Secure Authentication",
      description: "Login dengan enkripsi password dan email verification",
    },
    {
      icon: <FileText />,
      title: "Document Management",
      description: "Upload, approval, dan tracking dokumen dengan workflow",
    },
    {
      icon: <Bell />,
      title: "Real-time Notifications",
      description: "Notifikasi status pengajuan via email dan sistem",
    },
    {
      icon: <Database />,
      title: "Reporting System",
      description: "Generate laporan dengan filter dan export ke PDF/Excel",
    },
    {
      icon: <CheckCircle />,
      title: "Approval Workflow",
      description: "Alur approval multi-level untuk validasi dokumen",
    },
  ];

  const technologies = [
    "CodeIgniter 4",
    "PHP 8",
    "Bootstrap 5",
    "JavaScript",
    "MySQL",
    "JWT",
    "Composer",
    "REST API",
    "DataTables",
    "Chart.js",
    "PHPMailer",
    "Git",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="container-custom py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Portfolio
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
              <Database size={24} />
            </div>
            <span className="text-sm font-medium text-primary-600">
              ENTERPRISE WEB APPLICATION
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aplikasi DPPGPP Gaji
            <br />
            Direktorat Keuangan TNI AD
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Sistem pengelolaan gaji dan kepegawaian berbasis web dengan
            multi-role access control, approval workflow, dan reporting system
            untuk Direktorat Keuangan TNI Angkatan Darat.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://github.com/IqbalDwiNulhakim/dppgp-gaji-tniad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              View Code
            </a>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors">
              <ExternalLink size={20} />
              Live Demo (Internal)
            </button>
          </div>
        </motion.div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Aplikasi web ini dikembangkan untuk mengelola sistem
                  penggajian dan administrasi kepegawaian di lingkungan
                  Direktorat Keuangan TNI Angkatan Darat. Sistem mendukung tiga
                  jenis pengguna dengan hak akses berbeda: User untuk pengajuan
                  dokumen, Verifikator untuk review dan approval, serta Admin
                  untuk manajemen sistem.
                </p>
                <p>
                  Fitur utama meliputi sistem autentikasi dengan email
                  verification, upload dokumen dengan workflow approval
                  multi-level, tracking status pengajuan, reporting dashboard
                  dengan visualisasi data, dan export laporan ke berbagai
                  format. Aplikasi ini membantu meningkatkan efisiensi proses
                  pengelolaan gaji dan mengurangi kesalahan manual.
                </p>
                <p>
                  Dibangun menggunakan CodeIgniter 4 sebagai framework utama
                  dengan arsitektur MVC, Bootstrap 5 untuk UI responsif, dan
                  MySQL untuk database management.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Fitur Utama</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="inline-flex p-3 bg-primary-100 text-primary-600 rounded-lg mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack & Details */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Kategori
                  </h3>
                  <p className="font-medium">Enterprise Web Application</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Timeline
                  </h3>
                  <p className="font-medium">
                    Agustus 2023 – Januari 2024 (6 bulan)
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Status
                  </h3>
                  <p className="font-medium text-green-600">Production Ready</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Team Size
                  </h3>
                  <p className="font-medium">3 Developer + 1 Project Manager</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Role
                  </h3>
                  <p className="font-medium">Full-Stack Developer (Intern)</p>
                </div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
              <h2 className="text-xl font-bold mb-4">Pencapaian & Tantangan</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <span>
                    Mengimplementasikan workflow approval multi-level dengan
                    validasi bisnis
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <span>
                    Mengoptimasi query database untuk handling data gaji dalam
                    jumlah besar
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <span>
                    Membuat reporting system dengan export ke PDF dan Excel
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <span>
                    Implementasi security best practices untuk aplikasi
                    enterprise
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            UI/UX Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
          >
            <ArrowLeft />
            Kembali ke Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project1;
