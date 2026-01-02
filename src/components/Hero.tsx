import {
  ArrowDown,
  Code2,
  Shield,
  Cloud,
  GraduationCap,
  Sparkles,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { EDUCATION, SOCIAL_LINKS } from "../data/constants";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />

      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-100">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-gray-700">
                  {EDUCATION.degree}
                </span>
              </div>
              <div className="w-px h-6 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-semibold text-primary-600">
                  {EDUCATION.university}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Halo, saya </span>
              <span className="gradient-text block mt-2">
                Iqbal Dwi Nulhakim
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mb-8">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600 font-medium">
                {SOCIAL_LINKS.location}
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Seorang{" "}
              <span className="font-bold text-primary-600">
                Software Developer
              </span>{" "}
              dan{" "}
              <span className="font-bold text-accent-600">
                Security Enthusiast
              </span>{" "}
              yang berfokus pada pengembangan aplikasi web dan mobile yang aman,
              scalable, dan user-friendly.
            </p>
          </motion.div>

          {/* Skills Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group hover:border-primary-200">
              <div className="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                <Code2 className="w-5 h-5 text-primary-600" />
              </div>
              <span className="font-semibold text-gray-800">
                Full-Stack Development
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group hover:border-accent-200">
              <div className="p-2 bg-accent-100 rounded-lg group-hover:bg-accent-200 transition-colors">
                <Shield className="w-5 h-5 text-accent-600" />
              </div>
              <span className="font-semibold text-gray-800">
                Application Security
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group hover:border-blue-200">
              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Cloud className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-800">Cloud & ML</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
          >
            <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-gray-600 font-medium">
                Internship Experience
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-accent-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">
                Projects Completed
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Technologies</div>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">9</div>
              <div className="text-gray-600 font-medium">Certifications</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#work"
              className="btn-primary px-8 py-4 text-lg font-semibold group"
            >
              <span className="flex items-center gap-3">
                Lihat Projek Saya
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>

            <a
              href="#contact"
              className="btn-secondary px-8 py-4 text-lg font-semibold"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">
              Scroll untuk eksplorasi
            </span>
            <ArrowDown className="text-gray-400 animate-bounce" size={24} />
          </div> */}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 border-4 border-primary-300 rounded-full animate-ping-slow"></div>
      </div>
    </section>
  );
};

export default Hero;
