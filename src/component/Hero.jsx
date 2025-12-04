import React from "react";
import { motion } from "framer-motion";
import sydney from "../assets/sydney.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[90vh] w-full overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={sydney}
        alt="Sydney City Night"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-2 md:px-4 lg:p-7 text-white max-w-2xl">

        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 md:mt-20 lg:mt-28 text-3xl md:text-5xl font-extrabold leading-tight"
        >
          Achieve Your Dream of  
          <span className="text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2]">
            {" "}Studying Abroad
          </span>
        </motion.h1>

        <motion.p
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="mt-4 text-lg md:text-xl font-light"
        >
          Agartha Education Foundation helps you study in top countries like Australia, UK, USA, and Canada.
          We provide expert guidance for applications, visa processing, and scholarships.

        </motion.p>

        <motion.button
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-8 px-8 py-3 border border-white/70 text-white rounded-lg 
                     hover:bg-white/10 transition font-medium shadow-xl">
          Start Your Journey
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
