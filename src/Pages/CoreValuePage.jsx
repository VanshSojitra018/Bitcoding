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
  title = "Our ",
  maintitle = "AI/ML Development ",
  subtitle = "Service",
  subtitle2 ="",
  showIcon = true,
  customServices = null,
  webServices = null,
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  flex = true,

  /* ✅ NEW OPTIONAL STYLE PROPS */
  bgColor = null,
  titleColor = "text-black",
  highlightColor = "text-[#1296df]",
}) => {
  const defaultServices = [
    { id: 1, title: "Generative AI", icon: AI },
    { id: 2, title: "Large Language Model", icon: LLM },
    { id: 3, title: "Chatbot", icon: Chatbot },
    { id: 4, title: "Computer Vision", icon: CS },
    { id: 5, title: "Natural Language Processing", icon: NLP },
    { id: 6, title: "Machine Learning", icon: ML },
    { id: 7, title: "Deep Learning", icon: DL },
    { id: 8, title: "Data Visualization", icon: DV },
    { id: 9, title: "Predictive Analytics", icon: PA },
  ];

  const services = customServices || webServices || defaultServices;

  return (
    <section
      className="relative py-[50px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: bgColor ? "none" : `url(${heroBg})`,
        backgroundColor: bgColor || "transparent",
      }}
    >
      <div className="container mx-auto px-4">
        {/* TITLE */}
        <header className="text-center mb-10">
          <span className="text-white">{subtitle2}</span>
          <h2 className={`text-3xl font-bold ${titleColor}`}>
            {title}
            <span className={`ml-1 ${highlightColor}`}>
              {maintitle}
            </span>{" "}
            {subtitle}
          </h2>
        </header>

        {/* GRID */}
        <div className={`grid ${gridCols} gap-6`}>
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className={flex ? "flex gap-4" : ""}>
                {showIcon && service.icon && (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-[45px] h-[45px]"
                  />
                )}

                <div>
                  <h3 className="text-[20px] font-bold mt-2 mb-2">
                    {service.title}
                  </h3>

                  {service.des && (
                    <p className="text-[#585858]">
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
