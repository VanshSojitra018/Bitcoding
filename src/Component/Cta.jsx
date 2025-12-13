import React from 'react'
import ct1 from "../assets/ct-1.png"
import ct2 from "../assets/ct-2.png"
import ct3 from "../assets/ct-3.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Cta = () => {
  return (
    <>
      <section className='ct-section relative'>
        <div className="container mx-auto px-4">
          <div className="ct-wrapper py-[40px] sm:py-[50px] lg1:py-[65px] px-[20px] sm:px-[30px] md:px-[40px] lg1:px-[70px] relative sm:mt-[30px] md2:mt-[0] xl:mt-[90px] rounded-[8px] bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)]">
            <div className="mask-shape absolute top-0 left-[21%] hidden xl:block"><img src={ct1} alt="ct-1" /></div>
            <div className="circle-shape animate-cir36 absolute bottom-[10px] left-[20px] sm:left-[40px] lg1:left-[80px] hidden xl:block"><img src={ct2} alt="ct-2" /></div>
            <div className="ct-img absolute bottom-0 left-[100px] h-[357px] max-w-[393px] z-10 hidden xl:block"><img src={ct3} alt="ct-3" /></div>
            <div className="ct-item xl:flex items-center justify-between xl:ml-[512px] relative z-10">
              <h3 className='text-[24px] sm:text-[28px] lg1:text-[32px] text-white font-bold leading-[156%] capitalize mb-6 xl:mb-0 text-center xl:text-left'>
                stay connected with <br className='hidden sm:block' /> cutting edge IT
              </h3>
              <a
                href="/contact"
                className="group relative bg-white w-[204px] text-black flex items-center justify-center gap-3 md:gap-4 text-[14px] md:text-[16px] font-semibold py-4 sm:py-5 md:py-5 px-6 sm:px-8 md:px-10 rounded-[5px] overflow-hidden mx-auto xl:mx-0
                  transition-all duration-300 ease-in-out"
              >
                <span className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative flex items-center gap-3 md:gap-4">
                  Get A Quote
                  <FaArrowRightLong className="transition-transform duration-300 ease-in group-hover:translate-x-2" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cta