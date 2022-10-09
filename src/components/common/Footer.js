import {
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Support from "assets/svgs/support.svg";
import Contact from "assets/svgs/contact.svg";
import Follow5 from "assets/svgs/follow-5.svg";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const { features } = props;
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");
  const executeScroll = () => features.current.scrollIntoView();
  const socials = [
    {
      image: Follow5,
      link: "//www.instagram.com/tech.superior/",
    },
  ];
  return (
    <Stack
      px={isSmallerThan425 ? "5%" : "10%"}
      bg="#043851"
      paddingTop={"3%"}
      paddingBottom="1%"
    >
      <Grid
        templateColumns={`repeat(${isSmallerThan425 ? 1 : 5}, 1fr)`}
        gap={4}
      >
        <GridItem w="100%" colSpan={2}>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%" colSpan={2}>
              <Text fontSize={20} color="#fff" fontWeight={"700 !important"}>
                Features
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                CCTV
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                EPABX & Key Telephone system
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                IT Solutions{" "}
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Biometrics & Access Control
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Building Intercom System
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Building Intercom System
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Time Attendance Solution
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Voice Loggers
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                P.A. System
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem w="100%" colSpan={3}>
          <Grid
            templateColumns={`repeat(${isSmallerThan425 ? 1 : 3}, 1fr)`}
            gap={4}
            paddingLeft={!isSmallerThan425 && 10}
            borderLeft={!isSmallerThan425 && "1.5px solid white"}
          >
            <GridItem w="100%" colSpan={isSmallerThan425 && 3}>
              <Text color="#FFF" fontSize={20} fontWeight={"700 !important"}>
                Contact Info
              </Text>
              <Stack spacing={4} marginTop="1rem !important">
                <HStack
                  cursor="pointer"
                  onClick={() =>
                    window.open(
                      "mailto:abdulahad.techsuperior@gmail.com",
                      "_blank"
                    )
                  }
                >
                  <Image src={Support} />
                  <Text color="#fff" fontSize={14}>
                    abdulahad.techsuperior@gmail.com
                  </Text>
                </HStack>
                <HStack>
                  <Image src={Contact} />
                  <Text color="#fff" fontSize={14}>
                    +91 868 999 8275
                  </Text>
                </HStack>
              </Stack>
            </GridItem>
            <GridItem
              w="100%"
              colSpan={2}
              ml={!isSmallerThan425 ? 8 : 10}
              mb={isSmallerThan425 && 4}
            >
              <Text color="#FFF" fontSize={20} fontWeight={"700 !important"}>
                Follow Us
              </Text>
              <HStack marginTop={"1rem !important"}>
                {socials.map((item, i) => {
                  return (
                    <Link to={item.link} target="_blank" key={i}>
                      <Image src={item.image} cursor="pointer" />
                    </Link>
                  );
                })}
              </HStack>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          w="100%"
          colSpan={2}
          textAlign="center"
          mt={"4rem !important"}
        >
          <Text color="#fff">
            {new Date().getFullYear()} &#169; All Rights Reserved by Superior
            Tech
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          colSpan={3}
          textAlign="center"
          mt={"4rem !important"}
        >
          <Text color="#fff">Developed by Gaming Idiots!</Text>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default Footer;
