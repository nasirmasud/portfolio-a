"use client";

import { motion } from "framer-motion";
import { MdCallMade, MdOutgoingMail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-20 text-white amx-w-[1200px] mx-auto px-4'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='grid lg:grid-cols-2 gap-16'
      >
        <div className='space-y-12'>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-7xl font-bold text-gray-300'
          >
            Get in <span className='text-purple-500'>touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='glass p-8 rounded-2xl space-y-8'
          >
            <div className='space-y-2'>
              <p className='text-lg text-gray-300'>Phone</p>
              <a
                href='tel:+8801911907105'
                className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
              >
                +88 (0) 1911 907 105{" "}
                <span className='text-purple-500'>
                  <MdCallMade size={30} />
                </span>
              </a>
            </div>

            <div className='space-y-2'>
              <p className='text-lg text-gray-300'>Email</p>
              <a
                href='mailto:nasir.masud@ymail.com'
                className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
              >
                nasir.masud@ymail.com{" "}
                <span className='text-purple-500'>
                  <MdOutgoingMail size={30} />
                </span>
              </a>
            </div>

            <div className='space-y-2'>
              <p className='text-lg text-gray-300'>Office</p>
              <address className='text-xl not-italic leading-relaxed'>
                H: 70, Al-Hajj Mahfujul Haque Road, East Govonia,
                <br /> Mirsarai, Chittagong,
                <br /> Bangladesh.
              </address>
            </div>
          </motion.div>
        </div>
        <div className='pt-4'>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7357.5143508413275!2d91.5777874!3d22.7743911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753371400000001%3A0x5d2691dd218c9935!2sMirsarai!5e0!3m2!1sen!2sbd!4v1742798494685!5m2!1sen!2sbd'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
