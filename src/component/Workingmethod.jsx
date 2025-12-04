// src/components/Workingmethod.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Study Abroad Icons
import counselingImg from "../assets/counseling.png";
import universityImg from "../assets/university.png";
import documentationImg from "../assets/document.png";
import visaImg from "../assets/visa.png";
import departureImg from "../assets/departure.png";

const steps = [
  {
    title: "Free Counseling",
    description: "Speak with expert advisors to choose the right country and course.",
    image: counselingImg,
  },
  {
    title: "University Shortlisting",
    description: "We help you select the best-fit universities for your goals.",
    image: universityImg,
  },
  {
    title: "Documentation Support",
    description: "SOP, LOR, applications — we prepare everything professionally.",
    image: documentationImg,
  },
  {
    title: "Visa Guidance",
    description: "End-to-end visa preparation, mock interviews, and submission.",
    image: visaImg,
  },
  {
    title: "Pre-Departure Support",
    description: "Guidance for travel, accommodation, and settling abroad.",
    image: departureImg,
  },
];

// Animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

const Workingmethod = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="working-method" className="w-full py-10 bg-gradient-to-b from-white via-[#f3f7ff] to-white">
      <div className="px-6 max-w-[1500px] mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] text-center mb-14">
          Our Study Abroad Process
        </h2>

        {/* Steps */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl
                         transition-all duration-500 hover:-translate-y-2 border border-[#e4e9ff]"
            >
              <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center rounded-full 
                              bg-gradient-to-br from-[#2ea4ff]/10 to-[#7b3ff2]/10 shadow-inner">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#2f327d]">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workingmethod;
