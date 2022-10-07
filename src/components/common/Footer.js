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
import Follow1 from "assets/svgs/follow-1.svg";
import Follow2 from "assets/svgs/follow-2.svg";
import Follow3 from "assets/svgs/follow-3.svg";
import Follow4 from "assets/svgs/follow-4.svg";
import Follow5 from "assets/svgs/follow-5.svg";
import Follow6 from "assets/svgs/follow-6.svg";
import { Link, useNavigate } from "react-router-dom";

const Footer = (props) => {
  const { features } = props;
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");
  const executeScroll = () => features.current.scrollIntoView();
  const navigate = useNavigate();
  const socials = [
    {
      image: Follow1,
      link: "//medium.com/@algokeev",
    },
    {
      image: Follow2,
      link: "//www.youtube.com/channel/UC_bW6BJvjk9m06n62tl13UQ",
    },
    {
      image: Follow3,
      link: "//www.linkedin.com/company/keev-novotoc/?viewAsMember=true",
    },
    {
      image: Follow4,
      link: "//www.facebook.com/keevtrading",
    },
    {
      image: Follow5,
      link: "//www.instagram.com/keev.official/",
    },
    {
      image: Follow6,
      link: "//lnkd.in/gswq42gH",
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
                Backtest
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Brokers
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Optimize{" "}
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Connector
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Virtual Trading
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Multiple Segments
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Live Trading{" "}
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text
                color="#fff"
                fontSize={14}
                cursor="pointer"
                onClick={() => executeScroll()}
              >
                Limit Order Placement
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem w="100%" colSpan={3}>
          <Grid
            templateColumns={`repeat(${isSmallerThan425 ? 1 : 3}, 1fr)`}
            gap={2}
            paddingLeft={!isSmallerThan425 && 10}
            borderLeft={!isSmallerThan425 && "1.5px solid white"}
          >
            <GridItem w="100%" colSpan={isSmallerThan425 && 3}>
              <Text fontSize={20} color="#fff" fontWeight={"700 !important"}>
                Company
              </Text>
              <Text
                color="#fff"
                mt={2}
                fontSize={14}
                onClick={() => navigate("/about-us")}
                cursor="pointer"
              >
                About Us
              </Text>

              <Text color="#fff" mt={2} fontSize={14}>
                Careers
              </Text>

              <Text color="#fff" mt={2} fontSize={14}>
                FAQ's
              </Text>
            </GridItem>
            <GridItem
              w="100%"
              textAlign={!isSmallerThan425 && "right"}
              colSpan={isSmallerThan425 && 3}
            >
              {/* <Text fontSize={20} color="#fff" fontWeight={"700 !important"}>
                Knowledge Base
              </Text> */}
            </GridItem>
            <GridItem
              w="100%"
              textAlign={!isSmallerThan425 && "right"}
              colSpan={isSmallerThan425 && 3}
            >
              {/* <Text fontSize={20} color="#fff" fontWeight={"700 !important"}>
                Blog
              </Text> */}
            </GridItem>
            <GridItem w="100%" mt={8} colSpan={isSmallerThan425 && 3}>
              <Text color="#FFF" fontSize={20} fontWeight={"700 !important"}>
                Contact Info
              </Text>
              <Stack spacing={4} marginTop="1rem !important">
                <HStack
                  cursor="pointer"
                  onClick={() => window.open("mailto:help@keev.tech", "_blank")}
                >
                  <Image src={Support} />
                  <Text color="#fff" fontSize={14}>
                    help@keev.tech
                  </Text>
                </HStack>
                <HStack>
                  <Image src={Contact} />
                  <Text color="#fff" fontSize={14}>
                    +91 90824 64920
                  </Text>
                </HStack>
              </Stack>
            </GridItem>
            <GridItem
              w="100%"
              colSpan={2}
              mt={8}
              ml={!isSmallerThan425 && 8}
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
            {new Date().getFullYear()} &#169; All Rights Reserved by KEEV
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          colSpan={3}
          textAlign="center"
          mt={"4rem !important"}
        >
          <Text color="#fff">Developed by Novotoc Infotech Pvt Ltd.</Text>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default Footer;
