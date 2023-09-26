import styled from "styled-components";
import { Circle } from "../components/Circle";
import { LoremIpsumButton } from "../components/LoremIpsumButton";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Circle></Circle>
      <TitleWrapper>
        <Text text="Lorem" font="bold" size="16px"></Text>
        <Text text="Lorem Ipsum"></Text>
      </TitleWrapper>
      <LoremIpsumButton
        text="Lorem Ipsum"
        padding="8px 16px"
        borderRadius="8px"
        shadow="2px 1px 5px #d1cece"
      ></LoremIpsumButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 16px 24px;
  column-gap: 10px;
  align-items: center;
`;
const TitleWrapper = styled.div`
  flex-grow: 2;
`;

export { Component as User };
