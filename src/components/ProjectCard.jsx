import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition group"
    >
      <div className="h-48 bg-linear-to-br from-gray-700 to-gray-800 flex items-center justify-center text-7xl group-hover:scale-105 transition">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-gray-700 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
            >
              <FiGithub /> code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
            >
              <FiExternalLink /> preview
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
