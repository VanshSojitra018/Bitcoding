import React from "react";
import PageHeader from "../Pages/PageHeader";
import RequestText from "../Pages/RequestText";
import Silder from "../Component/Silder.jsx";
import HowItWorkPage from "../Pages/HowItWorkPage.jsx";
import CoreValuePage from "../Pages/CoreValuePage.jsx";
import TalkToUse from "../Pages/TalkToUse.jsx";
import Faq from "../Component/Faq.jsx";
import our1 from "../assets/our1.svg";
import our2 from "../assets/our2.svg";
import our3 from "../assets/our3.svg";
import our4 from "../assets/our4.svg";
import our5 from "../assets/our5.svg";
import our6 from "../assets/our6.svg";

const WebDevelopment = () => {
  return (
    <>
      <PageHeader title="Web Development" subtitle="Web Development" />

      <RequestText
        MainTitel="Best Web Development Service"
        Subtitle="Leading"
        Subtitle2="Web Development Company"
        FirstParagraph="At Bitcoding Solution, we create dynamic, user-friendly websites tailored to your business needs. From responsive front-end designs to robust back-end functionality, we ensure your site looks great and performs well on all devices."
      />

      <Silder variant="light" />
      <HowItWorkPage
      maintitle="how it works"
      subtitle="Our"
      subtitle2="Web Development Workflow"
      />

      {/* ✅ CUSTOM BACKGROUND + TITLE COLOR ONLY HERE */}
      <CoreValuePage
        flex={false}
        bgColor="#1296df"
        titleColor="text-white"
        highlightColor="text-white"
        title="Our"
        maintitle="Web Development"
        subtitle2="Our Core Offerings"
        webServices={[
          {
            id: 1,
            icon: our1,
            title: "Custom Web Development",
            des: "Bitcoding Solution creates unique, tailored websites designed to meet your specific business needs and objectives.",
          },
          {
            id: 2,
            icon: our2,
            title: "Front-end Web Development",
            des: "We build engaging, responsive interfaces for Bitcoding Solution that provide a seamless user experience on all devices.",
          },
          {
            id: 3,
            icon: our3,
            title: "Open Source Web Development",
            des: "Utilizing open-source technologies, Bitcoding Solution delivers flexible and cost-effective solutions for your web development needs.",
          },
          {
            id: 4,
            icon: our4,
            title: "Back-end Web Development",
            des: "Bitcoding Solution ensures robust server-side development for efficient, secure, and scalable website performance.",
          },
          {
            id: 5,
            icon: our5,
            title: "CMS Web Development",
            des: "We develop intuitive content management systems at Bitcoding Solution for easy site updates and content management.",
          },
          {
            id: 6,
            icon: our6,
            title: "E-Commerce Web Development",
            des: "Bitcoding Solution creates powerful online stores with integrated features for seamless transactions and efficient management.",
          },
          {
            id: 7,
            icon: our6,
            title: "Progressive Web Development",
            des: "Bitcoding Solution offers progressive web apps that deliver a native-like experience with the flexibility of web access.",
          },
          {
            id: 8,
            icon: our6,
            title: "User-Friendly Web Development",
            des: "We design intuitive, accessible websites at Bitcoding Solution that enhance user interaction and overall experience.",
          },
          {
            id: 9,
            icon: our6,
            title: "Website Maintenance",
            des: "Bitcoding Solution provides ongoing support and updates to keep your website secure, current, and performing optimally.",
          },
        ]}
      />
      <Faq
        showFirstTitle={false}
        showSecondTitle={true}
        showImage={false}
        showBg={false}
        maintitle="Frequently Asked Questions"
        submaintitle="Web Development"
        customFaqs={[
          {
            question: "What is web development?",
            answer:
              "Web development involves creating and maintaining websites. Bitcoding Solution handles all aspects to build effective, user-friendly sites. ",
          },
          {
            question: "Why is web development important?",
            answer:
              "A good website boosts your online presence, attracts customers, and enhances credibility. Bitcoding Solution ensures your site is optimized and engaging. ",
          },
          {
            question: "How much does web development cost?",
            answer:
              "Costs vary by complexity and features. Bitcoding Solution provides detailed quotes based on your specific needs. ",
          },
          {
            question: "How long does it take to build a website?",
            answer:
              "Timelines depend on project scope. Bitcoding Solution offers realistic schedules and keeps you updated throughout the process. ",
          },
          {
            question: "What support do you offer after launch?",
            answer:
              "Bitcoding Solution provides ongoing maintenance, updates, and support to keep your site secure and running smoothly. ",
          },
        ]}
      />
      <TalkToUse />
    </>
  );
};

export default WebDevelopment;
