import React from "react";
import { Mail, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      id="contact"
      className="w-full h-screen flex flex-col justify-center items-center py-10 bg-black text-white pb-0 mb-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-2 contact-underline relative inline-block text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h1>
        <motion.p
          className="text-gray-400 mb-4 text-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let’s connect and build something great! I am available to internships and freelance projects. Feel free to reach out via email or connect with me on socials.
        </motion.p>
        <motion.div
          className="w-16 h-1 bg-teal-400 rounded-full mb-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        />
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="mailto:arghyatech555@gmail.com" className="flex items-center gap-2 text-lg font-medium hover:text-teal-400 transition">
            <Mail className="w-5 h-5" /> arghyatech555@gmail.com
          </a>
          <span className="hidden md:inline text-gray-600">|</span>
          <a href="https://github.com/arghya-online/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-teal-400 transition">
            <Github className="w-5 h-5" /> GitHub
          </a>
          <span className="hidden md:inline text-gray-600">|</span>
          <a href="https://twitter.com/ArghyaOnline01/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-teal-400 transition">
            <Twitter className="w-5 h-5" /> Twitter
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
