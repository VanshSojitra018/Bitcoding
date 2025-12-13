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
import ServicePage from "./Pages/ServicePage";


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
  </Routes>

  <Footer />
</>

  );
};

export default App;
