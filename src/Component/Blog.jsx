import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaRegUser, FaTag } from "react-icons/fa";
import b1 from "../assets/b-1.png";
import b2 from "../assets/b-2.png";
import b3 from "../assets/b-3.png";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: b1,
      date: "10",
      month: "Sep",
      author: "Admin",
      category: "Mobile",
      title: "Top Mobile App Development Frameworks of 2024",
      link: "top-mobile-app-development-frameworks.html"
    },
    {
      id: 2,
      image: b2,
      date: "17",
      month: "Feb",
      author: "Admin",
      category: "UI/UX Design",
      title: "Impact of Augmented & Virtual Reality in Virtual Worlds",
      link: "impact-of-augmented&virtual-reality-in-virtual-worlds.html"
    },
    {
      id: 3,
      image: b3,
      date: "20",
      month: "May",
      author: "Admin",
      category: "Python",
      title: "Discover Python Development Power for Versatile Development",
      link: "discover-python's-power-for-versatile-development.html"
    }
  ];

  return (
    <section className="py-12 px:py-16 sm:py-20 md:py-24 lg:py-[100px]">
      <div className="container mx-auto px-4">
        <div className="section-title-area flex flex-col px:flex-col sm:flex-col md1:flex-col md2:flex-row items-start md2:items-center justify-between relative z-10 gap-4 md2:gap-0">
          <div className="section-title relative z-20 mb-4 md2:mb-[30px] -mt-[7px]">
            <span className="text-[#1296df] mb-[10px] inline-block font-medium uppercase text-sm sm:text-base">
              it blogs
            </span>
            <h2 className="capitalize text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] leading-[125%] font-bold">
              our blogs
            </h2>
          </div>

          <a
            href="/blog"
            className="text-[#292f32] font-bold flex items-center gap-1 hover:text-[#1296df] transition-colors text-sm sm:text-base"
          >
            View all blogs <BsArrowRight />
          </a>
        </div>
        
        <div className="row flex flex-wrap mt-2 -mx-2 md:-mx-3 lg:-mx-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full md:w-1/2 xl:w-1/3 px-2 md:px-3 lg:px-3 mb-6 xl:mb-0">
              <div>
                <div className="news-image relative overflow-hidden">
                  <img src={blog.image} alt={`blog-${blog.id}`} className="w-full h-auto" />
                  <div className="post-date absolute bottom-0 py-2 sm:py-3 px-4 sm:px-6 left-0 bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)]">
                    <h3 className="text-white text-xl sm:text-[24px] font-bold">
                      {blog.date}{" "}
                      <span className="font-normal text-white text-sm sm:text-[16px]">
                        {blog.month}
                      </span>
                    </h3>
                  </div>
                </div>
                
                <div className="news-content p-5 sm:p-6 md:p-[30px] bg-white relative z-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                  <ul className="flex items-center gap-6 sm:gap-8 md:gap-[50px] mb-3 sm:mb-[15px] flex-wrap">
                    <li className="text-sm sm:text-[16px] flex items-center gap-1 text-[#585858] font-medium">
                      <FaRegUser className="text-[#1296df]" />
                      By {blog.author}
                    </li>
                    <li className="text-sm sm:text-[16px] flex items-center gap-1 text-[#585858] font-medium">
                      <FaTag className="text-[#1296df]" />
                      {blog.category}
                    </li>
                  </ul>
                  
                  <h3 className="font-bold mb-[5px]">
                    <a
                      href={blog.link}
                      className="font-bold text-[#292f32] text-lg sm:text-xl md:text-[22px] transition-all duration-300 ease-in-out hover:text-[#1296df] line-clamp-2"
                    >
                      {blog.title}
                    </a>
                  </h3>
                  
                  <a
                    href={blog.link}
                    className="mt-3 w-fit flex items-center font-semibold text-[#585858] capitalize gap-2 transition-all duration-300 ease-in-out hover:text-[#1296df] text-sm sm:text-base"
                  >
                    read More
                    <BsArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;