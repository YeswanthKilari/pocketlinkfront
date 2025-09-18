import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6"> {/* Dark background, reduced padding */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 border-b border-gray-700 pb-12"> {/* Added a border, more columns */}
          {/* Branding Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-3xl font-bold text-navy-blue">Pocketlink</h1> {/* Accent color */}
            <p className="text-gray-400 text-lg">
              Your go-to platform for saving and organizing links effortlessly.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Resources</h1>
            <ul className="space-y-3 text-lg text-gray-400">
              <li className="cursor-pointer hover:text-navy-blue duration-200">
                Blog
              </li>
              <li className="cursor-pointer hover:text-navy-blue duration-200">
                FAQs
              </li>
              <li className="cursor-pointer hover:text-navy-blue duration-200">
                Support
              </li>
              <li className="cursor-pointer hover:text-navy-blue duration-200">
                Privacy Policy
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Quick Links</h1>
            <ul className="space-y-3 text-lg text-gray-400">
              <li className="cursor-pointer hover:text-navy-blue duration-200">
                Home
              </li>
              <li className="cursor-pointer hover:text-navy-blue duration-200">
                Dashboard
              </li>
              <li className="cursor-pointer hover:text-navy-blue duration-200">
                About Us
              </li>
              <li className="cursor-pointer hover:text-navy-blue duration-200">
                Contact Us
              </li>
            </ul>
          </div>


          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Stay Updated</h1>
            <p className="text-gray-400 text-lg">
              Sign up to get the latest updates on new features and resources.
            </p>
            <div className="flex items-center mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-l-lg bg-gray-800 text-white w-full focus:ring-2 focus:ring-navy-blue focus:outline-none placeholder-gray-500 border border-gray-700"
              />
              <button className="bg-navy-blue text-white font-semibold py-3 px-6 rounded-r-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-90 shadow-md">
                Go
              </button>
            </div>

            <div className="flex space-x-6 py-3 text-3xl"> {/* Increased icon size */}
              <a href="https://github.com/YeswanthKilari" aria-label="Github" className="text-gray-400 hover:text-navy-blue duration-200">
                <FaGithub />
              </a>
              <a href="mailto:yeswanthkilari64@gmail.com" aria-label="Email" className="text-gray-400 hover:text-navy-blue duration-200">
                <MdEmail />
              </a>
              <a href="https://www.linkedin.com/in/yeswanthkilari/" aria-label="Linkedin" className="text-gray-400 hover:text-navy-blue duration-200">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Pocketlink. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;