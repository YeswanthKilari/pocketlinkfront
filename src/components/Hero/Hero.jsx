import React from "react";
import { BsFillCollectionFill } from "react-icons/bs";
import { FaBook, FaVideo, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 min-h-screen overflow-hidden">
      <Navbar />

      {/* Floating decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-white opacity-10 rounded-full animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="container mx-auto px-6 flex flex-col justify-center items-center text-center md:max-w-2xl py-32 relative z-20"
      >
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          All Your Learning Resources in One Place
        </h1>
        <p className="text-indigo-200 text-lg md:text-xl mb-8 drop-shadow-md">
          Stop searching. Start organizing. Keep all your favorite videos,
          posts, PDFs, and notes at your fingertips.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center gap-3 bg-amber-400 text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-amber-500 transition duration-200 ease-in-out mb-12"
        >
          <span>Start Organizing</span>
          <BsFillCollectionFill className="text-2xl group-hover:animate-bounce transition duration-200" />
        </a>

        {/* Animated icons showing resource types */}
        <div className="flex gap-8 justify-center items-center mt-4">
          {[FaBook, FaVideo, FaFilePdf].map((Icon, idx) => (
            <motion.div
              key={idx}
              className="text-white text-4xl md:text-5xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 + idx * 0.5 }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
