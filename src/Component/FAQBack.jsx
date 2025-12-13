import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

const FAQBack = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      onClick={() => toggleFAQ(index)}
      className={`border rounded-md shadow-sm cursor-pointer transition-all duration-300 ${
        faq.open ? "bg-gray-50 border-[#1296df]" : "bg-white border-[#1296df]"
      }`}
    >
      {/* Question Row */}
      <div className="flex justify-between items-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 capitalize gap-2 sm:gap-3">
        <h3
          className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 ${
            faq.open ? "text-[#1296df]" : "text-gray-800"
          }`}
        >
          {faq.question}
        </h3>
        <AiOutlineDoubleRight
          className={`text-[#1296df] text-lg sm:text-xl flex-shrink-0 transform transition-transform duration-300 ${
            faq.open ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>
      {/* Animated Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          faq.open
            ? "max-h-60 opacity-100 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4"
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQBack;
