import { Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import YesIcon from "assets/svgs/yes.svg";
import NoIcon from "assets/svgs/no.svg";
import { CommaFormatted } from "utils/common";

const PricingCol = (props) => {
  const { data, isLast, multiplyBy } = props;
  return (
    <>
      <Stack
        bg="#01a2bb"
        p={2}
        spacing={0}
        borderTopRightRadius={isLast && "5px"}
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
      >
        <Text color="#F2F2F2" fontSize={18}>
          {data?.plan}
        </Text>
        <Text color="#fff" fontSize={28} fontWeight={"600 !important"}>
          {data?.price === 0
            ? "FREE"
            : `₹
          ${
            Math.abs(data?.price * multiplyBy?.unit) -
            Math.abs(data?.price * multiplyBy?.unit * (multiplyBy?.save / 100))
          }
          +GST`}
        </Text>
      </Stack>
      <Stack
        bg="#F2F4FF"
        p={2}
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
      >
        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.backtest?.isAvail ? YesIcon : NoIcon} />
          {data?.backtest?.isAvail
            ? CommaFormatted(data?.backtest?.quantity * multiplyBy?.unit)
            : null}{" "}
          <Text as="span" color="#6c6c6c">
            Backtest
          </Text>
        </Text>
      </Stack>
      <Stack
        bg="#F2F4FF"
        p={2}
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
      >
        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.optimize?.isAvail ? YesIcon : NoIcon} />
          {data?.optimize?.isAvail
            ? data?.optimize?.quantity * multiplyBy?.unit
            : null}{" "}
          <Text as="span" color="#6c6c6c">
            Optimization
          </Text>
        </Text>
      </Stack>
      <Stack
        bg="#F2F4FF"
        p={2}
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
      >
        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.virtual?.isAvail ? YesIcon : NoIcon} />
          {data?.virtual?.isAvail
            ? data?.virtual?.quantity * multiplyBy?.unit
            : null}{" "}
          <Text as="span" color="#6c6c6c">
            Virtual Trades
          </Text>
        </Text>
      </Stack>
      <Stack
        bg="#F2F4FF"
        p={2}
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
      >
        <Text color="#141414" fontSize={18} visibility="hidden">
          Live
        </Text>
        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.live?.notifications ? YesIcon : NoIcon} />
          {data?.live?.notifications
            ? data?.live?.notifications * multiplyBy?.unit
            : null}{" "}
          <Text as="span" color="#6c6c6c">
            Notifications
          </Text>
        </Text>
        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.live?.fullyAutomated ? YesIcon : NoIcon} />
          {data?.live?.fullyAutomated ? "" : "Not"}
          <Text as="span" color="#6c6c6c">
            Fully Automated
          </Text>
        </Text>
        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.live?.limit ? YesIcon : NoIcon} />

          <Text as="span" color="#6c6c6c">
            Limit Order
          </Text>
        </Text>
      </Stack>
      <Stack
        bg="#F2F4FF"
        p={2}
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
      >
        <Text color="#141414" fontSize={18} visibility="hidden">
          Option Strategy
        </Text>

        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.option?.realTime ? YesIcon : NoIcon} />
          <Text as="span" color="#6c6c6c">
            Real-time
          </Text>
        </Text>
        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.option?.limit ? YesIcon : NoIcon} />
          <Text as="span" color="#6c6c6c">
            Limit Order
          </Text>
        </Text>
      </Stack>
      <Stack
        bg="#F2F4FF"
        p={2}
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
      >
        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.scanners?.isAvail ? YesIcon : NoIcon} />
          {data?.scanners?.isAvail
            ? CommaFormatted(data?.scanners?.quantity * multiplyBy?.unit)
            : null}{" "}
          <Text as="span" color="#6c6c6c">
            Scanners
          </Text>
        </Text>
      </Stack>
      <Stack
        bg="#F2F4FF"
        p={2}
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
        maxH="150px"
        h="150px"
        justifyContent={"center"}
      >
        {/* <Text color="#141414" fontSize={18} visibility="hidden">
          Connectors
        </Text> */}
        <Text
          color="#141414"
          fontSize={18}
          display="flex"
          alignItems={"center"}
          gap={2}
        >
          <Image src={data?.connectors?.tradingview ? YesIcon : NoIcon} />
          {data?.connectors?.tradingview
            ? CommaFormatted(data?.connectors?.tradingview * multiplyBy?.unit)
            : null}{" "}
          <Text as="span" color="#6c6c6c">
            API Calls
          </Text>
        </Text>
        {/* <Text color="#888888" fontSize={18}>
          Ami Broker
        </Text>
        <Text color="#888888" fontSize={18}>
          Python & Others
        </Text> */}
      </Stack>
      <Stack
        bg="#043851"
        p={4}
        // py="15%"
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
        maxHeight="123px"
        height="100%"
        justifyContent={"center"}
      >
        <Button
          borderRadius={"2px"}
          bg="#01a2bb"
          color="#fff"
          _hover={{
            bg: "#01a2bb",
          }}
          onClick={() =>
            data?.price === 0
              ? window.open("//app.keev.tech/signup")
              : window.open("//app.keev.tech/pricing")
          }
        >
          {data?.price === 0 ? "Sign Up Now" : "Choose Plan"}
        </Button>
      </Stack>
    </>
  );
};

export default PricingCol;
