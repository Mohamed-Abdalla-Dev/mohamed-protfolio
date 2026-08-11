import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo, stats } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_40%)]" />
        <div className="absolute top-24 right-10 h-56 w-56 rounded-full border border-cyan-400/20" />
      </div>
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-sm text-slate-300">
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />
            Available for freelance work
          </div>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            I build{" "}
            <span className="text-cyan-400">simple, reliable websites</span>{" "}
            that feel clear and work smoothly.
          </h1>
          <div className="text-base text-slate-300 sm:text-lg">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1800,
                "React & Tailwind",
                1800,
                "UI-focused builds",
                1800,
                "Fast & reliable web experiences",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400"
            />
          </div>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            {personalInfo.bio}
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition"
            >
              Let's talk
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 pt-2 max-w-lg">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4"
              >
                <p className="text-2xl font-semibold text-cyan-400">
                  {item.number}
                </p>
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
            <img
              src="/img/mohamed.dev.jpg"
              alt={personalInfo.name}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border border-slate-800 shadow-2xl relative z-10"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 rounded-full border border-cyan-500/20 bg-slate-900/90 px-3 py-1 text-xs font-medium text-cyan-300">
              Open to projects
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
