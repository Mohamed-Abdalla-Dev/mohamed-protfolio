import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiGithub, SiPostgresql } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, level: 90 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 80 },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 85 },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    level: 90,
  },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 75 },
  { name: "GitHub", icon: <SiGithub className="text-white" />, level: 80 },
  {
    name: "Supabase",
    icon: <RiSupabaseFill className="text-green-400" />,
    level: 75,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500" />,
    level: 65,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
