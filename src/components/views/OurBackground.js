import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
// import AboutImage from "assets/images/about.jpg";

const OurBackground = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4} px="10%" py="5%">
      <GridItem w="100%">
        <Text fontSize={28} mb={4}>
          <Text as="span" color="#01a2bb">
            Our{" "}
          </Text>
          Background
        </Text>
        <Text color="#6c6c6c" lineHeight={"28px"}>
          KEEV was born out of a pain point personally experienced by the
          founders. Monil Shah, the founder CEO, a trader by background had a
          personal pain point around improving the user experience for traders
          around their access to their portfolio. As he spoke to multiple
          algorithmic traders, most of them communicated a uniform challenge
          they faced around different algorithmic trading tools.
        </Text>
      </GridItem>
      <GridItem w="100%">
        <Box w="100%" height="300px" bg="">
          {/* <Image
            src={AboutImage}
            width="100%"
            height="100%"
            objectFit={"contain"}
            backgroundPosition="bottom"
          /> */}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default OurBackground;
