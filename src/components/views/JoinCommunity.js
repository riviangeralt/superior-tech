import { Button, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Community from "assets/svgs/community.svg";
import CommunityBox from "components/elements/CommunityBox";

const JoinCommunity = () => {
  return (
    <Grid
      templateColumns="repeat(1, 1fr)"
      gap={4}
      px="10%"
      py="5%"
      bg="#0f223b"
    >
      <GridItem w="100%">
        <Stack spacing={6} justifyContent="center" height="100%">
          <Text fontSize={28} color="#fff">
            <Text as="span" color="#01a2bb">
              Some{" "}
            </Text>
            interesting facts about us
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} px="10%" py="5%">
            <GridItem w="100%" textAlign={"center"}>
              <CommunityBox end={50} text="Satisfied Clients" />
            </GridItem>
            <GridItem w="100%" textAlign={"center"}>
              <CommunityBox end={60} text="Projects" />
            </GridItem>{" "}
            <GridItem w="100%" textAlign={"center"}>
              <CommunityBox end={40} text="Projects" />
            </GridItem>{" "}
            <GridItem w="100%" textAlign={"center"}>
              <CommunityBox end={6} text="Years of Experience" />
            </GridItem>
          </Grid>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default JoinCommunity;
