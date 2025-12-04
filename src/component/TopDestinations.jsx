import React from "react";
import { motion } from "framer-motion";
import sydney from '../assets/sydney.png';
import UK from '../assets/UK.png';
import USA from '../assets/USA.png';
import canada from '../assets/canada.jpeg';

const destinations = [
  {
    country: "Australia",
    img: sydney,
    desc: "World-class education, high visa approval, and flexible post-study work options.",
  },
  {
    country: "United Kingdom",
    img: UK,
    desc: "Globally recognized degrees with 2-year post-study work opportunities.",
  },
  {
    country: "USA",
    img: USA,
    desc: "Innovative learning, endless opportunities, and diverse academic programs.",
  },
  {
    country: "Canada",
    img: canada,
    desc: "Top universities, safe environment, and excellent PR pathways.",
  },
];

const TopDestinations = () => {
  return (
    <section id="destinations" className="w-full py-6 bg-gradient-to-b from-white via-[#f3f7ff] to-white">
      <div className="max-w-8xl mx-auto text-center px-5">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2]"
        >
          Top Study Destinations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Explore the most popular and student-friendly countries trusted by thousands of international learners worldwide.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-4 mt-14 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {destinations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-64 rounded-2xl overflow-hidden border border-[#e4e9ff] shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-all duration-500"
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Country Title */}
              <h3 className="absolute top-4 left-4 text-xl font-semibold text-white drop-shadow-lg">
                {item.country}
              </h3>

              {/* Description Reveal (Bottom → Up) */}
              <div className="absolute bottom-0 w-full overflow-hidden h-20 pointer-events-none">
                <p
                  className="
                    text-white text-sm leading-relaxed px-4 pb-4 
                    translate-y-20 opacity-0
                    group-hover:translate-y-0 group-hover:opacity-100
                    transition-all duration-500
                  "
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
