import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS, showcasing my work and skills.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/arghya/portfolio",
    demo: "#",
  },
  {
    title: "E-commerce UI",
    description: "A modern e-commerce frontend with product listings, cart, and checkout flow.",
    tech: ["React", "Redux", "Tailwind"],
    github: "https://github.com/arghya/ecommerce-ui",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description: "A simple blog platform with markdown support and user authentication.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/arghya/blog-platform",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative h-screen bg-black text-white px-6 py-8 flex flex-col items-center font-SpaceGrotesk overflow-hidden pb-0 mb-0">
      {/* Minimal gradient background */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-gradient-to-br from-teal-500 to-purple-500 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'loop' }}
      />
      <motion.h1
        className="text-5xl font-bold mb-8 font-Inter"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 flex flex-col gap-4 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-2 font-Inter relative inline-block project-underline group-hover:after:w-full">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-teal-700/30 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold">
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
                whileHover={{ scale: 1.08, backgroundColor: '#14b8a6', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" /> GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-teal-400 hover:text-white transition font-semibold shadow focus:outline-none focus:ring-2 focus:ring-teal-400"
                whileHover={{ scale: 1.08, backgroundColor: '#14b8a6', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-icons">🔗</span> Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
