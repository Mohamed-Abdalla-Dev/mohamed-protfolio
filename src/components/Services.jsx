import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaBolt, FaWrench } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-blue-500" />,
    title: "Website Development",
    desc: "I build fast, responsive websites using React and Tailwind CSS.",
    features: ["React.js", "Tailwind CSS"],
  },
  {
    icon: <FaMobileAlt className="text-blue-500" />,
    title: "Responsive Design",
    desc: "Designs that work perfectly on all devices and screen sizes",
    features: ["Mobile First", "Responsive", "Cross-browser"],
  },
  {
    icon: <FaBolt className="text-blue-500" />,
    title: "Performance Optimization",
    desc: "I improve website performance to increase loading speed and user experience",
    features: ["Lazy Loading", "Code Splitting", "Optimization"],
  },
  {
    icon: <FaWrench className="text-blue-500" />,
    title: "Maintenance and Updates",
    desc: "I provide ongoing support and regular updates for your website",
    features: ["Maintenance", "Updates", "Support"],
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
        <h2 className="text-4xl font-bold mb-4">
          My{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          What do I offer my clients?
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-700 px-2 py-1 rounded-full"
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
