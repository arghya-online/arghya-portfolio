import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ for animation

// Import your full written blogs here
import VscodeSetup from "./writtenBlogs/VscodeSetup";
import CppStlGuide from "./writtenBlogs/CppStlGuide";
import ModernBlogMdx from "./writtenBlogs/ModernBlogMdx";

export default function BlogPage() {
  const { id } = useParams();

  // Map blog IDs to their components
  const blogComponents = {
    "vscode-setup": <VscodeSetup />,
    "cpp-stl-guide": <CppStlGuide />,
    "modern-blog-mdx": <ModernBlogMdx />,
  };

  const BlogComponent = blogComponents[id];

  return (
    <motion.div
      className="bg-black text-white min-h-screen px-6 py-10"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {BlogComponent ? (
        BlogComponent
      ) : (
        <p className="text-center text-gray-400">Blog not found.</p>
      )}
    </motion.div>
  );
}
