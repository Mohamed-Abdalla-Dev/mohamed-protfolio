import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo, stats } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <div className="mb-3">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-sm font-medium tracking-widest uppercase inline-block">
              Available for work
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300">
            <TypeAnimation
              sequence={[
                "Frontend Web Developer",
                2000,
                "React.js & Tailwind CSS",
                2000,
                "UI/UX Designer",
                2000,
                "Backend as a Service (BaaS)",
                2000,
                "Building web applications",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            />
          </div>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Freelance
            <span className="text-white font-medium">
              {" "}
              UI/UX Designer & Frontend Developer.
            </span>
            {personalInfo.bio}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-8 py-4 flex-wrap">
            <div>
              <p className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                20+
              </p>
              <p className="text-gray-500 text-sm">{stats[0].label}</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                1
              </p>
              <p className="text-gray-500 text-sm">{stats[1].label}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full filter blur-2xl opacity-20 animate-pulse" />
            <img
              src="/img/9988.png"
              alt={personalInfo.name}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl relative z-10"
            />
            <div className="absolute bottom-4 right-4 z-20 bg-linear-to-r from-blue-400 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold">
              Open to projects
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
