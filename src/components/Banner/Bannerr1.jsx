import React from "react";
import { BsFillCollectionFill } from "react-icons/bs";
import { motion } from "framer-motion";
const Bannerr1 = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 py-24 md:py-48">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="container mx-auto px-6 flex flex-col justify-center items-center text-center max-w-lg"
      >
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Ever lost a useful link? Never again
        </h1>
        <p className="text-indigo-200 text-lg mb-8 drop-shadow-md">
          Stop searching. Start organizing. Keep all your favorite resources at
          your fingertips.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 bg-amber-400 text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-amber-500 transition duration-200 ease-in-out"
        >
          <span>Build Your Collection</span>
          <BsFillCollectionFill className="text-2xl group-hover:animate-bounce transition duration-200" />
        </a>
      </motion.div>
    </section>
  );
};
export default Bannerr1;
