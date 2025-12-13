import React, { useEffect, useRef, useState } from "react";
import icon1 from "../assets/icon-1.png";
import text from "../assets/circle-text.png";
import { FaPlay } from "react-icons/fa";
import bgImage from "../assets/about-01.jpg";
import about02 from "../assets/about-02.jpg";
import icon2 from "../assets/icon-2.svg";
import icon3 from "../assets/icon-3.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import author from "../assets/author.png";

const AboutSection = () => {
   const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 3000;
    const start = 0;
    const end = 6561;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  };

    return (
      <div className="about-section py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="about-wrapper">
            <div className="row flex flex-col lg:flex-row -mx-0 lg:-mx-3 gap-8 lg:gap-6 xl:gap-0">
              <div className="col-1 flex justify-center lg:justify-start w-full lg:w-[45%] xl:w-[50%] px-0 lg:px-3">
                <div className="about-img relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[380px] xl:h-[445px] w-full max-w-[385px] lg:max-w-[340px] xl:max-w-none">
                  {/* Counter */}
                  <div
                    ref={counterRef}
                    className="counter-shape animate-float-bob-y flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 bg-white shadow-lg absolute bottom-4 sm:bottom-6 md:bottom-[30px] left-2 sm:left-4 md:left-[-20px] lg:left-[-30px] xl:left-[-50px] z-10 border rounded-lg"
                  >
                    <div className="icon">
                      <img
                        src={icon1 }
                        alt="icon"
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-600 sm:text-xl md:text-2xl lg:text-[28px] font-bold">
                        <span className="transition-all duration-300 ease-in-out">
                          {count.toLocaleString()}
                        </span>
                        +
                      </h3>
                    </div>
                  </div>
                  {/* Video btn */}
                  <div className="video-box absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <a
                      href="https://www.youtube.com/watch?v=blwdbOQWKwk"
                      className="video-buttton video-popup w-[100px] h-[100px] leading-[100px] sm:w-[120px] sm:h-[120px] sm:leading-[120px] md:w-[142px] md:h-[142px] md:leading-[142px] text-center rounded-[50%] bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] inline-block z-10 text-[20px] sm:text-[22px] md:text-[24px] text-white relative"
                    >
                      <FaPlay className="text-white absolute left-[43%] top-[43%] text-[18px] sm:text-[20px] md:text-[22px]" />
                      <img
                        src={text}
                        alt="text-img"
                        className="text-circle absolute top-[7%] left-[7%] animate-cir36 w-[86px] sm:w-[100px] md:w-[120px]"
                      />
                    </a>
                  </div>
                  {/* about img 1 */}
                  <div
                    className="about-img-01 w-full h-full lg:w-[340px] lg:h-[380px] xl:w-[385px] xl:h-[445px] relative rounded-[8px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  >
                    <div className="about-img-02 sm:hidden md2:block absolute bottom-[-8%] right-[-15%] sm:bottom-[-10%] sm:right-[-20%] md:bottom-[-12%] md:right-[-25%] lg:bottom-[-10%] lg:right-[-28%] xl:bottom-[-13%] xl:right-[-35%] w-[140px] sm:w-[180px] md:w-[220px] lg:w-[200px] xl:w-auto after:content-[''] after:w-[370px] after:h-[400px] after:absolute after:right-[80px] after:top-[-55%] after:border-[3px] after:border-[#1296df] after:z-[-1] after:hidden lg1:after:block">
                      <img src={about02} alt="" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 px-0 lg:px-3 w-full lg:w-[55%] xl:w-[50%]">
                <div className="about-contant">
                  <div className="section-title relative z-[99] mb-6 sm:mb-7 md:mb-[30px] -mt-0 lg:-mt-2">
                    <span className="text-[#1296df] mb-2 sm:mb-[10px] inline-block font-medium uppercase text-sm sm:text-base">
                      Digital Innovation
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] font-bold leading-[125%]">
                      Web Development and <br className="hidden sm:block" />
                      <span className="text-[#1296df] font-bold mb-0 capitalize">
                        AI/ML Services Company
                      </span>
                    </h2>
                  </div>
                  <p className="text-gray-600 w-full max-w-full lg:max-w-[550px] xl:max-w-[633px] text-sm sm:text-base">
                    BitCoding Solutions is your premier partner for cutting-edge
                    digital solutions, providing exceptional services for all
                    businesses.
                  </p>
                  <p className="text-gray-600 mt-4 sm:mt-6 md:mt-9 w-full max-w-full lg:max-w-[550px] xl:max-w-[633px] text-sm sm:text-base">
                    BitCoding Solutions, based in Surat, has been a leader in
                    Web Development, AI/ML and IT services since 2018. We
                    partner with industry giants and consistently exceed our
                    client's expectations.
                  </p>
                  <div className="about-icons-item border-b block lg:flex items-center mt-8 sm:mt-10 md:mt-[50px] gap-4 lg:gap-[20px] xl:gap-[30px] justify-center border-b-[#e3e3e3] pb-6 sm:pb-8 md:pb-10 space-y-6 lg:space-y-0">
                    <div className="flex items-center gap-3 sm:gap-[20px]">
                      <div className="icon p-2 sm:p-3 flex items-center justify-center w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] leading-[60px] sm:leading-[70px] md:leading-[72px] text-center rounded-[50%] bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] text-white flex-shrink-0">
                        <img
                          src={icon2}
                          alt=""
                          className="w-6 sm:w-8 md:w-10"
                        />
                      </div>
                      <div className="contant">
                        <h4 className="text-base sm:text-lg md:text-[20px] font-semibold leading-[130%]">
                          Problem Solving
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Expert solutions for complex challenges.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-[20px]">
                      <div className="icon p-2 sm:p-3 flex items-center justify-center w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] leading-[60px] sm:leading-[70px] md:leading-[72px] text-center rounded-[50%] bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] text-white flex-shrink-0">
                        <img
                          src={icon3}
                          alt=""
                          className="w-6 sm:w-8 md:w-10"
                        />
                      </div>
                      <div className="contant">
                        <h4 className="text-base sm:text-lg md:text-[20px] font-semibold leading-[130%]">
                          Mission & Vision
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Innovate, solve, lead and succeed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-author block lg:flex items-center gap-4 sm:gap-6 md:gap-[30px] mt-8 sm:mt-10 md:mt-[50px] space-y-4 lg:space-y-0">
                    <a
                      href="/about"
                      className="group relative text-white flex items-center justify-center gap-3 md:gap-4 text-sm sm:text-[15px] md:text-[16px] font-semibold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-10 rounded-[5px] overflow-hidden w-full sm:w-auto
                                    bg-[linear-gradient(172deg,#1296DF_6.23%,#1F5B7C_131.99%,#22506A_146.31%,#292F32_165.42%)]
                                    transition-all duration-300 ease-in-out"
                    >
                      <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                      <span className="relative flex items-center gap-3 md:gap-4">
                        Explore More
                        <FaArrowRightLong className="transition-transform duration-300 ease-in group-hover:translate-x-2" />
                      </span>
                    </a>
                    <div className="author-img flex items-center gap-3 sm:gap-[15px]">
                      <img
                        src={author}
                        alt=""
                        className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px]"
                      />
                      <div className="content">
                        <h6 className="text-sm sm:text-[16px] font-semibold leading-[145%]">
                          Tushar Kachhadiya
                        </h6>
                        <p className="text-xs sm:text-[14px] text-[#585858] font-medium -mt-[2px]">
                          Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default AboutSection;
