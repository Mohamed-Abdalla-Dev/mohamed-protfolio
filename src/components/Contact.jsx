import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

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
      className="py-20 px-4 sm:px-6 bg-slate-900/40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4">
            If you need a website or want to discuss a project, I’d love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 justify-center items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="rounded-full bg-cyan-500/10 p-3">
                <FaEnvelope className="text-cyan-400 text-xl" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-medium text-slate-200">
                  {personalInfo.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="rounded-full bg-cyan-500/10 p-3">
                <FaWhatsapp className="text-cyan-400 text-xl" />
              </div>
              <div>
                <p className="text-sm text-slate-500">WhatsApp</p>
                <p className="font-medium text-slate-200">
                  {personalInfo.phone}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="rounded-full bg-cyan-500/10 p-3">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium text-slate-200">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Send a message
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-slate-200 outline-none transition focus:border-cyan-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-slate-200 outline-none transition focus:border-cyan-500"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-slate-200 outline-none transition focus:border-cyan-500"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full rounded-2xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 ${
                isLoading ? "cursor-not-allowed opacity-60" : ""
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
