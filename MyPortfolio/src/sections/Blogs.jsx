import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogs } from "../blogs/Data";

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="bg-transparent text-white px-4 sm:px-6 lg:px-8 py-16 font-Inter"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 underline underline-offset-8 decoration-gray-700">
          Some Blogs I've Written
        </h1>

        <div className="flex flex-col divide-y divide-gray-800">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={blog.link}
              className="group py-6 flex items-start justify-between hover:pl-2 transition-all duration-300"
            >
              <div>
                <h2 className="text-lg font-semibold group-hover:text-gray-200">
                  {blog.title}
                </h2>
                <p className="text-gray-500 mt-1 text-sm">{blog.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
