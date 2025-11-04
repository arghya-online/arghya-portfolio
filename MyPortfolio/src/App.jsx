import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Blogs from "./sections/Blogs";
import BlogPage from "./blogs/BlogPage";
import EndNote from "./sections/EndNote";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="app-bg">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <Blogs />
              <EndNote />
            </>
          }
        />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
