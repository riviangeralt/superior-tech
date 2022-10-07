import {
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Offer1 from "assets/svgs/offer-1.svg";
import Offer2 from "assets/svgs/offer-2.svg";
import Offer3 from "assets/svgs/offer-3.svg";
import Offer4 from "assets/svgs/offer-4.svg";
import Offer5 from "assets/svgs/offer-5.svg";
import Offer6 from "assets/svgs/offer-6.svg";
import Offer7 from "assets/svgs/offer-7.svg";
import Offer8 from "assets/svgs/offer-8.svg";

const WhatWeOffer = (props) => {
  const { features } = props;
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");

  const content = [
    {
      label: "CCTV",
      description:
        "No more guessing – create your strategy and test its results",
      image: Offer1,
    },
    {
      label: "EPABX & Key Telephone system",
      description: "Get the best possible returns with lowest losses ",
      image: Offer2,
    },
    {
      label: "Biometrics & Access Control",
      description: "Paper trade before putting your money on the line",
      image: Offer3,
    },
    {
      label: "Building Intercom System",
      description: "Stop spending hours in front of the screen",
      image: Offer4,
    },
    {
      label: "Video Door Phone System",
      description: "Integrate multiple brokers at once",
      image: Offer5,
    },
    {
      label: "Time Attendance Solution",
      description: "Fine tune your strategy to get the best result possible",
      image: Offer6,
    },
    {
      label: "Voice Loggers",
      description: "Trade in equity, futures, options, commodities or all",
      image: Offer7,
    },
    {
      label: "IT Solutions",
      description: "Connect to multiple trading accounts and execute",
      image: Offer8,
    },
     {
      label: "P.A. System",
      description: "Connect to multiple trading accounts and execute",
      image: Offer8,
    },
  ];
  return (
    <Stack
      px={isSmallerThan425 ? "5%" : "10%"}
      py={"5%"}
      bg="#F5F5FF"
      spacing={4}
      ref={features}
    >
      <Text fontSize={28} color="#141414">
        <Text as="span" color="#01a2bb">
          What
        </Text>{" "}
         Superior Tech offers
      </Text>
      <Grid
        templateColumns={`repeat(${isSmallerThan425 ? 2 : 3}, 1fr)`}
        gap={4}
      >
        {content.map((item, i) => {
          return (
            <GridItem w="100%" key={i} >
              <Stack border="3px solid #000" height='100%' p={4} boxShadow={'5px 5px 0 0 #000' } bg='#fff'
              transition='all 0.3s'
              _hover={{
                boxShadow:'0 30px 60px 0 #263b5e1a'
              }}
              >
                <Image src={item.image} height={"50px"} width="fit-content" />
                <Text fontSize={20} color="#141414">
                  {item?.label}
                </Text>
                <Text color="#6c6c6c" lineHeight={"28px"}>
                  {item?.description}
                </Text>
              </Stack>
            </GridItem>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default WhatWeOffer;
