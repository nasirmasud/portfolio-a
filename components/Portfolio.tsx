"use client";

import Project1 from "@/public/assets/Project01.png";
import Project2 from "@/public/assets/Project02.png";
import Project3 from "@/public/assets/Project03.png";
import Project4 from "@/public/assets/Project04.png";
import Project5 from "@/public/assets/Project05.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const projects = [
  {
    id: 5,
    year: "2024",
    title: "Next Ecommerce - Shopping made easy",
    description: [
      "A modern, full-stack e-commerce platform built with Next.js 14, featuring server actions and server components. Includes user authentication, product management, shopping cart, secure payments via Stripe/PayPal, and order tracking. Uses Prisma with PostgreSQL for data, and integrates Resend for transactional emails. Features a responsive UI with Tailwind CSS, dark mode support, and admin dashboard for inventory and user management. Implements role-based access control and secure checkout flow. Perfect for small to medium online stores seeking a scalable, performant solution. ",
      <a
        key='link'
        href='https://next-ecommerce-coral-rho.vercel.app'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#AD46FF]'
      >
        [Check Site]
      </a>,
    ],
    imageSrc: Project5,
  },
  {
    id: 1,
    year: "2023",
    title: "NextProperties - Find the Perfect Property for You",
    description: [
      "Next-Properties is a real estate platform built with Next.js, offering property listings, search functionality, and user management. The app features interactive property cards, detailed property views, and a responsive design. Users can browse listings, filter by various criteria (price, location, type), and save favorites. The backend integrates with a database MongoDB for property data and user management. The UI is built with modern React components and styled using Tailwind CSS. ",
      <a
        key='link'
        href='https://next-properties-seven.vercel.app'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#AD46FF]'
      >
        [Check Site]
      </a>,
    ],
    imageSrc: Project2,
  },
  {
    id: 2,
    year: "2021",
    title: "Its Nasir - A personal portfolio",
    description:
      "A modern personal portfolio built with Next.js 15 and React 19, featuring a sleek UI powered by Tailwind CSS and ShadCN components. The project leverages Framer Motion for smooth animations and transitions, with responsive design at its core. It includes intersection observers for scroll-based animations and uses TypeScript for type safety. The portfolio showcases professional work through an optimized, component-based architecture with built-in performance features like font optimization and modern development practices.",
    imageSrc: Project1,
  },
  {
    id: 3,
    year: "2024",
    title: "GameHub - An internet gaming info database",
    description: [
      "GameHub is a modern web application built with React, TypeScript, and Vite, featuring a sleek UI powered by Chakra UI. It's designed to be a gaming platform/hub that leverages modern web technologies for optimal performance. The project uses a robust tech stack including React 18, TypeScript for type safety, Axios for API calls, and Framer Motion for animations. The development environment is configured with ESLint for code quality and HMR (Hot Module Replacement) for a smooth development experience. ",
      <a
        key='link'
        href='https://game-hub-gules-psi.vercel.app'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#AD46FF]'
      >
        [Check Site]
      </a>,
    ],
    imageSrc: Project3,
  },
  {
    id: 4,
    year: "2025",
    title: "Portfolio website - Using Headless CMS Sanity",
    description: [
      "A dynamic portfolio website built with Next.js 15 and React 19, featuring a custom MongoDB backend for content management. The UI combines Material-UI components with TailwindCSS for styling, enhanced by Framer Motion animations and React Slick carousels. Features include secure authentication, smooth scrolling, and a responsive design. The project uses a custom API architecture with Mongoose for data handling, making it fully customizable and maintainable. Perfect for developers seeking a modern, performant way to showcase their work with complete control over their content. ",
      <a
        key='link'
        href='https://nasir-portfolio-ten.vercel.app'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#AD46FF]'
      >
        [Check Site]
      </a>,
    ],
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
      className='py-32 text-white w-full px-8'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full'>
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
            className='cursor-pointer mb-12 group w-full'
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className='flex flex-col lg:flex-row items-start gap-12 w-full'>
              <div className='w-full lg:w-1/2'>
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
              </div>
              {selectedProject.id === project.id && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='w-full lg:w-1/2'
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={800}
                    height={450}
                    className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-full h-auto'
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
