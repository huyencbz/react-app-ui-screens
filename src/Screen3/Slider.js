import styled from "styled-components";
import { Text } from "../components/Text";
import { Slide } from "./Slide";

const Component = () => {
  return (
    <SliderWraper>
      <Text font="bold" size="16px" text="Lorem Ipsum Title"></Text>
      <Slider>
        <Slide></Slide>
        <Slide></Slide>
        <Slide></Slide>
        <Slide></Slide>
      </Slider>
    </SliderWraper>
  );
};

const SliderWraper = styled.div`
  margin: 40px 15px 0 16px;
`;

const Slider = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 14px;
  overflow-x: auto;
  /* -webkit-overflow-scrolling: touch; */
`;

export { Component as Slider };
