import React from "react";
import bg from "../assets/servicebg-2.jpg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const RequestText = ({
  MainTitel,
  Subtitle,
  Subtitle2,
  FirstParagraph,
  SecondParagraph,
}) => {
  return (
    <>
      <section
        className="py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] bg-no-repeat bg-cover relative bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container px-4 sm:px-6 md:px-8 mx-auto w-full">
          <div className="about-wrapper">
            <div className="row -mx-4 flex flex-wrap justify-center">
              <div className="text-center m-0 px-4 sm:px-6 md:px-8 w-full">
                <div className="about-content">
                  <div className="section-title relative z-50 mb-[20px] sm:mb-[25px] md:mb-[30px] -mt-[7px]">
                    <span className="text-[#1296df] mb-[8px] sm:mb-[10px] inline-block font-medium uppercase text-[12px] sm:text-[13px] md:text-[14px]">
                      {MainTitel}
                    </span>
                    <h2 className="text-[24px] sm:text-[28px] sm1:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px] leading-[125%] font-bold">
                      {Subtitle}{" "}
                      <span className="text-[#1296df] font-bold capitalize">
                        {Subtitle2}
                      </span>{" "}
                    </h2>
                  </div>
                  <p className="text-[13px] sm:text-[14px] md:text-[16px] text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[1.8] w-full">
                    {FirstParagraph}
                  </p>
                  <br />
                  <p className="text-[13px] sm:text-[14px] md:text-[16px] text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[1.8] w-full">
                    {SecondParagraph}
                  </p>
                  <div className="flex items-center gap-[20px] sm:gap-[25px] md:gap-[30px] mt-[30px] sm:mt-[40px] md:mt-[50px] justify-center">
                    <div className="w-full sm:w-auto">
                      <Link
                        to="/about"
                        className="group relative text-white flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold py-3 sm:py-4 md:py-5 lg:py-6 px-5 sm:px-6 md:px-8 lg:px-10 rounded-[5px] overflow-hidden w-full sm:w-auto
                                                  bg-[linear-gradient(172deg,#1296DF_6.23%,#1F5B7C_131.99%,#22506A_146.31%,#292F32_165.42%)]
                                                  transition-all duration-300 ease-in-out"
                      >
                        <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                        <span className="relative flex items-center gap-2 sm:gap-3 md:gap-4">
                          <span className="whitespace-normal sm:whitespace-nowrap text-center">
                            Request For Free Consultancy
                          </span>
                          <FaArrowRightLong className="transition-transform duration-300 ease-in group-hover:translate-x-2 flex-shrink-0" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestText;
