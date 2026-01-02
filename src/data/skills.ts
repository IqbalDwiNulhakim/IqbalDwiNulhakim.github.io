import { Skill } from "../types";

export const skills: Skill[] = [
  // Programming Languages
  { name: "PHP", level: 90, category: "programming", icon: "🐘" },
  { name: "JavaScript", level: 85, category: "programming", icon: "📜" },
  { name: "Python", level: 80, category: "programming", icon: "🐍" },
  { name: "Java", level: 75, category: "programming", icon: "☕" },
  // { name: "Kotlin", level: 70, category: "programming", icon: "📱" },

  // Frameworks
  { name: "CodeIgniter", level: 90, category: "frameworks", icon: "🔥" },
  { name: "Laravel", level: 80, category: "frameworks", icon: "🪶" },
  { name: "React", level: 85, category: "frameworks", icon: "⚛️" },
  // { name: "Node.js", level: 75, category: "frameworks", icon: "🟢" },
  // { name: "Bootstrap", level: 95, category: "frameworks", icon: "🎨" },
  { name: "Tailwind CSS", level: 85, category: "frameworks", icon: "💨" },

  // Databases
  { name: "MySQL", level: 90, category: "databases", icon: "🐬" },

  // Cloud & DevOps
  { name: "Google Cloud", level: 80, category: "cloud", icon: "☁️" },
  { name: "Docker", level: 70, category: "cloud", icon: "🐳" },
  { name: "Flask", level: 75, category: "cloud", icon: "🍵" },

  // // Machine Learning
  // { name: "TensorFlow", level: 75, category: "ml", icon: "🧠" },
  // { name: "TensorFlow Lite", level: 70, category: "ml", icon: "📱" },
  // { name: "TensorFlow.js", level: 65, category: "ml", icon: "🌐" },
  // { name: "Machine Learning", level: 75, category: "ml", icon: "🤖" },

  // Testing & Security
  { name: "OWASP ZAP", level: 85, category: "testing", icon: "🛡️" },
  { name: "Penetration Testing", level: 80, category: "testing", icon: "🔍" },
  { name: "Blackbox Testing", level: 80, category: "testing", icon: "📦" },
  { name: "UAT", level: 85, category: "testing", icon: "👥" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "📚" },
  { name: "Postman", level: 85, category: "tools", icon: "📫" },
  { name: "Microsoft Office", level: 95, category: "tools", icon: "💼" },
  { name: "Figma", level: 70, category: "tools", icon: "🎨" },

  // // Soft Skills
  // { name: "Problem Solving", level: 90, category: "softskills", icon: "🧩" },
  // { name: "Team Collaboration", level: 95, category: "softskills", icon: "🤝" },
  // { name: "Time Management", level: 90, category: "softskills", icon: "⏰" },
  // { name: "Adaptability", level: 95, category: "softskills", icon: "🔄" },
  // { name: "Communication", level: 90, category: "softskills", icon: "💬" },
  // { name: "Leadership", level: 85, category: "softskills", icon: "👑" },
  // {
  //   name: "Attention to Detail",
  //   level: 95,
  //   category: "softskills",
  //   icon: "🔎",
  // },
];

export const getSkillsByCategory = (category: Skill["category"]) => {
  return skills.filter((skill) => skill.category === category);
};
