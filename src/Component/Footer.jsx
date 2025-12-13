import React from "react";
import f1 from "../assets/f-1.png";
import f2 from "../assets/f-2.png";
import f3 from "../assets/f-3.svg";
import pp1 from "../assets/pp1.jpg";
import pp2 from "../assets/pp2.jpg";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { GrMailOption } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowUpOutline } from "react-icons/io5";

const Footer = () => {
  const scrollToTop = (duration = 1500) => {
  const start = window.pageYOffset || document.documentElement.scrollTop;
  const startTime = performance.now();

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const loop = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, start * (1 - eased));

    if (progress < 1) requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};

  return (
    <>
      <div id="footer">
        <footer className="footer-section relative overflow-hidden">
          <div className="bg-[#292f32] pt-[60px] sm:pt-[70px] md:pt-[80px] lg:pt-[90px] pb-[80px] sm:pb-[90px] md:pb-[100px] lg:pb-[120px] relative">
            {/* Shape decorations - hidden on mobile */}
            <div className="shape-1 absolute bottom-0 left-[-5%] hidden lg:block">
              <img src={f1} alt="f1" className="align-middle" />
            </div>
            <div className="shape-2 absolute bottom-0 right-[-3%] hidden lg:block">
              <img src={f2} alt="f2" className="align-middle" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="row flex flex-wrap -mx-3 sm:-mx-4">
                {/* Column 1 - Company Info */}
                <div className="w-full md2:w-1/2 xl:w-1/4 px-3 sm:px-4 mb-8 md2:mb-10 xl:mb-0">
                  <div className="mt-[30px]">
                    <div className="footer-logo mb-[30px]">
                      <a href="/">
                        <img src={f3} alt="logo" className="align-middle" />
                      </a>
                    </div>
                    <div className="footer-content">
                      <p className="text-[#ffffffcc] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                        Bitcoding Solutions excels in AI/ML, web development,
                        app development and digital marketing, driving
                        innovation and digital transformation for businesses.
                      </p>
                      <div className="social-icon mt-8 sm:mt-10 gap-[15px] relative z-10 flex items-center">
                        <a
                          href="https://www.facebook.com/Bitcodings"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 hover:bg-[#1296df] hover:border-[#1296df] leading-9 flex items-center justify-center text-center text-[18px] transition-all duration-300 ease-in-out bg-transparent border border-[rgba(227,227,227,0.2)]"
                        >
                          <FaFacebookF className="text-white" />
                        </a>
                        <a
                          href="https://www.facebook.com/Bitcodings"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 hover:bg-[#1296df] hover:border-[#1296df] leading-9 flex items-center justify-center text-center text-[18px] transition-all duration-300 ease-in-out bg-transparent border border-[rgba(227,227,227,0.2)]"
                        >
                          <FaLinkedin className="text-white" />
                        </a>
                        <a
                          href="https://www.facebook.com/Bitcodings"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 hover:bg-[#1296df] hover:border-[#1296df] leading-9 flex items-center justify-center text-center text-[18px] transition-all duration-300 ease-in-out bg-transparent border border-[rgba(227,227,227,0.2)]"
                        >
                          <FaYoutube className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Quick Links */}
                <div className="w-full md2:w-1/2 xl:w-1/6 px-3 sm:px-4 mb-8 md2:mb-10 xl:mb-0">
                  <div className="mt-[30px]">
                    <div className="head mb-[25px] sm:mb-[30px]">
                      <h3 className="font-bold w-fit text-white text-[20px] sm:text-[22px] lg:text-[24px] border-b border-b-white pb-[15px] sm:pb-[20px]">
                        Quick Links
                      </h3>
                    </div>
                    <ul className="list-area text-[#ffffffcc]">
                      <li className="mb-[12px] sm:mb-[15px]">
                        <a
                          href="/ai-mi-development"
                          className="text-white text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] hover:gap-4"
                        >
                          <FaAngleRight />
                          AI/ML Development
                        </a>
                      </li>
                      <li className="mb-[12px] sm:mb-[15px]">
                        <a
                          href="/web-scraping"
                          className="text-white text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] hover:gap-4"
                        >
                          <FaAngleRight />
                          Web Scraping
                        </a>
                      </li>
                      <li className="mb-[12px] sm:mb-[15px]">
                        <a
                          href="/ai-mi-development"
                          className="text-white text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] hover:gap-4"
                        >
                          <FaAngleRight />
                          AI/ML Development
                        </a>
                      </li>
                      <li className="mb-[12px] sm:mb-[15px]">
                        <a
                          href="/python-development"
                          className="text-white text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] hover:gap-4"
                        >
                          <FaAngleRight />
                          Python Development
                        </a>
                      </li>
                      <li className="mb-[12px] sm:mb-[15px]">
                        <a
                          href="/flutter-development"
                          className="text-white text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] hover:gap-4"
                        >
                          <FaAngleRight />
                          Flutter Development
                        </a>
                      </li>
                      <li className="mb-[12px] sm:mb-[15px]">
                        <a
                          href="/react-js"
                          className="text-white text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] hover:gap-4"
                        >
                          <FaAngleRight />
                          React.JS
                        </a>
                      </li>
                      <li className="mb-[12px] sm:mb-[15px]">
                        <a
                          href="/node-js"
                          className="text-white text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] hover:gap-4"
                        >
                          <FaAngleRight />
                          Node.JS
                        </a>
                      </li>
                      <li className="mb-[12px] sm:mb-[15px]">
                        <a
                          href="/web-design"
                          className="text-white text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] hover:gap-4"
                        >
                          <FaAngleRight />
                          Web Design
                        </a>
                      </li>
                      <li className="mb-[12px] sm:mb-[15px]">
                        <a
                          href="/u-ux-design"
                          className="text-white text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] hover:gap-4"
                        >
                          <FaAngleRight />
                          UI/UX Design
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 3 - Recent Posts */}
                <div className="w-full md2:w-1/2 xl:w-1/3 px-3 sm:px-4 mb-8 md2:mb-10 xl:mb-0">
                  <div className="mt-[30px] xl:ml-[70px]">
                    <div className="head mb-[25px] sm:mb-[30px]">
                      <h3 className="font-bold w-fit text-white text-[20px] sm:text-[22px] lg:text-[24px] border-b border-b-white pb-[15px] sm:pb-[20px]">
                        Recent Posts
                      </h3>
                    </div>
                    <div className="recent-post-item flex items-start gap-4 sm:gap-5 mb-[20px] sm:mb-[25px] max-w-[344px]">
                      <div className="thumb w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] overflow-hidden flex-shrink-0">
                        <img
                          src={pp1}
                          alt="pp1"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="content">
                        <ul className="post-date mb-[8px] sm:mb-[10px]">
                          <li className="flex items-center text-white text-[13px] sm:text-[14px] gap-2">
                            <FaCalendarAlt />
                            20 Feb, 2024
                          </li>
                        </ul>
                        <h6 className="text-white">
                          <a
                            href="discover-python's-power-for-versatile-development.html"
                            className="font-bold text-[14px] sm:text-[15px] lg:text-[16px] leading-snug hover:text-[#1296df] transition-colors duration-300"
                          >
                            Discover Python's Power for Versatile
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-post-item flex items-start gap-4 sm:gap-5 mb-[20px] sm:mb-[25px] max-w-[344px]">
                      <div className="thumb w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] overflow-hidden flex-shrink-0">
                        <img
                          src={pp2}
                          alt="pp2"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="content">
                        <ul className="post-date mb-[8px] sm:mb-[10px]">
                          <li className="flex items-center text-white text-[13px] sm:text-[14px] gap-2">
                            <FaCalendarAlt />1 Dec, 2024
                          </li>
                        </ul>
                        <h6 className="text-white">
                          <a
                            href="discover-python's-power-for-versatile-development.html"
                            className="font-bold text-[14px] sm:text-[15px] lg:text-[16px] leading-snug hover:text-[#1296df] transition-colors duration-300"
                          >
                            The Impact of Augmented & Virtual
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 4 - Contact Us */}
                <div className="w-full md2:w-1/2 xl:w-1/4 px-3 sm:px-4">
                  <div className="mt-[30px]">
                    <div className="head mb-[25px] sm:mb-[30px]">
                      <h3 className="font-bold w-fit text-white text-[20px] sm:text-[22px] lg:text-[24px] border-b border-b-white pb-[15px] sm:pb-[20px]">
                        Contact Us
                      </h3>
                    </div>
                    <div className="footer-content">
                      <ul className="mt-5">
                        <li className="mb-4 sm:mb-5 text-white flex items-start">
                          <FaLocationDot className="text-[18px] sm:text-[20px] mr-3 mt-1 flex-shrink-0" />
                          <a
                            href="https://maps.app.goo.gl/8w6zmYavWyrYnciW7"
                            className="text-[14px] sm:text-[15px] lg:text-[16px] leading-snug hover:text-[#1296df] transition-colors duration-300"
                          >
                            401, Vishvambhar Arcade, Nr. Yamuna chowk, Mota
                            Varachha, Surat - 394101
                          </a>
                        </li>
                        <li className="mb-4 sm:mb-5 text-white flex items-start">
                          <PiPhoneCallFill className="text-[18px] sm:text-[20px] mr-3 flex-shrink-0" />
                          <a
                            href="tel:9099078077"
                            className="text-[14px] sm:text-[15px] lg:text-[16px] leading-snug hover:text-[#1296df] transition-colors duration-300"
                          >
                            +91 9099078077
                          </a>
                        </li>
                        <li className="mb-5 sm:mb-6 text-white flex items-start">
                          <GrMailOption className="text-[18px] sm:text-[20px] mr-3 flex-shrink-0" />
                          <a
                            href="mailto:info@bitcodingsolutions.com"
                            className="text-[14px] sm:text-[15px] lg:text-[16px] leading-snug hover:text-[#1296df] transition-colors duration-300 break-all"
                          >
                            info@bitcodingsolutions.com
                          </a>
                        </li>
                      </ul>
                      <a
                        href="/contact"
                        className="group relative bg-[#1296df] w-full sm:w-[204px] text-white hover:bg-white hover:text-[#1296df] flex items-center justify-center gap-3 text-[14px] sm:text-[15px] lg:text-[16px] font-semibold py-4 sm:py-5 px-6 sm:px-8 lg:px-10 rounded-[5px] overflow-hidden transition-all duration-300 ease-in-out"
                      >
                        <span className="relative flex items-center gap-3">
                          Get A Quote
                          <FaArrowRightLong className="transition-transform duration-300 ease-in group-hover:translate-x-2" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom relative z-[9] py-5 bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)]">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:mt-2">
                <p className="text-white text-[14px] sm:text-[16px] leading-7 text-center lg:text-left">
                  © All Copyright 2024 by <a href="/">Bitcoding Solutions</a>
                </p>
                <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
                  <li>
                    <a
                      href="/term-conditions"
                      className="inline-block text-white text-[14px] sm:text-[16px] bg-[linear-gradient(#ffffff,#ffffff)] bg-[0_95%] bg-no-repeat bg-[length:0%_2px] transition-all duration-300 ease-in-out hover:bg-[length:100%_2px]"
                    >
                      Terms &amp; Condition
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="inline-block text-white text-[14px] sm:text-[16px] bg-[linear-gradient(#ffffff,#ffffff)] bg-[0_95%] bg-no-repeat bg-[length:0%_2px] transition-all duration-300 ease-in-out hover:bg-[length:100%_2px]"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              onClick={() => scrollToTop(1500)}
              className="absolute left-1/2 -translate-x-1/2 -top-10 flex items-center justify-center w-[70px] h-[70px] bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] rounded-full text-white border-[5px] border-white z-50 hover:scale-105 transition-transform duration-300"
            >
              <IoArrowUpOutline className="text-[28px]" />
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
