import { Button, HStack, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Logo from "assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { features, work, feedback, contact, services } = props;
  const navigate = useNavigate();
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");
  const executeScrollForFeatures = () => features.current.scrollIntoView();
  const executeScrollForWork = () => work.current.scrollIntoView();
  const executeScrollForFeedback = () => feedback.current.scrollIntoView();
  const executeScrollForHome = () => services.current.scrollIntoView();

  const links = [
    {
      label: "Home",
      to: "/",
      onClick: () => executeScrollForHome(),
    },
    {
      label: "Services We Offer",
      onClick: () => executeScrollForFeatures(),
    },
    {
      label: "Work",
      onClick: () => executeScrollForWork(),
    },
    {
      label: "Feedbacks",
      onClick: () => executeScrollForFeedback(),
    },
  ];

  return (
    <HStack
      height={71}
      maxHeight={71}
      px={isSmallerThan425 ? "5%" : "10%"}
      justifyContent={"space-between"}
      // borderBottom="1px solid #ECEDF5"
      bg="#0f223b"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={111}
    >
      {/* Logo */}
      <Link to="/">
        <Image
          src={Logo}
          w={50}
          onClick={() => services.current.scrollIntoView()}
        />
      </Link>
      {/* Links */}

      {isSmallerThan425 ? null : (
        <>
          <HStack justifyContent={"flex-end"} flex={2} gap={10}>
            {links.map((item, i) => {
              return (
                <Text
                  fontWeight={500}
                  color="#fff"
                  cursor={"pointer"}
                  key={i}
                  onClick={item.onClick}
                >
                  {item?.label}
                </Text>
              );
            })}
            <Button
              color="#fff"
              fontSize="16px"
              borderRadius={"2px"}
              bg="#01A2BB"
              _hover={{
                bg: "#01a2bb",
              }}
              onClick={() => contact.current.scrollIntoView()}
            >
              Contact Us
            </Button>
          </HStack>
          {/* Action Buttons */}
        </>
      )}
    </HStack>
  );
};

export default Header;
