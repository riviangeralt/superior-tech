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
import AppMockup from "assets/svgs/app-mockup.svg";
import App1 from "assets/svgs/app-1.svg";
import App2 from "assets/svgs/app-2.svg";

const OurApp = () => {
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");

  return (
    <Grid
      templateColumns={`repeat(${isSmallerThan425 ? 1 : 2}, 1fr)`}
      gap={4}
      position="relative"
      paddingLeft={isSmallerThan425 ? "5%" : "10%"}
      paddingTop={isSmallerThan425 ? 8 : 0}
    >
      <GridItem w="100%" height={isSmallerThan425 ? "autos" : "600px"}>
        <Stack height="100%" justifyContent={"center"} spacing={6}>
          <Text fontSize={28} color="#141414">
            <Text as="span" color="#01a2bb">
              Trade{" "}
            </Text>
            from anywhere
          </Text>
          <Text color="#6c6c6c" lineHeight={"28px"}>
            KEEV believe that everyone should be able to make profit. So in KEEV
            we have created mobile application for you
          </Text>
          <HStack spacing={6}>
            <Image src={App1} cursor="pointer" />
            <Image src={App2} cursor="pointer" />
          </HStack>
        </Stack>
      </GridItem>
      <GridItem w="100%">
        <Image
          src={AppMockup}
          height="600px"
          position={isSmallerThan425 ? "relative" : "absolute"}
          right="0"
        />
      </GridItem>
    </Grid>
  );
};

export default OurApp;
