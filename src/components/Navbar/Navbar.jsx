import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Dashboard", path: "/dashboard" },
  { id: 3, title: "About Us", path: "#" },
  { id: 4, title: "Contact Us", path: "/footer" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileOpen(false);
  };

  return (
    <nav className="relative w-full z-50 shadow-md bg-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto py-4 px-6 flex justify-between items-center"
      >
        {/* Logo */}
        <h1
          className="font-bold text-2xl ml-4 md:ml-20 cursor-pointer"
          onClick={() => navigate("/")}
        >
          PocketLink
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {NavbarMenu.map((menu) => (
            <li
              key={menu.id}
              className="relative group py-2 px-1 transition-all duration-300 border border-transparent hover:border-black rounded-md"
            >
              <button
                onClick={() => handleNavigate(menu.path)}
                className="py-2 px-3 transition-all duration-300 hover:text-violet-600"
              >
                {menu.title}
              </button>
            </li>
          ))}
          <button
            className="bg-violet-500 rounded-lg px-4 py-2 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => handleNavigate("/signin")}
          >
            Sign In
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <IoMdClose className="text-4xl" />
            ) : (
              <IoMdMenu className="text-4xl" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.ul
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            style={{ transformOrigin: "top" }}
            className="lg:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4 overflow-hidden"
          >
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="w-full">
                <button
                  onClick={() => handleNavigate(menu.path)}
                  className="w-full text-center py-2 px-4 rounded-md hover:bg-gray-100 hover:text-violet-600 transition"
                >
                  {menu.title}
                </button>
              </li>
            ))}
            <button
              onClick={() => handleNavigate("/signin")}
              className="bg-violet-500 rounded-lg px-4 py-2 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Sign In
            </button>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
