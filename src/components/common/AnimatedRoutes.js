import Main from "components/views/Main";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const AnimatedRoutes = (props) => {
  const { featuresRef, work, services, feedback, contact } = props;
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route
        exact
        path={"/"}
        element={
          <Main
            features={featuresRef}
            work={work}
            services={services}
            feedback={feedback}
            contact={contact}
          />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
