import React, { useEffect, useState } from 'react';
import { projects } from '../../assets/assets';
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id='project' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>
      
      <div className='text-center mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          PROJECTS
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-32 h-1 bg-[#8245ec] mx-auto mt-2 rounded"
        ></motion.div>
        <p className='text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto'>
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      <motion.div
        className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} 
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => handleOpenModal(project)} 
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.button
      variants={cardItemVariants}
      onClick={onOpen}
      className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 text-left w-full"
    >
      <div className="p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
      <div className="p-6 pt-0">
        <h3 className="text-2xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
          {project.description}
        </p>
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 25 } },
  exit: { opacity: 0, scale: 0.8 },
};

const ProjectModal = ({ project, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title" 
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-white text-3xl font-bold hover:text-purple-500"
            aria-label="Close modal" 
          >
            <IoMdClose />
          </button>
        </div>

        <div className="flex flex-col">
          <div className="w-full flex justify-center bg-gray-900 px-4">
            <img
              src={project.image}
              alt={project.title}
              className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
            />
          </div>
          <div className="lg:p-8 p-6">
            <h3 id="modal-title" className="lg:text-3xl font-bold text-white mb-4 text-md">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 lg:text-base text-xs">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center transition-colors"
              >
                View Code
              </a>
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center transition-colors"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;