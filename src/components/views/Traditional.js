import {
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import NewTrad1 from "assets/svgs/traditional-1.svg";
import NewTrad2 from "assets/svgs/traditional-2.svg";
import NewTrad3 from "assets/svgs/traditional-3.svg";
import NewTrad4 from "assets/svgs/traditional-4.svg";
import NewTrad5 from "assets/svgs/traditional-5.svg";
import NewTrad6 from "assets/svgs/traditional-6.svg";

import Camera from "assets/svgs/camera.svg";
import { AnimatePresence, motion } from "framer-motion";

const Traditional = () => {
  const [selected, setSelected] = useState(0);
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");

  const content = [
    {
      label: "No Human Error",
      description: "Exact criteria & inputs are executed every single time",
      image: NewTrad1,
    },
    {
      label: "Get the best price",
      description: "Algo trades at high speeds, within few seconds",
      image: NewTrad2,
    },
    {
      label: "Become a Disciplined trader",
      description: "Dump the cycle of fear and greed",
      image: NewTrad3,
    },
    {
      label: "Works while you sleep",
      description: "No need to track every market move",
      image: NewTrad4,
    },
    {
      label: "100% private & secure",
      description: "Robust servers & end-to-end encryption",
      image: NewTrad5,
    },
    {
      label: "One stop solution",
      description: "All your trading requirements under one roof",
      image: NewTrad6,
    },
  ];
  const timeOutCallback = useCallback(
    () => setSelected((currTimer) => (currTimer > 4 ? 0 : currTimer + 1)),
    []
  );

  useEffect(() => {
    setTimeout(timeOutCallback, 3000);
  }, [selected, timeOutCallback]);
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={4}
      px={isSmallerThan425 ? "5%" : "10%"}
      pb={10}
      bg="#0f223b"
    >
      <GridItem w="100%" py="10%" colSpan={isSmallerThan425 ? 3 : 2}>
        <Text fontSize={28} mb={4} color="#FFF">
          <Text as="span" color="#01a2bb">
            Why{" "}
          </Text>
          Superior Tech is better
        </Text>
        <Stack>
          {content.map((item, i) => {
            return (
              <HStack
                position={"relative"}
                alignItems="center"
                key={item.label}
              >
                <AnimatePresence>
                  {selected === i && (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      src={Camera}
                      style={{
                        position: "absolute",
                        top: isSmallerThan425 ? "-.5rem" : "-.90rem",
                      }}
                      key={item.description}
                    />
                  )}
                  <motion.h6
                    style={{
                      fontSize: selected === i ? 24 : 20,
                      color: selected === i ? "#004A6E" : "#b6b6b6",
                      marginLeft: selected === i ? "3rem" : 0,
                    }}
                  >
                    {item?.label}
                  </motion.h6>
                </AnimatePresence>
              </HStack>
            );
          })}
        </Stack>
      </GridItem>
      {!isSmallerThan425 && (
        <GridItem w="100%">
          <Stack alignItems={"center"} justifyContent="center">
            <AnimatePresence>
              <Image src={content[selected]?.image} height={"350px"} />
              <Text textAlign={"center"} fontSize={20} color="#6c6c6c">
                {content[selected]?.description}
              </Text>
            </AnimatePresence>
          </Stack>
        </GridItem>
      )}
    </Grid>
  );
};

export default Traditional;
