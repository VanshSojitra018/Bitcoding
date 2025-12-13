import React, { useState } from "react";
import FAQBack from "./FAQBack";
import faqBg from "../assets/Faq.jpg";
import faq1 from "../assets/Faq1.png";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What IT Services Does Bitcoding Solutions Offer ?",
      answer:
        "Bitcoding Solutions provides comprehensive IT services, including AI/ML development, backend development, app development and web scraping, web design, ui-ux design, digital marketing. ",
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
        "You can contact us through our website's contact form, email us at info@bitcodingsolutions.com or call us at +91 90990 78077. Our team will respond promptly to discuss your project needs. ",
      open: false,
    },
    {
      question: "do you offer customized solutions ?",
      answer:
        "Yes, we specialize in creating customized solutions tailored to the specific needs of our clients. ",
      open: false,
    },
    {
      question:
        "do you provide support and maintenance after project completion ?",
      answer:
        "Yes, we offer comprehensive support and maintenance services to ensure your solution remains functional, secure and up-to-date. ",
      open: false,
    },
  ]);

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
      className="bg-cover py-[130px] relative"
      style={{ backgroundImage: `url(${faqBg})` }}
    >
      <div className="right-shape absolute top-0 right-0">
        <img src={faq1} alt="faq1" />
      </div>

      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-[30px]">
          <span className="mb-[10px] text-[#1296df] uppercase font-medium">
            See Our Faqs
          </span>
          <h2 className="text-[40px] leading-[125%] font-bold">
            Secure Your Business & <br /> Ensure 24/7 High Availability
          </h2>
        </div>

        {/* Limit width and center */}
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
