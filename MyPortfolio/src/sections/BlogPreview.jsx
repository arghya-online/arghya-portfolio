import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
  title: "User Authentication in React with Appwrite",
  excerpt: "A beginner-friendly guide to building a clean and modular authentication system using Appwrite inside a React app.",
  slug: "user-authentication-with-appwrite-react"
 },
  {
    title: "UI Design Principles for Developers",
    excerpt: "Essential design principles every frontend developer should know for creating beautiful interfaces.",
    slug: "ui-design-principles",
  },
  {
    title: "Getting Started with Framer Motion",
    excerpt: "Learn how to add smooth, modern animations to your React apps using Framer Motion.",
    slug: "framer-motion-intro",
  },
];

export default function BlogPreview() {
  return (
    <motion.section
      id="blog"
      className="relative min-h-screen bg-black text-white px-6 sm:px-8 lg:px-16 py-16 flex flex-col items-center font-SpaceGrotesk overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated background blob */}
      <motion.div
        className="absolute -top-24 -left-32 w-[300px] h-[300px] bg-gradient-to-br from-teal-500 to-purple-500 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
      />

      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold mb-12 font-Inter z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Blog
      </motion.h1>

      {/* Blog Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl z-10">
        {blogs.map((blog) => (
          <motion.article
            key={blog.slug}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 flex flex-col gap-4 shadow-lg group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.03 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-2 font-Inter relative inline-block transition-all duration-300 group-hover:after:w-full">
              {blog.title}
            </h2>
            <p className="text-gray-300 mb-4">{blog.excerpt}</p>

            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto"
            >
              <Link
                to={`/blog/${blog.slug}`}
                className="inline-block px-4 py-2 rounded-lg bg-zinc-800 text-teal-400 hover:bg-teal-400 hover:text-white transition font-semibold shadow focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Read More
              </Link>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
