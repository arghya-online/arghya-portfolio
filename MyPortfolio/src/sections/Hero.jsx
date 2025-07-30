import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/Profiles/profilePic.jpg'; // Ensure correct path

export default function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between p-8 bg-black text-white overflow-hidden">
      
      {/* Glow Background */}
      <motion.div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-teal-700 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'loop' }}
      />

      {/* Hamburger Menu Icon */}
      <button className="absolute top-6 right-6 z-20 md:hidden p-2 rounded-md hover:bg-white/10 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Left Text Block */}
      <motion.div
        className="max-w-2xl z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h4
          className="text-base md:text-lg lg:text-xl tracking-widest text-gray-400"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          FRONTEND ENGINEER
        </motion.h4>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4 mb-4 hero-underline relative inline-block">
          Hey, I am Arghya
        </h1>

        <motion.p
          className="text-lg md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I design and code clean, intentional web interfaces using React.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-4 w-full max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            className="bg-white text-black px-6 py-3 font-medium rounded-lg shadow hover:bg-teal-400 hover:text-white transition w-full text-lg md:text-xl"
            onClick={() => scrollToSection('projects')}
          >
            View Work
          </button>
          <button
            className="bg-teal-400 text-white px-6 py-3 font-medium rounded-lg shadow hover:bg-white hover:text-black transition w-full text-lg md:text-xl"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Right Profile Image */}
      <div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full border-4 border-teal-400 mt-12 md:mt-0 z-10 overflow-hidden">
        <motion.img
          src={profilePic}
          alt="profile"
          className="w-full h-full object-cover scale-110"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
        />
      </div>
    </section>
  );
}
