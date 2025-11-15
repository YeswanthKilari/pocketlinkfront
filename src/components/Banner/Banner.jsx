import React from "react";
import { RiCalendarTodoFill } from "react-icons/ri";
import { BsFillFastForwardFill } from "react-icons/bs";
import { FaPhotoVideo, FaShareAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center text-center md:text-left space-y-12">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug text-gray-900">
            Organize and Access Your Resources with Ease!
          </h1>
          <div className="flex flex-col gap-6 max-w-md mx-auto md:mx-0">
            {[
              {
                icon: <FaPhotoVideo className="text-3xl text-indigo-600" />,
                text: "Save Anything (Links, PDFs, Videos)",
              },
              {
                icon: (
                  <RiCalendarTodoFill className="text-3xl text-indigo-600" />
                ),
                text: "Organized in One Place (Custom Categories)",
              },
              {
                icon: (
                  <BsFillFastForwardFill className="text-3xl text-indigo-600" />
                ),
                text: "Easy Search & Quick Access",
              },
              {
                icon: <FaShareAlt className="text-3xl text-indigo-600" />,
                text: "Shareable Pages (Help others learn easily)",
              },
            ].map(({ icon, text }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 bg-indigo-50 rounded-2xl hover:bg-indigo-100 transition-shadow duration-300 shadow-sm hover:shadow-md"
              >
                {icon}
                <p className="text-lg text-gray-800">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 bg-indigo-100 rounded-xl shadow-lg flex items-center justify-center text-indigo-400 text-6xl font-bold select-none">
           
            📚
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
