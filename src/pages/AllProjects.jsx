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

  const counts = useMemo(() => {
    const all = projects.length;
    const htmlCss = projects.filter((p) => p.category === "html-css").length;
    const htmlCssJs = projects.filter(
      (p) => p.category === "html-css-js",
    ).length;
    const react = projects.filter((p) => p.category === "react.js").length;
    return { all, htmlCss, htmlCssJs, react };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

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
            className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
          >
            <FiArrowLeft />
            Return to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            All <span className="text-cyan-400">projects</span>
          </h1>
          <p className="mt-2 text-slate-400">
            A curated view of my front-end work, from simple landing pages to
            React-based applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-cyan-500 text-slate-950"
                  : "border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300"
              }`}
            >
              {filter.label}
              <span
                className={`ml-2 rounded-full px-2 py-0.5 text-xs ${activeFilter === filter.id ? "bg-slate-950/20 text-slate-950" : "bg-slate-800 text-slate-400"}`}
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
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
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
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-slate-500">
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
