
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiMongoose, SiExpress, SiRedux, SiFramer } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useState } from "react";

const skills = [
  // Frontend
  { name: "React", icon: <FaReact className="text-blue-400" />, category: "Frontend", proficiency: 95, level: "Expert" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" />, category: "Frontend", proficiency: 90, level: "Expert" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, category: "Frontend", proficiency: 92, level: "Expert" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, category: "Frontend", proficiency: 98, level: "Expert" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, category: "Frontend", proficiency: 90, level: "Expert" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" />, category: "Frontend", proficiency: 92, level: "Advanced" },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, category: "Frontend", proficiency: 85, level: "Advanced" },
  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, category: "Backend", proficiency: 88, level: "Advanced" },
  { name: "Express", icon: <SiExpress className="text-gray-700" />, category: "Backend", proficiency: 85, level: "Advanced" },
  { name: "API (REST)", icon: <TbApi className="text-blue-500" />, category: "Backend", proficiency: 90, level: "Advanced" },
  // Database
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, category: "Database", proficiency: 80, level: "Advanced" },
  { name: "Mongoose", icon: <SiMongoose className="text-red-600" />, category: "Database", proficiency: 78, level: "Advanced" },
  // Tools
  { name: "Git", icon: <FaGitAlt className="text-orange-400" />, category: "Tools", proficiency: 95, level: "Expert" },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" />, category: "Tools", proficiency: 93, level: "Expert" },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" />, category: "Tools", proficiency: 75, level: "Advanced" },
  // Design
  { name: "Figma", icon: <FaFigma className="text-pink-500" />, category: "Design", proficiency: 90, level: "Expert" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Design"
];

const levelColors: Record<string, string> = {
  Expert: "bg-gradient-to-r from-blue-500 to-green-400 text-white",
  Advanced: "bg-gradient-to-r from-purple-500 to-blue-400 text-white",
  Proficient: "bg-gradient-to-r from-yellow-400 to-orange-400 text-white",
};



export function SkillsSection() {
  const [selected, setSelected] = useState("All");
  // Show all skills in All, otherwise filter by category
  const filtered = selected === "All"
    ? skills
    : skills.filter(s => s.category === selected);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-blue-700">Tech</span> Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-1 rounded-full font-medium border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${selected === cat ? "bg-blue-600 text-white border-blue-600" : "bg-background/70 border-border text-foreground hover:bg-blue-100 dark:hover:bg-blue-900"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)", zIndex: 2 }}
            >
              <Card className="relative flex flex-col items-center p-6 min-h-[220px] h-full bg-background/80 border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                {/* Animated Icon */}
                <motion.div
                  className="mb-4 text-4xl"
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill.icon}
                </motion.div>
                {/* Skill Name */}
                <div className="font-semibold text-lg mb-2 text-foreground group-hover:text-blue-700 transition-colors duration-200">
                  {skill.name}
                </div>
                {/* Skill Level Badge */}
                <span className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-bold shadow ${levelColors[skill.level] || "bg-gray-200 text-gray-700"}`}>
                  {skill.level}
                </span>
                {/* Animated Progress Bar */}
                <div className="w-full mt-4">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-200 via-blue-400 to-green-300 relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1.2, delay: i * 0.08, type: "spring" }}
                    style={{ width: `${skill.proficiency}%` }}
                  >
                    <span className="absolute right-0 -top-6 text-xs font-semibold text-blue-700">{skill.proficiency}%</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
