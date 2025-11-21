import React from 'react';
import { motion } from "framer-motion";
import { experiences } from '../../assets/assets';
import { IoBook } from "react-icons/io5";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="p-6 rounded-2xl shadow-2xl border border-gray-700 bg-gray-900/80 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://placehold.co/100x100/333/666?text=Error'; }}
                />
            </div>
          
            <div className="flex flex-col">
                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {experience.role}
                    </h3>
                    <h4 className="text-md font-medium text-gray-300">
                        {experience.company}
                    </h4>
                </div>
                <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-300">{experience.desc}</p>
          <div className="mt-5">
            <h5 className="font-medium text-white mb-3 flex items-center gap-2">
              <IoBook className="w-5 h-5 text-[#8245ec]" aria-hidden="true" />
              <span>Skills:</span>
            </h5>
            <ul className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-purple-900/50 text-purple-300 px-3 py-1 text-xs sm:text-sm rounded-full border border-purple-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section 
      id="experience" 
      className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans bg-skills-gradient clip-path-custom2'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
            >
            EXPERIENCE
            </motion.h2>
            <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-40 h-1 bg-[#8245ec] mx-auto mt-2 rounded"
            ></motion.div>
          <p className='text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto'>
            A collection of my work experience and the roles I have taken in various organizations
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 w-0.5 bg-gray-700 h-full transform -translate-x-1/2" />
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="mb-12 relative"
            >
              <div className="absolute left-6 sm:left-1/2 top-1 transform -translate-x-1/2 bg-gray-800 border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-10 overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://placehold.co/100x100/333/666?text=Error'; }}
                />
              </div>

              <div
                className={`
                  ml-20 sm:ml-0 sm:w-1/2 
                  ${index % 2 === 0 ? 'sm:ml-auto sm:pl-12' : 'sm:pr-12'}
                `}
              >
                <ExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience;
