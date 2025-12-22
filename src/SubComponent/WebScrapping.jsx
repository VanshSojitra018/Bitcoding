import React from "react";
import PageHeader from "../Pages/PageHeader";
import RequestText from "../Pages/RequestText";
import Silder from "../Component/Silder";
import CoreValuePage from "../Pages/CoreValuePage";
import OurValuePage from "../Pages/OurValuePage.jsx";
import TechnologyPage from "../Pages/TechnologyPage.jsx";
import TalkToUse from "../Pages/TalkToUse.jsx";
import a1 from "../assets/a1.svg";
import a2 from "../assets/a2.svg";
import a3 from "../assets/a3.svg";
import a4 from "../assets/a4.svg";
import a5 from "../assets/a5.svg";
import a6 from "../assets/a6.svg";
import a7 from "../assets/a7.svg";
import a8 from "../assets/a8.svg";
import API from "../assets/api.png";
import GPT from "../assets/gpt.png";
import Flask from "../assets/flask.png";
import str from "../assets/streamlit.png";
import Mongo from "../assets/mongo.png";
import psql from "../assets/psql.png";
import redis from "../assets/redis.png";
import sqlite from "../assets/sqlite.png";
import kafka from "../assets/kafka.png";
import spark from "../assets/spark.png";
import jmeter from "../assets/jmeter.png";
import jenkins from "../assets/jenkins.png";
import kuber from "../assets/kuber.png";
import git from "../assets/git.png";
import face from "../assets/face.png";
import kaggle from "../assets/kaggle.png";
import colab from "../assets/colab.png";
import aws from "../assets/aws.png";
import azure from "../assets/azure.png";
import ibm from "../assets/ibm.png";
import sele from "../assets/sele.png";
import scr from "../assets/scr.png";
import lang from "../assets/lang.png";
import be from "../assets/be.png";
import pan from "../assets/pan.png";
import my from "../assets/my.png";
import para from "../assets/para.png";
import web from "../assets/web.png";
import miner from "../assets/miner.png";
import cl from "../assets/cl.png";

