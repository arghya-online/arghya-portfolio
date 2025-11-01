import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Blogs from "./sections/Blogs";
import BlogPage from "./blogs/BlogPage";

function App() {
  return (
    <>
      <Routes>
        {/*Home Page*/}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <Blogs />
            </>
          }
        />

        {/*Blog Dynamic Page*/}
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
