import styled from "styled-components";
import { Text } from "../components/Text";
import { Item } from "./Item";

const Component = () => {
  return (
    <Wrapper>
      <Title>
        <Text text="Lorem Ipsum Title" size="16px"></Text>
        <Text text="5/20/22 - 6/20/22" size="12px"></Text>
      </Title>
      <ItemList>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </ItemList>
      <Summary
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
        size="12px"
      ></Summary>
    </Wrapper>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 20px;
  margin-top: 50px;
  background: #f5f3f3;
  border-radius: 12px;
  padding: 10px;
`;
const ItemList = styled.div``;

const Summary = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export { Component as FirstContent };
