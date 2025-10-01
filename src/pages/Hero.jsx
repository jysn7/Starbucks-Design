import React from 'react'
import CoffeeImg from 'src/assets/Main Coffee.png'
const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row max-w-screen min-h-screen px-6 md:px-12 lg:px-20 py-12 justify-between items-center gap-10'>
      <div className='flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800'>
          It's not just Coffee
        </h1>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
          It's <span className='text-[#047044]'>Starbucks</span>
        </h1>
        <p className='text-gray-600 w-full md:w-[80%] mx-auto lg:mx-0'>
          Since 1971, it always has been and will always be about quality. 
          We're passionate about ethically sourcing and roasting the highest 
          quality arabica coffee beans in the world. Our passion for great coffee 
          is matched only by our commitment to doing business responsibly.
        </p>
        <button className='hover:bg-green-800 bg-[#047044] w-40 mx-auto lg:mx-0 text-white py-3 px-4 rounded-full transition'>
          Learn More
        </button>
      </div>

      <div className='w-full lg:w-1/2 flex justify-center'>
        <img 
          src={CoffeeImg} 
          alt="coffee-img"
          className='max-w-full h-auto object-contain'
        />
      </div>
    </section>
  )
}

export default Hero
