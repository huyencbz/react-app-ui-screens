import styled from "styled-components";
import { Circle } from "../components/Circle";
import { LoremIpsumButton } from "../components/LoremIpsumButton";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Circle size="110px" color="#e3dfdf"></Circle>
      <Text font="bold" size="16px" text="Lorem Ipsum Title"></Text>
      <Text color="#b5aeae" size="12px" text="@lorem ipsum "></Text>
      <Text
        color="#5b5959"
        size="14px"
        text="lorem ipsum - lorem ipsum - lorem ipsum "
      ></Text>
      <Text size="14px" text="lorem ipsum "></Text>
      <Title font="bold" size="16px" text="Lorem Ipsum Title"></Title>
      <LoremIpsumButton
        padding="6px 20px"
        text="Lorem Ipsum"
      ></LoremIpsumButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 16px;
`;

const Title = styled(Text)`
  margin-top: 30px;
`;

export { Component as Content };
