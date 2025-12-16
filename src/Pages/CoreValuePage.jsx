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

const CoreValuePage = () => {
  const services = [
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
      aria-labelledby="core-value-heading"
    >
      <div className="container w-full mx-auto px-4">
        {/* Section Header */}
        <header className="section-title text-center mb-[10px] md:mb-[20px] lg:mb-[30px] relative z-50">
          <span className="block uppercase text-[#1296df] mb-[10px] font-medium text-[12px] sm1:text-[13px] md2:text-[14px]">
            our core value
          </span>
          <h2
            id="core-value-heading"
            className="text-[24px] sm1:text-[26px] md1:text-[30px] md2:text-[32px] md:text-[36px] xl:text-[40px] leading-[125%] font-bold px-2 sm1:px-4"
          >
            Our <span className="text-[#1296df] mr-2">AI/ML Development</span>
            Service
          </h2>
        </header>

        {/* Services Grid */}
        <div className="service-wrapper">
          <div className="-mx-4">
            <div className="px-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-full">
              {services.map((service) => (
                <div key={service.id} className="col px-4 mt-6">
                  <article className="service-box h-full bg-white relative z-10 border border-white rounded-[8px] px-[20px] md1:px-[25px] md:px-[30px] py-[25px] md1:py-[30px] md:py-[35px] transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="icons flex-shrink-0" aria-hidden="true">
                        <img
                          src={service.icon}
                          alt={service.alt}
                          className="w-[45px] h-[45px] md1:w-[50px] md1:h-[50px] md:w-auto md:h-auto"
                        />
                      </div>
                      <h3 className="font-bold text-[18px] md1:text-[20px] md:text-[22px]">
                        {service.title}
                      </h3>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuePage;