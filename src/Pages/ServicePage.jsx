import React from "react";
import PageHeader from "./PageHeader";
import icon1 from "../assets/s-icon-1.svg";
import icon2 from "../assets/s-icon-2.svg";
import icon3 from "../assets/s-icon-3.svg";
import icon4 from "../assets/s-icon-4.svg";
import heroBg from "../assets/hero-bg.jpg";

const ServicePage = () => {
  const servicesData = [
    {
      title: "AI/ML Development",
      description:
        "Utilize AI/ML to revolutionize your business processes and increase operational efficiency.",
      icon: icon1,
      link: "/ai-ml-development",
    },
    {
      title: "Python Development",
      description:
        "Build secure, scalable backend systems to robustly support all you applications.",
      icon: icon2,
      link: "/python-development",
    },
    {
      title: "Web Scraping",
      description:
        "Efficiently extract valuable data with our precise, automated web scraping services.",
      icon: icon3,
      link: "/web-scraping",
    },
    {
      title: "Flutter Development",
      description:
        "Design innovative, user-friendly mobile and web apps that engage and captivate users.",
      icon: icon4,
      link: "/flutter-development",
    },
    {
      title: "AI/ML Development",
      description:
        "Utilize AI/ML to revolutionize your business processes and increase operational efficiency.",
      icon: icon1,
      link: "/ai-ml-development",
    },
    {
      title: "Python Development",
      description:
        "Build secure, scalable backend systems to robustly support all you applications.",
      icon: icon2,
      link: "/python-development",
    },
    {
      title: "Web Scraping",
      description:
        "Efficiently extract valuable data with our precise, automated web scraping services.",
      icon: icon3,
      link: "/web-scraping",
    },
    {
      title: "Flutter Development",
      description:
        "Design innovative, user-friendly mobile and web apps that engage and captivate users.",
      icon: icon4,
      link: "/flutter-development",
    },
  ];

  return (
    <>
      <PageHeader title={"Services"} subtitle={"Services"} />

      <section
        className="pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-1 relative"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container mx-auto px-4">
          <div className="section-title-area flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="section-title text-center mx-auto mb-[20px] lg:mb-[30px]">
              <span className="text-[#1296df] mb-[10px] inline-block font-medium uppercase text-[14px] sm:text-[16px]">
                Our services
              </span>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] leading-[125%] font-bold text-gray-800">
                We Solve IT Problems With Technology
              </h2>
            </div>
          </div>
        </div>

        {/* ------------ SAME CARD STRUCTURE AS ORIGINAL ------------ */}
        <div className="container mx-auto px-4">
          <div className="service-wrapper mb-[60px] sm:mb-[100px] lg:mb-[187px]">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {servicesData.map((service, index) => (
                <div key={index} className="flex justify-center">
                  <div
                    className="
                      w-full max-w-[325px] service-box-item group mt-[30px] bg-white 
                      py-[30px] sm:py-[35px] px-[25px] sm:px-[30px] relative z-10 rounded-[8px] 
                      transition-all duration-300 ease-in-out overflow-hidden
                    "
                  >
                    <div className="icon relative z-10 inline-block ml-3 sm:ml-5 my-4 sm:my-5">
                      <img src={service.icon} alt="icon" />
                    </div>

                    <div className="content mt-4 sm:mt-5 relative z-10">
                      <h4 className="text-[#292f32] text-[18px] sm:text-[20px] mb-[5px] font-bold transition-colors duration-300 group-hover:text-white">
                        <a href={service.link}>{service.title}</a>
                      </h4>

                      <p className="text-[#292f32] text-[14px] sm:text-[16px] transition-colors duration-300 group-hover:text-white">
                        {service.description}
                      </p>

                      <a
                        href={service.link}
                        className="theme-btn-2 flex items-center gap-2 font-semibold text-[14px] sm:text-[16px] text-[#585858] mt-3 transition-colors duration-300 group-hover:text-white"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
