import { Avatar, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Man1 from "assets/images/m-1.png";
import Man2 from "assets/images/m-2.png";
import Man3 from "assets/images/m-3.png";
import Woman1 from "assets/images/w-1.png";
import Woman2 from "assets/images/w-2.png";

SwiperCore.use([Autoplay]);
const Testimonial = (props) => {
  const testimonials = [
    {
      name: "Aasim Shaikh",
      test: "This is simply unbelievable! Great job, I will definitely be ordering again! It's the perfect solution for our business. Thank You!",
      icon: Man1,
    },
    {
      name: "Nitesh Chiplunkar",
      test: "I was amazed at the quality of Superior Tech. I love your system. This is simply unbelievable!",
      icon: Man2,
    },
    {
      name: "Monil Shah",
      test: "I am completely blown away. Superior Tech is awesome! Definitely worth the investment.",
      icon: Man3,
    },
    {
      name: "Priyanka Pathak",
      test: "We've used Superior Tech for the last five years. We're loving it. Your company is truly upstanding and is behind its product 100%.",
      icon: Woman1,
    },
    {
      name: "Natasha Rodrigues",
      test: "The very best. Nice work on your Superior Tech. We have no regrets! Superior Tech impressed me on multiple levels",
      icon: Woman2,
    },
  ];
  return (
    <Stack px="10%" py="5%" background={"#0f223b"} ref={props.feedback}>
      <Text fontSize={28} color="#fff">
        <Text color="#01a2bb" as="span">
          Our{" "}
        </Text>
        Work in Words
      </Text>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        style={{
          paddingBlock: 32,
        }}
      >
        {testimonials.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div class="testimonial-box">
                <div class="box-left">
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
                <Stack spacing={4}>
                  <Avatar margin="0 auto" src={item.icon} />
                  <p>{item.test}</p>
                  <Text fontSize={18} fontStyle="italic">
                    -{item.name}
                  </Text>
                </Stack>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Stack>
  );
};

export default Testimonial;
