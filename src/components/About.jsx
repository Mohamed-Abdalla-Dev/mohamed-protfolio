import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 bg-gray-900/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl">
                <img
                  src="/public/img/1000125101.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-blue-500 rounded-full p-2 shadow-lg shadow-blue-500/50">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 md:order-2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              A bit about who I am{" "}
              {/* <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mohamed Abdalla
              </span> */}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a Front-End Developer specializing in React, passionate about
              building modern web applications that combine high performance
              with beautiful user experiences. I enjoy solving problems,
              creating interactive interfaces, and turning ideas into real
              digital products while continuously improving my skills and
              working toward becoming a Full Stack Developer.
            </p>
            <p className="text-gray-400 leading-relaxed">
              A passionate programmer who loves reading books and listening
              podcasts and playing football.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition shadow-lg shadow-blue-500/25"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
