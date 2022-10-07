import AboutBanner from "components/elements/AboutBanner";
import React from "react";
import Building from "./Building";
import OurBackground from "./OurBackground";
import OurTeam from "./OurTeam";

const AboutUs = () => {
  return (
    <>
      <AboutBanner />
      <OurBackground />
      <Building />
      {/* <OurTeam /> */}
    </>
  );
};

export default AboutUs;
