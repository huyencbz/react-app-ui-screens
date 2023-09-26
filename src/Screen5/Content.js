import styled from "styled-components";
import { Item } from "./Item";

const Component = () => {
  return (
    <Wrapper>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 48px 12px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export { Component as Content };
