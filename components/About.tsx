"use client";

import expertise from "@/public/assets/Expertise.png";
import goals from "@/public/assets/Goals.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { Progress } from "./ui/progress";

export default function About() {
  const ref = React.useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      id='about'
      className='text-white p-8 py-24'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className='text-6xl font-bold mb-8'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About <span className='text-purple-500'>Me</span>
      </motion.h2>
      <div className='grid md:grid-cols-3 gap-8'>
        <div className=' rounded-lg p-6'>
          <motion.h3
            className='font-bold text-2xl mb-2'
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
            transition={{
              delay: 0.6 + 0 * 0.1,
              duration: 0.4,
              type: "spring",
            }}
          >
            01. Background
          </motion.h3>
          <motion.p
            className='text-white/50 mb-6'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 + 0 * 0.1, duration: 0.4 }}
          >
            {` I'm a self-learned passionate React & Next.js developer with a strong foundation of HTML, CSS, Javascript & love to creating innovative web solutions. My journey in tech started with curiosity and has grown into a career of continuous learning and building impactful projects.`}
          </motion.p>
          <motion.div
            className='rounded-lg p-4 mb-4 border border-white'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 + 0 * 0.1, duration: 0.4 }}
          >
            <code className='text-purple-200/50'>
              {"const skills = ["}
              <br />
              {"  'Javascript',"}
              <br />
              {"  'React',"}
              <br />
              {"  'Next.js',"}
              <br />
              {"  'Typescript',"}
              <br />
              {"  'PostgreSQL',"}
              <br />
              {"  'MongoDB',"}
              <br />
              {"];"}
            </code>
          </motion.div>
        </div>

        <div className=' rounded-lg p-6'>
          <motion.h3
            className='font-bold text-2xl mb-2'
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
            transition={{
              delay: 0.6 + 1 * 0.1,
              duration: 0.4,
              type: "spring",
            }}
          >
            02. Expertise
          </motion.h3>
          <motion.p
            className='text-white/50'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 + 1 * 0.1, duration: 0.4 }}
          >
            I specialize in building robust and scalable web applications using
            modern technologies. My expertise lies in creating seamless user
            experiences, optimizing performance, and delivering high-quality
            code.
          </motion.p>
          <motion.div
            className='mt-4 relative border-white/20 rounded-lg p-4 h-[220px] overflow-hidden'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 + 0 * 0.1, duration: 0.4 }}
          >
            <Image
              src={expertise}
              alt='Expertise'
              width={500} // Adjust width as needed
              className='rounded-lg'
            />
          </motion.div>
        </div>

        <div className=' rounded-lg p-6'>
          <motion.h3
            className='font-bold text-2xl mb-2'
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
            transition={{
              delay: 0.6 + 2 * 0.1,
              duration: 0.4,
              type: "spring",
            }}
          >
            03. Skills
          </motion.h3>
          <motion.p
            className='mb-4 text-white/50'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 + 2 * 0.1, duration: 0.4 }}
          >
            {`I'm proficient in a wide range of technologies and constantly
            expanding my skills to stay updated with the latest advancements in
            web development.`}
          </motion.p>
          <div className='border border-white/20 rounded-lg p-3'>
            <motion.h4
              className='mb-2 text-purple-300 font-medium'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Frontend
            </motion.h4>
            <motion.ul
              className='text-white/50 space-x-1 text-sm'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 + 1 * 0.1, duration: 0.4 }}
            >
              <li>React</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>ShadCN</li>
              <li>Framer Motion</li>
            </motion.ul>
          </div>
          <div className='border border-white/20 rounded-lg p-3 mt-4'>
            <motion.h4
              className='mb-2 text-purple-300 font-medium'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Backend
            </motion.h4>
            <motion.ul
              className='text-white/50 space-x-1 text-sm'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 + 1 * 0.1, duration: 0.4 }}
            >
              <li>Next.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </motion.ul>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8 mt-8'>
        <div className=' rounded-lg p-6'>
          <motion.h3
            className='font-bold text-2xl mb-2'
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
            transition={{
              delay: 0.6 + 3 * 0.1,
              duration: 0.4,
              type: "spring",
            }}
          >
            04. Approach
          </motion.h3>
          <motion.p
            className='mb-4 text-white/50'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 + 3 * 0.1, duration: 0.4 }}
          >
            I believe in writing clean, maintainable, and efficient code. My
            approach is centered around understanding the problem, planning the
            solution, and executing it with precision. I prioritize readability,
            scalability, and performance in every project I undertake.
          </motion.p>

          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className='flex gap-1 items-center'>
                  <RiHtml5Fill size={30} />
                  <Progress
                    value={85}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className='flex gap-1 items-center'>
                  <RiCss3Fill size={30} />
                  <Progress
                    value={65}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className='flex gap-1 items-center'>
                  <RiJavascriptFill size={30} />
                  <Progress
                    value={90}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className='flex gap-1 items-center'>
                  <RiTailwindCssFill size={30} />
                  <Progress
                    value={70}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <div className='flex gap-1 items-center'>
                  <RiReactjsFill size={30} />
                  <Progress
                    value={75}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                <div className='flex gap-1 items-center'>
                  <RiNextjsFill size={30} />
                  <Progress
                    value={80}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
              >
                <div className='flex gap-1 items-center'>
                  <BiLogoTypescript size={30} />
                  <Progress
                    value={50}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='  rounded-lg p-6'>
          <div>
            <motion.h3
              className='font-bold text-2xl mb-2'
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{
                delay: 0.6 + 4 * 0.1,
                duration: 0.4,
                type: "spring",
              }}
            >
              05. Goals
            </motion.h3>
            <motion.p
              className='mb-4 text-white/50'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 + 4 * 0.1, duration: 0.4 }}
            >
              I follow a structured approach to problem-solving, starting with
              understanding the requirements and breaking them into smaller,
              manageable tasks. I emphasize collaboration, testing, and
              iteration to ensure the final product meets expectations and
              delivers value.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 + 0 * 0.1, duration: 0.4 }}
            className='h-auto  relative'
          >
            <Image
              src={goals}
              alt='Goals'
              width={500} // Adjust width as needed
              height={700} // Adjust height as needed
              className='object-contain rounded-lg'
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
