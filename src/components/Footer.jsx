import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { socialLinks, personalInfo } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="bg-gray-950 py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          <span className="text-white">Moh</span>
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            amed
          </span>
          <span className="text-gray-400 text-sm font-normal">.Dev</span>
        </h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          {personalInfo.bio.substring(0, 100)}...
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition text-2xl"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Mohamed.Dev All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
