import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import AI from "../assets/ai.svg";
import LLM from "../assets/llm.svg";
import Chatbot from "../assets/chatbot.svg";
import CS from "../assets/cs.svg";
import NLP from "../assets/nlp.svg";
import ML from "../assets/ml.svg";
import DL from "../assets/dl.svg";
import DV from "../assets/dv.svg";
import PA from "../assets/pa.svg";

const CoreValuePage = ({
  showIcon = true,
  customServices = null,
}) => {
  // ✅ ORIGINAL SERVICES (MAIN PAGE)
  const services = customServices ?? [
    { id: 1, title: "Generative AI", icon: AI, alt: "AI" },
    { id: 2, title: "Large Language Model", icon: LLM, alt: "LLM" },
    { id: 3, title: "Chatbot", icon: Chatbot, alt: "Chatbot" },
    { id: 4, title: "Computer Vision", icon: CS, alt: "CS" },
    { id: 5, title: "Natural Language Processing", icon: NLP, alt: "NLP" },
    { id: 6, title: "Machine Learning", icon: ML, alt: "ML" },
    { id: 7, title: "Deep Learning", icon: DL, alt: "DL" },
    { id: 8, title: "Data Visualization", icon: DV, alt: "DV" },
    { id: 9, title: "Predictive analytics", icon: PA, alt: "PA" },
  ];

  return (
    <section
      className="relative py-[50px] sm1:py-[60px] md:py-[80px] lg:py-[100px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container w-full mx-auto px-4">

        {/* ✅ ORIGINAL HEADER — RESTORED */}
        <header className="section-title text-center mb-[10px] md:mb-[20px] lg:mb-[30px] relative z-50">
          <span className="block uppercase text-[#1296df] mb-[10px] font-medium text-[12px] sm1:text-[13px] md2:text-[14px]">
            our core value
          </span>
          <h2 className="text-[24px] sm1:text-[26px] md1:text-[30px] md2:text-[32px] md:text-[36px] xl:text-[40px] leading-[125%] font-bold px-2 sm1:px-4">
            Our <span className="text-[#1296df] mr-2">AI/ML Development</span>
            Service
          </h2>
        </header>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white relative z-10 border border-white rounded-[8px] px-[20px] md1:px-[25px] md:px-[30px] py-[25px] md1:py-[30px] md:py-[35px] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                {/* ✅ ICON — CONDITIONAL */}
                {showIcon && service.icon && (
                  <img
                    src={service.icon}
                    alt={service.alt}
                    className="w-[45px] h-[45px]"
                  />
                )}

                <div>
                  {/* TITLE */}
                  <h3 className="font-bold text-[18px] md1:text-[20px] md:text-[22px] mb-2">
                    {service.title}
                  </h3>

                  {/* ✅ DESCRIPTION — ONLY WHEN PROVIDED */}
                  {service.des && (
                    <p className="text-[14px] text-gray-600 leading-relaxed">
                      {service.des}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValuePage;
