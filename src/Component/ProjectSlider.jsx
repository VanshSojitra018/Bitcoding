import React, { useState, useEffect } from "react";
import ps1 from "../assets/p1.png";
import ps2 from "../assets/p2.png";
import ps3 from "../assets/p3.png";
import ps4 from "../assets/p4.png";
import ps5 from "../assets/p5.png";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const projectData = [
    {
      id: 1,
      image: ps1,
      title: "Wordpress",
      category: "AfterMedi",
    },
    {
      id: 2,
      image: ps2,
      title: "NextJs",
      category: "Trading Wize",
    },
    {
      id: 3,
      image: ps3,
      title: "Flutter",
      category: "Billa-Patel-Samaj",
    },
    {
      id: 4,
      image: ps4,
      title: "Python",
      category: "ClassDekho",
    },
    {
      id: 5,
      image: ps5,
      title: "Flutter",
      category: "FunFace",
    },
  ];

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 767) {
        // Mobile: 1 block
        setSlidesToShow(1);
      } else if (width >= 767 && width < 991) {
        // Tablet: 2 blocks
        setSlidesToShow(2);
      } else if (width >= 991 && width < 1199) {
        // Mini laptop: 3 blocks
        setSlidesToShow(3);
      } else {
        // Laptop and above: 4 blocks
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Create extended array for seamless loop
  const extendedData = [...projectData, ...projectData.slice(0, slidesToShow)];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesToShow]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Reset to start when reaching the end
  useEffect(() => {
    if (currentIndex === projectData.length) {
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(0);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 500);
    }
  }, [currentIndex]);

  const slideWidth = 100 / slidesToShow;

  return (
    <section className="pb-[100px]">
      <div className="relative overflow-hidden mx-auto px-4">
        {/* Slider wrapper */}
        <div className="relative h-[450px]">
          <div
            className={`flex ${isTransitioning ? '' : 'transition-transform duration-500 ease-in-out'}`}
            style={{
              transform: `translateX(-${currentIndex * slideWidth}%)`,
            }}
          >
            {extendedData.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="px-[15px]"
                style={{ minWidth: `${slideWidth}%` }}
              >
                <div className="project-item">
                  <div className="project-image relative h-[350px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="project-content absolute bottom-6 left-6 right-6 py-6 px-[30px] bg-white group overflow-hidden rounded-[5px]">
                      <p className="text-[#1296df] font-medium mb-[6px]">
                        {project.title}
                      </p>
                      <div className="flex items-center relative">
                        <h4 className="text-[20px] leading-[130%] font-bold">
                          <a href={project.category}>{project.category}</a>
                        </h4>
                        <a
                          href={project.category}
                          className="absolute right-0 bottom-1 translate-y-[40px] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          <FaArrowRightLong className="text-[#1296df]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center w-[146px] p-3 rounded-[50px] border-[2px] border-dotted border-[#1296df] mx-auto gap-3 ">
          {projectData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#1296df] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;