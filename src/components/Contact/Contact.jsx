import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import SplineObject from '../SplineObject/SplineObject';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (isSending) return;
        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current, 
            import.meta.env.VITE_EMAILJS_PUBLIC_ID
        ).then(
            (result) => {
                console.log('SUCCESS!', result.text);
                toast.success("Message sent successfully! ✅");
                form.current.reset(); 
            }, 
            (error) => {
                console.error('FAILED...', error.text);
                toast.error("Failed to send message. Please try again.");
            }
        ).finally(() => {
            setIsSending(false); 
        });
    }

    return (
        <section 
            id="contact" 
            className="flex flex-col justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
        >
            <ToastContainer 
                position="top-right" 
                autoClose={4000} 
                theme="dark"
                pauseOnHover={true}
                closeOnClick={true}
            />

            <div className='text-center mb-16'>
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold text-white"
                >
                    CONTACT
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-32 h-1 bg-[#8245ec] mx-auto mt-2 rounded"
                ></motion.div>
                <p className='text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto'>
                    I’d love to hear from you—reach out for any opportunities or questions!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full mt-8">

                <div className="w-full lg:w-1/2">
                    <SplineObject />
                </div>

                <div className="w-full lg:w-1/2 bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700" data-aos="fade-up" data-aos-duration="1000">
                    <h3 className="text-xl font-semibold text-white text-center">
                        Connect With Me <span className="ml-1">🚀</span>
                    </h3>

                    <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
                        <div>
                            <label htmlFor="user_email" className="sr-only">Your Email</label>
                            <input
                                id="user_email"
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                                className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="user_name" className="sr-only">Your Name</label>
                            <input
                                id="user_name"
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="sr-only">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="4"
                                required
                                className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                            />
                        </div>
                        
                        <button
                            type="submit"
                            disabled={isSending} 
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSending ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
