import {
  Button,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";

const ContactUs = (props) => {
  const toast = useToast();

  const onContactUs = async (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    const formData = new FormData();
    let parsedData = Object.fromEntries(data);
    axios
      .post(
        "https://getform.io/f/4ec35e70-242b-4ccc-b544-e8874869b58e",
        parsedData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        toast({
          status: "success",
          title: "Message sent successfully!",
          isClosable: true,
          // position: "top-right",
        });
      })
      .catch(function (error) {
        console.log(error);
        toast({
          status: "error",
          title: "Message not sent due to error!",
          isClosable: true,
          // position: "top-right",
        });
      });
  };

  return (
    <Stack px="10%" py="5%" bg="#F5F5FF" ref={props.contact}>
      <Text fontSize={28} color="#141414">
        <Text color="#01a2bb" as="span">
          Ready{" "}
        </Text>
        To Secure?
      </Text>
      <Stack as="form" onSubmit={onContactUs} spacing={4}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
            <Input placeholder="Name" size="md" name="name" isRequired />
          </GridItem>
          <GridItem w="100%">
            <Input
              placeholder="Email"
              size="md"
              type="email"
              name="email"
              isRequired
            />
          </GridItem>
          <GridItem w="100%" colSpan={2}>
            <Textarea
              placeholder="Type your message here..."
              rows={10}
              name="message"
              isRequired
            />
          </GridItem>
        </Grid>

        <Button
          color="#fff"
          fontSize="16px"
          borderRadius={"2px"}
          bg="#01A2BB"
          _hover={{
            bg: "#01a2bb",
          }}
          type="submit"
          width="fit-content"
        >
          Get Secured
        </Button>
      </Stack>
    </Stack>
  );
};

export default ContactUs;
