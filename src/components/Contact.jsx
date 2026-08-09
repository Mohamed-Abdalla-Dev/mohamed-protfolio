import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import { useState } from "react";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert(
            "✅ Your message has been sent successfully! I will be in touch soon.",
          );
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error("❌ Failed to send message:", error);
          alert("❌ Failed to send message. Please try again.");
          setIsLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
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
            Contact{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">
            Do you have a project? I'm here to help you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 justify-center items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <FaEnvelope className="text-blue-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-medium">{personalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <FaWhatsapp className="text-blue-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">WhatsApp Number</p>
                <p className="font-medium">{personalInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="font-medium">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:border-blue-500 outline-none transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:border-blue-500 outline-none transition"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:border-blue-500 outline-none transition resize-none"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-blue-500/25 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
