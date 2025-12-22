import React, { useState } from "react";
import API from "../assets/api.png";
import GPT from "../assets/gpt.png";
import Flask from "../assets/flask.png";
import str from "../assets/streamlit.png";
import Lang from "../assets/lang.png";
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

const TechnologyPage = ({ value = null }) => {
  const [activeTab, setActiveTab] = useState("framework");

  const defaultData = {
    framework: [
      { id: 1, icon: API, alt: "API", title: "FastAPI" },
      { id: 2, icon: GPT, alt: "GPT", title: "OpenAI" },
      { id: 3, icon: Flask, alt: "Flask", title: "FlaskAPI" },
      { id: 4, icon: str, alt: "Streamlit", title: "Streamlit" },
      { id: 5, icon: Lang, alt: "Lang", title: "LangChain" },
    ],
    database: [
      { id: 1, icon: Mongo, alt: "Mongo", title: "MongoDB" },
      { id: 2, icon: psql, alt: "Postgres", title: "PostgreSQL" },
      { id: 3, icon: redis, alt: "redis", title: "Redis" },
      { id: 4, icon: sqlite, alt: "sqlite", title: "SQLite" },
    ],
    tools: [
      { id: 1, icon: kafka, alt: "kafka", title: "Apache Kafka" },
      { id: 2, icon: spark, alt: "spark", title: "Apache Spark" },
      { id: 3, icon: jmeter, alt: "jmeter", title: "Apache Jmeter" },
      { id: 4, icon: jenkins, alt: "jenkins", title: "Jenkins" },
      { id: 5, icon: kuber, alt: "Kuber", title: "Kubernetes" },
    ],
    platforms: [
      { id: 1, icon: git, alt: "Git", title: "Git" },
      { id: 2, icon: face, alt: "face", title: "Hugging Face" },
      { id: 3, icon: kaggle, alt: "Kaggle", title: "Kaggle" },
      { id: 4, icon: colab, alt: "colab", title: "Google Colab" },
      { id: 5, icon: aws, alt: "aws", title: "AWS" },
      { id: 6, icon: azure, alt: "azure", title: "Azure" },
      { id: 7, icon: ibm, alt: "ibm", title: "IBM Cloud" },
    ],
  };

  const data = value ?? defaultData;

  return (
    <>
      <section className="pt-[100px]">
        <div className="container mx-auto px-4 w-full">

          <div className="section-title text-center relative z-50 mb-[30px] mt-[-7px]">
            <h2 className="text-[40px] max-[767px]:text-[28px] max-[479px]:text-[24px] text-[#292f32] leading-[125%] font-bold capitalize">
              Technologies
              <span className="text-[#1296df]"> That We Work With </span>
            </h2>
            <p className="text-[#585858] mt-2 max-[767px]:text-[14px] max-[479px]:text-[13px]">
              We use different types of frameworks, tools, and libraries to
              build the most amazing AI/ML solutions.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-4 max-[767px]:gap-2 list-none">
            {Object.keys(data).map((key) => (
              <li className="nav-item" key={key}>
                <button
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`border-[2px] rounded-[5px] px-[18px] py-[10px] max-[767px]:px-[12px] max-[767px]:py-[8px] max-[767px]:text-[14px] bg-transparent font-medium ${
                    activeTab === key
                      ? "border-[#1296df] text-[#1296df]"
                      : "border-[#585858] text-[#585858]"
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div
            className="grid grid-cols-1 max-[990px]:block sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-5 mt-[30px] "
            style={{ columnGap: "64px", rowGap: "40px" }}
          >
            {data[activeTab]?.map((item) => (
              <div
                key={item.id}
                style={{ width: "230px" }}
                className="max-[990px]:mx-auto max-[990px]:mb-[30px]"
              >
                <div className="service-box-item relative group z-0 overflow-hidden p-5 text-center border border-[#1296df] bg-white rounded-[8px] shadow-[0px_7px_15px_0px_#0000000D]">
                  <div className="icons flex justify-center">
                    <img src={item.icon} alt={item.alt} />
                  </div>
                  <div className="content mt-5">
                    <h4 className="text-[#292f32] group-hover:text-white font-bold text-[20px] leading-[28px]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default TechnologyPage;
