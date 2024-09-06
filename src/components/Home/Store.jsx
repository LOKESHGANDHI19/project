'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import org from '../../../public/image/orglogo.png';
import sto from '../../../public/image/story.svg';
import baa from '../../../public/image/baby.svg';

// Inline CSS for the float animations
const floatAnimationStyle = `
  @keyframes floatBaa {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  @keyframes floatSto {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  .float-baa {
    animation: floatBaa 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }

  .float-sto {
    animation: floatSto 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    animation-delay: 2s; /* Staggered start */
  }
`;

export const Store = () => {
  const [isVisible, setIsVisible] = useState(false);
  const orgLogoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (orgLogoRef.current) {
      observer.observe(orgLogoRef.current);
    }

    return () => {
      if (orgLogoRef.current) {
        observer.unobserve(orgLogoRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>
        {floatAnimationStyle}
      </style>
      <div className="relative bg-black h-[42rem] sm:h-full md:h-full lg:h-full w-full overflow-hidden flex flex-col items-center justify-center pt-10 md:pt-36 pb-96">
        {/* Centering the org logo at the top */}
        <div
          ref={orgLogoRef}
          className={`absolute top-0  transform -translate-x-1/2 mt-4 ${isVisible ? 'slide-in' : ''}`}
          style={{
            transition: 'transform 1s, opacity 1s',
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          <Image src={org.src} alt="Org Logo" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
        </div>

        {/* Text at the top */}
        <div className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl mt-96 sm:mt-8 md:mt-8 lg:mt-8 text-white text-center mb-8 px-4 sm:px-0">
        <h1 >
          It&#39;s Your day.<br />Every Day.
        </h1>
        </div>
        

        {/* Images below the text */}
        <div className="flex flex-col items-center justify-center w-full pt-40 md:pt-24 pb-60 lg:pt-24 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-0">
          <div className='absolute -right-14 lg:right-44 rotate-[15deg] top-52'>
            <div className='h-[400px] md:h-[610px] lg:h-[600px] w-[200px] md:w-[330px]'>
              <img
                src={baa.src}
                alt='story'
                className='h-full w-full float-baa'
              />
            </div>
          </div>

          <div className='absolute -left-14 lg:left-44 -rotate-[15deg] top-52 sm:top-72 md:top-72 lg:top-72'>
            <div className='h-[400px] md:h-[610px] lg:h-[600px] w-[200px] md:w-[330px]'>
              {/* <div className="z-10 top-40 md:top-64 left-12 relative w-32 h-20 md:w-56 md:h-32 bg-white rounded-3xl shadow-md overflow-hidden ">
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-700 h-8 md:h-1/2">
                  <span className="text-xs text-white text-[10px] uppercase w-32 text-center">
                    Someone dropped you a Dank
                  </span>
                </div>
                <h1 className="absolute -left-2 md:left-0 right-0 -bottom-20 md:-bottom-5 h-28 w-24 z-40 md:w-44 mx-auto md:h-1/2 text-xs md:text-xs text-center mt-3 text-gray-800">
                  you got the best smiles
                </h1>
              </div> */}

              <img
                src={sto.src}
                alt='story'
                className='h-full w-full float-sto'
              />
            </div>
          </div>
        </div>

        {/* Wave shape at the bottom */}
        {/* <div className="bg-pink-600 hidden lg:block w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path fill="#000000" fillOpacity="1" d="M0,100 C360,50 1080,50 1440,100 L1440,0 L0,0 Z"></path>
          </svg>
        </div> */}
      </div>
    </>
  );
};

export default Store;
