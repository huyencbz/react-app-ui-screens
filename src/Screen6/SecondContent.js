import styled from "styled-components";
import { Text } from "../components/Text";
import { SecondItem } from "./SecondItem";

const Component = () => {
  return (
    <Wrapper>
      <Title>
        <Text text="Lorem Ipsum Title" size="16px" font="bold"></Text>
        <Text text="5/20/22 - 6/20/22" size="12px"></Text>
      </Title>
      <ItemList>
        <SecondItem></SecondItem>
        <SecondItem></SecondItem>
        <SecondItem></SecondItem>
        <SecondItem></SecondItem>
      </ItemList>
    </Wrapper>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;
  background: #f5f3f3;
  border-radius: 12px;
  padding: 10px;
`;
const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export { Component as SecondContent };
