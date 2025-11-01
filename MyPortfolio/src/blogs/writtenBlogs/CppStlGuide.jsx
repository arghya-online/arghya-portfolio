import React from "react";
import { Link } from "react-router-dom";

export default function CppStlGuide() {
  return (
    <div className="bg-black text-white min-h-screen px-6 sm:px-12 lg:px-24 py-16 font-Inter">
      <Link to="/" className="text-gray-400 underline mb-6 block">
        ← Back to Blogs
      </Link>

      <h1 className="text-4xl font-bold mb-6">
        C++ STL Complete Guide for Competitive Programming
      </h1>
      <p className="text-gray-400 mb-8">
        Learn all essential STL components to speed up your problem-solving.
      </p>

      <div className="text-gray-300 space-y-4 leading-relaxed">
        <p>
          The C++ Standard Template Library (STL) contains ready-to-use classes
          like vectors, sets, maps, and algorithms that simplify your code.
        </p>
        <p>
          We’ll go through examples for each and discuss when to use them for
          best performance.
        </p>
      </div>
    </div>
  );
}
