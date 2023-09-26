import styled from "styled-components";
import { Circle } from "../components/Circle";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Circle color="#ebe7e7" size="38px"></Circle>
      <Title text="lorem ipsum" size="12px"></Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const Title = styled(Text)`
  flex-grow: 1;
`;

export { Component as Item };
