"use client";

import { motion } from "framer-motion";
import HeroImage from "./HeroImage";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const duration = 1500;
      const start = window.scrollY;
      const end = element.offsetTop;
      const startTime = performance.now();

      function scroll(currentTime: number) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, start + (end - start) * progress);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      }

      requestAnimationFrame(scroll);
    }
  };

  return (
    <div
      id='home'
      className='relative overflow-hidden min-h-screen w-full text-white bg-[linear-gradient(to_bottom,#000,#340f41_35%,#8a3da4_55%,#8993ed_85%)]'
    >
      <div className='absolute bg-black w-[1800px] h-[1200px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#9e4ac5)] top-[250px] border-[1px] border-[#bd8cde]/30' />
      <div className='container relative mx-auto px-4 pt-12 pd-24'>
        <div className='flex flex-col items-center justify-center text-center blur-z-10'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='relative mb-8 mt-12'
          >
            <div className='absolute inset-0 bg-gradient-to-b from-purple-500/40 to-transparent rounded-full blur-3xl'></div>
            <HeroImage />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-2xl'
          >
            <h1 className='text-6xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6'>
              Hi, I am Nasir
            </h1>
            <p className='text-xl text-white/80 max-w-lg mx-auto mb-6 leading-relaxed'>
              I am a React & Next.JS developer focusing on creating web App with
              new tech.
            </p>
            <div className='flex justify-center gap-4'>
              <motion.button
                whileHover={{ scale: 1.3 }}
                onClick={() => scrollToSection("contact")}
                className='px-6 py-3 bg-gradient-to-r from-purple-700/80 to-purple-500/40 border-white rounded-full font-medium hover:bg-purple-700 transition-colors cursor-pointer'
              >
                Contact Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.3 }}
                onClick={() => scrollToSection("portfolio")}
                className='px-6 py-3 bg-gradient-to-r from-purple-500/40 to-purple-700/80 border-white rounded-full font-medium hover:bg-purple-700 transition-colors cursor-pointer'
              >
                View my Works
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div></motion.div>
      </div>
    </div>
  );
}
