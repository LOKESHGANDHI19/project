'use client';
import React from 'react';

import ph from'../../../public/image/phone1.png';

import girl from '../../../public/image/gimg.png';


import om from '../../../public/image/omsg.png';
import tm from '../../../public/image/tmsg.png';
import ttm from '../../../public/image/hmsg.png';


import lom from '../../../public/image/lomsg.png';
import ltm from '../../../public/image/ltmsg.png';
import lttm from '../../../public/image/lhmsg.png';
import black from '../../../public/image/svipesblack.png';
import white from '../../../public/image/svipeswhite.png';


function Get() {
  return (
  

      
    <div className="flex justify-center items-center h-[40rem] w-full bg-black py-7">
    <div className="relative pb-96 overflow-hidden rounded-3xl w-full max-w-[97%] h-full bg-gradient-to-b from-pu to-ro items-center justify-center">
  
    <div className='bg-gradient-to-b from-pu z-20 w-full  max-w-[100%] absolute left-0 right-0 top-0   '>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 100"
  
  >
    <path fill="#000"  d="M0,0 C360,30 1080,45 1440,0 1440,30 L0,100 Z"></path>
  </svg>



</div>
<div className="flex flex-col justify-center items-center relative">
 
      <h1 className="text-4xl py-14 text-center md:text-8xl lg:text-8xl font-bold text-white md:mb-8 w-96 sm:absolute sm:bottom-4 lg:relative lg:top-auto lg:mt-10">
        Let&#39;s Svipes
      </h1>

  {/* <div className='absolute left-0 -ml-20 rotate-45 top-32'>
    <img
      src={ph.src}
      alt='phone'
      className='w-96 h-96'
    />
  </div> */}
  <div className='absolute -left-12 md:left-0 lg:-left-20 rotate-[15deg] top-40 lg:top-32 z-10'>
    
        <div 
        className=' h-[310px] md:h-[610px] lg:h-[700px] w-[200px] md:w-[330px] lg:w-[300px] rounded-[50px]'>
        <img src={black.src}
    className=''/>
        </div>
      </div>
      <div className='absolute -right-12 md:right-0 lg:-right-20 -rotate-[15deg] top-32 lg:top-24'>
        <div className=' h-[310px] md:h-[610px] lg:h-[700px] w-[200px] md:w-[330px] lg:w-[300px] rounded-[50px]'>
        <img src={white.src}
    className=''/>
        </div>
      </div>


          {/* Centered Inner Div */}
          {/* <div className="relative flex justify-center items-center">
            <div className="absolute -right-10 -top-3 md:-right-32 md:-top-16 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-dance">
              <img 
                src={om.src} 
                alt="Description of Image" 
                className="w-32 md:w-52" 
              />
              <h1 className='absolute text-xs md:text-sm inset-0 flex items-center text-center justify-center text-black z-10' style={{ left: '20%', top: '5%', transform: 'translate(-10%, -10%)' }}>
                Who’s your best friend?
              </h1>
            </div>
  
            <div
              className="absolute -left-20 -top-12 md:-left-40 md:-top-28 transform -translate-x-1/2 -translate-y-1/2 z-0"
              style={{
                animation: 'smoothMove 7s ease-in-out infinite',
              }}
            >
              <img
                src={ltm.src}
                alt="Description of Image"
                className="w-44 md:w-72"
                style={{
                  borderTopRightRadius: '0px',
                  borderBottomRightRadius: '0px',
                  borderTopLeftRadius: '0px',
                  borderBottomLeftRadius: '0px',
                }}
              />
              <h1
                className="absolute text-xs md:text-sm left-14 -top-3 md:left-20 md:-top-7 inset-0 flex items-center text-center justify-center text-black z-10 w-24 md:w-40"
              >
                What childhood memory makes you smile?
              </h1>
            </div>
  
            <style jsx>{`
              @keyframes dance {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-70px);
                }
              }
  
              .animate-dance {
                animation: dance 9.5s ease-in-out infinite;
              }
  
              @keyframes smoothMove {
                0%, 100% {
                  transform: translateY(0);
                  border-top-left-radius: 8px;
                  border-bottom-left-radius: 8px;
                }
                50% {
                  transform: translateY(-10px); 
                  border-top-left-radius: 24px;
                  border-bottom-left-radius: 24px;
                }
              }
            `}</style>
  
            <img 
              src={girl.src} 
              alt="Description of Image" 
              className="w-60 h-72 md:w-96 md:h-auto rounded-3xl border-4 border-pink-600 hover:border-green" 
            />
            
            <div className="absolute  -right-36 -bottom-32 md:-right-80 md:-bottom-52 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <img 
                src={lom.src} 
                alt="Description of Image" 
                className="w-40 md:w-72 " 
              />
              <h1 className='absolute text-xs md:text-sm inset-0 flex items-center text-center justify-center text-black z-10 ' style={{ left: '20%', top: '5%', transform: 'translate(-10%, -10%)' }}>
                What s a skill you re proud of?
              </h1>
            </div>
  
            <div className="absolute -left-0 -bottom-40 md:-left-11 md:-bottom-52 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <img 
                src={tm.src} 
                alt="Description of Image" 
                className="w-40 md:w-72 rotate-180" 
              />
              <h1 className='absolute inset-0 text-xs md:text-sm flex items-center text-center justify-center text-black z-10 w-24 md:w-40' style={{ left: '25%', top: '30%', transform: 'translate(-10%, -10%)' }}>
                What s your idea of a great weekend?
              </h1>
            </div>
          </div> */}
  
         
        </div>
      </div>
    </div>
   

  

  
  );
}

export default Get;
