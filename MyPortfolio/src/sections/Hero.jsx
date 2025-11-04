import React from 'react'
import ProfilePic from '../assets/profilePic.jpg'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa6'; 

function Hero() {
  return (
    <>
      <div id="hero" className='flex flex-col items-center bg-transparent text-white p-4'>
        <div className='w-full max-w-2xl mx-auto py-8 md:py-10 border-dashed border-b-2 border-gray-500 my-4;'>

          <div className='flex flex-col items-center mb-2'>
            <div className='border-lg border-red-600'>
              <img src={ProfilePic} alt="Arghya" className='w-24 h-24 rounded-xl object-cover mb-4' />
            </div>  
            <h1 className='text-2xl font-bold'>Arghya</h1>
            <a href="https://x.com/arghyabuilds" className='pt-4 text-m text-gray-400 hover:text-cyan-500'>@arghyabuilds</a>
          </div>
          <div className='mt-8 space-y-6 text-gray-300 text-lg'>
            <p>
              Hey, I’m <span className='text-white font-bold underline underline-offset-4'>Arghya</span>. I’m a developer based in <span className='text-white font-bold'>Kolkata</span>. I spend most of my time building websites and applications that actually help in some way. I love when something I build ends up helping someone or solving a real problem.
            </p>
            <p>
              Programming, for me, is <span className='font-bold text-white'>half logic</span> and <span className='font-bold text-white'>half patience</span>. It’s not always fun, sometimes it’s just me staring at the screen, fixing one tiny thing at a time. But the moment it finally works, it’s a proper Eureka feeling.
            </p>
            <p>
              When I’m not working, I like to build and tinker with robots. So far, I’ve built <span className='text-white font-bold'>8+ robots </span>, won <span className='text-white font-bold'>2+ hackathons</span>, and shipped a few gigs along the way.
            </p>
            <p>
              And yeah, maybe one day I’ll finally be able to explain to my parents what all this “coding stuff” actually is.
            </p>
          </div>
          <div id="socials" className='flex justify-center space-x-6 mt-8'>
            
            <a href="mailto:arghyamajumdar.contact@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className='text-3xl text-gray-400 hover:text-red-500 transition duration-300'>
              <FaEnvelope />
            </a>
            <a href="https://github.com/arghya-online" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='text-3xl text-gray-400 hover:text-white transition duration-300'>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/arghya-majumdar-46128726b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='text-3xl text-gray-400 hover:text-blue-600 transition duration-300'>
              <FaLinkedin />
            </a>
            <a href="https://x.com/ArghyaOnline1" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className='text-3xl text-gray-400 hover:text-cyan-400 transition duration-300'>
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@arghya_explains_" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className='text-3xl text-gray-400 hover:text-red-600 transition duration-300'>
              <FaYoutube />
            </a>
            <a href="https://peerlist.io/arghya" target="_blank" rel="noopener noreferrer" aria-label="Peerlist" className='text-3xl text-gray-400 hover:text-green-500 transition duration-300'>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero