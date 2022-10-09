import React from "react";
import HeroSection from "components/views/HeroSection";
import Guide from "components/views/Guide";
import Traditional from "components/views/Traditional";
import WhatWeOffer from "components/views/WhatWeOffer";
// import Testimonials from "components/views/Testimonials";
import OurPartners from "components/views/OurPartners";
import JoinCommunity from "./JoinCommunity";
import Testimonial from "components/elements/Testimonial";
import ContactUs from "./ContactUs";
import { Stack } from "@chakra-ui/react";
const Main = (props) => {
  const { features, work, feedback, contact, services } = props;
  return (
    <Stack spacing={0} marginTop="64px">
      <HeroSection services={services} features={features} />
      <Guide />
      <Traditional />
      <WhatWeOffer features={features} />
      {/* <Testimonials /> */}
      <JoinCommunity />
      <OurPartners work={work} />
      {/* <OurApp /> */}
      <Testimonial feedback={feedback} />
      <ContactUs contact={contact} />
    </Stack>
  );
};

export default Main;
