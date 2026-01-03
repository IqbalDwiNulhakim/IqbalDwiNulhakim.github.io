import { motion } from "framer-motion";
import {
  Download,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Shield,
  Cloud,
  Database,
  Users,
  Clock,
  BookOpen,
  ChevronRight,
  Star,
  Server,
} from "lucide-react";
import { EDUCATION, EXPERIENCES, CERTIFICATIONS } from "../data/constants";
import { getSkillsByCategory } from "../data/skills";

const Resume = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Iqbal Dwi Nulhakim_CV.pdf";
    link.download = "Iqbal_Dwi_Nulhakim_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="resume"
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            <BookOpen size={18} />
            <span>PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Resume & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my education, professional experience,
            technical skills, and certifications
          </p>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <button
            onClick={downloadCV}
            className="group btn-primary px-8 py-4 text-lg font-semibold"
          >
            <span className="flex items-center gap-3">
              <Download size={22} />
              Download Full CV (PDF)
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Education & Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-2xl">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Education
                  </h3>
                  <p className="text-gray-600">
                    Academic background and achievements
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      {EDUCATION.university}
                    </h4>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold">
                      <Star size={14} />
                      {EDUCATION.degree}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-primary-600 font-medium">
                      <Code2 size={18} />
                      Teknik Informatika
                    </div>
                    {/* <div className="flex items-center gap-2 text-gray-500">
                      <Clock size={16} />
                      {EDUCATION.period}
                    </div> */}
                  </div>

                  <div className="p-4 bg-gradient-to-r from-gray-50 to-primary-50 rounded-xl border border-gray-100">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Specialization
                    </h5>
                    <p className="text-gray-600">
                      Software Development and Data Security with hands-on
                      experience through multiple internships, projects, and
                      certifications. Focus on full-stack web development,
                      application security, and cloud computing.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Professional Experience
                  </h3>
                  <p className="text-gray-600">
                    Internships and work experience
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {EXPERIENCES.map((exp, index) => (
                  <div
                    key={index}
                    className="pb-8 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h4>
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mt-2 sm:mt-0">
                        <Clock size={14} />
                        {exp.period}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills & Certifications */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-xl">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Technical Skills
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Programming Languages */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 size={20} className="text-primary-600" />
                      <h4 className="font-semibold text-gray-900">
                        Programming Languages
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {getSkillsByCategory("programming").map((skill) => (
                        <span
                          key={skill.name}
                          className="px-4 py-2.5 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 rounded-xl font-medium border border-primary-100"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Server size={20} className="text-blue-600" />
                      <h4 className="font-semibold text-gray-900">
                        Frameworks & Libraries
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {getSkillsByCategory("frameworks").map((skill) => (
                        <span
                          key={skill.name}
                          className="px-4 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-xl font-medium border border-blue-100"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Database size={20} className="text-green-600" />
                      <h4 className="font-semibold text-gray-900">Database</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {getSkillsByCategory("databases").map((skill) => (
                        <span
                          key={skill.name}
                          className="px-4 py-2.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-xl font-medium border border-green-100"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testing & Security */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Shield size={20} className="text-red-600" />
                      <h4 className="font-semibold text-gray-900">
                        Testing & Security
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {getSkillsByCategory("testing").map((skill) => (
                        <span
                          key={skill.name}
                          className="px-4 py-2.5 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 rounded-xl font-medium border border-red-100"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Cloud & DevOps */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Cloud size={20} className="text-cyan-600" />
                      <h4 className="font-semibold text-gray-900">
                        Cloud & DevOps
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {getSkillsByCategory("cloud").map((skill) => (
                        <span
                          key={skill.name}
                          className="px-4 py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-xl font-medium border border-cyan-100"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 flex items-center justify-center text-yellow-600">
                        🔧
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        Development Tools
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {getSkillsByCategory("tools").map((skill) => (
                        <span
                          key={skill.name}
                          className="px-4 py-2.5 bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 rounded-xl font-medium border border-yellow-100"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Soft Skills
                  </h3>
                </div>

                <div className="space-y-3">
                  {getSkillsByCategory("softskills").map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-5 h-5 flex items-center justify-center text-primary-600">
                        ✓
                      </div>
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-r from-accent-500 to-green-500 text-white rounded-2xl">
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Certifications
                  </h3>
                  <p className="text-gray-600">
                    Professional qualifications and training
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-r from-gray-50 to-accent-50 rounded-xl border border-gray-100 hover:border-accent-200 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <BookOpen size={18} className="text-accent-600" />
                      </div>
                      <p className="text-gray-700 font-medium">{cert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-100">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Looking for opportunities
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm actively seeking full-time roles and internships in Software
              Development, Security Engineering, and Cloud Computing. Open to
              remote positions and willing to relocate.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 mt-6 border border-primary-200"
            >
              Contact me for opportunities
              <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
