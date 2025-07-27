import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiC,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
  SiArduino,
} from 'react-icons/si';

const stack = {
  Languages: ['HTML5', 'CSS3', 'JavaScript ES6+', 'C'],
  'Frameworks & Libraries': ['React', 'Tailwind CSS', 'Framer Motion'],
  'Tools & Platforms': ['VS Code', 'Git', 'GitHub', 'Arduino'],
};

const iconMap = {
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  'JavaScript ES6+': <SiJavascript />,
  C: <SiC />,
  React: <SiReact />,
  'Tailwind CSS': <SiTailwindcss />,
  'Framer Motion': <SiFramer />,

  Git: <SiGit />,
  GitHub: <SiGithub />,
  Arduino: <SiArduino />,
};

function StackItem({ item }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(item);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-between px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm font-mono cursor-pointer transition-colors hover:bg-zinc-800"
    >
      <span className="flex items-center gap-2 text-white">
        {iconMap[item] && <span className="text-lg">{iconMap[item]}</span>}
        {item}
      </span>
      <span className="text-xs text-gray-400">{copied ? 'Copied!' : 'Click'}</span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="bg-black text-white px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-2 font-space">Tech Stack</h2>
        <div className="w-20 h-1 bg-white mb-10"></div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {Object.entries(stack).map(([section, items]) => (
          <motion.div key={section} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="uppercase text-sm tracking-widest text-gray-400 mb-4 font-inter">
              {section}
            </h3>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <StackItem key={item} item={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
