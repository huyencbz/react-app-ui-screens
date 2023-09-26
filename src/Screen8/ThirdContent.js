import styled from "styled-components";
import { Circle } from "../components/Circle";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Title text="Lorem Ipsum Title" font="bold" size="16px"></Title>
      <List>
        <Shape borderRadius="10px" size="200px"></Shape>
        <Shape borderRadius="10px" size="200px"></Shape>
      </List>
    </Wrapper>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  margin: 10px;
`;

const Wrapper = styled.div`
  background: #dcdada;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 14px;
`;

const Title = styled(Text)`
  text-align: center;
`;

const Shape = styled(Circle)`
  flex-shrink: 1;
`;

export { Component as ThirdContent };
