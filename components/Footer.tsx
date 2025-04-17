"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/nasirmasud",
    Icon: AiFillGithub,
    label: "Github",
  },
  {
    href: "https://twitter.com/nasirmasud",
    Icon: FaSquareXTwitter,
    label: "X (Twitter)",
  },
  {
    href: "https://linkedin.com/in/nasirmasud",
    Icon: AiFillLinkedin,
    label: "Linkedin",
  },
  // { href: "https://facebook.com", Icon: AiFillFacebook, label: "Facebook" },
  // { href: "https://instagram.com", Icon: AiFillInstagram, label: "Instagram" },
];

export default function Footer() {
  const scrollToTop = () => {
    const duration = 1500; // Duration in milliseconds
    const start = window.scrollY;
    const startTime = performance.now();

    function scroll(currentTime: number) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, start * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  };

  return (
    <footer className='relative py-8 w-full mx-auto px-4 overflow-hidden'>
      {/* Mobile background elements - 40px left */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-[30%] left-[calc(33.33%-40px)] w-[100px] h-[100px] bg-purple-500 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute top-[50%] left-[calc(25%-40px)] w-[500px] h-[110px] bg-blue-400 rounded-lg opacity-30 -translate-x-1/2 -translate-y-1/2'></div>
      </div>

      {/* Desktop background elements - 40px left */}
      <div className='md-block absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-[30%] left-[calc(33.33%-40px)] w-[200px] h-[200px] bg-blue-300 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute top-[40%] left-[calc(50%-40px)] w-[180px] h-[220px] bg-amber-400 rounded-lg opacity-20 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute top-[45%] left-[calc(75%-40px)] w-[500px] h-[150px] bg-purple-400 rounded-lg opacity-30 -translate-x-1/2 -translate-y-1/2'></div>
      </div>

      {/* Centered text container */}
      <div className='relative flex justify-center w-full'>
        <h1 className='text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[13rem] font-bold text-white opacity-10 whitespace-nowrap'>
          nasirMasud
        </h1>
      </div>

      {/* Footer content */}
      <div className='mt-12 w-full flex sm:justify-between justify-center items-center gap-4 sm:gap-10 max-sm:flex-col'>
        <p className='text-gray-200 text-sm sm:text-base'>
          &copy; 2025. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className='text-gray-200 hover:text-gray-400 transition-colors cursor-pointer'
        >
          Back to Top
        </button>
        <ul className='flex gap-3 sm:gap-5 flex-wrap justify-center sm:justify-end'>
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className='text-gray-200 flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full hover:text-gray-400 transition-colors'
            >
              <Icon className='w-5 h-5 sm:w-6 sm:h-6' />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
}
