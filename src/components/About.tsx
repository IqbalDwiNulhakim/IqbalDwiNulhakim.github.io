import { motion } from "framer-motion";
import {
  Target,
  Award,
  GraduationCap,
  Briefcase,
  BookOpen,
  CheckCircle,
  Code2,
  Shield,
  Cloud,
} from "lucide-react";
import { SOCIAL_LINKS, EDUCATION, EXPERIENCES } from "../data/constants";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Profile Photo & Quick Info */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-500 rounded-3xl transform rotate-3 blur-xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                {/* Profile Photo */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src="/images/profil.jpg"
                    alt="Iqbal Dwi Nulhakim"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Iqbal Dwi Nulhakim
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      <span className="flex items-center gap-1">
                        <CheckCircle size={12} />
                        Graduate
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Software Developer
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{SOCIAL_LINKS.location}</p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-primary-600">
                        {EXPERIENCES.length}+
                      </div>
                      <div className="text-xs text-gray-600">Experiences</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">
                        10+
                      </div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">9</div>
                      <div className="text-xs text-gray-600">
                        Certifications
                      </div>
                    </div>
                  </div>

                  {/* Education Info */}
                  <div className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-5 h-5 text-primary-600" />
                      <span className="font-semibold text-gray-900">
                        Education
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">
                      {EDUCATION.university}
                    </p>
                    <p className="text-xs text-gray-600">{EDUCATION.degree}</p>
                    <p className="text-xs text-primary-600 font-medium mt-1">
                      Graduated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <div className="w-5 h-5 flex items-center justify-center">
                  👨‍💻
                </div>
                <span>ABOUT ME</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Software Developer &{" "}
                <span className="gradient-text">Security Specialist</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Lulusan Teknik Informatika dari {EDUCATION.university} dengan
              spesialisasi dalam pengembangan perangkat lunak dan keamanan
              aplikasi. Memiliki pengalaman praktis dalam membangun aplikasi web
              dan mobile, serta melakukan pengujian keamanan menggunakan
              framework OWASP.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed mb-12"
            >
              Keterampilan saya mencakup pemrograman full-stack, pengujian
              keamanan aplikasi, dan implementasi cloud computing. Pengalaman
              magang di berbagai institusi pemerintah dan program sertifikasi
              telah memperkuat kemampuan teknis dan profesional saya dalam dunia
              pengembangan perangkat lunak.
            </motion.p>

            {/* Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold mb-4">Area of Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                    <Code2 size={20} />
                  </div>
                  <span className="font-medium text-gray-900">
                    Web Development
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <Shield size={20} />
                  </div>
                  <span className="font-medium text-gray-900">
                    Application Security
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Cloud size={20} />
                  </div>
                  <span className="font-medium text-gray-900">
                    Cloud Computing
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Experience Highlights */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Professional Journey</h3>
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary-200 transition-colors"
                >
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg flex-shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {exp.position}
                      </h4>
                      <span className="text-sm text-primary-600 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary-600 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span>Let's Collaborate</span>
                <BookOpen size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
