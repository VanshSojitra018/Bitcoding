import React, { useState, useEffect } from "react";
import FAQBack from "./FAQBack";
import faqBg from "../assets/Faq.jpg";
import faq1 from "../assets/faq1.png";

const Faq = ({
  title = "Secure Your Business &",
  subtitle = "Ensure 24/7 High Availability",
  maintitle = "",
  submaintitle = "",
  showFirstTitle = true,
  showSecondTitle = false,
  customFaqs = null,
  showBg=true,
  showImage = true,
}) => {
  const defaultFaqs = [
    {
      question: "What IT Services Does Bitcoding Solutions Offer ?",
      answer:
        "Bitcoding Solutions provides comprehensive IT services, including AI/ML development, backend development, app development and web scraping, web design, ui-ux design, digital marketing.",
      open: false,
    },
    {
      question: "Why Should I Choose Bitcoding Solutions For My IT Needs ?",
      answer:
        "Bitcoding Solutions offers tailored, innovative solutions with a focus on efficiency, scalability and security, ensuring your business stays ahead.",
      open: false,
    },
    {
      question: "how can i contact bitcoding solutions for a project ?",
      answer:
        "You can contact us through our website's contact form, email us at info@bitcodingsolutions.com or call us at +91 90990 78077.",
      open: false,
    },
    {
      question: "do you offer customized solutions ?",
      answer:
        "Yes, we specialize in creating customized solutions tailored to the specific needs of our clients.",
      open: false,
    },
    {
      question:
        "do you provide support and maintenance after project completion ?",
      answer: "Yes, we offer comprehensive support and maintenance services.",
      open: false,
    },
  ];

  const [faqs, setFaqs] = useState(defaultFaqs);

  useEffect(() => {
    if (customFaqs) {
      setFaqs(customFaqs.map((faq) => ({ ...faq, open: false })));
    }
  }, [customFaqs]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false,
      }))
    );
  };

  return (
    <section
      className="bg-cover py-[147px] relative"
      style={{  backgroundImage: showBg ? `url(${faqBg})` : "none",}}
    >
      {showImage && (
        <div className="right-shape absolute top-0 right-0">
          <img src={faq1} alt="faq1" />
        </div>
      )}

      <div className="container mx-auto px-4 -mt-9">
        <div className="section-title text-center mb-[40px]">
          <span className="mb-[10px] leading-10 text-[#1296df] uppercase font-medium">
            See Our Faqs
          </span>

          {/* ✅ FIRST TITLE */}
          {showFirstTitle && (
            <h2 className="text-[30px] leading-[125%] font-bold">
              {title} <br /> {subtitle}
            </h2>
          )}

          {/* ✅ SECOND TITLE */}
          {showSecondTitle && (
            <h2 className="text-[30px] leading-[125%] font-bold">
              {maintitle} <span className="text-[#1296df]">{submaintitle}</span>
            </h2>
          )}
        </div>

        <div className="max-w-7xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQBack
              key={index}
              faq={faq}
              index={index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
