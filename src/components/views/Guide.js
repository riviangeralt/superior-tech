import {
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Arrow from "assets/svgs/arrow.svg";
import JoinUs from "assets/svgs/guide-1.svg";
import CreateStrategy from "assets/svgs/guide-2.svg";
import SitBack from "assets/svgs/guide-3.svg";

const Guide = () => {
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");

  const content = [
    {
      title: "Schedule A Call",
      description: "Tell Us Your Query & Requirements. ",
      image: JoinUs,
    },
    {
      title: "We help you Connect & secure your firm!",
      description: "As per Your Requirements, We Strategize the Best Choices For Your Firm",
      image: CreateStrategy,
    },
    {
      title: "Sit Back and Relax",
      description:
        "Relax, We Have Maintenance & Annual Maintenance Contracts",
      image: SitBack,
    },
  ];

  return (
    <Stack
      bg="#F5F5FF"
      px="10%"
      py={"4%"}
      position="relative"
      data-aos="fade-up"
    >
      <Image src={Arrow} position="absolute" top={"-5%"} />
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {content.map((item, i) => {
          return (
            <GridItem key={i} w="100%" colSpan={isSmallerThan425 && 3}>
              <Stack alignItems={"center"}>
                <Image src={item.image} height="125px" />
                <Text fontSize={18} color="#141414">
                  {item?.title}
                </Text>
                <Text
                  color="#6c6c6c"
                  textAlign={"center"}
                  lineHeight={"28px"}
                  width="90%"
                >
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

export default Guide;
