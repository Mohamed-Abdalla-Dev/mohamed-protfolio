import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaBolt, FaWrench } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-cyan-400" />,
    title: "Website Development",
    desc: "I build fast, responsive websites using React and Tailwind CSS.",
    features: ["React", "Tailwind"],
  },
  {
    icon: <FaMobileAlt className="text-cyan-400" />,
    title: "Responsive Design",
    desc: "Layouts that feel comfortable on phones, tablets, and desktops.",
    features: ["Mobile-first", "Flexible UI"],
  },
  {
    icon: <FaBolt className="text-cyan-400" />,
    title: "Performance Improvement",
    desc: "I focus on speed and clarity so pages feel light and smooth.",
    features: ["Fast loading", "Clean code"],
  },
  {
    icon: <FaWrench className="text-cyan-400" />,
    title: "Support & Updates",
    desc: "I help keep projects running well after launch with simple updates.",
    features: ["Maintenance", "Support"],
  },
];

function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-semibold mb-4 text-white">
          My <span className="text-cyan-400">Services</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Practical support for startups, founders, and small businesses.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="text-2xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              {service.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, i) => (
                <span
                  key={i}
                  className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
