import {
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Offer5 from "assets/svgs/offer-5.svg";
import CCTV from "assets/svgs/cctv.svg";
import EPABX from "assets/svgs/epabx.svg";
import BioMetric from "assets/svgs/biometric.svg";
import Intercom from "assets/svgs/building-intercom.svg";
import Attendance from "assets/svgs/time-attendance.svg";
import Voice from "assets/svgs/voice-logger.svg";
import ItSolution from "assets/svgs/it-solution.svg";
import PASys from "assets/svgs/public-address.svg";

const WhatWeOffer = (props) => {
  const { features } = props;
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");

  const content = [
    {
      label: "CCTV",
      description:
        "Keep An EYE on Everything in Your Firm & Surroundings With Our Finest CCTV Services. ",
      image: CCTV,
    },
    {
      label: "EPABX & Key Telephone system",
      description: "Get The Best Possible Communication System For Your Firm. ",
      image: EPABX,
    },
    {
      label: "Biometrics & Access Control",
      description:
        " Biometrics can improve security by making it more difficult for unauthorized individuals to gain access to facilities or systems.",
      image: BioMetric,
    },
    {
      label: "Building Intercom System",
      description:
        "Building intercom systems can be used in conjunction with security systems to provide an additional layer of security.",
      image: Intercom,
    },
    {
      label: "Video Door Phone System",
      description:
        "The system also allows for two-way communication between the visitor & the person inside the building.",
      image: Offer5,
    },
    {
      label: "Time Attendance Solution",
      description:
        "Monitor and track employee attendance. It can help you manage employee leaves & generate reports for employee attendance.",
      image: Attendance,
    },
    {
      label: "Voice Loggers",
      description:
        "The recordings made by voice loggers can be used for various purposes such as monitoring employee performance, training new employees, or investigating customer complaints.",
      image: Voice,
    },
    {
      label: "IT Solutions",
      description:
        "IT solutions can help businesses become more efficient, organized & helps businesses improve security & compliance.",
      image: ItSolution,
    },
    {
      label: "P.A. System",
      description:
        "PA systems are used in a variety of settings, including live music venues, restaurants, schools, and businesses.",
      image: PASys,
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
            <GridItem w="100%" key={i}>
              <Stack
                border="3px solid #000"
                height="100%"
                p={4}
                boxShadow={"5px 5px 0 0 #000"}
                bg="#fff"
                transition="all 0.3s"
                _hover={{
                  boxShadow: "0 30px 60px 0 #263b5e1a",
                }}
                data-aos="fade-up"
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
