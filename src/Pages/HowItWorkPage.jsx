import React from "react";
import faqBg from "../assets/Faq.jpg";
import lineshape from "../assets/lineshape.png";
import our1 from "../assets/our1.svg";
import our2 from "../assets/our2.svg";
import our3 from "../assets/our3.svg";
import our4 from "../assets/our4.svg";

const HowItWorkPage = ({
  showBg = true,
  maintitle = "",
  subtitle = "",
  subtitle2 = "",
  steps = [
    {
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals and project requirements, setting a clear roadmap for development.",
      icon: our1,
    },
    {
      title: "Design",
      description:
        "Our team creates detailed wireframes and prototypes to design a visually appealing and user-friendly site.",
      icon: our2,
    },
    {
      title: "Development",
      description:
        "We build the website using the latest technologies, ensuring seamless functionality and integration.",
      icon: our3,
    },
    {
      title: "Launch",
      description:
        "After testing, we launch your website and provide training on its management.",
      icon: our4,
    },
  ]
}) => {
  
  return (
    <>
      <section
        className="relative bg-cover py-[50px] sm1:py-[60px] md:py-[80px] lg:py-[100px]"
        style={{ backgroundImage: showBg ? `url(${faqBg})` : "none" }}
      >
        <div className="container mx-auto w-full px-4">
          {/* Title */}
          <div className="relative z-50 mb-[20px] sm1:mb-[25px] md:mb-[30px] -mt-2 text-center">
            <span className="mb-[10px] inline-block text-[12px] sm1:text-[13px] md:text-[14px] font-medium uppercase text-[#1296df]">
              {maintitle}
            </span>
            <h2 className="text-[24px] sm1:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold leading-[125%] text-[#292f32] px-2">
              {subtitle}{" "}
              <span className="text-[#1296df]">{subtitle2}</span>
            </h2>
          </div>
          {/* Content */}
          <div className="relative">
            {/* Lineshape - hidden below 1400px */}
            <div className="absolute left-1/2 top-1/2 w-[930px] -translate-x-1/2 -translate-y-1/2 transform hidden 2xl:block">
              <img src={lineshape} alt="lineshape" className="h-full w-full" />
            </div>
            <div className="md1:flex md1:flex-wrap -mb-4">
              {steps.map((step, index) => {
                const isEven = (index + 1) % 2 === 0;
                return (
                  <div key={index} className="w-full md1:w-1/2 lg:w-1/4 md1:flex-auto px-4 mb-4 sm1:mb-6 lg:mb-0">
                    <div
                      className={`mt-[20px] sm1:mt-[25px] lg:mt-[30px] flex flex-col text-center ${
                        isEven ? "lg:flex-col-reverse" : ""
                      }`}
                    >
                      {/* Icon */}
                      <div className="relative mx-auto flex h-[80px] w-[80px] sm1:h-[90px] sm1:w-[90px] lg:h-[100px] lg:w-[100px] items-center justify-center rounded-full bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.06)]">
                        <img src={step.icon} alt={step.title} className="w-[40px] sm1:w-[45px] lg:w-[50px]" />
                        <h6 className="absolute left-0 top-0 flex h-[28px] w-[28px] sm1:h-[32px] sm1:w-[32px] lg:h-[34px] lg:w-[34px] items-center justify-center rounded-full bg-[linear-gradient(172deg,#1296DF_6.23%,#1F5B7C_131.99%,#22506A_146.31%,#292F32_165.42%)] text-white text-[14px] sm1:text-[15px] lg:text-[16px]">
                          {index + 1}
                        </h6>
                      </div>
                      {/* Text */}
                      <div className="my-[20px] sm1:my-[25px] lg:my-[30px] px-2">
                        <h4 className="mb-[7px] text-[18px] sm1:text-[19px] lg:text-[20px] font-bold leading-[130%] text-[#292f32]">
                          {step.title}
                        </h4>
                        <p className="text-[14px] sm1:text-[15px] lg:text-[16px] text-[#585858]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HowItWorkPage;