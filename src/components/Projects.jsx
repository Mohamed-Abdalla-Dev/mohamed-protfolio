import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-semibold mb-4 text-white">
          Selected <span className="text-cyan-400">Work</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          A few recent builds that reflect a practical, modern approach.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((_, idx) => idx < 6)
          .map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/20"
        >
          See all projects
          <FiArrowRight className="text-base" />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
