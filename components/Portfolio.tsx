"use client";

import Project1 from "@/public/assets/Project01.png";
import Project2 from "@/public/assets/Project02.png";
import Project3 from "@/public/assets/Project03.png";
import Project4 from "@/public/assets/Project04.png";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <section id='portfolio' className='py-32 text-white'>
      <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>
        <div>
          <h2 className='font-bold text-6xl mb-10'>
            Selected <span className='text-purple-400'>Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              className='cursor-pointer mb-8 group'
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <p className='text-purple-400 text-lg mb-2'>{project.year}</p>
              <h3
                className={`font-semibold text-3xl group-hover: text-gray-400 transition-colors${
                  selectedProject.id === project.id ? "text-purple-200" : ""
                } duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className='border-b-2 border-purple-200 my-4'></div>
              )}
              {selectedProject.id === project.id && (
                <p className='text-gray-400 transition-all duration-500 ease-in-out'>
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <Image
          src={selectedProject.imageSrc}
          alt={selectedProject.title}
          width={800}
          height={450}
          className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out mt-36'
        />
      </div>
    </section>
  );
}
