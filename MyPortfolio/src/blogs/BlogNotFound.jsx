import React from "react";
import { Link } from "react-router-dom";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">404 — Blog Not Found</h1>
      <Link to="/" className="text-blue-400 underline">
        Back to Home
      </Link>
    </div>
  );
}
