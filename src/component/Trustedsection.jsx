import React from "react";
import heroImg from "../assets/background.jpeg"; // your hero background image

const Trustedsection = () => {
  return (
    <section id="trusted" className="relative w-full h-[90vh] flex items-center justify-center py-6">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

      {/* Left Vertical Button (Gradient Styled) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <button className="rotate-90 bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
          Apply Now
        </button>
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-white text-3xl md:text-5xl font-light leading-snug tracking-wide">
          Empowering Students With
          <span className="ml-2 font-bold bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] text-transparent bg-clip-text">
            Global Opportunities
          </span>
        </h1>

        <p className="text-white text-lg md:text-xl mt-4 leading-relaxed">
          Your journey to international education starts here. 
          Expert guidance, transparent process, and personalized support.
        </p>

        <button className="mt-6 px-10 py-3 rounded-md text-white font-semibold shadow-lg transition 
                           bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] hover:opacity-90">
          Explore Programs
        </button>
      </div>

    </section>
  );
};

export default Trustedsection;
