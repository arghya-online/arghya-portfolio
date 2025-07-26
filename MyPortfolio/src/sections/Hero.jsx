import React from 'react'

function Hero() {
  return (
    <section className='bg-black text-white w-full min-h-screen'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between w-full h-full'>

        {/* LEFT TEXT SECTION */}
        <div className='w-full md:w-1/2 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-20'>

          <p className='text-3xl tracking-widest text-gray-400 mb-4 font-SpaceGrotesk'>
            <span className='text-teal-400 bg-clip-text'>FRONTEND</span> ENGINEER
          </p>

          <h1 className='text-[42px] sm:text-[60px] md:text-[72px] font-bold leading-[1.1] mb-6 font-SpaceGrotesk'>
            Hi, I’m Arghya
          </h1>

          <p className='text-2xl sm:text-lg text-gray-300 leading-relaxed mb-10 font-SpaceGrotesk'>
            I design and code clean, intentional web<br className='hidden sm:block' />
            interfaces using React.
          </p>

          <div className='flex gap-12 mb-12'>
            <div>
              <p className='text-3xl font-bold font-SpaceGrotesk'>3+</p>
              <p className='text-sm text-gray-400 font-SpaceGrotesk'>Years Experience</p>
            </div>
            <div>
              <p className='text-3xl font-bold font-SpaceGrotesk'>10+</p>
              <p className='text-sm text-gray-400 font-SpaceGrotesk'>Projects Built</p>
            </div>
          </div>

          <div className='flex gap-4'>
            <button className='bg-white text-black px-6 py-3 text-sm font-medium font-SpaceGrotesk hover:bg-gray-200 transition-all'>
              View Work →
            </button>
            <button className='border border-white text-white px-6 py-3 text-sm font-medium font-SpaceGrotesk hover:bg-white hover:text-black transition-all'>
              Get in Touch
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}

      </div>
    </section>
  )
}

export default Hero
