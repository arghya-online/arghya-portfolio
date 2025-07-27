import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='bg-black p-4 pr-10 flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-left text-teal-500 font-SpaceGrotesk sm:text-4xl sm:pl-4 sm:flex-grow sm:mr-10'>Arghya.dev</h1>
            <div className='flex items-center sm:block hidden'>
                <ul className='flex gap-10 text-lg md:text-xl lg:text-2xl text-white font-SpaceGrotesk '>
                    <li><NavLink to="/" className={({isActive}) => isActive ? 'nav-underline-active' : 'nav-underline'}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? 'nav-underline-active' : 'nav-underline'}>About Me</NavLink></li>
                    <li><NavLink to="/projects" className={({isActive}) => isActive ? 'nav-underline-active' : 'nav-underline'}>Projects</NavLink></li>
                    <li><NavLink to="/blog" className={({isActive}) => isActive ? 'nav-underline-active' : 'nav-underline'}>Blogs</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? 'nav-underline-active' : 'nav-underline'}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
