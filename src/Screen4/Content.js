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
  margin: 24px 14px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export { Component as Content };
