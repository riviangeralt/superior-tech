import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import PersonCard from "components/elements/PersonCard";
import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Soumya Sinha",
      designation: "HR & Marketing Executive",
    },
    {
      name: "Aasim Sayyed",
      designation: "Frontend Developer",
    },
    {
      name: "Saima Shaikh",
      designation: "Frontend Developer",
    },
    {
      name: "Vivek Bhajipale",
      designation: "Frontend Developer",
    },
    {
      name: "Abhishek Kumar",
      designation: "Frontend Developer",
    },
    {
      name: "Rajan Pal",
      designation: "Python Developer",
    },
    {
      name: "Saurabh Kadam",
      designation: "Software Developer",
    },
    {
      name: "Hemali Velani",
      designation: "Software Developer",
    },
    {
      name: "Misbah Asif",
      designation: "Jr. Software Developer",
    },
    {
      name: "Shagun Bhardwaj",
      designation: "UI/UX Designer",
    },
    {
      name: "Khyati Shah",
      designation: "Product Marketing  Manager",
    },
    {
      name: "Monil Shah",
      designation: "Founder, CEO",
    },
  ];
  return (
    <Stack px="10%" py={"5%"} position="relative">
      <Text fontSize={28} mb={4}>
        <Text as="span" color="#01a2bb">
          Meet{" "}
        </Text>
        the diverse and highly professional team that is powering us forward
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {teamMembers.map((item, index) => {
          return (
            <GridItem w="100%" key={index}>
              <PersonCard data={item} />
            </GridItem>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default OurTeam;
