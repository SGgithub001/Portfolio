import React from 'react';
import { motion } from 'framer-motion';
import { skillsInfo } from '../../assets/assets';
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[10vw] md:px-[7vw] lg:px-[18vw] font-sans text-white bg-skills-gradient clip-path-custom"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          SKILLS
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded"
        ></motion.div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          A showcase of my technical expertise, built and refined through hands-on
          development and real-world projects.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {skillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-gray-900/80 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-10 w-full sm:w-[46%] lg:w-[42%] rounded-2xl border border-gray-700 hover:border-[#8245ec] hover:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center tracking-wide">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map(skill => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center space-x-2 bg-transparent border border-gray-700 rounded-3xl py-2 px-3 text-center overflow-hidden hover:border-[#8245ec] transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                  />
                  <span
                    title={skill.name}
                    className="text-xs sm:text-sm text-gray-300 break-words text-ellipsis overflow-hidden max-w-[90px] sm:max-w-[120px] leading-tight"
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
