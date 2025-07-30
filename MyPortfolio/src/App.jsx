import React, { useEffect } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import BlogPreview from './sections/BlogPreview';
import blocks from './blocks';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter } from 'lucide-react';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <BlogPreview />
      <Contact />
    </>
  );
}

function BlogPost({ slug }) {
  const post = blocks.find(b => b.slug === slug);
  if (!post) return <div className="text-white p-10">Blog post not found.</div>;
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center font-SpaceGrotesk">
      <h1 className="text-4xl font-bold mb-4 font-Inter">{post.title}</h1>
      <div
        className="prose prose-invert max-w-2xl"
        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
      />
    </div>
  );
}

function BlogPostWrapper() {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Let DOM render first
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<BlogPreview />} />
        <Route path="/blog/:slug" element={<BlogPostWrapper />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div className="text-white p-10">Page not found.</div>} />
      </Routes>
    </>
  );
}

export default App;
