import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Button iconName="close"></Button>
      <Text text="Lorem Ipsum Title" size="16px" font="bold"></Text>
      <Button iconName="retweet"></Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;
  position: fixed;
  background: white;
  top: 0;
  left: 6px;
  right: 10px;
`;

export { Component as Header };
