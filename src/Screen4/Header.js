import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { LoremIpsumButton } from "../components/LoremIpsumButton";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Button iconName="close" space="0"></Button>
      <Title text="lorem ipsum" size="12px"></Title>
      <LoremButton text="Lorem" padding="4px 8px"></LoremButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  padding: 4px 20px;
`;

const Title = styled(Text)`
  flex-grow: 1;
`;

const LoremButton = styled(LoremIpsumButton)`
  font-size: 10px;
`;

export { Component as Header };
