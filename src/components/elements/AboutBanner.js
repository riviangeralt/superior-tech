import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const AboutBanner = () => {
  return (
    <Stack bg="#01A2BB" px="10%" py="5%" alignItems={"center"}>
      <Text fontSize={28} color="#fff">
        India’s best, Algorithmic Trading Solution Platform
      </Text>
      <Text color="#fff">We are trading, research and finance experts</Text>
    </Stack>
  );
};

export default AboutBanner;
