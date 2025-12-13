import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import lineshape from "../assets/line-shape.png";
import maskshape from "../assets/mask-shape.png";
import hero from "../assets/hero.png";
import icon from "../assets/icon.svg";
import heroBg from "../assets/hero-bg.jpg";

const Home = () => {
  return (
    <section
      className="relative z-10 pt-12 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        minHeight: "100vh",
      }}
    >
      {/* Line Shape */}
      <div className="absolute top-0 left-0">
        <img
          src={lineshape}
          alt=""
          className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[330px]"
        />
      </div>

      {/* Mask Shape */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 z-10 max-w-[700px]">
        <img src={maskshape} alt="" className="h-full w-full" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between -mx-3 mt-6 sm:mt-8 md:mt-10">
          {/* Hero Content */}
          <div className="hero-contant pt-14 relative z-10 w-full lg:w-2/3 px-3 mb-6 sm:mb-8 md:mb-10 lg:mb-0">
            <h6 className="flex items-center gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] uppercase text-[#1296df] font-extrabold mb-3 sm:mb-4">
              <img src={icon} alt="" />
              Best IT Solution Provider
            </h6>

            <h1 className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-[28px] sm:text-[32px] md:text-[42px] lg:text-[62px] xl:text-[70px] 2xl:text-[76px] font-bold text-[#292f32] leading-[112%]">
              AI-Driven Web Development & Code
            </h1>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium text-gray-700 mb-6 sm:mb-8">
              Precision Coding: From Bit to Brilliant Solutions.
              <br className="hidden sm:block" />
              Expertise in Web, AI/ML, Python, Flutter, and Mobile Development.
            </p>

            {/* Hero Buttons */}
            <div className="hero-btn flex flex-col md1:flex-row items-center gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12">
              {/* Explore More Button */}
              <a
                href="/about"
                className="group relative text-white flex items-center justify-center gap-3 md:gap-4 text-[14px] md:text-[16px] font-semibold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-10 rounded-[5px] overflow-hidden w-full sm:w-auto
                  bg-[linear-gradient(172deg,#1296DF_6.23%,#1F5B7C_131.99%,#22506A_146.31%,#292F32_165.42%)]
                  transition-all duration-300 ease-in-out"
              >
                <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative flex items-center gap-3 md:gap-4">
                  Explore More
                  <FaArrowRightLong className="transition-transform duration-300 ease-in group-hover:translate-x-2" />
                </span>
              </a>

              {/* Watch Video Button */}
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6 w-full sm:w-auto justify-center sm:justify-start">
                <a
                  href="https://www.youtube.com/watch?v=blwdbOQWKwk"
                  className="play-btn flex items-center justify-center w-[45px] h-[45px] sm:w-[48px] sm:h-[48px] md:w-[50px] md:h-[50px] text-[14px] md:text-[16px] rounded-full relative bg-[linear-gradient(172deg,#1296DF_6.23%,#1F5B7C_131.99%,#22506A_146.31%,#292F32_165.42%)]
                    transition-all duration-300 ease-in-out"
                >
                  <FaPlay className="text-white" />
                </a>
                <span className="text-[14px] md:text-[16px] text-[#292f32] font-bold">
                  Watch IT Video
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-[414px] z-10">
            <img
              src={hero}
              alt=""
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
