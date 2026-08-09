import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/portfolioData";

function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Calculating the number of projects per category
  const counts = useMemo(() => {
    const all = projects.length;
    const htmlCss = projects.filter((p) => p.category === "html-css").length;
    const htmlCssJs = projects.filter(
      (p) => p.category === "html-css-js",
    ).length;
    const react = projects.filter((p) => p.category === "react.js").length;
    return { all, htmlCss, htmlCssJs, react };
  }, []);

  // Filtering projects by the selected category
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // Defining the buttons and their count
  const filters = [
    { id: "all", label: "All", count: counts.all },
    { id: "html-css", label: "HTML & CSS", count: counts.htmlCss },
    { id: "html-css-js", label: "HTML & CSS & JS", count: counts.htmlCssJs },
    { id: "react.js", label: "React.js", count: counts.react },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-4"
          >
            <FiArrowLeft className="animate-bounce" />
            Return to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            All{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              projects
            </span>
          </h1>
          <p className="text-gray-400 mt-2">
            A comprehensive overview of my front-end development work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {filter.label}
              <span
                className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === filter.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-700 text-gray-500"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
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
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
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
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-500">
                There are no projects in this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
}

export default AllProjects;
