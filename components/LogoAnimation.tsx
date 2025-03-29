"use client";

import CSS from "@/public/css.svg";
import Fiverr from "@/public/fiverr.svg";
import HTML from "@/public/html.svg";
import JavaScript from "@/public/javascript.svg";
import NextJS from "@/public/nextjs.svg";
import React from "@/public/react.svg";
import TailwindCSS from "@/public/tailwind.svg";
import TypeScript from "@/public/typescript.svg";
import VsCode from "@/public/vscode.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: CSS, alt: "CSS" },
  { src: Fiverr, alt: "Fiverr" },
  { src: HTML, alt: "HTML" },
  { src: JavaScript, alt: "JavaScript" },
  { src: TypeScript, alt: "TypeScript" },
  { src: NextJS, alt: "NextJS" },
  { src: React, alt: "React" },
  { src: TailwindCSS, alt: "TailwindCSS" },
  { src: VsCode, alt: "VsCode" },
  { src: CSS, alt: "CSS" },
  { src: Fiverr, alt: "Fiverr" },
  { src: HTML, alt: "HTML" },
  { src: JavaScript, alt: "JavaScript" },
  { src: TypeScript, alt: "TypeScript" },
  { src: NextJS, alt: "NextJS" },
  { src: React, alt: "React" },
  { src: TailwindCSS, alt: "TailwindCSS" },
  { src: VsCode, alt: "VsCode" },
  { src: CSS, alt: "CSS" },
  { src: Fiverr, alt: "Fiverr" },
  { src: HTML, alt: "HTML" },
  { src: JavaScript, alt: "JavaScript" },
  { src: TypeScript, alt: "TypeScript" },
  { src: NextJS, alt: "NextJS" },
  { src: React, alt: "React" },
  { src: TailwindCSS, alt: "TailwindCSS" },
  { src: VsCode, alt: "VsCode" },
];

export default function LogoAnimation() {
  return (
    <div className='py-8 bg-purple-800/20 opacity-80'>
      <div className='container mx-auto'>
        <div className='overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]'>
          <motion.div
            className='flex gap-14 flex-none pr-14'
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) => (
              <Image key={index} src={image.src} alt={image.alt} height={30} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
