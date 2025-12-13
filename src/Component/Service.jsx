import React from "react";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import icon1 from "../assets/s-icon-1.svg";
import icon2 from "../assets/s-icon-2.svg";
import icon3 from "../assets/s-icon-3.svg";
import icon4 from "../assets/s-icon-4.svg";
import heroBg from "../assets/hero-bg.jpg";

const Service = () => {


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
  ];

  const services = [...servicesData, ...servicesData];

  return (
    <>
      <section
        className="pt-[60px] sm:pt-[80px] lg:pt-[100px] bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="section-title-area flex flex-col sm:flex-col md:flex-col lg:flex-row items-start lg:items-center justify-between relative z-10 gap-4 lg:gap-0">
            <div className="section-title relative z-[99] mb-[20px] lg:mb-[30px] mt-0 lg:mt-[-7px]">
              <span className="text-[#1296df] mb-[10px] inline-block font-medium uppercase text-[14px] sm:text-[16px]">
                IT services
              </span>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] leading-[125%] font-bold text-gray-800">
                We Solve IT Problems <br /> With Technology
              </h2>
            </div>
            <div className="area-btn hidden lg:flex items-center gap-[15px]">
              <button className="swiper-button-prev-custom hover:bg-[#1296df] hover:text-white w-[56px] h-[56px] leading-[56px] text-center bg-transparent text-[#1296df] rounded-[50%] border border-[#1296df] transition-all duration-300 ease-in-out">
                <HiArrowSmallLeft className="mx-auto text-[25px]" />
              </button>
              <button className="swiper-button-next-custom hover:bg-white hover:text-[#1296df] w-[56px] h-[56px] leading-[56px] text-center bg-[#1296df] text-white rounded-[50%] border border-transparent transition-all duration-300 ease-in-out">
                <HiArrowSmallRight className="mx-auto text-[25px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="service-wrapper mb-[60px] sm:mb-[100px] lg:mb-[187px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              speed={700}
              grabCursor={true}
              slidesPerGroup={1}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div
                    className="w-full max-w-[325px] service-box-item group mt-[30px] bg-white py-[30px] sm:py-[35px] px-[25px] sm:px-[30px] relative z-10 rounded-[8px] 
  transition-all duration-300 ease-in-out overflow-hidden"
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
                        className="theme-btn-2 flex items-center gap-2 font-semibold text-[14px] sm:text-[16px] text-[#585858] mt-3 
      transition-colors duration-300 group-hover:text-white"
                      >
                        Read More
                        <HiArrowSmallRight />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="service-text mt-[30px] sm:mt-[40px] sm:block sm:text-center lg:mt-[50px] md2:flex flex-col sm:flex-row items-center justify-center gap-2 px-4 ">
              <h6 className="md2:text-[20px] sm:text-[14px] lg:text-[20px] font-extrabold text-center sm:text-center lg:mb-10">
                Need Any Kind Of IT Solution For Your Business?
              </h6>
              <a href="/service" className="text-[16px] sm:text-[18px] font-bold text-[#1296df] underline lg:mb-10">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;