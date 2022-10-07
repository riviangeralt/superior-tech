import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Arrow from "assets/svgs/arrow.svg";

const Building = () => {
  return (
    <Stack px="10%" py="5%" bg="#F5F5FF" position="relative">
      <Image src={Arrow} position="absolute" top={"-5%"} />
      <Text fontSize={28} mb={4}>
        <Text as="span" color="#01a2bb">
          What{" "}
        </Text>
        we are building
      </Text>
      <Text color="#6c6c6c" lineHeight={"28px"} width="70%" marginTop={8}>
        We make algorithmic trading simple for you. Usually, you might need to
        invest in infrastructure and write tons of code to perform any kind of
        algorithmic trading. But with us, you can do all this in a few clicks on
        our dashboard. Because at KEEV we will help to unleash the immense power
        of trading and combine it with market data and information sour ced from
        various platforms and brokers.
      </Text>
      <Text color="#6c6c6c" lineHeight={"28px"} width="70%">
        That's not all, we also help you backtest and optimise your trade
        strategies. As we understand that, unless you do your own research or
        get a scientific explanation for the recommendation made by an industry
        expert, you would choose to stay away from the markets. To satiate this
        curiosity, we bring you user-friendly algorithm trading platform
      </Text>
    </Stack>
  );
};

export default Building;
