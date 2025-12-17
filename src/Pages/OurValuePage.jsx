import React from "react";
import lineshape from "../assets/value.png";
import maskshape from "../assets/value1.png";
import { FaArrowRightLong } from "react-icons/fa6";

const OurValuePage = () => {
  const value = [
    {
      id: 1,
      title: "Expertise and Experience",
      des: "Our team of seasoned professionals possesses a deep understanding of the latest technologies and trends in AI and machine learning development. We leverage this expertise to deliver cutting-edge solutions tailored to your business needs.",
    },
    {
      id: 2,
      title: "Customization and Personalization",
      des: "We have the technical proficiency, experience, and tools to create customized AI and machine learning models for your specific business requirements. Our personalized approach ensures that our solutions align perfectly with your goals.",
    },
    {
      id: 3,
      title: "Quality of Work",
      des: "In the coding phase, our developers implement the best coding practices and utilize the latest tools. With hands-on experience, we build advanced web applications that are robust, scalable, and optimized for performance.",
    },
    {
      id: 4,
      title: "Cost-Effectiveness",
      des: "We offer cost-effective AI/ML development services, helping businesses to customize their own AI models at reasonable rates. This allows you to allocate capital for other critical areas of expansion and growth.",
    },
    {
      id: 5,
      title: "Customer Support",
      des: "Bitcoding Solutions provides excellent customer support, ensuring that our top-notch AI models continue to perform well without any errors. We are committed to helping you maintain and optimize your AI solutions.",
    },
    {
      id: 6,
      title: "Proven Success",
      des: "With a track record of developing over 30 successful AI models, our commitment to delivering innovative solutions that drive business growth is clear. Our proven success demonstrates our capability and dedication to excellence.",
    },
  ];

  return (
    <>
      <section className="py-[50px] sm:py-[60px] md:py-[80px] lg1:py-[100px] relative bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)]">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0">
          <img src={lineshape} alt="lineshape" />
        </div>
        <div className="absolute top-0 right-0">
          <img src={maskshape} alt="maskshape" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap -mx-4">
            {/* LEFT SIDE (STICKY) */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg1:sticky lg1:top-[120px] max-w-[520px]">
                <span className="text-white mb-[10px] inline-block font-medium uppercase text-[12px] sm:text-[14px]">
                  Our Values
                </span>

                <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] lg1:text-[40px] font-bold leading-[125%] capitalize">
                  Why Choose Bitcoding Solutions for AI/ML Development?
                </h2>

                <p className="mt-4 text-white leading-relaxed text-[14px] sm:text-[15px] lg1:text-[16px]">
                  Bitcoding Solutions specializes in delivering cutting-edge AI
                  and Machine Learning development services tailored to your
                  unique business needs. With expertise in predictive analytics,
                  NLP, and computer vision, we create scalable and innovative
                  solutions that drive efficiency and growth.
                </p>

                <div className="mt-6 sm:mt-8">
                  <a
                    href="/about"
                    className="inline-flex items-center gap-3 bg-white text-[#292f32] font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-[5px] transition-all duration-300 hover:bg-[#292f32] hover:text-white text-[14px] sm:text-[16px]"
                  >
                    Explore More
                    <FaArrowRightLong />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (SCROLLING) */}
            <div className="w-full lg:w-1/2 px-4 mt-8 sm:mt-10 lg:mt-0">
              <div className="lg1:flex lg1:flex-wrap lg1:-mx-4">
                {value.map((item, index) => (
                  <div key={item.id} className="w-full lg1:px-4 mb-6 sm:mb-8">
                    <div className="bg-white rounded-[8px] px-[25px] sm:px-[35px] md:px-[40px] lg1:px-[50px] pt-[80px] sm:pt-[90px] lg1:pt-[110px] pb-[25px] sm:pb-[30px] lg1:pb-[35px] relative z-0 overflow-visible shadow-sm">
                      <h4
                        data-count={String(index + 1).padStart(2, "0")}
                        className="count-number relative z-10 text-[#292f32] font-extrabold text-[18px] sm:text-[20px] lg1:text-[22px] leading-none mb-4 sm:mb-5"
                      >
                        {item.title}
                      </h4>

                      <p className="text-[#585858] leading-relaxed text-[14px] sm:text-[15px] lg1:text-[16px]">
                        {item.des}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValuePage;
