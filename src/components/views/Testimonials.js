import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const Testimonials = () => {
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");

  const users = [
    {
      label: "CA Keval Khimsariya",
    },
    {
      label: "Rahul Choudhary",
    },
    {
      label: "Ashok Das",
    },
  ];
  return (
    <Stack px={isSmallerThan425 ? "5%" : "10%"} py="5%" spacing={4}>
      <Text fontSize={28} color="#141414">
        <Text color="#01a2bb" as="span">
          What{" "}
        </Text>
        people think about KEEV
      </Text>
      <Grid
        templateColumns={`repeat(${isSmallerThan425 ? 1 : 2}, 1fr)`}
        gap={4}
      >
        <GridItem w="100%">
          <Stack spacing={4}>
            {users.map((item, i) => {
              return (
                <HStack
                  height="90px"
                  p={4}
                  boxShadow={"10px 10px 60px rgba(1, 19, 113, 0.06)"}
                  borderRadius="5px"
                  width={isSmallerThan425 ? "100%" : "80%"}
                  key={i}
                >
                  <Avatar />
                  <Stack spacing={0}>
                    <Text fontSize={20}>{item?.label}</Text>
                    <HStack>
                      <StarIcon color={"#ffdc64"} />
                      <StarIcon color={"#ffdc64"} />
                      <StarIcon color={"#ffdc64"} />
                      <StarIcon color={"#ffdc64"} />
                      <StarIcon color={"#ffdc64"} />
                    </HStack>
                  </Stack>
                </HStack>
              );
            })}
          </Stack>
        </GridItem>
        <GridItem w="100%">
          <Stack spacing={6}>
            <Text fontSize={20} color="#141414">
              It was a great experience!
            </Text>
            <Text fontSize={16} color="#6c6c6c" lineHeight={"28px"}>
              I was looking for a tool to analyse my strategies on various
              conditions and KEEV resolved my problem KEEV is an absolute charm
              for the algorithmic trading world. Literally slashes away huge
              time investments through their create strategy feature. KEEV
              almost gives a creative edge to visualise your strategies. This is
              a phenominal use case and I would wish the KEEV team to improve
              upon all the feedback because this is truly a potential LAMBO
              product. Absolutely remarkable.
            </Text>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default Testimonials;
