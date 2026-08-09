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
        <h2 className="text-4xl font-bold mb-4">
          Selected{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work
          </span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        <p className="text-gray-400 mt-4">Examples of my previous work</p>
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
          className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition shadow-lg shadow-blue-500/25 flex items-center gap-2"
        >
          All Projects{" "}
          <FiArrowRight className="inline-block ml-1 text-white animate-bounce" />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
