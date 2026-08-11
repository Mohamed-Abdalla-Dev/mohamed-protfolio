import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70"
    >
      <div className="h-48 bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300"
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
              className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
            >
              <FiGithub /> code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
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
