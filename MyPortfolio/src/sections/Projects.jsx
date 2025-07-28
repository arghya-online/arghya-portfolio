import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Gari Chalao - a mini racing game",
    description: "A 2D racing game built with HTML, CSS and Vanilla JS showcasing my work and skills.",
    tech: ["HTML", "CSS", "Vanilla JS"],
    github: "https://github.com/arghya-online/garichalao",
    demo: "https://garichalao.vercel.app/",
  },
  {
    title: "YourVaultPass - A random password generator",
    description: "A simple password generator that creates secure passwords for your accounts built with React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/arghya-online/YourVaultPass",
    demo: "https://yourvaultpass.vercel.app/",
  },
  {
    title: "My Eco Log",
    description: "A platform to track your carbon footprint and learn about eco-friendly practices.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/arghya-online/CarbonTracker",
    demo: "https://myecolog.vercel.app/",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative min-h-screen bg-black text-white px-6 sm:px-8 lg:px-16 py-16 flex flex-col items-center font-SpaceGrotesk overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated background blob */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-gradient-to-br from-teal-500 to-purple-500 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'loop' }}
      />

      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold mb-12 font-Inter z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      {/* Project Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl z-10">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 flex flex-col gap-4 shadow-lg group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.03 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-2 font-Inter relative inline-block group-hover:after:w-full transition-all duration-300">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-teal-700/30 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-teal-400 hover:text-white transition font-semibold shadow focus:outline-none focus:ring-2 focus:ring-teal-400"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" /> GitHub
              </motion.a>

              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-teal-400 hover:text-white transition font-semibold shadow focus:outline-none focus:ring-2 focus:ring-teal-400"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" /> Live Demo
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
