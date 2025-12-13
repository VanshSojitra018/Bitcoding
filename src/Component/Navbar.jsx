import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaPhoneVolume, FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import img from "../assets/black-logo.png";
import { FaAngleDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStarServicesOpen, setIsStarServicesOpen] = useState(false);
  const [isInsideStarOpen, setIsInsideStarOpen] = useState(false);
  const [isDigitalOpen, setIsDigitalOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isStarIndOpen, setIsStarIndOpen] = useState(false);
  const [isStarTechOpen, setIsStarTechOpen] = useState(false);
  const [isCloudOpen, setIsCloudOpen] = useState(false);
  const [isQAOpen, setIsQAOpen] = useState(false);
  const [isPlatform1Open, setIsPlatform1Open] = useState(false);
  const [isOurOpen, setIsOurOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="block">
        {/* Social Media info and Mail & Number Start here */}
        <div className="py-[10px] overflow-hidden relative bg-[#292f32] z-[99] hidden lg1:block">
          <div className="px-[130px]">
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-[25px]">
                <li className="text-[15px] flex items-center">
                  <FiMail className="mr-[10px] text-white" />
                  <a
                    className="text-[15px] font-normal text-[#ffffffcc] font-sans"
                    href="mailto:info@bitcodingsolutions.com"
                    mailto:class="link"
                  >
                    info@bitcodingsolutions.com
                  </a>
                </li>
                <li className="text-[15px] flex items-center">
                  <FaPhoneVolume className="mr-[10px] text-white" />
                  <a
                    className="text-[15px] font-normal text-[#ffffffcc] font-sans"
                    href="tel:9099078077"
                  >
                    +91 9099078077
                  </a>
                </li>
              </ul>
              <div className="flex items-center">
                <div className="flex items-center gap-[15px] ">
                  <span className="text-[#ffffffcc] font-medium">
                    Follow Us:
                  </span>
                  <a href="https://www.facebook.com/Bitcodings" target="_blank">
                    <FaFacebookF className="text-white text-[18px]" />
                  </a>
                  <a
                    href="https://in.linkedin.com/company/bitcodingsolutions"
                    target="_blank"
                  >
                    <FaLinkedin className="text-white text-[18px]" />
                  </a>
                  <a
                    href="https://in.linkedin.com/company/bitcodingsolutions"
                    target="_blank"
                  >
                    <FaYoutube className="text-white text-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Social Media info and Mail & Number End here */}

        {/* Logo and Menu Bar Start Here */}

        <div className="z-[100] transition-all duration-300 bg-white">
          <div className="px-[130px] w-full mx-auto">
            <div className="menu-wrapper">
              <div className="flex items-center justify-between py-[10px] ">
                <div className="header-left">
                  <div className="logo md1:-ml-16 sm1:-ml-16 sm
                  -ml-24">
                    <a href="/">
                      <img src={img} alt="Logo"/>
                    </a>
                  </div>
                </div>
                <div className="header-right">
                  <div className="menu-bar">
                    <div className="menu-bar-wrapper">
                      <nav className="block">
                        <ul className="flex items-center">
                          {/* Top-level menu */}
                          <ul className="hidden 2xl:block">
                            {/* Services */}
                            <li className="relative inline-block mr-[40px] group">
                              <Link
                                to="/service"
                                className="flex items-center text-[16px] font-sans font-semibold text-[#292f32] py-[20px] relative capitalize group-hover:text-blue-500"
                              >
                                Services
                                <FaAngleDown className="ml-3 text-[#292f32] group-hover:text-blue-500" />
                              </Link>
                              {/* First-level submenu: Star Services */}
                              <ul className="absolute top-full start-0 min-w-[220px] z-[99999] invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 bg-white shadow-lg">
                                <li className="relative group/sub">
                                  <a
                                    href="/Star-Services"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Star Services
                                    <FaAngleDown className="ml-3" />
                                  </a>

                                  {/* Second-level submenu: AI/ML - Add padding-left for hover bridge */}
                                  <ul className="absolute top-0 start-full min-w-[250px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full">
                                    <li className="relative">
                                      <a
                                        href="/AI-ML"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        AI/ML
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Automation"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Automation
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Web-app Scraping"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        Web/App Scraping
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                {/* First-level submenu: Digital Workplace */}
                                <li className="relative group/sub">
                                  <a
                                    href="/Digital-Workplace"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Digital Workplace
                                    <FaAngleDown className="ml-3" />
                                  </a>

                                  {/* Second-level submenu: */}
                                  <ul className="absolute top-0 start-full min-w-[300px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full">
                                    <li className="relative">
                                      <a
                                        href="/Web-development"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Web Development
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Mobile-app-development"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Mobile App Development
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/UI-UX-design"
                                        className="flex items-center justify-between border-b border-[#eeeeee] px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        UI-UX Design
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/SEO"
                                        className="flex items-center justify-between border-b border-[#eeeeee] px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        SEO
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Devops"
                                        className="flex items-center justify-between border-b border-[#eeeeee] px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        DevOps
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/DD-team"
                                        className="flex items-center justify-between border-b border-[#eeeeee] px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        Dedicated Development Team
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                {/* First-level submenu: platform */}
                                <li className="relative group/sub">
                                  <a
                                    href="/Platform"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Platform
                                    <FaAngleDown className="ml-3" />
                                  </a>

                                  {/* Second-level submenu: */}
                                  <ul className="absolute top-0 start-full min-w-[250px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full">
                                    <li className="relative">
                                      <a
                                        href="/Microsoft-Azure"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Microsoft Azure
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Amazon-web-service"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Amazon Web Services
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/google-cloud-platform"
                                        className="flex items-center justify-between border-b border-[#eeeeee] px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        Google Cloud Platform
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Shopify"
                                        className="flex items-center justify-between border-b border-[#eeeeee] px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        Shopify
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Wordpress"
                                        className="flex items-center justify-between border-b border-[#eeeeee] px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        Wordpress
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Bigcommerce"
                                        className="flex items-center justify-between border-b border-[#eeeeee] px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        Bigcommerce
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>

                            {/* Industry */}
                            <li className="relative inline-block mr-[40px] group">
                              <a
                                href="/Industry"
                                className="flex items-center text-[16px] font-sans font-semibold text-[#292f32] py-[20px] relative capitalize group-hover:text-blue-500"
                              >
                                Industry
                                <FaAngleDown className="ml-3 text-[#292f32] group-hover:text-blue-500" />
                              </a>
                              <ul className="absolute top-full start-0 min-w-[220px] z-[99999] invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 bg-white shadow-lg">
                                <li className="relative group/sub">
                                  <a
                                    href="/Fintech"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Fintech
                                  </a>
                                </li>
                                <li className="relative group/sub">
                                  <a
                                    href="/E-Commerce"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    E-Commerce
                                  </a>
                                </li>
                                <li className="relative group/sub">
                                  <a
                                    href="/Education"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Education
                                  </a>
                                </li>
                                <li className="relative group/sub">
                                  <a
                                    href="/Healthcare"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Healthcare
                                  </a>
                                </li>
                                <li className="relative group/sub">
                                  <a
                                    href="/Entertainment"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Entertainment
                                  </a>
                                </li>
                              </ul>
                            </li>

                            {/* Technology */}
                            <li className="relative inline-block mr-[40px] group">
                              <a
                                href="/Technology"
                                className="flex items-center text-[16px] font-sans font-semibold text-[#292f32] py-[20px] relative capitalize group-hover:text-blue-500"
                              >
                                Technology
                                <FaAngleDown className="ml-3 text-[#292f32] group-hover:text-blue-500" />
                              </a>
                              {/* First-level submenu: Backend */}
                              <ul className="absolute top-full start-0 min-w-[220px] z-[99999] invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 bg-white shadow-lg">
                                <li className="relative group/sub">
                                  <a
                                    href="/Backend"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Backend
                                    <FaAngleDown className="ml-3" />
                                  </a>

                                  {/* Second-level submenu: */}
                                  <ul className="absolute top-0 start-full min-w-[220px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full">
                                    <li className="relative">
                                      <a
                                        href="/Python"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Python
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Nord.Js"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Nord.Js
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                {/* First-level submenu: Frontend */}
                                <li className="relative group/sub">
                                  <a
                                    href="/Frontend"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Frontend
                                    <FaAngleDown className="ml-3" />
                                  </a>

                                  {/* Second-level submenu: */}
                                  <ul className="absolute top-0 start-full min-w-[250px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full">
                                    <li className="relative">
                                      <a
                                        href="/UI/UX"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        UI/UX
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Web Design"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Web Design
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/React Js"
                                        className="flex items-center justify-between border-b border-[#eeeeee] px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        React Js
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Next Js"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        Next Js
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                {/* First-level submenu: Mobile */}
                                <li className="relative group/sub">
                                  <a
                                    href="/Mobile"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Mobile
                                    <FaAngleDown className="ml-3" />
                                  </a>

                                  {/* Second-level submenu: */}
                                  <ul className="absolute top-0 start-full min-w-[250px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full">
                                    <li className="relative">
                                      <a
                                        href="/IOS Native"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        IOS Native
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Android Native"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Android Native
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Flutter"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        Flutter
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                {/* First-level submenu: Cloud */}
                                <li className="relative group/sub">
                                  <a
                                    href="/Cloud"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Cloud
                                    <FaAngleDown className="ml-3" />
                                  </a>

                                  {/* Second-level submenu: */}
                                  <ul className="absolute top-0 start-full min-w-[250px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full">
                                    <li className="relative">
                                      <a
                                        href="/Azure"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Azure
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/AWS"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        AWS
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/GCP"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        GCP
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                {/* First-level submenu: Q/A */}
                                <li className="relative group/sub">
                                  <a
                                    href="/Q/A"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Q/A
                                    <FaAngleDown className="ml-3" />
                                  </a>

                                  {/* Second-level submenu: */}
                                  <ul className="absolute top-0 start-full min-w-[250px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full">
                                    <li className="relative">
                                      <a
                                        href="/Automation Testing"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Automation Testing
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Software Testing"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Software Testing
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                {/* First-level submenu: Platform */}
                                <li className="relative group/sub">
                                  <a
                                    href="/Platform"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Platform
                                    <FaAngleDown className="ml-3" />
                                  </a>

                                  {/* Second-level submenu: */}
                                  <ul className="absolute top-0 start-full min-w-[250px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full">
                                    <li className="relative">
                                      <a
                                        href="/Shopify"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Shopify
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Wordpress"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300 border-b border-[#eeeeee]"
                                      >
                                        Wordpress
                                      </a>
                                    </li>
                                    <li className="relative">
                                      <a
                                        href="/Big Commerce"
                                        className="flex items-center justify-between px-[25px] py-[11px] w-full text-[#292f32] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                      >
                                        Big Commerce
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>

                            {/* Our Solutions */}
                            <li className="relative inline-block mr-[40px] group">
                              <a
                                href="/Our Solutions"
                                className="flex items-center text-[16px] font-sans font-semibold text-[#292f32] py-[20px] relative capitalize group-hover:text-blue-500"
                              >
                                Our Solutions
                                <FaAngleDown className="ml-3 text-[#292f32] group-hover:text-blue-500" />
                              </a>
                              <ul className="absolute top-full start-0 min-w-[220px] z-[99999] invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 bg-white shadow-lg">
                                <li className="relative group/sub">
                                  <a
                                    href="/FunFace"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    FunFace
                                  </a>
                                </li>
                                <li className="relative group/sub">
                                  <a
                                    href="/Classdekho"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Classdekho
                                  </a>
                                </li>
                                <li className="relative group/sub">
                                  <a
                                    href="/Aftermedi"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Aftermedi
                                  </a>
                                </li>
                                <li className="relative group/sub">
                                  <a
                                    href="/Billa-Patel-Samaj"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Billa-Patel-Samaj
                                  </a>
                                </li>
                                <li className="relative group/sub">
                                  <a
                                    href="/Trading-Wize"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Trading-Wize
                                  </a>
                                </li>
                              </ul>
                            </li>

                            {/* How we work */}
                            <li className="relative inline-block mr-[40px] group">
                              <a
                                href="/How We Work"
                                className="flex items-center text-[16px] font-sans font-semibold text-[#292f32] py-[20px] relative capitalize group-hover:text-blue-500"
                              >
                                How We Work
                                <FaAngleDown className="ml-3 text-[#292f32] group-hover:text-blue-500" />
                              </a>
                              <ul className="absolute top-full start-0 min-w-[220px] z-[99999] invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 bg-white shadow-lg">
                                <li className="relative group/sub">
                                  <a
                                    href="/How-We-Work"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    How We Work
                                  </a>
                                </li>
                                <li className="relative group/sub">
                                  <a
                                    href="/Careers"
                                    className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                  >
                                    Careers
                                  </a>
                                </li>
                              </ul>
                            </li>

                            {/* About */}
                            <li className="relative inline-block mr-[40px] group">
                              <a
                                href="/About"
                                className="flex items-center text-[16px] font-sans font-semibold text-[#292f32] py-[20px] relative capitalize group-hover:text-blue-500"
                              >
                                About
                              </a>
                            </li>

                            {/* Blog */}
                            <li className="relative inline-block mr-[40px] group">
                              <a
                                href="/Blog"
                                className="flex items-center text-[16px] font-sans font-semibold text-[#292f32] py-[20px] relative capitalize group-hover:text-blue-500"
                              >
                                Blog
                              </a>
                            </li>
                          </ul>

                          {/* Hamburger Menu */}
                          <li className="relative mr-[40px] group md:mr-0 md2:-mr-2 md1:-mr-10 sm:-mr-28 sm:px-9">
                            <button
                              onClick={() => setIsOpen(true)}
                              className="flex items-center text-[30px] font-sans font-semibold text-blue-500 py-[20px] relative"
                            >
                              <IoMenu />
                            </button>
                          </li>
                        </ul>
                      </nav>
                      {/* Side info menu */}
                      <div className="fix-area">
                        <div
                          className={`info-open fixed top-0 right-0 w-[400px] h-full bg-[#f4f6fa] border-l-2 border-l-[#1296df] 
    z-[99999] overflow-y-scroll transition-transform duration-[450ms] ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                        >
                          <div className="info-open-wrapper relative h-full py-8 px-12">
                            <div className="info-open-contant">
                              <div className="open-info-top flex justify-between items-center mb-12">
                                <div className="open-top-logo">
                                  <a href="/">
                                    <img
                                      src={img}
                                      alt="logo"
                                      className="align-middle"
                                    />
                                  </a>
                                </div>
                                <div className="open-info-close w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] relative z-[9] cursor-pointer">
                                  <button onClick={() => setIsOpen(false)}>
                                    <IoMdClose className="text-white text-[26px]" />
                                  </button>
                                </div>
                              </div>
                              {/* Mobile menu start */}
                              <div className="mobile-menu block 2xl:hidden mb-3 overflow-visible text-[14px] xs:text-[15px] sm:text-[17px]">
                                <ul>
                                  {/* Services / Star Services Toggle */}
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                    <a
                                      href="/Services"
                                      className="font-medium text-[17px]"
                                    >
                                      Services
                                    </a>
                                    <button
                                      onClick={() =>
                                        setIsStarServicesOpen(
                                          !isStarServicesOpen
                                        )
                                      }
                                    >
                                      <FaPlus
                                        className={`transition-transform duration-300 ${
                                          isStarServicesOpen
                                            ? "rotate-45"
                                            : "rotate-0"
                                        }`}
                                      />
                                    </button>
                                  </li>

                                  {/* Star Services Submenu */}
                                  <ul
                                    className={`overflow-hidden transition-[max-height] duration-300 ${
                                      isStarServicesOpen
                                        ? "max-h-96"
                                        : "max-h-0"
                                    }`}
                                  >
                                    {/* Nested Star Services item */}
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Star-services"
                                        className="font-medium text-[17px]"
                                      >
                                        Star Services
                                      </a>
                                      <button
                                        onClick={() =>
                                          setIsInsideStarOpen(!isInsideStarOpen)
                                        }
                                      >
                                        <FaPlus
                                          className={`transition-transform duration-300 ${
                                            isInsideStarOpen
                                              ? "rotate-45"
                                              : "rotate-0"
                                          }`}
                                        />
                                      </button>
                                    </li>

                                    {/* Inside Star Services Submenu */}
                                    <ul
                                      className={`overflow-hidden transition-[max-height] duration-300 ${
                                        isInsideStarOpen
                                          ? "max-h-60"
                                          : "max-h-0"
                                      }`}
                                    >
                                      <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-16 hover:text-blue-500 transition-colors duration-300">
                                        <a
                                          href="/ai-ml"
                                          className="font-medium text-[17px]"
                                        >
                                          AI-ML
                                        </a>
                                      </li>

                                      <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-16 hover:text-blue-500 transition-colors duration-300">
                                        <a
                                          href="/Automation"
                                          className="font-medium text-[17px]"
                                        >
                                          AutoMation
                                        </a>
                                      </li>
                                      <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-16 hover:text-blue-500 transition-colors duration-300">
                                        <a
                                          href="/web-app-scraping"
                                          className="font-medium text-[17px]"
                                        >
                                          Web/App Scraping
                                        </a>
                                      </li>
                                    </ul>

                                    {/* Other items */}
                                    <ul>
                                      {/* Digital Workplace */}
                                      <li className="flex flex-col">
                                        <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                          <a
                                            href="/Digital-workplace"
                                            className="font-medium text-[17px]"
                                          >
                                            Digital Workplace
                                          </a>
                                          <button
                                            onClick={() =>
                                              setIsDigitalOpen(!isDigitalOpen)
                                            }
                                          >
                                            <FaPlus
                                              className={`transition-transform duration-300 ${
                                                isDigitalOpen
                                                  ? "rotate-45"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>

                                        {/* Inside Digital Workplace submenu */}
                                        <ul
                                          className={`overflow-hidden transition-[max-height] duration-500 ${
                                            isDigitalOpen
                                              ? "max-h-[1000px]"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] ">
                                            <a
                                              href="/Web-Development"
                                              className="font-medium text-[16px] text-[#292f32] hover:text-blue-500 transition-colors duration-300"
                                            >
                                              Web Development
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 transition-colors duration-300 border-b-[2px]">
                                            <a
                                              href="/Mobile-app-development"
                                              className="font-medium text-[16px]"
                                            >
                                              Mobile App Development
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/UI-UX-Design"
                                              className="font-medium text-[16px]"
                                            >
                                              UI/UX Design
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500 transition-colors duration-300">
                                            <a
                                              href="/SEO"
                                              className="font-medium text-[16px]"
                                            >
                                              SEO
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/DevOps"
                                              className="font-medium text-[16px]"
                                            >
                                              DevOps
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/Dedicated-Development-Team"
                                              className="font-medium text-[16px]"
                                            >
                                              Dedicated Development Team
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>

                                    <ul>
                                      {/* Platform main item */}
                                      <li className="flex flex-col">
                                        <div className="flex items-center justify-between text-[#292f32] py-2 pl-8 hover:text-blue-500 transition-colors duration-300 border-b-[2px]">
                                          <span className="font-medium text-[17px]">
                                            Platform
                                          </span>
                                          <button
                                            onClick={() =>
                                              setIsPlatformOpen(!isPlatformOpen)
                                            }
                                          >
                                            <FaPlus
                                              className={`transition-transform duration-300 ${
                                                isPlatformOpen
                                                  ? "rotate-45"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>

                                        {/* Inside Platform submenu */}
                                        <ul
                                          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                                            isPlatformOpen
                                              ? "max-h-[2000px]"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px]">
                                            <a
                                              href="/Web-Development"
                                              className="font-medium text-[16px] text-[#292f32] hover:text-blue-500 transition-colors duration-300"
                                            >
                                              Web Development
                                            </a>
                                          </li>

                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/Mobile-app-development"
                                              className="font-medium text-[16px]"
                                            >
                                              Mobile App Development
                                            </a>
                                          </li>

                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/UI-UX-Design"
                                              className="font-medium text-[16px]"
                                            >
                                              UI/UX Design
                                            </a>
                                          </li>

                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/SEO"
                                              className="font-medium text-[16px]"
                                            >
                                              SEO
                                            </a>
                                          </li>

                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/DevOps"
                                              className="font-medium text-[16px]"
                                            >
                                              DevOps
                                            </a>
                                          </li>

                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/Dedicated-Development-Team"
                                              className="font-medium text-[16px]"
                                            >
                                              Dedicated Development Team
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </ul>

                                  {/* Industry */}
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                    <a
                                      href="/Industry"
                                      className="font-medium text-[17px]"
                                    >
                                      Industry
                                    </a>
                                    <button
                                      onClick={() =>
                                        setIsStarIndOpen(!isStarIndOpen)
                                      }
                                    >
                                      <FaPlus
                                        className={`transition-transform duration-300 ${
                                          isStarIndOpen
                                            ? "rotate-45"
                                            : "rotate-0"
                                        }`}
                                      />
                                    </button>
                                  </li>
                                  {/* Submenu of Industry */}
                                  <ul
                                    className={`overflow-hidden transition-[max-height] duration-300 ${
                                      isStarIndOpen ? "max-h-96" : "max-h-0"
                                    }`}
                                  >
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Fintech"
                                        className="font-medium text-[17px]"
                                      >
                                        Fintech
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/E-Commerce"
                                        className="font-medium text-[17px]"
                                      >
                                        E-Commerce
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Education"
                                        className="font-medium text-[17px]"
                                      >
                                        Education
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Healthcare"
                                        className="font-medium text-[17px]"
                                      >
                                        Healthcare
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Entertainment"
                                        className="font-medium text-[17px]"
                                      >
                                        Entertainment
                                      </a>
                                    </li>
                                  </ul>
                                  {/* Technology Main */}
                                  <li className="flex flex-col">
                                    <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Technology"
                                        className="font-medium text-[17px]"
                                      >
                                        Technology
                                      </a>
                                      <button
                                        onClick={() =>
                                          setIsStarTechOpen(!isStarTechOpen)
                                        }
                                      >
                                        <FaPlus
                                          className={`transition-transform duration-300 ${
                                            isStarTechOpen
                                              ? "rotate-45"
                                              : "rotate-0"
                                          }`}
                                        />
                                      </button>
                                    </div>

                                    {/* submenu */}
                                    <ul
                                      className={`overflow-hidden transition-[max-height] duration-500 ${
                                        isStarTechOpen
                                          ? "max-h-[2000px]"
                                          : "max-h-0"
                                      }`}
                                    >
                                      {/* Backend*/}
                                      <li className="flex flex-col">
                                        <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                          <a
                                            href="/Backend"
                                            className="font-medium text-[17px]"
                                          >
                                            Backend
                                          </a>
                                          <button
                                            onClick={() =>
                                              setIsInsideStarOpen(
                                                !isInsideStarOpen
                                              )
                                            }
                                          >
                                            <FaPlus
                                              className={`transition-transform duration-300 ${
                                                isInsideStarOpen
                                                  ? "rotate-45"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>

                                        {/* Inside submenu */}
                                        <ul
                                          className={`overflow-hidden transition-[max-height] duration-500 ${
                                            isInsideStarOpen
                                              ? "max-h-[500px]"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/Python"
                                              className="font-medium text-[16px]"
                                            >
                                              Python
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/Nord js"
                                              className="font-medium text-[16px]"
                                            >
                                              Nord js
                                            </a>
                                          </li>
                                        </ul>
                                      </li>

                                      {/* Frontend */}
                                      <li className="flex flex-col">
                                        <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                          <a
                                            href="/Frontend"
                                            className="font-medium text-[17px]"
                                          >
                                            Frontend
                                          </a>
                                          <button
                                            onClick={() =>
                                              setIsDigitalOpen(!isDigitalOpen)
                                            }
                                          >
                                            <FaPlus
                                              className={`transition-transform duration-300 ${
                                                isDigitalOpen
                                                  ? "rotate-45"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>

                                        <ul
                                          className={`overflow-hidden transition-[max-height] duration-500 ${
                                            isDigitalOpen
                                              ? "max-h-[800px]"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/React Js"
                                              className="font-medium text-[16px]"
                                            >
                                              React Js
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/Next Js"
                                              className="font-medium text-[16px]"
                                            >
                                              Next Js
                                            </a>
                                          </li>
                                        </ul>
                                      </li>

                                      {/* Mobile */}
                                      <li className="flex flex-col">
                                        <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                          <a
                                            href="/Mobile"
                                            className="font-medium text-[17px]"
                                          >
                                            Mobile
                                          </a>
                                          <button
                                            onClick={() =>
                                              setIsPlatformOpen(!isPlatformOpen)
                                            }
                                          >
                                            <FaPlus
                                              className={`transition-transform duration-300 ${
                                                isPlatformOpen
                                                  ? "rotate-45"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>

                                        <ul
                                          className={`overflow-hidden transition-[max-height] duration-500 ${
                                            isPlatformOpen
                                              ? "max-h-[1000px]"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/IOS Native"
                                              className="font-medium text-[16px] text-[#292f32]"
                                            >
                                              IOS Native
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/Android Native"
                                              className="font-medium text-[16px] text-[#292f32]"
                                            >
                                              Android Native
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/Flutter"
                                              className="font-medium text-[16px] text-[#292f32]"
                                            >
                                              Flutter
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      {/* Cloud */}
                                      <li className="flex flex-col">
                                        <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                          <a
                                            href="/Cloud"
                                            className="font-medium text-[17px]"
                                          >
                                            Cloud
                                          </a>
                                          <button
                                            onClick={() =>
                                              setIsCloudOpen(!isCloudOpen)
                                            }
                                          >
                                            <FaPlus
                                              className={`transition-transform duration-300 ${
                                                isCloudOpen
                                                  ? "rotate-45"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>

                                        <ul
                                          className={`overflow-hidden transition-[max-height] duration-500 ${
                                            isCloudOpen
                                              ? "max-h-[1000px]"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/Azure"
                                              className="font-medium text-[16px] text-[#292f32]"
                                            >
                                              Azure
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/AWS"
                                              className="font-medium text-[16px] text-[#292f32]"
                                            >
                                              AWS
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/GCP"
                                              className="font-medium text-[16px] text-[#292f32]"
                                            >
                                              GCP
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      {/* QA */}
                                      <li className="flex flex-col">
                                        <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                          <a
                                            href="/Q/A"
                                            className="font-medium text-[17px]"
                                          >
                                            Q/A
                                          </a>
                                          <button
                                            onClick={() =>
                                              setIsQAOpen(!isQAOpen)
                                            }
                                          >
                                            <FaPlus
                                              className={`transition-transform duration-300 ${
                                                isQAOpen
                                                  ? "rotate-45"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>

                                        <ul
                                          className={`overflow-hidden transition-[max-height] duration-500 ${
                                            isQAOpen
                                              ? "max-h-[1000px]"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/Automation Testing"
                                              className="font-medium text-[16px] text-[#292f32]"
                                            >
                                              Automation Testing
                                            </a>
                                          </li>
                                          <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                            <a
                                              href="/Software Testing"
                                              className="font-medium text-[16px] text-[#292f32]"
                                            >
                                              Software Testing
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      {/* Platform main item */}
                                      <li className="flex flex-col">
                                        <div className="flex items-center justify-between text-[#292f32] py-2 pl-8 hover:text-blue-500 transition-colors duration-300 border-b-[2px]">
                                          <span className="font-medium text-[17px]">
                                            Platform
                                          </span>
                                          <button
                                            onClick={() =>
                                              setIsPlatform1Open(
                                                !isPlatform1Open
                                              )
                                            }
                                          >
                                            <FaPlus
                                              className={`transition-transform duration-300 ${
                                                isPlatform1Open
                                                  ? "rotate-45"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>

                                        {/* Inside Platform submenu */}
                                        <ul
                                          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                                            isPlatform1Open
                                              ? "max-h-[2000px]"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px]">
                                            <a
                                              href="/Shopify"
                                              className="font-medium text-[16px] text-[#292f32] hover:text-blue-500 transition-colors duration-300"
                                            >
                                              Shopify
                                            </a>
                                          </li>

                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/Wordpress"
                                              className="font-medium text-[16px]"
                                            >
                                              Wordpress
                                            </a>
                                          </li>

                                          <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                            <a
                                              href="/E-commerce"
                                              className="font-medium text-[16px]"
                                            >
                                              E-commerce
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                                {/* our solutions */}
                                <ul>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                    <a
                                      href="/Our Solutions"
                                      className="font-medium text-[17px]"
                                    >
                                      Our Solutions
                                    </a>
                                    <button
                                      onClick={() => setIsOurOpen(!isOurOpen)}
                                    >
                                      <FaPlus
                                        className={`transition-transform duration-300 ${
                                          isOurOpen ? "rotate-45" : "rotate-0"
                                        }`}
                                      />
                                    </button>
                                  </li>
                                  {/* Submenu of Our solutions */}
                                  <ul
                                    className={`overflow-hidden transition-[max-height] duration-300 ${
                                      isOurOpen ? "max-h-96" : "max-h-0"
                                    }`}
                                  >
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Funface"
                                        className="font-medium text-[17px]"
                                      >
                                        Funface
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Classdekho"
                                        className="font-medium text-[17px]"
                                      >
                                        Classdekho
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Aftermedi"
                                        className="font-medium text-[17px]"
                                      >
                                        Aftermedi
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Billa-Patel-Samaj"
                                        className="font-medium text-[17px]"
                                      >
                                        Billa-Patel-Samaj
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Trading-Wiza"
                                        className="font-medium text-[17px]"
                                      >
                                        Trading-Wiza
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                                {/* How we work */}
                                <ul>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                    <a
                                      href="/How-We-Work"
                                      className="font-medium text-[17px]"
                                    >
                                      How We Work
                                    </a>
                                    <button
                                      onClick={() => setIsWorkOpen(!isWorkOpen)}
                                    >
                                      <FaPlus
                                        className={`transition-transform duration-300 ${
                                          isWorkOpen ? "rotate-45" : "rotate-0"
                                        }`}
                                      />
                                    </button>
                                  </li>
                                  {/* Submenu of Our solutions */}
                                  <ul
                                    className={`overflow-hidden transition-[max-height] duration-300 ${
                                      isWorkOpen ? "max-h-96" : "max-h-0"
                                    }`}
                                  >
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/How-We-Work"
                                        className="font-medium text-[17px]"
                                      >
                                        How We Work
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a
                                        href="/Careers"
                                        className="font-medium text-[17px]"
                                      >
                                        Careers
                                      </a>
                                    </li>
                                  </ul>

                                  <li className=" text-[#292f32] border-b-[2px] py-2 pl-4 hover:text-blue-500 transition-colors duration-300">
                                    <a
                                      href="/About-Us"
                                      className="font-medium text-[17px]"
                                    >
                                      About Us
                                    </a>
                                  </li>
                                  <li className=" text-[#292f32] border-b-[2px] py-2 pl-4 hover:text-blue-500 transition-colors duration-300">
                                    <a
                                      href="/Blog"
                                      className="font-medium text-[17px]"
                                    >
                                      Blog
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* Mobile menu end */}

                              <div className="info-open-contact mt-[20px] px-2 xs:px-4">
                                <h4 className="text-[20px] font-bold leading-[130%]">
                                  Contact Info
                                </h4>
                                <ul className="mt-5">
                                  <li className="mb-[15px] flex items-center">
                                    <div className="open-contact-logo mr-5">
                                      <IoLocationOutline className="text-blue-500" />
                                    </div>
                                    <div className="open-contact-text">
                                      <a
                                        className="text-[#585858] font-semibold"
                                        target="_blank"
                                        href="https://maps.app.goo.gl/1XV2A3Kz7rYqWvpw7"
                                      >
                                        401, Vishvambhar Arcade, Nr. Yamuna
                                        chowk, Mota Varachha,&nbsp;Surat -
                                        394101.
                                      </a>
                                    </div>
                                  </li>
                                  <li className="mb-[15px] flex items-center">
                                    <div className="open-contact-logo mr-5">
                                      <FiMail className="text-blue-500" />
                                    </div>
                                    <div className="open-contact-text">
                                      <a
                                        href="mailto:info@azent.com"
                                        className="text-[#585858] font-semibold"
                                      >
                                        <span class="mailto:info@bitcodingsolutions.com">
                                          info@bitcodingsolutions.com
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li className="mb-[15px] flex items-center">
                                    <div className="open-contact-logo mr-5">
                                      <FaCalendar className="text-blue-500" />
                                    </div>
                                    <div className="open-contact-text">
                                      <a
                                        href="_blank"
                                        className="text-[#585858] font-semibold"
                                      >
                                        Mon-Fri
                                      </a>
                                    </div>
                                  </li>
                                  <li className="mb-[15px] flex items-center">
                                    <div className="open-contact-logo mr-5">
                                      <GoClock className="text-blue-500" />
                                    </div>
                                    <div className="open-contact-text">
                                      <a
                                        href="_blank"
                                        className="text-[#585858] font-semibold"
                                      >
                                        09:00 AM - 06:00 PM
                                      </a>
                                    </div>
                                  </li>
                                  <li className="mb-[15px] flex items-center">
                                    <div className="open-contact-logo mr-5">
                                      <FaPhoneVolume className="text-blue-500" />
                                    </div>
                                    <div className="open-contact-text">
                                      <a
                                        className="text-[#585858] font-semibold"
                                        href="tel:9099078077"
                                      >
                                        +91 9099078077
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                                <div className="header-button mt-6 flex items-center justify-center">
                                  <a
                                    href="/contact"
                                    className="w-full py-5 px-10 text-white bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] 
               inline-flex items-center justify-center font-semibold 
               transition-all duration-300 ease-in-out relative z-[1] leading-[1] rounded-[5px] 
               group"
                                  >
                                    <span className="flex items-center space-x-2">
                                      <span>Get A Quote</span>
                                      <FaArrowRightLong className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                                    </span>
                                  </a>
                                </div>
                                <div className="social-icon mt-[30px] pb-5 flex items-center gap-[10px]">
                                  <a
                                    href="https://www.facebook.com/Bitcodings"
                                    target="_blank"
                                    className="w-[45px] h-[45px] flex items-center justify-center 
               rounded-full border border-[#e3e3e3] 
               text-[#585858] bg-transparent
               transition-colors duration-300 ease-in-out
               hover:bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] hover:text-white"
                                  >
                                    <FaFacebookF />
                                  </a>
                                  <a
                                    href="https://www.facebook.com/Bitcodings"
                                    target="_blank"
                                    className="w-[45px] h-[45px] flex items-center justify-center 
               rounded-full border border-[#e3e3e3] 
               text-[#585858] bg-transparent
               transition-colors duration-300 ease-in-out
               hover:bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] hover:text-white"
                                  >
                                    <FaYoutube />
                                  </a>
                                  <a
                                    href="https://www.facebook.com/Bitcodings"
                                    target="_blank"
                                    className="w-[45px] h-[45px] flex items-center justify-center 
               rounded-full border border-[#e3e3e3] 
               text-[#585858] bg-transparent
               transition-colors duration-300 ease-in-out
               hover:bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] hover:text-white"
                                  >
                                    <FaLinkedin />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo and Menu Bar End Here */}
      </div>
    </>
  );
};

export default Navbar;
