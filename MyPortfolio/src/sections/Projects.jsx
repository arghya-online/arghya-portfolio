import React from "react";
import { Github } from "lucide-react";
import likhoPreview from "../assets/projectPreview/Likho.png";
import IEIIEM from "../assets/projectPreview/IEIIEM.png";
import gariChalao from "../assets/projectPreview/gariChalao.png";
import yourvaultpass from "../assets/projectPreview/yourvaultpass.png";
import myecolog from "../assets/projectPreview/myecolog.png";


const projectData = [
  {
    title: "Likho - Not another social media.",
    description:
      "A space to write your thoughts, feelings, or secrets. When there’s no one to talk to, Likho becomes that quiet friend where your words stay private and only yours.",
    tech: ["REACT", "TAILWIND CSS", "APPWRITE"],
    github: "https://github.com/arghya-online/Likho/",
    demo: "https://likho1.vercel.app/",
    imageUrl: likhoPreview,
  },
  {
    title: "IEI-IEM Student Chapter Site",
    description:
      "Created the official website for the IEI-IEM Mechanical Engineering Students’ Chapter. The site serves as the digital face of the institution’s chapter, built with React and Tailwind CSS for a fast, elegant, and responsive experience.",
    tech: ["REACT", "TAILWIND CSS", "FRAMER-MOTION"],
    github:
      "https://github.com/arghya-online/iei_iem_site/tree/main/iei_iem_website",
    demo: "https://ieiiemstudentchapter.vercel.app/",
    imageUrl: IEIIEM,
  },
  {
    title: "Gari Chalao - a mini racing game",
    description:
      "A 2D racing game built with HTML, CSS and Vanilla JS showcasing my work and skills.",
    tech: ["HTML", "CSS", "Vanilla JS"],
    github: "https://github.com/arghya-online/garichalao",
    demo: "https://garichalao.vercel.app/",
    imageUrl:gariChalao,
  },
  {
    title: "YourVaultPass - A random password generator",
    description:
      "A simple password generator that creates secure passwords for your accounts built with React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/arghya-online/YourVaultPass",
    demo: "https://yourvaultpass.vercel.app/",
    imageUrl:yourvaultpass,
  },
  {
    title: "My Eco Log",
    description:
      "A platform to track your carbon footprint and learn about eco-friendly practices.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/arghya-online/CarbonTracker",
    demo: "https://myecolog.vercel.app/",
    imageUrl:myecolog,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center font-Inter"
    >
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
          My Works
        </h1>

        <div className="flex flex-col gap-6">
          {projectData.map((project) => (
            <article
              key={project.title}
              className="flex flex-col sm:flex-row items-start sm:items-center p-4 border border-gray-800 hover:bg-zinc-900 transition duration-300"
            >
              <div className="w-full sm:w-44 h-28 sm:h-24 bg-gray-900 border border-gray-700 flex-shrink-0 mr-0 sm:mr-4 mb-3 sm:mb-0">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'https://placehold.co/160x100/1a1a1a/cccccc?text=No+Preview';
                  }}
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mb-3 leading-snug">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-gray-300 bg-zinc-800 border border-gray-700 px-3 py-1 text-xs sm:text-sm font-medium hover:bg-white hover:text-black transition-colors"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1 text-sm font-semibold text-black bg-white border border-black hover:bg-gray-200 transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
