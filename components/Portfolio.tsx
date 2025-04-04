"use client";

import Project1 from "@/public/assets/Project01.png";
import Project2 from "@/public/assets/Project02.png";
import Project3 from "@/public/assets/Project03.png";
import Project4 from "@/public/assets/Project04.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    year: "2021",
    title: "Doodle - customer support chatBot",
    description:
      "We built an advanced customer support chatbot for Doodle, that helps 87% customers with their queries",
    imageSrc: Project1,
  },
  {
    id: 2,
    year: "2023",
    title: "Dash - AI calling system",
    description:
      "We developed Dash an AI powered calling system that helps you to make calls without any hassle",
    imageSrc: Project2,
  },
  {
    id: 3,
    year: "2024",
    title: "Atomic - AI driven outreach",
    description:
      "Atomic is an AI driven outreach tool that helps you to reach out to your customers without any hassle",
    imageSrc: Project3,
  },
  {
    id: 4,
    year: "2025",
    title: "Market - AI driven marketing",
    description:
      "Market is an AI driven marketing tool that helps you to reach out to your customers without any hassle",
    imageSrc: Project4,
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const ref = React.useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      id='portfolio'
      className='py-32 text-white mx-auto px-8'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>
        <div>
          <motion.h2
            className='font-bold text-6xl mb-10'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selected <span className='text-purple-500'>Projects</span>
          </motion.h2>
          {projects.map((project, index) => (
            <motion.div
              className='cursor-pointer mb-8 group'
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedProject(project)}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className='text-purple-400 text-lg mb-2'
              >
                {project.year}
              </motion.p>
              <motion.h3
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.4,
                  type: "spring",
                }}
                className={`font-semibold text-2xl group-hover: text-gray-400 transition-colors${
                  selectedProject.id === project.id ? "text-purple-200" : ""
                } duration-300`}
              >
                {project.title}
              </motion.h3>
              {selectedProject.id === project.id && (
                <div className='border-b-2 border-purple-200 my-4'></div>
              )}
              {selectedProject.id === project.id && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 * 0.1, duration: 0.4 }}
                  className='text-gray-400 transition-all duration-500 ease-in-out'
                >
                  {project.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={selectedProject.imageSrc}
            alt={selectedProject.title}
            width={800}
            height={450}
            className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out mt-36'
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
