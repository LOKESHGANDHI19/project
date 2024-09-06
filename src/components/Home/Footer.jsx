import React from 'react';
import Image from 'next/image';
import org from '../../../public/image/orglogo.png';
import insta from '../../../public/image/insta.png';
import twitter from '../../../public/image/twitter.png';
import linkedin from '../../../public/image/linkedin.png';
import logo from '../../../public/image/logo1.png';

// const footerContent = {
//   title: {
//     tag: "h1",
//     content: "Slay all day"
//   },
//   paragraph: {
//     tag: "p",
//     content: "Copyright | Block Pool Technologies Private Limited © 2023"
//   },



// };

export default function Footer() {
  return (

    <div className="bg-black text-white p-6 w-full py-8">
      <div className=" mx-auto flex flex-col sm:flex-row justify-between items-start pb-10 md:pb-24">
        <div className="mb-9 ml-14 md:ml-0 flex items-center gap-2 lg:w-96">
          <Image src={org.src} alt="Org Logo" width={80} height={80} className="w-20 h-16" />
          <h1 className="text-4xl flex flex-col justify-center">
            svipes
            <span className='text-base'>its Your day!</span>
          </h1>
        </div>



        <div className="mx-auto flex items-center justify-center gap-24 ">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 ">
            <a href="/safety/our-approach-to-safety" className="hover:underline text-xl md:text-2xl">
              Safety
            </a>
            <a href="#" className="hover:underline text-xl md:text-2xl ">
              Contact us
            </a>

          </div>
          <div className="lg:hidden flex flex-col lg:flex-row items-center justify-center gap-4">
            <a href="#" className="underline text-xl md:text-2xl">Linkedin</a>
            <a href="#" className="underline text-xl md:text-2xl">Instagram</a>
          </div>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center gap-4">
            <a href="#" className="underline text-xl md:text-2xl">Linkedin</a>
            <a href="#" className="underline text-xl md:text-2xl">Instagram</a>
          </div>

      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">

        <div className="lg:hidden flex space-x-6 text-sm mb-4">
          <a href="#" className="hover:underline">Soc</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of use</a>
        </div>

        <div className="text-xs">
          <a href="mailto:press@nglapp.com" className='w-full'>Copyright | Weboin Technologies Private Limited ©️ 2024</a>
        </div>


        <div className="hidden lg:flex text-sm gap-5">
          <a href="#" className="hover:underline">Soc</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of use</a>
        </div>


        <div className="text-sm mt-4 sm:mt-0">
          <span>Made in ❣️ from a Genz</span>
        </div>
      </div>
    </div>

  );
};
