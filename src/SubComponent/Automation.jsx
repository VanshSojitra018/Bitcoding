import React from "react";
import PageHeader from "../Pages/PageHeader.jsx";
import RequestText from "../Pages/RequestText.jsx";
import OurValuePage from "../Pages/OurValuePage.jsx";
import Silder from "../Component/Silder.jsx";
import CoreValuePage from "../Pages/CoreValuePage.jsx";
import TalkToUse from "../Pages/TalkToUse.jsx";
import OurProcessPage from "../Pages/OurProcessPage.jsx";

const Automation = () => {
  const automationValues = [
    {
      id: 1,
      title: "Custom Test Automation Solutions",
      des: "We provide tailored test automation strategies that fit your specific project requirements. Whether you need support for a new application or want to enhance an existing testing framework, our custom solutions are designed to align with your objectives and deliver optimal results.",
    },
    {
      id: 2,
      title: "Full-Scale Test Automation Implementation",
      des: "For organizations looking to integrate automation across their entire testing lifecycle, we offer full-scale implementation services. Our team manages every aspect of the process, from initial setup and script development to integration and execution, ensuring a seamless transition to automated testing.",
    },
    {
      id: 3,
      title: "Ongoing Maintenance and Optimization",
      des: "Maintaining and optimizing test automation is crucial for long-term success. We offer continuous support to update and refine your test scripts, adapt to changes in your application, and ensure that your automation framework evolves with your needs.",
    },
  ];

  return (
    <>
      <PageHeader
        title={
          <>
            Testing Automation <br />
            Services
          </>
        }
        subtitle="Testing Automation Services"
      />

      <RequestText
        MainTitel="Best Testing Automation Services"
        Subtitle="Leading"
        Subtitle2="Testing Automation Services"
        FirstParagraph="At Bitcoding Solution Company, we specialize in providing advanced test automation services designed to enhance your software development lifecycle. Our services streamline and accelerate the testing process by automating repetitive and time-consuming tasks."
        SecondParagraph="Our scalable automation solutions reduce long-term testing costs, improve accuracy, and provide actionable insights through detailed test reports and analytics."
      />
      
      <OurProcessPage />

      {/* ✅ ONLY DATA CHANGED */}
      <OurValuePage
        value={automationValues}
        label="how we can support"
        heading="Scalable Test Automation Options for All Needs"
        description="At Bitcoding Solution Company, we understand that every organization has unique test automation needs. That’s why we offer a range of support options designed to cater to diverse requirements, ensuring your testing processes are efficient, reliable, and tailored to your specific goals. Here’s how we can support you:"
      />

      <Silder variant="light" />
      <CoreValuePage
        showIcon={false}
        customServices={[
          {
            id: 1,
            title: "Speed and Efficiency",
            des: "Automated testing speeds up the validation process, allowing for faster releases and quicker feedback",
          },
          {
            id: 2,
            title: "Accuracy and Consistency",
            des: "Reduces human error and ensures consistent test results, enhancing software reliability.",
          },
          {
            id: 3,
            title: "Cost Savings",
            des: "Initial setup costs are offset by long-term savings from reduced manual testing and fewer bugs.",
          },
          {
            id: 4,
            title: "Continuous Integration",
            des: "Seamlessly integrates with CI/CD pipelines for ongoing testing throughout development.",
          },

          {
            id: 5,
            title: "Extensive Test Coverage",
            des: "Executes a wide range of test scenarios, ensuring thorough validation of your application.",
          },
          {
            id: 6,
            title: "Scalability",
            des: "Adapts to growing test needs and evolving applications, maintaining effectiveness over time.",
          },
        ]}
      />
      <TalkToUse />
    </>
  );
};

export default Automation;
