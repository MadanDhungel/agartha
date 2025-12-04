import React from "react";

// Colors inspired by the Agartha logo (blue + purple gradient)
// Tailwind classes use custom gradient shades

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-b from-white via-[#e9f3ff] to-white">
      <div className="max-w-6xl mx-auto text-center px-5">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2]">
          Welcome to Agartha Education Foundation
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Your Trusted Study Abroad Partner
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          At Agartha Global Education, we guide students toward international opportunities
          with expert counseling, transparent guidance, and personalized support. From choosing
          the right country and university to visa processing and pre-departure preparation,
          we ensure a seamless journey to your global academic dream.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">🎓</span>
            </div>
            <p className="mt-4 font-semibold text-gray-800">Expert Academic Counseling</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">🌍</span>
            </div>
            <p className="mt-4 font-semibold text-gray-800">Global Study Destinations</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">📄</span>
            </div>
            <p className="mt-4 font-semibold text-gray-800">Professional Documentation Support</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">🛂</span>
            </div>
            <p className="mt-4 font-semibold text-gray-800">High Visa Success Guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
