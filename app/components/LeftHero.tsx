'use client';

import Date from './Date';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Francois_One } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const francios = Francois_One({
  subsets: ['latin'],
  weight: ['400'],
});

function LeftHero() {
  const links = [
    { id: 1, name: 'info', path: '#para' },
    { id: 2, name: 'tickets', path: '/' },
    { id: 3, name: 'merch', path: '/' },
    { id: 4, name: 'tiktok', path: '/' },
    { id: 5, name: 'contact', path: '/' },
  ];

  const reviews = [
    { id: 1, review: "The most intriguing show I’ve seen since the LA riots", name: 'Village Voice' },
    { id: 2, review: "The most intriguing show I’ve seen since the LA riots", name: 'John Doe' },
    { id: 3, review: 'Lorem ipsum dolor sit amet.', name: 'Larry Johnson' },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="w-full hello overflow-y-hidden max-w-[930px] relative left-0 top-0 gap-10 flex flex-row md:flex-col text-center items-center justify-center">
      <div className='max-w-[930px] dr w-full fixed flex items-center justify-center flex-col top-0'>
        <h1 className="text-[30px] last md:text-[88px] top-0 absolute w-[96%] text-center flex items-center justify-end font-bold text-[#C92020]">
          THE LAST HUMAN
        </h1>

        <div className='flex items-start cont justify-center mr-5'>
          <div className="relative flex img items-center pt-14 text-center justify-center w-full h-full md:w-[400px] md:h-[550px]">
            <Image className="absolute w-full h-full -z-10" src={'/mouth.png'} alt="Mouth" priority layout="fill" objectFit="contain" />
            <AnimatePresence mode="wait">
              <motion.p
                key={reviews[currentReview].id}
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0}}
                transition={{ duration: 0.8 }}
                className={`text-[#FF0000] text-sm try-txt md:text-[30px] ${francios.className}`}
              >
                “{reviews[currentReview].review}” <br />- {reviews[currentReview].name}
              </motion.p>
            </AnimatePresence>
          </div>

          <ul className='flex flex-col top-40 items-end justify-start md:absolute right-6 gap-5'>
            {links.map((item) => (
              <Link href={item.path} key={item.id} className={`text-[#C92020] li tracking-[12px] md:text-[20px] ${francios.className}`}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>

        <Date />
      </div>
    </div>
  );
}

export default LeftHero;
