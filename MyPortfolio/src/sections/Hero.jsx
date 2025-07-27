import React from "react";
import { motion } from "framer-motion";
import Typewriter from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/Profiles/profilePic.jng.jpg';

export default function Hero() {
  const navigate = useNavigate();
  // Scroll handlers for buttons
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home, navigate home and scroll after render
      navigate('/');
      setTimeout(() => {
        const el2 = document.getElementById(id);
        if (el2) el2.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between p-8 bg-black text-white overflow-hidden">
      {/* Animated background element */}
      <motion.div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-teal-700 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'loop' }}
      />
      {/* Left Text Section */}
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

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4 mb-4 hero-underline relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-white">
            <Typewriter
              words={["Hey, I am Arghya"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h1>

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
            View Work →
          </button>
          <button
            className="border border-white px-6 py-3 font-medium rounded-lg shadow hover:bg-white hover:text-black transition w-full text-lg md:text-xl"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

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

