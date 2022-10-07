import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const CommunityBox = (props) => {
  const { end, text } = props;
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    // first three numbers from props
    // const end = parseInt(number.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let incrementTime = 100;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      //   setCount(String(start) + number.substring(3));
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, []);
  return (
    <>
      <Text color="#fff" fontSize={32}>
        {count}+
      </Text>
      <Text color="#fff" fontSize={18}>
        {text}
      </Text>
    </>
  );
};

export default CommunityBox;
