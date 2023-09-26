import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Button iconName="xmark" space="0"></Button>
      <Text as="h1" text="Lorem Ipsum Title" size="16px" font="bold"></Text>
      <LoremButton>Lorem</LoremButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 14px;
`;

const LoremButton = styled.button`
  background: white;
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  box-shadow: 2px 2px 12px rgb(153, 153, 153);
`;

export { Component as Header };
