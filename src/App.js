import React, { useEffect, useRef, useState } from "react";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import AnimatedRoutes from "components/common/AnimatedRoutes";
import {
  Box,
  Stack,
  keyframes,
  usePrefersReducedMotion,
  Text,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }`;

const App = () => {
  const featuresRef = useRef();
  const servicesRef = useRef();
  const workRef = useRef();
  const feedbackRef = useRef();
  const contactRef = useRef();


  const [isLoading, setIsLoading] = useState(
    localStorage.getItem("isLoaded") === null
  );
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 1s linear`;
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      localStorage.setItem("isLoaded", true);
      setIsLoading(false);
    }, 5000);
  }, []);
  return isLoading ? (
    <Stack
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="#0f223b"
    >
      <Box
        height={50}
        width={50}
        border="5px solid #01A2BB"
        borderBottom="5px solid transparent"
        borderRadius="50%"
        animation={animation}
      />
      <Text fontSize={18} color="#fff" fontStyle="italic">
        "Secure Your Surroundings With Superior Infotech & Solutions"
      </Text>
    </Stack>
  ) : (
    <>
      <Header
        features={featuresRef}
        services={servicesRef}
        work={workRef}
        feedback={feedbackRef}
        contact={contactRef}
      />
      <AnimatedRoutes
        featuresRef={featuresRef}
        services={servicesRef}
        work={workRef}
        feedback={feedbackRef}
        contact={contactRef}
      />
      <Footer features={featuresRef} />
    </>
  );
};

export default App;
