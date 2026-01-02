import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Code2, Smartphone, Server, Shield } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { Project } from "../types";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "all", label: "All Projects", icon: <Filter size={16} /> },
    { id: "Full Stack", label: "Full Stack", icon: <Code2 size={16} /> },
    { id: "Mobile App", label: "Mobile Apps", icon: <Smartphone size={16} /> },
    { id: "Backend", label: "Backend", icon: <Server size={16} /> },
    { id: "Security", label: "Security", icon: <Shield size={16} /> },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="work"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <Code2 size={16} />
            <span>PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development,
            security implementations, and user-centric design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                filter === category.id
                  ? "bg-gradient-to-r from-primary-600 to-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {displayedProjects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-800 font-medium rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 transition-all hover:shadow-lg"
            >
              <span>
                {showAll ? "Show Less Projects" : "View All Projects"}
              </span>
              <div
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
