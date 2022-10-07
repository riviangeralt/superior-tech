import { Button, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Community from "assets/svgs/community.svg";

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
            <GridItem w="100%" textAlign={'center'}>
              <Text color="#fff" fontSize={32}>50+</Text>
              <Text color="#fff" fontSize={18}>Satisfied Clients</Text>
            </GridItem>
            <GridItem w="100%" textAlign={'center'}>
              <Text color="#fff" fontSize={32}>60+</Text>
              <Text color="#fff" fontSize={18}>Projects</Text>
            </GridItem>{" "}
            <GridItem w="100%" textAlign={'center'}>
              <Text color="#fff" fontSize={32}>40+</Text>
              <Text color="#fff" fontSize={18}>Company's Secured</Text>
            </GridItem>{" "}
            <GridItem w="100%" textAlign={'center'}>
              <Text color="#fff" fontSize={32}>6+</Text>
              <Text color="#fff" fontSize={18}>Years of Experience</Text>
            </GridItem>
          </Grid>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default JoinCommunity;
