'use client';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import ap from'../../../public/image/applelogo.svg'
import al from'../../../public/image/androidlogo.svg'
import lady from'../../../public/image/lady.png'
import boy from '../../../public/image/boy.png'
import Goat from '../../../public/image/Goat.png'
import Glowup from '../../../public/image/Glowup.png'
import Vibe from '../../../public/image/Vibe.png'
import Slayqueen from '../../../public/image/Slayqueen.png'

const floatAnimationStyle = `
  @keyframes floatlady {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  @keyframes floatboy {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  .float-lady {
    animation: floatBaa 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }

  .float-boy {
    animation: floatSto 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    animation-delay: 2s; /* Staggered start */
  }
`;

export default function StickyNav() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // 768px corresponds to md in Tailwind CSS
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };



  return (
    <>
    <style>
        {floatAnimationStyle}
      </style>
<div className="w-full bg-black " onMouseMove={handleMouseMove}>
<div className="w-full max-w-[98%] mx-auto bg-gradient-to-b from-red to-he rounded-tl-3xl rounded-tr-3xl relative overflow-hidden">
  <div className="relative">
    <div className='float-boy'>
    <img
    
        src={boy.src}
        alt="Description of Image"
        className="z-10 w-44 lg:w-80 left-4 md:left-12 top-36 md:top-32 lg:top-40 rounded-[50px] border-4 md:border-8 border-amber-300 absolute -rotate-12 "
        // style={{
        //   transform: isLargeScreen
        //     ? `translate(${position.x / 15}px, ${position.y / 15}px)`
        //     : 'none',
        //    }}
      />
</div>
<div className='float-lady'>
<img
        src={lady.src}
        alt="Description of Image"
        className="z-0 w-44 lg:w-60 right-4 md:right-20 lg:right-36 top-44 md:top-32 lg:top-48 rounded-[50px] border-4 md:border-8 border-amber-300 absolute rotate-12   "
        // style={{
        //   transform: isLargeScreen
        //     ? `translate(${position.x / 15}px, ${position.y / 15}px)`
        //     : 'none',
        //    }}
      />
</div>
      <img
      src={Goat.src}
      alt='goat'
      className="z-20 absolute w-24 md:w-36 left-36 md:left-36 lg:left-72 top-28 md:top-12 "
       style={{
          transform: isLargeScreen
            ? `translate(${position.x / 15}px, ${position.y / 15}px)`
            : 'none',
           }}
      />

      <img
      src={Vibe.src}
      alt='vibe'
      className="absolute w-20 md:w-28 right-64 md:right-32 lg:right-72 top-[450px] md:top-12 lg:top-24 "
      style={{
        transform: isLargeScreen
          ? `translate(${position.x / 25}px, ${position.y / 25}px)`
          : 'none',
         }}
      />

     <img
      src={Glowup.src}
      alt='glowup'
      className="absolute w-24 md:w-36 right-4 md:left-12 lg:left-20 top-[730px] md:top-[326px] lg:top-[526px]"
      style={{
        transform: isLargeScreen
          ? `translate(${position.x / 35}px, ${position.y / 35}px)`
          : 'none',
         }}
      />

      <img
      src={Slayqueen.src}
      alt='Slayqueen'
      className="absolute w-36 md:w-40 right-20 md:right-20 lg:right-36 top-[350px] md:top-[346px] lg:top-[506px] "
      
      />


    </div>

    <div className="flex flex-col items-center pt-14  ">
    <h1 className="text-center ExoHeader w-80 md:w-60 lg:w-96 text-base md:text-xl lg:text-4xl text-white">
        Svipes
    </h1>
    
   
</div>

<h1 className="w-80 md:w-60 lg:w-6/12 text-center mx-auto text-5xl md:text-xl lg:text-7xl text-white pt-[450px] sm:pt-72 md:pt-14">
    See what <br /> your <br /> Friends like <br />about you
</h1>



    
    
    <div className="text-center mt-20 pb-32 hidden md:block lg:block ">
      <button className="bg-white text-he text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full">
        Download the app !
      </button>
    </div>
    <div className="text-center mt-20 pb-32 md:hidden lg:hidden flex justify-center space-x-4">
  <img 
    src={ap.src} 
    alt="Apple Logo" 
    className="w-auto h-auto" 
  />
  <img 
    src={al.src} 
    alt="Androidlogo Logo" 
    className="w-auto h-auto" 
  />
</div>


    
    <div className='bg-black'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
  <path fill="#F45A1E" fill-opacity="1" d="M0,100 C360,50 1080,50 1440,100 L1440,0 L0,0 Z"></path>
</svg>
</div>

  </div>
</div>



    </>
  );
}
