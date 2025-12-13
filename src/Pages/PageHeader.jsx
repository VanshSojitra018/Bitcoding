import React from "react";
import pageheader from "../assets/pageheader.jpg";
import pageheader1 from "../assets/pageheader1.png";
import pageheader2 from "../assets/pageheader2.png";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div
      className="
        relative bg-no-repeat bg-cover bg-center py-[50px]
        before:content-[''] before:absolute before:inset-0
        before:opacity-75
        before:bg-[linear-gradient(270.07deg,rgba(18,150,223,0.7)_-50%,#292f32_99.95%)]
      "
      style={{ backgroundImage: `url(${pageheader})` }}
    >
      {/* LEFT DECOR SHAPE */}
      <div className="border-shape absolute top-[20px] left-0 w-[250px] overflow-hidden">
        <img
          src={pageheader1}
          alt="pageheader1"
          className="z-10 relative w-full h-auto object-contain"
        />
      </div>

      {/* RIGHT DECOR SHAPE */}
      <div className="line-shape absolute top-0 bottom-0 right-0">
        <img src={pageheader2} alt="pageheader2" className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="page-heading relative py-[50px] text-left z-10">
          <h1 className="text-white text-[65px] relative z-10 mb-[15px] font-bold">
            {title}
          </h1>

          <ul className="pt-5 flex items-center gap-2">
            <li className="text-white font-semibold capitalize">
              <Link
                to="/"
                className="text-[16px] transition-all duration-300 ease-in-out hover:text-[#1296df]"
              >
                Home
              </Link>
            </li>
            <li className="text-white">
              <FaChevronRight />
            </li>
            <li className="text-white text-[16px] relative z-10 font-semibold">
              {subtitle}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
