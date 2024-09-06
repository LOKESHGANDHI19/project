import React from 'react';
import shic from '../../../public/image/shinchan.jpg';
import bo from '../../../public/image/bob.jpeg';
import ki from '../../../public/image/kick.jpg';
import m from '../../../public/image/mi.jpg';

// Inline CSS for smooth floating animation
const floatAnimationStyle = `
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-15px); /* Slightly smaller move for a smoother effect */
    }
    50% {
      transform: translateY(-15px); /* Hold at the top */
    }
    75% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Stay = () => {
  return (
    <>
      <style>
        {floatAnimationStyle}
      </style>

   
      <div className="bg-black h-full w-full py-20 md:py-2 flex flex-col items-center justify-center overflow-hidden">
        
        <div className="text-center text-white">
          <h1 className="mt-32 text-5xl lg:text-6xl w-96">Stay <br />anonymous<br /> in your style</h1>
        </div>
        <div className="flex w-full justify-between px-60">
          <div
            className='-mt-80 -ml-36 lg:-ml-10 md:-mt-10'
            style={{ animation: 'float 8s ease-in-out infinite' }} // Duration for first card
          >
            <img src={shic.src}
              className='rotate-12 rounded-3xl border-4 border-green h-20 lg:h-40' />
            <h3 className='text-xs text-white py-3'>amaithi_amaithi</h3>
          </div>

          <div
            className='-mt-64 -mr-44 lg:-mr-4 md:-mt-20'
            style={{ animation: 'float 12s ease-in-out infinite' }} // Duration for second card
          >
            <img src={m.src}
              className='rounded-3xl -rotate-12 border-4 border-green h-20 lg:h-40' />
            <h3 className='text-xs text-white py-3 ml-8'>my_last_braincell</h3>
          </div>
        </div>

        <div className='flex flex-wrap justify-between gap-20 pb-5'>
          <div
            className=''
            style={{ animation: 'float 10s ease-in-out infinite' }} // Duration for third card
          >
            <img src={bo.src}
              className='rounded-3xl border-4 border-green w-24 md:w-11/12 h-20 lg:h-40 mt-10 md:mt-0' />
            <h3 className='text-white py-3'>ghosted_again</h3>
          </div>
          <div
            className='rotate-6'
            style={{ animation: 'float 6s ease-in-out infinite' }} // Duration for fourth card
          >
            <img src={ki.src}
              className='rounded-3xl border-4 border-green h-20 lg:h-40 w-24 lg:w-40 mt-28 md:mt-0' />
            <h3 className='text-white py-3'>ghosted_again</h3>
          </div>
        </div>
      </div>
    </>
  );
}
