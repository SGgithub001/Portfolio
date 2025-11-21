import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { profileLinks } from '../../assets/assets';

const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            let currentActiveSection = "";
            const sectionOffset = 150;

            for (const item of [...menuItems].reverse()) {
                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    
                    if (rect.top <= sectionOffset) {
                        currentActiveSection = item.id;
                        break;
                    }
                }
            }
            
            setActiveSection(currentActiveSection);
        }

        window.addEventListener("scroll", handleScroll);
        
        handleScroll(); 
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleActiveSection = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "transparent"}`}>
            <div className='text-white py-5 flex justify-between items-center'>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" className='text-lg font-semibold cursor-pointer'>
                    <span className='text-[#8245ec]'>&lt;</span>
                    <span className='text-white'>Sushil</span>
                    <span className='text-[#8245ec]'>/</span>
                    <span className='text-white'>Gupta</span>
                    <span className='text-[#8245ec]'>&gt;</span>
                </div>

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                    <ul className="hidden md:flex space-x-8 text-gray-300">
                        {menuItems.map(item => (
                        <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : "text-white"}`}>
                            <button onClick={() => handleActiveSection(item.id)}>
                            {item.label}
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>

                <div className='hidden md:flex space-x-4' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200">
                    <Link to={profileLinks.github} target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec] transition-colors duration-200'>
                        <FaGithub size={24} />
                    </Link>
                    <Link to={profileLinks.linkedin} target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec] transition-colors duration-200'>
                        <FaLinkedin size={24} />
                    </Link>
                </div>

                {/* Mobile view */}
                <div className='md:hidden'>
                    {
                        isOpen ? (
                            <FiX className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(false)}/>
                        ) : (
                            <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)}/>
                        )
                    }
                </div>

                {isOpen && (
                    <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg'>
                        <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
                            {menuItems.map(item => (
                                <li key={item.id} className={`cursor-pointer transition-colors duration-200 hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : "text-white"}`}>
                                    <button onClick={() => handleActiveSection(item.id)}>
                                        { item.label }
                                    </button>
                                </li>
                            ))}
                            <div className='flex space-x-6 mt-2'>
                                <Link to={profileLinks.github} target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec] transition-colors duration-200'>
                                    <FaGithub size={24} />
                                </Link>
                                <Link to={profileLinks.linkedin} target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec] transition-colors duration-200'>
                                    <FaLinkedin size={24} />
                                </Link>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;