import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { profileLinks, profile } from '../../assets/assets';

const About = () => {
    return (
        <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
                        Hello! I am
                    </h1>
                    <h2 className='text-4xl sm:text-5xl md:text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                        Sushil Gupta
                    </h2>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                        <span className='text-white'>I am a</span>
                        <TypeAnimation
                            sequence={[
                                ' Backend Developer.',2000,
                                ' Tech Enthusiast.',2000,
                                ' Lifelong Learner.',2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block', marginLeft: '8px' }}
                        />
                    </h3>
                    <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
I am a passionate Java Backend Developer with strong skills in Java, Spring Boot, RESTful APIs, and database design. I enjoy building clean, scalable, and efficient backend systems while continuously learning new technologies. I am dedicated to writing high-quality code, solving real-world problems, and creating reliable and impactful digital solutions.                    </p>

                    <Link to={profileLinks.resume} target='_blank' rel="noopener noreferrer" className='inline-block pb-8'>
                        <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300'>
                            Download Resume
                        </button>
                    </Link>
                </div>
                <div className='md:w-1/2 flex justify-center md:justify-end items-start mt-[-200px] ml-[50px]'>
                       <Tilt
                           tiltMaxAngleX={20}
                           tiltMaxAngleY={20}
                           perspective={1000}
                           transitionSpeed={1000}
                           scale={1.05}
                           gyroscope={true}
                          >
                            <img src={profile} alt="Sushil Gupta" className='w-65 h-65 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg border-4 border-purple-500' />
                       </Tilt>                
                </div>
            </div>
        </section>
    )
}

export default About;
