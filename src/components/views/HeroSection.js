import {
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Hero from "assets/svgs/hero-1.svg";

const HeroSection = (props) => {
  const { features, services } = props;
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={4}
      px={isSmallerThan425 ? "5%" : "10%"}
      height="calc(100vh - 71px)"
      gridAutoFlow={isSmallerThan425 && "dense"}
      bg="#0f223b"
      ref={services}
    >
      <GridItem w="100%" colSpan={isSmallerThan425 && 2}>
        <Stack height="100%" justifyContent={"center"} data-aos="fade-right">
          {/* <Text textTransform={"uppercase"} fontSize={18}>
            Level up your trading game.
          </Text> */}
          <Text textTransform={"uppercase"} color="#fff" fontSize={40}>
            Superior Infotech & Solutions
          </Text>
          <Text textTransform={"uppercase"} fontSize={18} color="#fff">
            YOur gateway to It security &<br /> telecommunication services
          </Text>
          {/* <Text color="#6c6c6c">
            Use our No-code platform and NEVER miss a trade again!
          </Text> */}
          <HStack marginTop={"1.5rem !important"} spacing={4}>
            <Button
              borderRadius={"2px"}
              size="lg"
              fontSize={16}
              bg={"#01a2bb"}
              color="#fff"
              _hover={{
                bg: "#01a2bb",
              }}
              onClick={() => features.current.scrollIntoView()}
            >
              Secure Yourself!
            </Button>
          </HStack>
        </Stack>
      </GridItem>
      <GridItem w="100%" colSpan={isSmallerThan425 && 2}>
        <Stack justifyContent={"center"} height="100%">
          <Image src={Hero} data-aos="zoom-in" />
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default HeroSection;
