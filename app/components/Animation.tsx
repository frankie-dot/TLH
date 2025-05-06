"use client";

import { Black_Han_Sans, Electrolize, Aclonica, Odibee_Sans, Tilt_Warp, Climate_Crisis, Aldrich } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


// Load fonts outside component to ensure consistency
const blackhan = Black_Han_Sans({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-blackhan',
});

const electrolize = Electrolize({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-electrolize',
});

const aclonica = Aclonica({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-aclonica',
});

const odibe = Odibee_Sans({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-odibe',
});

const tilt_wrap = Tilt_Warp({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-tilt',
});

const clim = Climate_Crisis({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-crisis',
});

const aldrich = Aldrich({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-aldrich',
});

export default function Animation() {

  const words = [ 
    {
      id : 1 , 
      name : "Squeeze"
    },
    {
      id : 2 , 
      name : "INTRIGUE"
    }, 
  ]
 
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // 2 saniyədə bir dəyiş
    return () => clearInterval(interval);
  }, []);
  const content = (
    <div className='p-5 flex items-center justify-center flex-col gap-0 '>


<div className="w-full uppercase text-[#C92020] text-[20px] sm:text-[88px]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1 }}
          className="inline-block"
        >
          {words[index].name}
        </motion.h1>
      </AnimatePresence>
    </div>


    <div className='relative w-full h-full min-h-[500px]'>
        <Image src='/try.jpg' className='w-full h-auto' alt='TRY' priority width={500} height={700} /> 
      </div>
<div className='w-full flex items-center gap-0 p-5 flex-col justify-center '>


      <p id='para' className="font-electrolize min-h-[300px] h-full para text-[22px] text-start w-[100%]">
        When a tab of acid meets a large language model to generate a story of the last human, who he was, why he's no more and who is interested enough to be concerned about it, improvised by actors who are channeling the AI in the moment, for the first time, never to be repeated again, we have an existential fever dream that will leave you laughing, crying and staying back for hours afterwards to eat one another's brains or buy a t-shirt to remind you of the day your life changed forever.
      </p>

      <div className="relative w-full p-5 h-[250px] sm:h-[300px] ">
        <Image src="/img.png" loading="lazy" fill className="object-cover absolute w-full" alt="Img" />
      </div>
      <h3 className='text-[#C92020] text-[62px] md:text-[90px] tracking-[5px] md:tracking-[5px]'>MERCH</h3>
      </div>
    </div>
  );

  return (
    <div className={`${blackhan.variable} ${electrolize.variable} max-w-[600px] an p-5 h-auto sticky top-0 z-10 flex items-center justify-center`}>
      <style jsx global>{`
        .font-blackhan {
          font-family: var(--font-blackhan);
        }
        .font-electrolize {
          font-family: var(--font-electrolize);
        }
      `}</style>
      
      <div className="w-full p-5 flex flex-col gap-10 h-auto">
        <div 
          className="w-full flex flex-col p-5"
        >
            {content}
        </div>
      </div>

    </div>
  );
}