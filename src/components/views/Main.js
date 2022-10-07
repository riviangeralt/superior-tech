import React from "react";
import HeroSection from "components/views/HeroSection";
import Guide from "components/views/Guide";
import Traditional from "components/views/Traditional";
import WhatWeOffer from "components/views/WhatWeOffer";
// import Testimonials from "components/views/Testimonials";
import OurPartners from "components/views/OurPartners";
import OurApp from "components/views/OurApp";
import JoinCommunity from "./JoinCommunity";
const Main = (props) => {
  const { features } = props;
  return (
    <>
      <HeroSection />
      <Guide />
      <Traditional />
      <WhatWeOffer features={features} />
      {/* <Testimonials /> */}
      <JoinCommunity />
      <OurPartners />
      <OurApp />
    </>
  );
};

export default Main;
