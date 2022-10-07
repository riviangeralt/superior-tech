import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import LinkedIn from "assets/svgs/follow-3.svg";
import Twitter from "assets/svgs/follow-6.svg";

const PersonCard = (props) => {
  const {
    data: { name, designation },
  } = props;
  return (
    <Stack bg="#F5F5FF" maxHeight="350px" height="350px" spacing={0}>
      <Box height="210px" bg="#DEDEDE" />
      <Stack p={4}>
        <Text fontSize={20}>{name}</Text>
        <Text color="#888888">{designation}</Text>
        <HStack>
          <Image src={LinkedIn} />
          <Image src={Twitter} />
        </HStack>
      </Stack>
    </Stack>
  );
};

export default PersonCard;
