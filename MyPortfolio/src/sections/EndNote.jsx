import React from 'react'
import { FaTwitter } from 'react-icons/fa6'

function EndNote() {
  return (
    <footer className="w-full text-center text-gray-500 py-6 border-t border-gray-700 mt-4 font-semibold">
      <p className="text-md leading-relaxed px-4">
        Catch me at{" "}
        <a
          href="https://x.com/arghyabuilds"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-cyan-400 hover:underline underline-offset-4"
        >
          <FaTwitter className="text-cyan-400 text-lg" />
          Twitter
        </a>{" "}
        (now X), usually sharing random dev thoughts and half-working projects.
      </p>
    </footer>
  )
}

export default EndNote
