import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Users,
  BarChart3,
  CheckCircle,
  Settings,
  Zap,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Project3 = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  const images = [
    {
      src: "/images/Tampilanproyek3.png",
      title: "Homepage Cakrawala Educentre",
      description:
        "Website utama dengan presentasi layanan dan informasi lembaga",
    },
  ];

  const features = [
    {
      icon: <BookOpen />,
      title: "Learning Management System",
      description:
        "LMS berbasis Laravel dengan fitur lengkap untuk mengelola kelas, tugas, dan materi pembelajaran online",
    },
    {
      icon: <BarChart3 />,
      title: "Computer Based Testing (CBT)",
      description:
        "Sistem ujian online terintegrasi untuk tryout dan assessment dengan analisis hasil real-time",
    },
    {
      icon: <Users />,
      title: "Dashboard Siswa & Guru",
      description:
        "Interface intuitif untuk tracking progres belajar, penugasan, dan komunikasi dua arah",
    },
    {
      icon: <CheckCircle />,
      title: "Manajemen Nilai & Kehadiran",
      description:
        "Sistem pencatatan nilai dan kehadiran terintegrasi dengan laporan otomatis untuk orang tua",
    },
    {
      icon: <Zap />,
      title: "Website Responsif",
      description:
        "Frontend modern dengan React dan Tailwind CSS untuk presentasi lembaga dan informasi publik",
    },
    {
      icon: <Settings />,
      title: "Analytics & Reporting",
      description:
        "Dashboard analytics komprehensif untuk monitoring performa siswa dan efektivitas pembelajaran",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Laravel",
    "PHP 8",
    "MySQL",
    "REST API",
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
              <BookOpen size={24} />
            </div>
            <span className="text-sm font-medium text-primary-600">
              EDUCATIONAL PLATFORM
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cakrawala Educentre
            <br />
            Platform Pendidikan Terpadu
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Platform edukatif komprehensif yang mengintegrasikan website
            presentasi, Learning Management System (LMS), dan sistem ujian
            online (CBT) untuk mendukung keseluruhan ekosistem pendidikan
            modern.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://cakrawalaeducentre.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
            >
              <ExternalLink size={20} />
              Kunjungi Website
            </a>
          </div>
        </motion.div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Cakrawala Educentre adalah solusi platform pendidikan terpadu
                  yang menggabungkan website informasi modern, Learning
                  Management System (LMS) full-featured, dan sistem Computer
                  Based Testing (CBT) untuk ujian dan tryout online.
                </p>
                <p>
                  Website utama dibangun dengan React dan TypeScript untuk
                  memberikan pengalaman pengguna yang responsif dan interaktif,
                  sedangkan backend LMS menggunakan Laravel dengan PHP untuk
                  mengelola data pembelajaran, penugasan, kehadiran, dan nilai
                  siswa.
                </p>
                <p>
                  Sistem ini memungkinkan guru untuk mengelola kelas, memberikan
                  materi pembelajaran, membuat penugasan online, serta melakukan
                  ujian berbasis komputer dengan hasil yang termonitor secara
                  real-time. Siswa dapat mengakses materi, mengerjakan tugas,
                  tracking progres belajar, dan mengikuti ujian secara online
                  melalui interface yang user-friendly.
                </p>
                <p>
                  Fitur analytics membantu lembaga untuk mengukur efektivitas
                  pembelajaran dan membuat keputusan berbasis data untuk
                  meningkatkan kualitas pendidikan.
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
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-100 text-primary-600">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="card p-8 sticky top-24">
              <h3 className="text-lg font-bold mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Dokumentasi Project (PDF)</h2>
          <div className="card p-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
              <div className="bg-white flex justify-center items-center min-h-96">
                <div className="w-full max-w-2xl flex justify-center">
                  <Document
                    file="/pdf/cakrawala-educentre.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                      <div className="flex items-center justify-center h-96">
                        <p className="text-gray-600">Loading PDF...</p>
                      </div>
                    }
                    error={
                      <div className="flex items-center justify-center h-96">
                        <p className="text-red-600">
                          Error loading PDF. Please check the file path.
                        </p>
                      </div>
                    }
                  >
                    <Page
                      pageNumber={pageNumber}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={700}
                    />
                  </Document>
                </div>
              </div>
            </div>

            {/* PDF Navigation Controls */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber <= 1}
                  className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Previous page"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>

                <span className="text-gray-700 font-medium">
                  Halaman {pageNumber} dari {numPages}
                </span>

                <button
                  onClick={() =>
                    setPageNumber(Math.min(numPages, pageNumber + 1))
                  }
                  disabled={pageNumber >= numPages}
                  className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Next page"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>

              <a
                href="/pdf/cakrawala-educentre.pdf"
                download="cakrawala-educentre.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <FileText size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {images && images.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden h-64 md:h-72">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {img.title}
                    </h3>
                    <p className="text-sm text-gray-600">{img.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Back to Portfolio */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Kembali ke Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project3;
