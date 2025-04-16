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
    <footer className='relative py-4 max-w-full mx-auto px-4'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-[30%] left-1/3 w-[100px] h-[100px] bg-purple-500 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2'></div>

        <div className='absolute top-[50%] left-1/4 w-[500px] h-[110px] bg-blue-400 rounded-lg opacity-30 -translate-x-1/2 -translate-y-1/2'></div>
      </div>
      <div className='md-block absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-[30%] left-1/3 w-[200px] h-[200px] bg-blue-300 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute top-[40%] left-1/2 w-[180px] h-[220px] bg-amber-400 rounded-lg opacity-20 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute top-[45%] left-3/4 w-[500px] h-[150px] bg-purple-400 rounded-lg opacity-30 -translate-x-1/2 -translate-y-1/2'></div>
      </div>

      <div className='opacity-10 text-center pointer-events-none'>
        <h1 className='md:block text-[7rem] md:text-[5rem] lg:text-[12rem] font-bold text-white'>
          nasirMasud
        </h1>
      </div>

      <div className='flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col relative z-10'>
        <p className='text-gray-200'>&copy; 2025. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className='text-gray-200 hover:text-gray-400 transition-colors cursor-pointer'
        >
          Back to Top
        </button>
        <div className='flex items-center gap-10'>
          <ul className='flex gap-5 flex-wrap'>
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-gray-400 transition-colors hover:scale-110'
              >
                <Icon size={30} />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
