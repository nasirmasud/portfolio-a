"use client";

import { motion, useInView } from "framer-motion";
import React from "react";

const services = [
  {
    id: "01",
    title: "Custom Web Application Development",
    description:
      "Build high-performance, scalable web applications using React & Next.js. Whether you need a SaaS platform, admin dashboard, or business tool, I develop responsive and dynamic solutions tailored to your needs",
  },
  {
    id: "02",
    title: "SEO-Optimized Websites with Next.js",
    description:
      "Leverage Next.js server-side rendering (SSR) and static site generation (SSG) for blazing-fast, search-engine-friendly websites. Perfect for blogs, portfolios, and business sites that rank higher on Google.",
  },
  {
    id: "03",
    title: "Progressive Web Apps (PWAs)",
    description:
      "Transform your website into an installable PWA with offline capabilities, push notifications, and smooth performance. Ideal for e-commerce, news portals, and user-centric platforms.",
  },
  {
    id: "04",
    title: "Frontend UI/UX Development",
    description:
      "Craft pixel-perfect, interactive user interfaces with React.js, Tailwind CSS, and Framer Motion. I focus on clean design, smooth animations, and intuitive navigation for an engaging user experience.",
  },
];

export default function Services() {
  const ref = React.useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      className='text-white py-20 px-8'
      id='services'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className='mx-auto flex flex-col md:flex-row'>
        <div className='md:w-1/4 mb-12 md:mb-0'>
          <motion.h2
            className='text-6xl font-extrabold sticky top-20'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Services
          </motion.h2>
        </div>
        <div className='md:w-3/4'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className='mb-8 flex items-start'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <div className='text-gray-300 font-bold text-5xl mr-8'>
                {service.id}
              </div>
              <div>
                <motion.h3
                  className='text-2xl font-bold mb-2'
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    duration: 0.4,
                    type: "spring",
                  }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
