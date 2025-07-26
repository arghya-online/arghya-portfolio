import React from 'react'

function Navbar() {
    return (
        <nav className='bg-black p-4 pr-10 flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-left text-teal-500 font-SpaceGrotesk sm:text-4xl sm:pl-4 sm:flex-grow sm:mr-10'>Arghya.dev</h1>
            <div className='flex items-center sm:block hidden'>
                <ul className='flex gap-10 text-lg text-white font-SpaceGrotesk '>
                    <li className='text-xl hover:text-teal-400'>Home</li>
                    <li className='text-xl hover:text-teal-400'>About Me</li>
                    <li className='text-xl hover:text-teal-400'>Blogs</li>
                    <li className='text-xl hover:text-teal-400'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
