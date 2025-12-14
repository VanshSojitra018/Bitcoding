import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaPhoneVolume, FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaYoutube, FaAngleDown, FaCalendar } from "react-icons/fa";
import { IoMenu, IoClose, IoLocationOutline } from "react-icons/io5";

import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";
import img from "../assets/black-logo.png";

const Navbar = () => {
  // Menu state management
  const [menuState, setMenuState] = useState({
    isOpen: false,
    isStarServicesOpen: false,
    isInsideStarOpen: false,
    isDigitalOpen: false,
    isPlatformOpen: false,
    isStarIndOpen: false,
    isStarTechOpen: false,
    isCloudOpen: false,
    isQAOpen: false,
    isPlatform1Open: false,
    isOurOpen: false,
    isWorkOpen: false,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle individual menu items
  const toggleMenu = (menuName) => {
    setMenuState((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  // Close all mobile menus
  const closeMobileMenu = () => {
    setMenuState({
      isOpen: false,
      isStarServicesOpen: false,
      isInsideStarOpen: false,
      isDigitalOpen: false,
      isPlatformOpen: false,
      isStarIndOpen: false,
      isStarTechOpen: false,
      isCloudOpen: false,
      isQAOpen: false,
      isPlatform1Open: false,
      isOurOpen: false,
      isWorkOpen: false,
    });
  };

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contact information
  const contactInfo = {
    email: "info@bitcodingsolutions.com",
    phone: "+91 9099078077",
    address: "401, Vishvambhar Arcade, Nr. Yamuna chowk, Mota Varachha, Surat - 394101.",
    hours: "09:00 AM - 06:00 PM",
    days: "Mon-Fri",
  };

  // Social media links
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/Bitcodings", icon: FaFacebookF },
    { name: "LinkedIn", url: "https://in.linkedin.com/company/bitcodingsolutions", icon: FaLinkedin },
    { name: "YouTube", url: "https://in.linkedin.com/company/bitcodingsolutions", icon: FaYoutube },
  ];

  // Desktop menu structure
  const desktopMenuItems = [
    {
      name: "Services",
      link: "/service",
      submenu: [
        {
          name: "Star Services",
          link: "/Star-Services",
          submenu: [
            { name: "AI/ML", link: "/AI-ML" },
            { name: "Automation", link: "/Automation" },
            { name: "Web/App Scraping", link: "/Web-app Scraping" },
          ],
        },
        {
          name: "Digital Workplace",
          link: "/Digital-Workplace",
          submenu: [
            { name: "Web Development", link: "/Web-development" },
            { name: "Mobile App Development", link: "/Mobile-app-development" },
            { name: "UI-UX Design", link: "/UI-UX-design" },
            { name: "SEO", link: "/SEO" },
            { name: "DevOps", link: "/Devops" },
            { name: "Dedicated Development Team", link: "/DD-team" },
          ],
        },
        {
          name: "Platform",
          link: "/Platform",
          submenu: [
            { name: "Microsoft Azure", link: "/Microsoft-Azure" },
            { name: "Amazon Web Services", link: "/Amazon-web-service" },
            { name: "Google Cloud Platform", link: "/google-cloud-platform" },
            { name: "Shopify", link: "/Shopify" },
            { name: "Wordpress", link: "/Wordpress" },
            { name: "Bigcommerce", link: "/Bigcommerce" },
          ],
        },
      ],
    },
    {
      name: "Industry",
      link: "/Industry",
      submenu: [
        { name: "Fintech", link: "/Fintech" },
        { name: "E-Commerce", link: "/E-Commerce" },
        { name: "Education", link: "/Education" },
        { name: "Healthcare", link: "/Healthcare" },
        { name: "Entertainment", link: "/Entertainment" },
      ],
    },
    {
      name: "Technology",
      link: "/Technology",
      submenu: [
        {
          name: "Backend",
          link: "/Backend",
          submenu: [
            { name: "Python", link: "/Python" },
            { name: "Nord.Js", link: "/Nord.Js" },
          ],
        },
        {
          name: "Frontend",
          link: "/Frontend",
          submenu: [
            { name: "UI/UX", link: "/UI/UX" },
            { name: "Web Design", link: "/Web Design" },
            { name: "React Js", link: "/React Js" },
            { name: "Next Js", link: "/Next Js" },
          ],
        },
        {
          name: "Mobile",
          link: "/Mobile",
          submenu: [
            { name: "IOS Native", link: "/IOS Native" },
            { name: "Android Native", link: "/Android Native" },
            { name: "Flutter", link: "/Flutter" },
          ],
        },
        {
          name: "Cloud",
          link: "/Cloud",
          submenu: [
            { name: "Azure", link: "/Azure" },
            { name: "AWS", link: "/AWS" },
            { name: "GCP", link: "/GCP" },
          ],
        },
        {
          name: "Q/A",
          link: "/Q/A",
          submenu: [
            { name: "Automation Testing", link: "/Automation Testing" },
            { name: "Software Testing", link: "/Software Testing" },
          ],
        },
        {
          name: "Platform",
          link: "/Platform",
          submenu: [
            { name: "Shopify", link: "/Shopify" },
            { name: "Wordpress", link: "/Wordpress" },
            { name: "Big Commerce", link: "/Big Commerce" },
          ],
        },
      ],
    },
    {
      name: "Our Solutions",
      link: "/Our Solutions",
      submenu: [
        { name: "FunFace", link: "/FunFace" },
        { name: "Classdekho", link: "/Classdekho" },
        { name: "Aftermedi", link: "/Aftermedi" },
        { name: "Billa-Patel-Samaj", link: "/Billa-Patel-Samaj" },
        { name: "Trading-Wize", link: "/Trading-Wize" },
      ],
    },
    {
      name: "How We Work",
      link: "/How We Work",
      submenu: [
        { name: "How We Work", link: "/How-We-Work" },
        { name: "Careers", link: "/Careers" },
      ],
    },
    { name: "About", link: "/About" },
    { name: "Blog", link: "/Blog" },
  ];

  // Render desktop submenu items
  const renderDesktopSubmenu = (items, level = 1) => {
    const submenuClasses = level === 1 
      ? "absolute top-full start-0 min-w-[220px] z-[99999] invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 bg-white shadow-lg"
      : "absolute top-0 start-full min-w-[250px] z-[99999] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-lg before:content-[''] before:absolute before:top-0 before:right-full before:w-[20px] before:h-full";

    return (
      <ul className={submenuClasses}>
        {items.map((item, index) => (
          <li key={index} className="relative group/sub">
            <a
              href={item.link}
              className="flex items-center justify-between text-[16px] text-[#292f32] font-semibold px-[25px] py-[11px] w-full border-b border-[#eeeeee] hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              {item.name}
              {item.submenu && <FaAngleDown className="ml-3" />}
            </a>
            {item.submenu && renderDesktopSubmenu(item.submenu, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  // Render mobile menu items
  const renderMobileMenuItem = (item, parentKey = "", level = 0) => {
    const menuKey = `${parentKey}${item.name.replace(/\s+/g, "")}`;
    const isOpen = menuState[menuKey] || false;
    const paddingClass = level === 0 ? "px-4" : `pl-${8 * (level + 1)}`;

    return (
      <li key={menuKey} className="flex flex-col">
        <div className={`flex items-center justify-between text-[#292f32] border-b-[2px] py-2 ${paddingClass} hover:text-blue-500 transition-colors duration-300`}>
          <a href={item.link} className="font-medium text-[17px]">
            {item.name}
          </a>
          {item.submenu && (
            <button onClick={() => toggleMenu(menuKey)}>
              <FaPlus
                className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
              />
            </button>
          )}
        </div>
        {item.submenu && (
          <ul
            className={`overflow-hidden transition-[max-height] duration-500 ${
              isOpen ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            {item.submenu.map((subItem) => renderMobileMenuItem(subItem, menuKey, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="block">
      {/* Top Bar - Contact Info & Social Media */}
      <div className="py-[10px] overflow-hidden relative bg-[#292f32] z-[99] hidden lg1:block">
        <div className="px-[130px]">
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-[25px]">
              <li className="text-[15px] flex items-center">
                <FiMail className="mr-[10px] text-white" />
                <a
                  className="text-[15px] font-normal text-[#ffffffcc] font-sans"
                  href={`mailto:${contactInfo.email}`}
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-[15px] flex items-center">
                <FaPhoneVolume className="mr-[10px] text-white" />
                <a
                  className="text-[15px] font-normal text-[#ffffffcc] font-sans"
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              <div className="flex items-center gap-[15px]">
                <span className="text-[#ffffffcc] font-medium">Follow Us:</span>
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="text-white text-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="z-[100] transition-all duration-300 bg-white">
        <div className="px-[130px] w-full mx-auto">
          <div className="menu-wrapper">
            <div className="flex items-center justify-between py-[10px]">
              {/* Logo */}
              <div className="header-left">
                <div className="logo md1:-ml-16 sm1:-ml-16 sm:-ml-24">
                  <a href="/">
                    <img src={img} alt="Logo" />
                  </a>
                </div>
              </div>

              {/* Desktop & Mobile Menu */}
              <div className="header-right">
                <div className="menu-bar">
                  <div className="menu-bar-wrapper">
                    <nav className="block">
                      <ul className="flex items-center">
                        {/* Desktop Menu */}
                        <ul className="hidden 2xl:block">
                          {desktopMenuItems.map((item, index) => (
                            <li key={index} className="relative inline-block mr-[40px] group">
                              {item.submenu ? (
                                <>
                                  <Link
                                    to={item.link}
                                    className="flex items-center text-[16px] font-sans font-semibold text-[#292f32] py-[20px] relative capitalize group-hover:text-blue-500"
                                  >
                                    {item.name}
                                    <FaAngleDown className="ml-3 text-[#292f32] group-hover:text-blue-500" />
                                  </Link>
                                  {renderDesktopSubmenu(item.submenu)}
                                </>
                              ) : (
                                <a
                                  href={item.link}
                                  className="flex items-center text-[16px] font-sans font-semibold text-[#292f32] py-[20px] relative capitalize group-hover:text-blue-500"
                                >
                                  {item.name}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>

                        {/* Hamburger Menu Button */}
                        <li className="relative mr-[40px] group md:mr-0 md2:-mr-2 md1:-mr-10 sm:-mr-28 sm:px-9">
                          <button
                            onClick={() => toggleMenu("isOpen")}
                            className="flex items-center text-[30px] font-sans font-semibold text-blue-500 py-[20px] relative"
                            aria-label="Open menu"
                          >
                            <IoMenu />
                          </button>
                        </li>
                      </ul>
                    </nav>

                    {/* Mobile Sidebar Menu */}
                    <div className="fix-area">
                      <div
                        className={`info-open fixed top-0 right-0 w-[400px] h-full bg-[#f4f6fa] border-l-2 border-l-[#1296df] z-[99999] overflow-y-scroll transition-transform duration-[450ms] ease-in-out ${
                          menuState.isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                      >
                        <div className="info-open-wrapper relative h-full py-8 px-12">
                          <div className="info-open-contant">
                            {/* Mobile Menu Header */}
                            <div className="open-info-top flex justify-between items-center mb-12">
                              <div className="open-top-logo">
                                <a href="/">
                                  <img src={img} alt="logo" className="align-middle" />
                                </a>
                              </div>
                              <div className="open-info-close w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] relative z-[9] cursor-pointer">
                                <button onClick={closeMobileMenu} aria-label="Close menu">
                                  <IoClose className="text-white text-[26px]" />
                                </button>
                              </div>
                            </div>

                            {/* Mobile Menu Items */}
                            <div className="mobile-menu block 2xl:hidden mb-3 overflow-visible text-[14px] xs:text-[15px] sm:text-[17px]">
                              <ul>
                                <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                  <Link
                                    to="/service"
                                    className="font-medium text-[17px]"
                                    onClick={closeMobileMenu}
                                  >
                                    Services
                                  </Link>
                                  <button onClick={() => toggleMenu("isStarServicesOpen")}>
                                    <FaPlus
                                      className={`transition-transform duration-300 ${
                                        menuState.isStarServicesOpen ? "rotate-45" : "rotate-0"
                                      }`}
                                    />
                                  </button>
                                </li>

                                {/* Star Services Submenu */}
                                <ul
                                  className={`overflow-hidden transition-[max-height] duration-300 ${
                                    menuState.isStarServicesOpen ? "max-h-96" : "max-h-0"
                                  }`}
                                >
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Star-services" className="font-medium text-[17px]">
                                      Star Services
                                    </a>
                                    <button onClick={() => toggleMenu("isInsideStarOpen")}>
                                      <FaPlus
                                        className={`transition-transform duration-300 ${
                                          menuState.isInsideStarOpen ? "rotate-45" : "rotate-0"
                                        }`}
                                      />
                                    </button>
                                  </li>

                                  <ul
                                    className={`overflow-hidden transition-[max-height] duration-300 ${
                                      menuState.isInsideStarOpen ? "max-h-60" : "max-h-0"
                                    }`}
                                  >
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-16 hover:text-blue-500 transition-colors duration-300">
                                      <a href="/ai-ml" className="font-medium text-[17px]">
                                        AI-ML
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-16 hover:text-blue-500 transition-colors duration-300">
                                      <a href="/Automation" className="font-medium text-[17px]">
                                        AutoMation
                                      </a>
                                    </li>
                                    <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-16 hover:text-blue-500 transition-colors duration-300">
                                      <a href="/web-app-scraping" className="font-medium text-[17px]">
                                        Web/App Scraping
                                      </a>
                                    </li>
                                  </ul>

                                  {/* Digital Workplace */}
                                  <li className="flex flex-col">
                                    <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                      <a href="/Digital-workplace" className="font-medium text-[17px]">
                                        Digital Workplace
                                      </a>
                                      <button onClick={() => toggleMenu("isDigitalOpen")}>
                                        <FaPlus
                                          className={`transition-transform duration-300 ${
                                            menuState.isDigitalOpen ? "rotate-45" : "rotate-0"
                                          }`}
                                        />
                                      </button>
                                    </div>

                                    <ul
                                      className={`overflow-hidden transition-[max-height] duration-500 ${
                                        menuState.isDigitalOpen ? "max-h-[1000px]" : "max-h-0"
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
                                      <li className="flex items-center py-2 pl-16 hover:text-blue-500 transition-colors duration-300 border-b-[2px]">
                                        <a
                                          href="/Mobile-app-development"
                                          className="font-medium text-[16px]"
                                        >
                                          Mobile App Development
                                        </a>
                                      </li>
                                      <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                        <a href="/UI-UX-Design" className="font-medium text-[16px]">
                                          UI/UX Design
                                        </a>
                                      </li>
                                      <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500 transition-colors duration-300">
                                        <a href="/SEO" className="font-medium text-[16px]">
                                          SEO
                                        </a>
                                      </li>
                                      <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                        <a href="/DevOps" className="font-medium text-[16px]">
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

                                  {/* Platform */}
                                  <li className="flex flex-col">
                                    <div className="flex items-center justify-between text-[#292f32] py-2 pl-8 hover:text-blue-500 transition-colors duration-300 border-b-[2px]">
                                      <span className="font-medium text-[17px]">Platform</span>
                                      <button onClick={() => toggleMenu("isPlatformOpen")}>
                                        <FaPlus
                                          className={`transition-transform duration-300 ${
                                            menuState.isPlatformOpen ? "rotate-45" : "rotate-0"
                                          }`}
                                        />
                                      </button>
                                    </div>

                                    <ul
                                      className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                                        menuState.isPlatformOpen ? "max-h-[2000px]" : "max-h-0"
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
                                        <a href="/UI-UX-Design" className="font-medium text-[16px]">
                                          UI/UX Design
                                        </a>
                                      </li>
                                      <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                        <a href="/SEO" className="font-medium text-[16px]">
                                          SEO
                                        </a>
                                      </li>
                                      <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                        <a href="/DevOps" className="font-medium text-[16px]">
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

                                {/* Industry */}
                                <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                  <a href="/Industry" className="font-medium text-[17px]">
                                    Industry
                                  </a>
                                  <button onClick={() => toggleMenu("isStarIndOpen")}>
                                    <FaPlus
                                      className={`transition-transform duration-300 ${
                                        menuState.isStarIndOpen ? "rotate-45" : "rotate-0"
                                      }`}
                                    />
                                  </button>
                                </li>

                                <ul
                                  className={`overflow-hidden transition-[max-height] duration-300 ${
                                    menuState.isStarIndOpen ? "max-h-96" : "max-h-0"
                                  }`}
                                >
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Fintech" className="font-medium text-[17px]">
                                      Fintech
                                    </a>
                                  </li>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/E-Commerce" className="font-medium text-[17px]">
                                      E-Commerce
                                    </a>
                                  </li>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Education" className="font-medium text-[17px]">
                                      Education
                                    </a>
                                  </li>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Healthcare" className="font-medium text-[17px]">
                                      Healthcare
                                    </a>
                                  </li>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Entertainment" className="font-medium text-[17px]">
                                      Entertainment
                                    </a>
                                  </li>
                                </ul>

                                {/* Technology */}
                                <li className="flex flex-col">
                                  <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Technology" className="font-medium text-[17px]">
                                      Technology
                                    </a>
                                    <button onClick={() => toggleMenu("isStarTechOpen")}>
                                      <FaPlus
                                        className={`transition-transform duration-300 ${
                                          menuState.isStarTechOpen ? "rotate-45" : "rotate-0"
                                        }`}
                                      />
                                    </button>
                                  </div>

                                  <ul
                                    className={`overflow-hidden transition-[max-height] duration-500 ${
                                      menuState.isStarTechOpen ? "max-h-[2000px]" : "max-h-0"
                                    }`}
                                  >
                                    {/* Backend */}
                                    <li className="flex flex-col">
                                      <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                        <a href="/Backend" className="font-medium text-[17px]">
                                          Backend
                                        </a>
                                        <button onClick={() => toggleMenu("isInsideStarOpen")}>
                                          <FaPlus
                                            className={`transition-transform duration-300 ${
                                              menuState.isInsideStarOpen ? "rotate-45" : "rotate-0"
                                            }`}
                                          />
                                        </button>
                                      </div>

                                      <ul
                                        className={`overflow-hidden transition-[max-height] duration-500 ${
                                          menuState.isInsideStarOpen ? "max-h-[500px]" : "max-h-0"
                                        }`}
                                      >
                                        <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                          <a href="/Python" className="font-medium text-[16px]">
                                            Python
                                          </a>
                                        </li>
                                        <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                          <a href="/Nord js" className="font-medium text-[16px]">
                                            Nord js
                                          </a>
                                        </li>
                                      </ul>
                                    </li>

                                    {/* Frontend */}
                                    <li className="flex flex-col">
                                      <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                        <a href="/Frontend" className="font-medium text-[17px]">
                                          Frontend
                                        </a>
                                        <button onClick={() => toggleMenu("isDigitalOpen")}>
                                          <FaPlus
                                            className={`transition-transform duration-300 ${
                                              menuState.isDigitalOpen ? "rotate-45" : "rotate-0"
                                            }`}
                                          />
                                        </button>
                                      </div>

                                      <ul
                                        className={`overflow-hidden transition-[max-height] duration-500 ${
                                          menuState.isDigitalOpen ? "max-h-[800px]" : "max-h-0"
                                        }`}
                                      >
                                        <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                          <a href="/React Js" className="font-medium text-[16px]">
                                            React Js
                                          </a>
                                        </li>
                                        <li className="flex items-center py-2 pl-16 border-b-[2px] hover:text-blue-500">
                                          <a href="/Next Js" className="font-medium text-[16px]">
                                            Next Js
                                          </a>
                                        </li>
                                      </ul>
                                    </li>

                                    {/* Mobile */}
                                    <li className="flex flex-col">
                                      <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                        <a href="/Mobile" className="font-medium text-[17px]">
                                          Mobile
                                        </a>
                                        <button onClick={() => toggleMenu("isPlatformOpen")}>
                                          <FaPlus
                                            className={`transition-transform duration-300 ${
                                              menuState.isPlatformOpen ? "rotate-45" : "rotate-0"
                                            }`}
                                          />
                                        </button>
                                      </div>

                                      <ul
                                        className={`overflow-hidden transition-[max-height] duration-500 ${
                                          menuState.isPlatformOpen ? "max-h-[1000px]" : "max-h-0"
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
                                        <a href="/Cloud" className="font-medium text-[17px]">
                                          Cloud
                                        </a>
                                        <button onClick={() => toggleMenu("isCloudOpen")}>
                                          <FaPlus
                                            className={`transition-transform duration-300 ${
                                              menuState.isCloudOpen ? "rotate-45" : "rotate-0"
                                            }`}
                                          />
                                        </button>
                                      </div>

                                      <ul
                                        className={`overflow-hidden transition-[max-height] duration-500 ${
                                          menuState.isCloudOpen ? "max-h-[1000px]" : "max-h-0"
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

                                    {/* Q/A */}
                                    <li className="flex flex-col">
                                      <div className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                        <a href="/Q/A" className="font-medium text-[17px]">
                                          Q/A
                                        </a>
                                        <button onClick={() => toggleMenu("isQAOpen")}>
                                          <FaPlus
                                            className={`transition-transform duration-300 ${
                                              menuState.isQAOpen ? "rotate-45" : "rotate-0"
                                            }`}
                                          />
                                        </button>
                                      </div>

                                      <ul
                                        className={`overflow-hidden transition-[max-height] duration-500 ${
                                          menuState.isQAOpen ? "max-h-[1000px]" : "max-h-0"
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

                                    {/* Platform */}
                                    <li className="flex flex-col">
                                      <div className="flex items-center justify-between text-[#292f32] py-2 pl-8 hover:text-blue-500 transition-colors duration-300 border-b-[2px]">
                                        <span className="font-medium text-[17px]">Platform</span>
                                        <button onClick={() => toggleMenu("isPlatform1Open")}>
                                          <FaPlus
                                            className={`transition-transform duration-300 ${
                                              menuState.isPlatform1Open ? "rotate-45" : "rotate-0"
                                            }`}
                                          />
                                        </button>
                                      </div>

                                      <ul
                                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                                          menuState.isPlatform1Open ? "max-h-[2000px]" : "max-h-0"
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
                                          <a href="/Wordpress" className="font-medium text-[16px]">
                                            Wordpress
                                          </a>
                                        </li>
                                        <li className="flex items-center py-2 pl-16 hover:text-blue-500 border-b-[2px] transition-colors duration-300">
                                          <a href="/E-commerce" className="font-medium text-[16px]">
                                            E-commerce
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>

                                {/* Our Solutions */}
                                <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                  <a href="/Our Solutions" className="font-medium text-[17px]">
                                    Our Solutions
                                  </a>
                                  <button onClick={() => toggleMenu("isOurOpen")}>
                                    <FaPlus
                                      className={`transition-transform duration-300 ${
                                        menuState.isOurOpen ? "rotate-45" : "rotate-0"
                                      }`}
                                    />
                                  </button>
                                </li>

                                <ul
                                  className={`overflow-hidden transition-[max-height] duration-300 ${
                                    menuState.isOurOpen ? "max-h-96" : "max-h-0"
                                  }`}
                                >
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Funface" className="font-medium text-[17px]">
                                      Funface
                                    </a>
                                  </li>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Classdekho" className="font-medium text-[17px]">
                                      Classdekho
                                    </a>
                                  </li>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Aftermedi" className="font-medium text-[17px]">
                                      Aftermedi
                                    </a>
                                  </li>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Billa-Patel-Samaj" className="font-medium text-[17px]">
                                      Billa-Patel-Samaj
                                    </a>
                                  </li>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Trading-Wiza" className="font-medium text-[17px]">
                                      Trading-Wiza
                                    </a>
                                  </li>
                                </ul>

                                {/* How We Work */}
                                <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 px-4 hover:text-blue-500 transition-colors duration-300">
                                  <a href="/How-We-Work" className="font-medium text-[17px]">
                                    How We Work
                                  </a>
                                  <button onClick={() => toggleMenu("isWorkOpen")}>
                                    <FaPlus
                                      className={`transition-transform duration-300 ${
                                        menuState.isWorkOpen ? "rotate-45" : "rotate-0"
                                      }`}
                                    />
                                  </button>
                                </li>

                                <ul
                                  className={`overflow-hidden transition-[max-height] duration-300 ${
                                    menuState.isWorkOpen ? "max-h-96" : "max-h-0"
                                  }`}
                                >
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/How-We-Work" className="font-medium text-[17px]">
                                      How We Work
                                    </a>
                                  </li>
                                  <li className="flex items-center justify-between text-[#292f32] border-b-[2px] py-2 pl-8 hover:text-blue-500 transition-colors duration-300">
                                    <a href="/Careers" className="font-medium text-[17px]">
                                      Careers
                                    </a>
                                  </li>
                                </ul>

                                <li className="text-[#292f32] border-b-[2px] py-2 pl-4 hover:text-blue-500 transition-colors duration-300">
                                  <a href="/About-Us" className="font-medium text-[17px]">
                                    About Us
                                  </a>
                                </li>
                                <li className="text-[#292f32] border-b-[2px] py-2 pl-4 hover:text-blue-500 transition-colors duration-300">
                                  <a href="/Blog" className="font-medium text-[17px]">
                                    Blog
                                  </a>
                                </li>
                              </ul>
                            </div>

                            {/* Contact Information */}
                            <div className="info-open-contact mt-[20px] px-2 xs:px-4">
                              <h4 className="text-[20px] font-bold leading-[130%]">Contact Info</h4>
                              <ul className="mt-5">
                                <li className="mb-[15px] flex items-center">
                                  <div className="open-contact-logo mr-5">
                                    <IoLocationOutline className="text-blue-500" />
                                  </div>
                                  <div className="open-contact-text">
                                    <a
                                      className="text-[#585858] font-semibold"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href="https://maps.app.goo.gl/1XV2A3Kz7rYqWvpw7"
                                    >
                                      {contactInfo.address}
                                    </a>
                                  </div>
                                </li>
                                <li className="mb-[15px] flex items-center">
                                  <div className="open-contact-logo mr-5">
                                    <FiMail className="text-blue-500" />
                                  </div>
                                  <div className="open-contact-text">
                                    <a
                                      href={`mailto:${contactInfo.email}`}
                                      className="text-[#585858] font-semibold"
                                    >
                                      {contactInfo.email}
                                    </a>
                                  </div>
                                </li>
                                <li className="mb-[15px] flex items-center">
                                  <div className="open-contact-logo mr-5">
                                    <FaCalendar className="text-blue-500" />
                                  </div>
                                  <div className="open-contact-text">
                                    <span className="text-[#585858] font-semibold">
                                      {contactInfo.days}
                                    </span>
                                  </div>
                                </li>
                                <li className="mb-[15px] flex items-center">
                                  <div className="open-contact-logo mr-5">
                                    <GoClock className="text-blue-500" />
                                  </div>
                                  <div className="open-contact-text">
                                    <span className="text-[#585858] font-semibold">
                                      {contactInfo.hours}
                                    </span>
                                  </div>
                                </li>
                                <li className="mb-[15px] flex items-center">
                                  <div className="open-contact-logo mr-5">
                                    <FaPhoneVolume className="text-blue-500" />
                                  </div>
                                  <div className="open-contact-text">
                                    <a
                                      className="text-[#585858] font-semibold"
                                      href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                                    >
                                      {contactInfo.phone}
                                    </a>
                                  </div>
                                </li>
                              </ul>

                              {/* Get A Quote Button */}
                              <div className="header-button mt-6 flex items-center justify-center">
                                <a
                                  href="/contact"
                                  className="w-full py-5 px-10 text-white bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out relative z-[1] leading-[1] rounded-[5px] group"
                                >
                                  <span className="flex items-center space-x-2">
                                    <span>Get A Quote</span>
                                    <FaArrowRightLong className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                                  </span>
                                </a>
                              </div>

                              {/* Social Media Icons */}
                              <div className="social-icon mt-[30px] pb-5 flex items-center gap-[10px]">
                                {socialLinks.map((social) => (
                                  <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[45px] h-[45px] flex items-center justify-center rounded-full border border-[#e3e3e3] text-[#585858] bg-transparent transition-colors duration-300 ease-in-out hover:bg-[linear-gradient(172deg,_#1296DF_6.23%,_#1F5B7C_131.99%,_#22506A_146.31%,_#292F32_165.42%)] hover:text-white"
                                  >
                                    <social.icon />
                                  </a>
                                ))}
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
    </div>
  );
};

export default Navbar;