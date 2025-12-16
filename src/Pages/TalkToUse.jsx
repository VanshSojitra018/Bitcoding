import React from "react";
import arrowshape from "../assets/arrow-shape.png";
import Man from "../assets/contact.png";
import cricleshape from "../assets/circle-shape.png";
import circle from "../assets/circle.png";
import frame from "../assets/frame.png";
import { Link } from "react-router-dom";

const TalkToUse = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes up-down {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-spin {
            animation: spin 10s linear infinite;
          }
          .animate-up-down {
            animation: up-down 3s ease-in-out infinite;
          }
        `}
      </style>
      <section className="pt-12 sm:pt-16 md1:pt-20 lg1:pt-[190px] pb-12 sm:pb-16 md1:pb-20 lg1:pb-24 bg-white px-3 sm:px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="relative z-10 overflow-hidden w-full h-full rounded-lg border bg-[linear-gradient(172deg,#1296DF_6.23%,#1F5B7C_131.99%,#22506A_146.31%,#292F32_165.42%)] mt-0 lg1:mt-[-140px] p-4 sm:p-5 md1:p-6">
            {/* Arrow shape - visible on all screens */}
            <div className="arrow-shape absolute bottom-0 right-0 w-16 sm:w-20 md1:w-24 lg1:w-auto opacity-50 lg1:opacity-100">
              <img src={arrowshape} alt="" />
            </div>
            
            <div className="flex flex-col lg1:flex-row">
              {/* Image Column - Hidden below 991px */}
              <div className="hidden lg1:flex lg1:flex-auto lg1:w-1/2 relative">
                <div className="contact-img h-[725px] -mb-6 absolute bottom-0 left-0">
                  <img
                    src={Man}
                    alt="Man"
                    className="w-full h-full object-cover object-bottom"
                  />
                  <div className="absolute top-[24%] left-[26px] -z-10 animate-spin">
                    <img
                      src={cricleshape}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="small-circle-shape absolute top-[25%] left-[60%] animate-spin">
                    <img
                      src={circle}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute left-[-47px] bottom-[-14px] animate-up-down">
                    <img
                      src={frame}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="w-full lg1:w-1/2 lg1:flex-auto">
                <div className="contact-content py-6 sm:py-8 md1:py-10 lg1:mt-[60px] lg1:ml-[50px] lg1:pb-[80px] lg1:pr-[60px]">
                  <div className="section-title relative z-50 mb-6 sm:mb-7 md1:mb-8 lg1:mb-[30px] lg1:-mt-5">
                    <span className="mb-2 sm:mb-[10px] inline-block font-medium text-white text-xs sm:text-sm md1:text-base">
                      TALK TO US
                    </span>
                    <h2 className="text-white text-2xl sm:text-3xl md1:text-[32px] lg1:text-[40px] leading-[125%] font-bold">
                      How May We Help You!
                    </h2>
                  </div>
                  <form id="talk-to-us" method="POST" className="form-item">
                    <div className="row -mx-2 sm:-mx-3 md1:-mx-4 -mt-4 sm:-mt-5 md1:-mt-6 flex flex-wrap">
                      <div className="box1 flex flex-wrap w-full md2:w-1/2 px-2 sm:px-3 md1:px-4 mt-4 sm:mt-5 md1:mt-6">
                        <div className="form-clt w-full">
                          <span className="text-white mb-3 sm:mb-4 lg1:mb-5 inline-block font-normal leading-7 text-xs sm:text-sm md1:text-base">
                            Your name*
                          </span>
                          <input
                            id="name"
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full outline-none bg-transparent border border-white text-white rounded-[4px] p-3 sm:p-[13px] md1:p-[15px] text-sm sm:text-base"
                          />
                        </div>
                      </div>
                      <div className="box2 flex flex-wrap w-full md2:w-1/2 px-2 sm:px-3 md1:px-4 mt-4 sm:mt-5 md1:mt-6">
                        <div className="form-clt w-full">
                          <span className="text-white mb-3 sm:mb-4 lg1:mb-5 inline-block font-normal leading-7 text-xs sm:text-sm md1:text-base">
                            Your Email*
                          </span>
                          <input
                            id="email"
                            type="email"
                            placeholder="info@bitcodingsolutions.com"
                            className="w-full outline-none bg-transparent border border-white text-white rounded-[4px] p-3 sm:p-[13px] md1:p-[15px] text-sm sm:text-base"
                          />
                        </div>
                      </div>
                      <div className="box3 w-full px-2 sm:px-3 md1:px-4 mt-4 sm:mt-5 md1:mt-6">
                        <div className="form-clt">
                          <span className="text-white mb-3 sm:mb-4 lg1:mb-5 inline-block font-normal leading-7 text-xs sm:text-sm md1:text-base">
                            Message*
                          </span>
                          <textarea
                            id="message"
                            type="message"
                            placeholder="Write Message"
                            className="w-full outline-none bg-transparent border border-white text-white rounded-[4px] px-3 sm:px-4 md1:px-5 pt-3 sm:pt-4 md1:pt-[18px] pb-12 sm:pb-14 md1:pb-[70px] text-sm sm:text-base"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div>
                    <Link
                      to="/contact"
                      className="group relative mt-5 sm:mt-6 md1:mt-7 bg-white w-full sm:w-[180px] md1:w-[204px] text-black hover:bg-black hover:text-white flex items-center justify-center gap-3 text-sm sm:text-[15px] lg1:text-[16px] font-semibold py-3 sm:py-4 md1:py-5 px-6 sm:px-8 lg1:px-10 rounded-[5px] overflow-hidden transition-all duration-300 ease-in-out"
                    >
                      <span className="relative">Send Message</span>
                    </Link>
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

export default TalkToUse;