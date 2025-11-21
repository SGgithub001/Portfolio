import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { profileLinks } from "../../assets/assets.js";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">
            <span className='text-[#8245ec]'>&lt;</span>
            <span className='text-white'>Sushil</span>
            <span className='text-[#8245ec]'>/</span>
            <span className='text-white'>Gupta</span>
            <span className='text-[#8245ec]'>&gt;</span>
        </h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            // { name: "Experience", id: "experience" },
            { name: "Projects", id: "project" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: profileLinks.github},
            { icon: <FaLinkedin />, link: profileLinks.linkedin },
            { icon: <FaInstagram />, link: profileLinks.instagram },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Sushil Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;