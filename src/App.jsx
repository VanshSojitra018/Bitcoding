import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Silder from "./Component/Silder";
import AboutSection from "./Component/AboutSection";
import Service from "./Component/Service";
import Achivement from "./Component/Achivement";
import Cta from "./Component/Cta";
import Footer from "./Component/Footer";
import Blog from "./Component/Blog";
import Faq from "./Component/Faq";
import ProjectSlider from "./Component/ProjectSlider";
import { Route, Routes } from "react-router-dom";
import ServicePage from "./SubComponent/ServicePage";
import AiMl from "./SubComponent/AiMl";
import Automation from "./SubComponent/Automation";
import WebScrapp from "./SubComponent/WebScrapping";
import WebDevelopment from "./SubComponent/WebDevelopment";
import MobileAppDevelopment from "./SubComponent/MobileAppDevelopment";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Silder />
              <AboutSection />
              <Service />
              <Achivement />
              <ProjectSlider />
              <Faq />
              <Blog />
              <Cta />
            </>
          }
        />

        <Route path="/service" element={<ServicePage />} />
        <Route path="/ai-ml" element={<AiMl />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/web-app-scraping" element={<WebScrapp />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/Mobile-app-development" element={<MobileAppDevelopment />} />



      </Routes>

      <Footer />
    </>
  );
};

export default App;
