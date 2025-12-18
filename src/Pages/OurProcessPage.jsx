import React from "react";
import ct from "../assets/cc.png";
import bg from "../assets/test.png";
import bg2 from "../assets/test2.png";
import { FaCheck } from "react-icons/fa6";

const choose = [
  {
    id: 1,
    icon: <FaCheck />,
    str: " Requirement Analysis: ",
    des: "We start by understanding your project's specific needs to tailor our automation strategy. ",
  },
  {
    id: 2,
    icon: <FaCheck />,
    str: "CI/CD Integration:  ",
    des: "We integrate automation into your CI/CD pipelines for continuous testing and rapid feedback.  ",
  },
  {
    id: 3,
    icon: <FaCheck />,
    str: " Execution and Monitoring: ",
    des: "Tests are executed across different environments, with real-time monitoring to swiftly address any issues.  ",
  },
  {
    id: 4,
    icon: <FaCheck />,
    str: "Results Analysis and Reporting: ",
    des: "Detailed reports provide insights into performance and defects, helping you make informed decisions.  ",
  },
  {
    id: 5,
    icon: <FaCheck />,
    str: "Ongoing Support: ",
    des: " We offer continuous improvement and support to keep your testing process effective as your application evolves.  ",
  },
];

const OurProcessPage = ({
  title = "our process",
  subtitle = "How ",
  subtitle2 = "We ",
  subtitle3 = "Do It ?",
  para = "At Bitcoding Solution Company, our automation testing process is designed for precision and efficiency: ",
}) => {
  return (
    <section className="py-[100px] max-lg1:py-[50px] relative">
      <div className="container px-4 mx-auto w-full">
        <div className="flex flex-wrap -mx-4 max-lg1:block max-lg1:mx-0">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 px-4 flex max-lg1:block max-lg1:px-0 max-lg1:mb-8">
            <div className="relative max-lg1:flex max-lg1:justify-center">
              {/* Rolling CT Image - Behind */}
              <div className="absolute top-0 right-[-35%] lg1:right-[-20%] xl:right-[-35%] w-[194px] lg1:w-[140px] xl:w-[194px] max-lg1:hidden z-10">
                <img src={ct} alt="ct" />
              </div>
              {/* Background Image Div - In Front */}
              <div
                className="w-[328px] h-[415px] lg1:w-[280px] lg1:h-[350px] xl:w-[328px] xl:h-[415px] max-lg1:w-[300px] max-lg1:h-[380px] max-md:w-[280px] max-md:h-[350px] max-md1:w-[260px] max-md1:h-[330px] rounded-lg bg-cover shadow-lg mx-6 max-lg1:mx-0 relative z-50"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="border-[10px] border-white absolute right-[-65%] lg1:right-[-40%] xl:right-[-65%] bottom-[-13%] lg1:bottom-[-10%] xl:bottom-[-13%] max-lg1:right-[-30%] max-lg1:bottom-[-12%] max-md:right-[-25%] max-md:bottom-[-10%] max-md1:right-[-15%] max-md1:bottom-[-8%] shadow-[0px_4px_25px_rgba(0,0,0,0.06)] z-50">
                  <img src={bg2} alt="" className="lg1:w-[120px] xl:w-auto max-lg1:w-[140px] max-md:w-[120px] max-md1:w-[100px]" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Content */}
          <div className="px-4 flex w-1/2 max-lg1:w-full max-lg1:block max-lg1:px-0">
            <div className="process-content">
              <div className="section-title relative z-50 mb-[30px] max-lg1:mb-[20px] mt-[-7px] max-lg1:mt-0">
                <span className="text-[#1296df] mb-[10px] inline-block font-medium uppercase max-md:text-[14px]">
                  {title}
                </span>
                <h2 className="text-[40px] lg1:text-[34px] xl:text-[40px] max-lg1:text-[32px] max-md:text-[28px] leading-[125%] font-bold text-[#292f32]">
                  {subtitle}
                  <span className="text-[#1296df]">{subtitle2}</span>
                  {subtitle3}
                </h2>
              </div>
              <p className="text-[#585858] lg1:text-[15px] xl:text-base max-md:text-[14px]">{para}</p>
              <div className="choose-list mt-2">
                <ul className="list-none">
                  {choose.map((choose) => (
                    <li key={choose.id} className="flex items-start gap-2 max-lg1:block max-lg1:mb-3">
                      <span className="text-[#1296df] mr-[5px] text-[20px] lg1:text-[18px] xl:text-[20px] max-md:text-[16px] mt-[6px] max-lg1:inline-block">
                        {choose.icon}
                      </span>
                      <p className="leading-[1.5] text-[#585858] lg1:text-[14px] xl:text-base max-md:text-[14px] max-lg1:inline">
                        <strong>{choose.str}</strong>
                        {choose.des}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessPage;