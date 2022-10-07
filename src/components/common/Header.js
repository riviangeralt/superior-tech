import { Button, HStack, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
// import Logo from "assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { features } = props;
  const navigate = useNavigate();
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");
  const executeScroll = () => features.current.scrollIntoView();

  const links = [
    {
      label: "Home",
      to: "/",
      onClick: () => {},
    },
    {
      label: "Services We Offer",
      onClick: () => {},
    },
    {
      label: "Work",
      onClick: () => {},
    },
    {
      label: "Feedbacks",
      onClick: () => {},
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
    >
      {/* Logo */}
      <Link to="/">
        {/* <Image src={Logo} w={90} /> */}
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
              onClick={() => window.open("//app.keev.tech/signup", "_blank")}
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
