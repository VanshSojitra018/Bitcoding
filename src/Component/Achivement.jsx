import React, { useEffect, useState } from "react";
import img1 from "../assets/01.svg";
import img2 from "../assets/02.svg";
import img3 from "../assets/03.svg";
import img4 from "../assets/04.svg";

const counters = [
  { id: 1, value: 100, label: "Satisfied Clients", img: img1 },
  { id: 2, value: 150, label: "Finished Projects", img: img2 },
  { id: 3, value: 80, label: "Skilled Experts", img: img3 },
  { id: 4, value: 590, label: "Media Posts", img: img4 },
];

const Achivement = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));
  
  useEffect(() => {
    const duration = 4000; 
    const start = performance.now();
    
    function animate(now) {
      const progress = Math.min((now - start) / duration, 1);
      const updated = counters.map((c) => Math.floor(c.value * progress));
      setCounts(updated);
      if (progress < 1) requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="pb-[100px] md2:pb-[60px] sm:pb-[40px] relative z-10 overflow-hidden -mt-24 md2:-mt-24 sm:-mt-12">
      <div className="container mx-auto px-4">
        <div className="p-[100px_80px] lg1:p-[80px_60px] md2:p-[60px_40px] md1:p-[50px_30px] sm:p-[40px_20px] bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] flex flex-wrap items-center justify-between gap-[50px] md2:gap-[40px] sm:gap-[30px] relative z-[9] rounded-[8px]">
          
          {/* Section Title */}
          <div className="section-title relative z-10 mt-[-7px] w-full lg1:w-auto">
            <span className="mb-2 inline-block font-medium uppercase text-white text-[14px] sm:text-[12px]">
              achievement
            </span>
            <h2 className="text-[40px] lg1:text-[35px] md2:text-[30px] md1:text-[26px] sm:text-[24px] sm1:text-[22px] leading-[125%] sm:leading-[120%] text-white font-bold">
              We Are Increasing <br />
              Business Success
            </h2>
          </div>

          {/* Counter Area */}
          <div className="counter-area w-full grid grid-cols-4 lg1:grid-cols-4 md2:grid-cols-2 sm:grid-cols-2 justify-center items-start gap-[100px] lg1:gap-[60px] md2:gap-[40px] sm:gap-[30px]">
            {counters.map((counter, i) => (
              <div
                key={counter.id}
                className="border-r border-[rgba(255,255,255,0.3)] pr-[50px] lg1:pr-[40px] md2:pr-[30px] sm:pr-[20px] last:pr-0  md2:even:pr-0"
              >
                <div className="icons">
                  <img 
                    src={counter.img} 
                    alt={counter.label} 
                    className="w-[60px] h-[60px] md2:w-[50px] md2:h-[50px] sm:w-[40px] sm:h-[40px]"
                  />
                </div>
                <div className="content mt-5 md2:mt-4 sm:mt-3">
                  <h2 className="text-white text-[50px] lg1:text-[45px] md2:text-[40px] md1:text-[36px] sm:text-[32px] sm1:text-[28px] leading-[125%] font-bold">
                    <span className="mr-1 transition-all duration-300 ease-in-out">
                      {counts[i]}
                    </span>
                    +
                  </h2>
                  <p className="text-white mt-[5px] text-[16px] md2:text-[15px] sm:text-[14px]">
                    {counter.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivement;