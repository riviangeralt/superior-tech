import AboutUs from "components/views/AboutUs";
import Main from "components/views/Main";
import Pricing from "components/views/Pricing";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const AnimatedRoutes = (props) => {
  const { featuresRef } = props;
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route exact path={"/"} element={<Main features={featuresRef} />} />
      <Route exact path={"/pricing"} element={<Pricing />} />
      <Route exact path={"/about-us"} element={<AboutUs />} />
    </Routes>
  );
};

export default AnimatedRoutes;