const WebScrapping = () => {
  const WebScrappingValues = [
    {
      id: 1,
      title: "Expert Team",
      des: "At Bitcoding Solutions, our team boasts extensive experience in handling high-load systems and big data across various industries. We work closely with you to understand your needs, identify challenges, and develop customized solutions that add significant value to your projects.",
    },
    {
      id: 2,
      title: "Flexible Collaboration",
      des: "Our project managers are dedicated to ensuring smooth cooperation and communication throughout the project. Assigned to your team, they provide regular updates on work progress and maintain flexibility to adapt to your needs.",
    },
    {
      id: 3,
      title: "Positive Reviews and Feedback",
      des: "Our commitment to excellence is reflected in the positive reviews and feedback from our clients. We prioritize trust, flexibility in our approach, and achieving the desired results. Our client's satisfaction is evident in their testimonials on platforms like Clutch, GoodFirms, and Upwork.",
    },
  ];

  const TechnologyValue = {
    framework: [
      { id: 1, icon: API, alt: "API", title: "FastAPI" },
      { id: 2, icon: Flask, alt: "Flask", title: "FlaskAPI" },
      { id: 3, icon: sele, alt: "sele", title: "Selenium" },
      { id: 4, icon: scr, alt: "scr", title: "Scrapy" },
      { id: 5, icon: lang, alt: "lang", title: "Langchain" },
      { id: 6, icon: be, alt: "Beautifulsoup", title: "Beautifulsoup" },
      { id: 7, icon: pan, alt: "pandas", title: "Pandas" },
    ],
    database: [
      { id: 2, icon: psql, alt: "Postgres", title: "PostgreSQL" },
      { id: 3, icon: my, alt: "my", title: "MySQL" },
      { id: 3, icon: Mongo, alt: "Mongo", title: "MongoDB" },
    ],
    tools: [
      { id: 1, icon: para, alt: "para", title: "ParseHub" },
      { id: 2, icon: web, alt: "web", title: "WebHarvy" },
      { id: 3, icon: miner, alt: "miner", title: "Data Miner" },
    ],
    platforms: [
      { id: 1, icon: git, alt: "Git", title: "Git" },
      { id: 2, icon: aws, alt: "aws", title: "AWS" },
      { id: 3, icon: azure, alt: "azure", title: "Azure" },
      { id: 7, icon: cl, alt: "cl", title: "Google Cloud" },
    ],
  };

  return (
    <>
      <PageHeader title={"Web Scraping"} subtitle={"Web Scraping"} />

      <RequestText
        MainTitel={"Best Web Scraping Development Service"}
        Subtitle={"Leading"}
        Subtitle2={" Web Scraping Development Company"}
        FirstParagraph={
          "At Bitcoding Solutions, we streamline your operations with our advanced automation and web scraping services. Our solutions handle repetitive tasks efficiently, freeing up your team to focus on strategic initiatives. We develop custom automated systems that improve productivity and accuracy. Our web scraping services gather critical data from various sources, providing actionable insights for informed decision-making."
        }
        SecondParagraph={
          "As a unique value add in bitcoding, we offer integration of scraping results into your existing data pipelines, ensuring seamless data flow. Trust our expertise to automate your workflows and extract valuable data effortlessly."
        }
      />

      <Silder variant="light" />

      <CoreValuePage
        showIcon={true}
        gridCols="grid-cols-1 md:grid-cols-2"
        customServices={[
          {
            id: 1,
            icon: a1,
            title: "Market Research and Insight Analysis",
            des: "Leverage our web scraping solutions to access well-structured data relevant to your business. Our services enable you to specify the data fields and information types you need. We gather comprehensive data to provide deep insights into market trends, competitor analysis, and consumer behavior, helping you make informed decisions.",
          },
          {
            id: 2,
            icon: a2,
            title: "Data-Driven Marketing",
            des: "Enhance your marketing strategies with data-driven insights. We scrape relevant data from social media platforms like Facebook, Instagram, TikTok, YouTube, Google Maps, and more. Our services help you understand your ideal customer profile, allowing you to optimize your marketing campaigns and increase engagement.",
          },
          {
            id: 3,
            icon: a3,
            title: "Price Monitoring Systems",
            des: "Stay competitive with our price monitoring systems. We set up price data crawling from various sources, including competitors’ websites across industries like pharmacies, groceries, online marketplaces, tire sites, clothing stores, and more. Our service ensures you have up-to-date pricing information in a convenient format. ",
          },
          {
            id: 4,
            icon: a4,
            title: "Real Estate Data Scraping",
            des: "Monitor the real estate market with our specialized web scraping services. We collect data on properties, including homes, apartments, commercial buildings, mortgages, and construction permits. Our solutions provide ready-made data sets, saving you time and effort in manual data collection from multiple sources.",
          },
          {
            id: 5,
            icon: a5,
            title: "E-Commerce Stock Management",
            des: "Optimize your inventory management with our e-commerce web scraping services. We gather critical information such as SKU, stock status, order numbers, sales data, and price variations from e-commerce websites. Our services help you maintain efficient inventory control by providing real-time data from multiple stores and marketplaces.",
          },
          {
            id: 6,
            icon: a6,
            title: "Candidate Sourcing for Recruitment",
            des: "Streamline your recruitment process by scraping data from job boards and company websites. Our services keep you updated with vacancies from competitors and internal resources of potential employers. Automate the collection of job listings to save time and ensure you have the most current information for candidate sourcing.",
          },
          {
            id: 7,
            icon: a7,
            title: "Dropshipping Automation",
            des: "Automate your dropshipping business with our comprehensive web scraping services. We extract reliable data from platforms like Amazon, AliExpress, eBay, Walmart, Lowe’s, Home Depot, and other suppliers. Our solutions convert this data into formats suitable for your e-commerce platform, enhancing your operational efficiency.",
          },
          {
            id: 8,
            icon: a8,
            title: "Building Custom Data Extraction Tools",
            des: "We specialize in creating custom data extraction tools that fit your specific business use cases. From structured data collection to complex data mining tasks, our tools are designed to handle various data sources and formats, ensuring you get the most relevant and accurate information for your needs.",
          },
        ]}
      />

      <OurValuePage
        value={WebScrappingValues}
        heading="Why Choose Bitcoding Solutions as Your Web Scraping Partner?"
        description="We offer advanced web scraping services to help businesses gather valuable data efficiently."
      />

      <TechnologyPage value={TechnologyValue} />
      <TalkToUse />
    </>
  );
};

export default WebScrapping;
