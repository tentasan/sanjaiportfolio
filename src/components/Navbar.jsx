import logo from "../assets/logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-8">
      {/* Left: Logo */}
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <img 
            src={logo} 
            alt="Company Logo"   
            className="w-20 h-20"
          />
        </a>
      </div>

      {/* Right: Social Media Icons */}
      <div className="flex items-center gap-6 text-2xl ml-auto">
        <a 
          href="https://www.linkedin.com/in/sanjai-g-884647234/" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/tentasan" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-800 hover:text-gray-900 transition duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/san04_6/" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-pink-600 hover:text-pink-800 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};
