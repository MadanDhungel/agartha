import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    question: "1. What services do you provide for studying abroad?",
    answer:
      "We offer complete guidance including counseling, university selection, documentation, application processing, visa assistance, and pre-departure support.",
  },
  {
    question: "2. Am I eligible to study abroad?",
    answer:
      "Eligibility depends on your academic background, English proficiency, financial readiness, and the country or program you choose.",
  },
  {
    question: "3. Which countries can I apply to through your consultancy?",
    answer:
      "We assist with applications to the USA, UK, Australia, Canada, Japan, South Korea, and many European countries.",
  },
  {
    question: "4. How long does the application and visa process take?",
    answer:
      "Processing time varies by country, but generally ranges from a few weeks to several months. We ensure timely submission to avoid delays.",
  },
  {
    question: "5. What documents are required to apply?",
    answer:
      "Common documents include academic transcripts, passport, English test scores, SOP, recommendation letters, financial proof, and a completed application form.",
  },
  {
    question: "6. Do you help with scholarship applications?",
    answer:
      "Yes, we guide students in finding and applying for scholarships based on merit, financial need, and university-specific criteria.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const QA = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-20 bg-gradient-to-br from-white via-sky-50 to-white min-h-screen mt-5" id="faq">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] mb-12">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              ref={ref}
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              onClick={() => toggleFAQ(index)}
              className={`transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl cursor-pointer bg-white border border-gray-200 rounded-xl p-6 shadow-md ${
                openIndex === index ? "shadow-sky-300" : ""
              }`}
            >
              <motion.h3 variants={childVariants} className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2]">
                {faq.question}
              </motion.h3>
              <div
                className={`mt-3 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QA;
