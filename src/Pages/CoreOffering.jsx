import React from "react";
import mobile from "../assets/mobile.jpg";
import ios from "../assets/ios.jpg";
import flutter from "../assets/flutter.jpg";
import web from "../assets/web.jpg";

const CoreOffering = ({
  title = "our core offerings",
  subtitle = "Our Mobile App ",
  subtitle2 = "Service include ",
}) => {
  const offer = [
    {
      id: 1,
      img: mobile,
      title: "Android App Development",
      des: "We craft high-performance Android applications that leverage the full potential of the Android ecosystem. Our team focuses on creating apps that not only perform exceptionally but also offer a smooth and engaging user experience across a wide range of Android devices and screen sizes. From concept to deployment, we ensure that your app is built to withstand the diverse demands of the Android market while delivering a tailored experience that meets your business objectives. ",
    },
    {
      id: 2,
      img: ios,
      title: "iOS App Development ",
      des: "Our iOS app development services are dedicated to creating apps that align with Apple's stringent guidelines and provide an intuitive, polished experience for iPhone and iPad users. We use the latest tools and technologies to build apps that take full advantage of iOS features, ensuring high performance, reliability, and user satisfaction. Whether you need a sleek and simple app or a complex, feature-rich solution, our team delivers applications that stand out in the App Store and resonate with your target audience.  ",
    },
    {
      id: 3,
      img: flutter,
      title: "Flutter Development ",
      des: "For businesses seeking efficiency and consistency across platforms, our Flutter development service offers a powerful solution. Flutter allows us to build high-quality cross-platform apps from a single codebase, which means you get a consistent user experience on both Android and iOS without the need for separate development efforts. This approach not only speeds up the development process but also reduces costs, making it an ideal choice for startups and established companies alike looking to maximize their reach and streamline their development efforts.",
    },
    {
      id: 4,
      img: web,
      title: "Progressive Web App (PWA) Development",
      des: "We build cutting-edge PWAs that deliver fast, reliable, and engaging user experiences across all devices. Our PWAs combine the best features of mobile apps and websites, offering offline capabilities, push notifications, and seamless performance.",
    },
  ];

  return (
    <section className="pt-[50px] sm:pt-[60px] md:pt-[80px] lg1:pt-[100px]">
      {/* Title */}
      <div className="text-center mb-[20px] sm:mb-[25px] md:mb-[30px] px-4">
        <span className="text-[#1296df] uppercase font-medium text-[12px] sm:text-[13px] md:text-[14px]">{title}</span>
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg1:text-[40px] font-bold text-[#292f32]">
          {subtitle} <span className="text-[#1296df]">{subtitle2}</span>
        </h2>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        {offer.map((item) => {
          const isEven = item.id % 2 === 0;

          return (
            <div key={item.id} className="mb-12 sm:mb-14 md:mb-16 lg1:mb-20">
              <div
                className={`lg1:flex lg1:flex-wrap lg1:items-center lg1:-mx-4 ${
                  isEven ? "lg1:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="lg1:w-1/2 lg1:px-4 mb-6 lg1:mb-0">
                  <div
                    className="relative flex items-center justify-center p-5
                    before:content-['']
                    before:absolute
                    before:top-0
                    before:left-0
                    before:w-[60px]
                    before:h-[60px]
                    sm:before:w-[70px]
                    sm:before:h-[70px]
                    md:before:w-[80px]
                    md:before:h-[80px]
                    lg1:before:w-[100px]
                    lg1:before:h-[100px]
                    before:border-t-[5px]
                    before:border-l-[5px]
                    md:before:border-t-[6px]
                    md:before:border-l-[6px]
                    lg1:before:border-t-[7px]
                    lg1:before:border-l-[7px]
                    before:border-[#1296df]
                    after:content-['']
                    after:absolute
                    after:bottom-0
                    after:right-0
                    after:w-[60px]
                    after:h-[60px]
                    sm:after:w-[70px]
                    sm:after:h-[70px]
                    md:after:w-[80px]
                    md:after:h-[80px]
                    lg1:after:w-[100px]
                    lg1:after:h-[100px]
                    after:border-b-[5px]
                    after:border-r-[5px]
                    md:after:border-b-[6px]
                    md:after:border-r-[6px]
                    lg1:after:border-b-[7px]
                    lg1:after:border-r-[7px]
                    after:border-[#1296df]"
                  >
                    <img src={item.img} alt={item.title} className="w-full" />
                  </div>
                </div>

                {/* Text */}
                <div className="lg1:w-1/2 lg1:px-4">
                  <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg1:text-[40px] font-bold text-[#292f32] mb-2 sm:mb-2.5 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#585858] text-[14px] sm:text-[15px] md:text-[16px]">{item.des}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreOffering;