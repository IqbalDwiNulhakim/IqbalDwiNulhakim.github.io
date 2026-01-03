import { motion } from "framer-motion";
import { getSkillsByCategory } from "../data/skills";
import {
  Code2,
  Server,
  Shield,
  Cloud,
  Wrench,
  TrendingUp,
  Database,
} from "lucide-react";

const Skills = () => {
  const categories = [
    {
      id: "programming" as const,
      label: "Programming Languages",
      icon: <Code2 />,
      color: "blue",
    },
    {
      id: "frameworks" as const,
      label: "Frameworks & Libraries",
      icon: <Server />,
      color: "purple",
    },
    {
      id: "databases" as const,
      label: "Databases",
      icon: <Database />,
      color: "green",
    },
    {
      id: "cloud" as const,
      label: "Cloud & DevOps",
      icon: <Cloud />,
      color: "cyan",
    },
    {
      id: "testing" as const,
      label: "Testing & Security",
      icon: <Shield />,
      color: "red",
    },
    {
      id: "tools" as const,
      label: "Development Tools",
      icon: <Wrench />,
      color: "yellow",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      cyan: "from-cyan-500 to-cyan-600",
      orange: "from-orange-500 to-orange-600",
      red: "from-red-500 to-red-600",
      yellow: "from-yellow-500 to-yellow-600",
      pink: "from-pink-500 to-pink-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            <TrendingUp size={18} />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai teknologi dan keterampilan yang saya kuasai dalam
            pengembangan software, security testing, dan machine learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const categorySkills = getSkillsByCategory(category.id);

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card p-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${getColorClasses(
                      category.color
                    )} text-white`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {category.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {categorySkills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {categorySkills.slice(0, 4).map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-primary-600">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${getColorClasses(
                            category.color
                          )}`}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Show more indicator if there are more skills */}
                  {categorySkills.length > 4 && (
                    <div className="pt-2 text-center">
                      <span className="text-sm text-gray-500">
                        +{categorySkills.length - 4} more
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                25+
              </div>
              <div className="text-gray-700 font-medium">Technical Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-700 font-medium">Skill Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-700 font-medium">
                Average Proficiency
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
            Terus mengembangkan keterampilan baru dan memperdalam expertise
            dalam teknologi terkini untuk menciptakan solusi yang inovatif dan
            efektif.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;
