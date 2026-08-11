import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { socialLinks, personalInfo } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 py-12 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Mohamed<span className="text-cyan-400">.Dev</span>
        </h2>
        <p className="mx-auto mb-6 max-w-md text-sm text-slate-400">
          {personalInfo.bio}
        </p>
        <div className="mb-8 flex justify-center gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-400 transition hover:text-cyan-300"
          >
            <FaGithub />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-400 transition hover:text-cyan-300"
          >
            <FaLinkedin />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-400 transition hover:text-cyan-300"
          >
            <FaFacebook />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-400 transition hover:text-cyan-300"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Mohamed.Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
