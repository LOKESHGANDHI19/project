'use client';
import React from 'react';
import ph from '../../../public/image/ghost.svg';
import c1 from '../../../public/image/c1.svg';
import c2 from '../../../public/image/c2.svg';
import c3 from '../../../public/image/c3.svg';
import c4 from '../../../public/image/c4.svg';

const floatAnimationStyle = `
  @keyframes floatc1 {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  @keyframes floatc2 {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  @keyframes floatc3 {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  @keyframes floatc4 {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  .float-c1 {
    animation: floatBaa 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }

  .float-c3 {
    animation: floatSto 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    animation-delay: 2s; /* Staggered start */
  }

  .float-c2 {
    animation: floatSto 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    animation-delay: 4s; /* Staggered start */
  }

   .float-c4 {
    animation: floatSto 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    animation-delay: 3s; /* Staggered start */
  }
`;

export const Aboutapp = () => {
  return (
<>
<style>
        {floatAnimationStyle}
      </style>
<div className="h-[110vh] xs:h-[90vh] lg:h-[160vh] w-full bg-gradient-to-b from-pin to-bl text-white overflow-hidden flex flex-col relative">
  <div className='bg-pc'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
      <path fill="#000" fill-opacity="1" d="M0,100 C360,50 1080,50 1440,100 L1440,0 L0,0 Z"></path>
    </svg>
  </div>
  <div className="">
    <h1 className="text-5xl lg:text-7xl font-bold mb-10 pt-20 lg:mb-1 text-center flex flex-col md:flex-row items-center justify-center">
      Get Dank & Some Love
    </h1> 

    <div className="relative flex flex-col items-center justify-center">
      <div className="absolute top-2 right-8 sm:top-4 sm:right-5 md:top-9 md:right-32 lg:top-14 lg:right-60 transform rotate-6 w-40 sm:w-48 md:w-72">
        <img src={c2.src} alt="pink G" className="rounded-lg shadow-lg w-full float-c2" />
      </div>
      <div className="absolute top-40 left-10 sm:top-40 sm:left-10 md:top-60 md:left-32 lg:top-20 lg:left-80 transform rotate-3 w-40 sm:w-44 md:w-72">
        <img src={c1.src} alt="blue" className="rounded-lg shadow-lg w-full float-c1" />
      </div>
      <div className="absolute top-6 -left-2 md:top-6 md:-left-2 lg:top-[400px] lg:left-32 transform -rotate-3 w-40  sm:w-48 md:w-72">
        <img src={c3.src} alt="red G" className="rounded-lg shadow-lg w-full float-c3" />
      </div>
      <div className="absolute top-40 -right-2 md:top-60 md:-right-2 lg:top-[350px] lg:right-32 transform -rotate-3 w-40 sm:w-48 md:w-72">
        <img src={c4.src} alt="blue G" className="rounded-lg shadow-lg w-full float-c4" />
      </div>
    </div>

    <div className="z-50 absolute bottom-0 md:bottom-0 lg:bottom-4 flex justify-center items-end w-full">
      <img src={ph.src} alt="Mobile Mockup" className="rounded-lg shadow-lg w-[60%] md:w-[40%] lg:w-[25%]" />
    </div>
  </div>

  <div className="absolute bottom-0 left-0 w-full bg-black block ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
    <path fill="#F445DC" fill-opacity="1" d="M0,100 C360,50 1080,50 1440,100 L1440,0 L0,0 Z"></path>

    </svg>
  </div>
</div>
</>




  
    
  );
};

export default Aboutapp;




















