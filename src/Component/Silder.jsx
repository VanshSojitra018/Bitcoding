import React from "react";

const Silder = ({ variant = "dark" }) => {
  const items = [
    "Development",
    "IT Solution",
    "Design",
    "Technology",
    "IT Solution Technology",
  ];

  const isLight = variant === "light";

  return (
    <div className="py-10 overflow-hidden">
      <div
        className={`
          text-[50px] h-[90px] leading-[90px] font-bold capitalize relative whitespace-nowrap z-10
          ${isLight
            ? "bg-white text-black"
            : "text-white bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)]"
          }
        `}
      >
        {/* Animated container */}
        <div className="flex animate-[marqueeLeft_25s_linear_infinite] w-[200%]">
          {[...Array(2)].map((_, index) => (
            <ul key={index} className="flex items-center">
              {items.map((text, idx) => (
                <React.Fragment key={idx}>
                  <li
                    className={`
                      mr-8 text-[50px] leading-[90px] font-bold capitalize
                      ${isLight ? "text-gray-700" : "text-white"}
                    `}
                  >
                    {text}
                  </li>

                  <span className="inline-flex items-center justify-center mr-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-[50px] h-[50px]"
                      fill={isLight ? "#1296df" : "white"}
                    >
                      <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.62 12 2 9.19 8.62 2 9.24 7.46 13.97 5.82 21z" />
                    </svg>
                  </span>
                </React.Fragment>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Silder;
