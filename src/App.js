import React, { useRef } from "react";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import AnimatedRoutes from "components/common/AnimatedRoutes";

const App = () => {
  const featuresRef = useRef();
  return (
    <>
      <Header features={featuresRef} />
      <AnimatedRoutes featuresRef={featuresRef} />
      <Footer features={featuresRef} />
    </>
  );
};

export default App;
