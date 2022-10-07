import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Arrow from "assets/svgs/arrow.svg";
import Partner1 from "assets/images/part-1.png";
import Partner2 from "assets/images/part-2.png";
import Partner3 from "assets/images/part-3.png";
import Partner4 from "assets/images/part-4.png";
import Partner5 from "assets/images/part-5.png";
import Partner6 from "assets/images/part-6.png";
import Partner7 from "assets/images/part-7.png";
// import Jiffy from "assets/images/jiffy.png";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);

const OurPartners = () => {
  const partners = [
    {
      link: "//www.angelone.in/",
      icon: Partner1,
    },
    {
      link: "//bigul.co/",
      icon: Partner2,
    },
    {
      link: "//open-account.fyers.in/?utm-source=AP-Leads&utm-medium=AP1455",
      icon: Partner3,
    },
    {
      link: "//www.kotaksecurities.com/open-demat-account/",
      icon: Partner4,
    },
    {
      link: "//tradesmartonline.in/?referrer_id=YMUM902",
      icon: Partner5,
    },
    {
      link: "//signup.zerodha.com/",
      icon: Partner6,
    },
    {
      link: "//aliceblueonline.com/open-account-fill-kyc-request-call-back",
      icon: Partner7,
    },
    // {
    //   link: "//choiceindia.com/open-free-demat-account",
    //   icon: Jiffy,
    // },
  ];
  return (
    <Stack px="10%" py="5%" bg="#F5F5FF" position="relative" spacing={4}>
      <Image src={Arrow} position="absolute" top={"-5%"} />
      <Text fontSize={28} color="#141414">
        <Text color="#01a2bb" as="span">
          Our{" "}
        </Text>
        Partners
      </Text>
      {/* <HStack justifyContent={"space-between"}>
        {partners.map((item, i) => {
          return <Image src={item} key={i} />;
        })}
      </HStack> */}
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
      >
        {partners.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Box width="215px">
                <Link to={item.link} target="_blank">
                  <Image src={item.icon} width="100%" />
                </Link>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Stack>
  );
};

export default OurPartners;
