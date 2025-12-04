import React from 'react';
import {
  FaFacebookF,  FaInstagram,  FaLinkedinIn,  FaWhatsapp, FaTiktok, FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import logo from '../assets/logo.png'
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] text-white py-12 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo + Description */}
        <div>
          <img
    src={logo}
    alt="Homebizz Logo"
    className="h-20 w-auto bg-white p-2 rounded-xl"
  />
          <p className="mt-4 text-sm leading-relaxed text-white">
            Delivering expert solutions right to your home — quick, dependable, and trusted by countless families.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#">Study Abroad Guidance</a></li>
            <li><a href="#">Visa & Immigration Assistance</a></li>
            <li><a href="#">International Career Consulting</a></li>
          
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>Guidance</li>
            <li>Financial Support</li>
            <li>Carrer consulting</li>
           
          
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-white">
            
             <div className="flex items-center gap-2">
                     <IoLocationSharp className="text-lime-600 text-xl font-bold" />
                       <span>Baneshwor, Near Bicc hall</span>
                     </div>

            <div className="flex items-center gap-2">
                        <FaPhone className="text-lime-600 text-xl" />
                        <span>+977 9861705553, +977 9761140183</span>
                      </div>
            <div className="flex items-center gap-2">
                       <FaEnvelope className="text-lime-600 text-xl" />
                       <span>agartha.edu@gmail.com</span>
                     </div>
             
           
          
          </ul>
        </div>


       
        {/* Social + Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
          <div className="flex space-x-3 mb-5 text-white text-xl">
            
           <a href="https://www.facebook.com/people/Agartha-Education-Foundation/61584044075603/?share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DMPATFmCG%2F" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
    <FaTiktok />
  </a>
  <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />
  </a>
          
          </div>

          <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your mail"
              className="px-3 py-2 text-sm text-black rounded-l-md w-full"
            />
            <button
              type="submit"
              className="bg-lime-600 hover:bg-lime-700 px-4 py-2 text-sm font-semibold rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-10 pt-6 text-sm text-white flex flex-col lg:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Agartha. All rights reserved.</p>
        <div className="space-x-4 mt-4 lg:mt-0">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
