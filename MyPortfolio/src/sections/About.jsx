import React from 'react';
import InfoCard from './InfoCard';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="mt-min-h-screen bg-black text-white px-8 py-10 flex flex-col md:flex-row justify-between align-center gap-8 md:gap-16 items-start overflow-hidden pb-0 mb-0">
      {/* Minimal gradient background */}
      <motion.div
        className="absolute -top-24 -right-32 w-[300px] h-[300px] bg-gradient-to-br from-teal-500 to-blue-500 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
      />
      
      {/* Left Text */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4 about-underline relative inline-block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          About Me
        </motion.h2>

        <div className="w-20 h-1 bg-white mb-6"></div>

        <motion.p
          className="text-2xl leading-relaxed text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I specialize in building responsive, highly readable interfaces using modern frontend tools.
          My approach is grounded in <strong>clarity</strong>, <strong>speed</strong>, and <strong>long-lasting structure</strong>.
        </motion.p>

        <motion.p
          className="text-lg text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I work in React, design with utility-first principles, and experiment with microcontrollers like Arduino in
          my spare time. I believe great interfaces should feel invisible to users while being maintainable for developers.
        </motion.p>
      </motion.div>

      {/* Right Info Cards */}
      <motion.div
        className="flex flex-col gap-6 w-full md:max-w-md"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.4,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Location', value: 'Cooch Behar, West Bengal, India' },
          { label: 'Focus', value: 'React, UI Architecture' },
          { label: 'Interests', value: 'UX Systems, DIY Hardware' },
          { label: 'Availability', value: 'Open for Internships and Freelance Work, both Remote and On-site' },
        ].map(({ label, value }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
          >
            <InfoCard label={label} value={value} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
