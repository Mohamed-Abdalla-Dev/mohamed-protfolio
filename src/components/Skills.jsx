import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiGithub, SiPostgresql } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

const skills = [
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500" />,
    description: "Structure and content for clear web pages.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    description: "Clean layouts and thoughtful visual details.",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    description: "Interactive behavior and user-focused logic.",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
    description: "Reusable components and modern UI development.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    description: "Fast styling with a simple and scalable system.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
    description: "Version control for steady, organized progress.",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white" />,
    description: "Sharing work and collaborating clearly.",
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill className="text-green-400" />,
    description: "Simple backend services and data handling.",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500" />,
    description: "Structured data for reliable applications.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
