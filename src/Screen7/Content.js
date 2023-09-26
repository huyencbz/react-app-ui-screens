import styled from "styled-components";
import { Item } from "./Item";

const Component = () => {
  return (
    <Wrapper>
      <Item height="190px"></Item>
      <Item></Item>
      <Item height="140px"></Item>
      <Item></Item>
      <Item height="170px"></Item>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  column-gap: 10px;
  margin-top: 60px;
  justify-content: center;
  flex-wrap: wrap;
  ::after {
    content: "";
    flex-grow: 1;
  }
`;

export { Component as Content };
