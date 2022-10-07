import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import PricingCol from "components/elements/PricingCol";
import React, { useState } from "react";

const Pricing = () => {
  const [selected, setSelected] = useState(0);

  const buttons = [
    {
      label: "Monthly",
      tooltip: "",
    },
    {
      label: "Quarterly",
      tooltip: "Save 4%",
    },
    {
      label: "Yearly",
      tooltip: "Save 20%",
    },
  ];

  const pricingTable = [
    selected === 0
      ? {
          plan: "Starter",
          price: selected === 0 ? 0 : 325,
          backtest: {
            isAvail: true,
            quantity: 500,
          },
          optimize: {
            isAvail: true,
            quantity: 10,
          },
          virtual: {
            isAvail: true,
            quantity: 5,
          },
          live: {
            notifications: 5,
            fullyAutomated: false,
            limit: false,
          },
          option: {
            realTime: true,
            limit: false,
          },
          scanners: {
            isAvail: true,
            quantity: 20,
          },
          connectors: {
            tradingview: 10,
            fullyAutomated: false,
            limit: false,
          },
        }
      : null,
    {
      plan: "Basic",
      price: 500,
      id: "f08910d7-a9f1-4541-8088-46c2d6b5da28",
      backtest: {
        isAvail: true,
        quantity: 5000,
      },
      optimize: {
        isAvail: true,
        quantity: 50,
      },
      virtual: {
        isAvail: true,
        quantity: 20,
      },
      live: {
        notifications: 15,
        fullyAutomated: false,
        limit: true,
      },
      option: {
        realTime: true,
        limit: false,
      },
      scanners: {
        isAvail: true,
        quantity: 50,
      },
      connectors: {
        tradingview: 500,
        fullyAutomated: false,
        limit: false,
      },
    },
    {
      plan: "Pro",
      id: "d4ef3b48-05d4-49d4-9cda-e10ff96e6fca",
      price: 950,
      backtest: {
        isAvail: true,
        quantity: 20000,
      },
      optimize: {
        isAvail: true,
        quantity: 300,
      },
      virtual: {
        isAvail: true,
        quantity: 50,
      },
      live: {
        notifications: 30,
        fullyAutomated: true,
        limit: true,
      },
      option: {
        realTime: true,
        limit: true,
      },
      scanners: {
        isAvail: true,
        quantity: 500,
      },
      connectors: {
        tradingview: 5000,
        fullyAutomated: false,
        limit: false,
      },
    },
  ];
  console.log(pricingTable);

  const multiplySec = {
    0: {
      save: 0,
      unit: 1,
    },
    1: {
      save: 4,
      unit: 3,
    },
    2: {
      save: 20,
      unit: 12,
    },
  };

  return (
    <Stack px="10%" py="2%" mb={"2rem !important"}>
      <Text fontSize={28} color="#141414">
        <Text color="#01a2bb" as="span">
          Plans{" "}
        </Text>
        that fit your scale
      </Text>
      <ButtonGroup variant="outline" isAttached>
        {buttons.map((item, i) => {
          return (
            <Tooltip
              key={i}
              label={item.tooltip}
              isOpen
              hasArrow
              bg={"#fff"}
              fontSize={16}
              color={"#01a2bb"}
              border={"1.5px solid #01a2bb"}
              borderRadius={"5px"}
              arrowShadowColor="#01a2bb"
            >
              <Button
                borderRadius={0}
                size="lg"
                fontSize={16}
                bg={selected === i ? "#01a2bb" : "#EBFAFC"}
                color={selected === i ? "#fff" : "#888888"}
                onClick={() => setSelected(i)}
                borderColor={selected === i ? "#01a2bb" : "#EBFAFC"}
                _hover={{
                  bg: selected === i ? "#01a2bb" : "#EBFAFC",
                }}
                key={i}
              >
                {item.label}
              </Button>
            </Tooltip>
          );
        })}
      </ButtonGroup>

      <Grid
        templateColumns={`repeat(${selected === 0 ? 4 : 3}, 1fr)`}
        gap={0}
        mt={"3rem !important"}
      >
        <GridItem w="100%">
          <Stack
            bg="#01a2bb"
            p={2}
            spacing={0}
            borderTopLeftRadius={"5px"}
            borderRight="2px solid #fff"
            borderBottom="2px solid #fff"
          >
            <Text color="#F2F2F2" fontSize={18}>
              Features/Plans
            </Text>
            <Text color="#fff" fontSize={28} fontWeight={600}>
              Pricing
            </Text>
          </Stack>
          <Stack
            bg="#F2F4FF"
            p={2}
            borderRight="2px solid #fff"
            borderBottom="2px solid #fff"
          >
            <Text color="#141414" fontSize={18}>
              Backtest
            </Text>
          </Stack>
          <Stack
            bg="#F2F4FF"
            p={2}
            borderRight="2px solid #fff"
            borderBottom="2px solid #fff"
          >
            <Text color="#141414" fontSize={18}>
              Optimize
            </Text>
          </Stack>
          <Stack
            bg="#F2F4FF"
            p={2}
            borderRight="2px solid #fff"
            borderBottom="2px solid #fff"
          >
            <Text color="#141414" fontSize={18}>
              Virtual
            </Text>
          </Stack>
          <Stack
            bg="#F2F4FF"
            p={2}
            borderRight="2px solid #fff"
            borderBottom="2px solid #fff"
          >
            <Text color="#141414" fontSize={18}>
              Live
            </Text>
            <Text color="#888888" fontSize={18}>
              Notifications
            </Text>
            <Text color="#888888" fontSize={18}>
              Fully Automated
            </Text>
            <Text color="#888888" fontSize={18}>
              Limit Order
            </Text>
          </Stack>
          <Stack
            bg="#F2F4FF"
            p={2}
            borderRight="2px solid #fff"
            borderBottom="2px solid #fff"
          >
            <Text color="#141414" fontSize={18}>
              Option Strategy
            </Text>
            <Text color="#888888" fontSize={18}>
              Real-Time
            </Text>
            <Text color="#888888" fontSize={18}>
              Limit Order
            </Text>
          </Stack>
          <Stack
            bg="#F2F4FF"
            p={2}
            borderRight="2px solid #fff"
            borderBottom="2px solid #fff"
          >
            <Text color="#141414" fontSize={18}>
              Scanners
            </Text>
          </Stack>
          <Stack
            bg="#F2F4FF"
            p={2}
            borderRight="2px solid #fff"
            borderBottom="2px solid #fff"
          >
            <Text color="#141414" fontSize={18}>
              Connectors
            </Text>
            <Text color="#888888" fontSize={18}>
              Tradingview
            </Text>
            <Text color="#888888" fontSize={18}>
              Ami Broker
            </Text>
            <Text color="#888888" fontSize={18}>
              Python & Others
            </Text>
          </Stack>
          <Stack
            bg="#043851"
            p={2}
            borderRight="2px solid #fff"
            borderBottom="2px solid #fff"
            maxHeight="123px"
            height="100%"
          >
            <Text color="#ffffff" fontSize={16}>
              Select the plan that help you grow
            </Text>
            <Text color="#ffffff" fontSize={16}>
              Read all plans or contact us we will guide you better
            </Text>
          </Stack>
        </GridItem>
        {pricingTable
          .filter((element) => element !== null)
          .map((item, i) => {
            return (
              <GridItem w="100%" key={i}>
                <PricingCol
                  data={item}
                  isLast={i === pricingTable.length - 1}
                  multiplyBy={multiplySec[selected]}
                />
              </GridItem>
            );
          })}
      </Grid>
    </Stack>
  );
};

export default Pricing;
