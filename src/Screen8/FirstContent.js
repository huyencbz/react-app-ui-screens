import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { LoremIpsumButton } from "../components/LoremIpsumButton";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Text
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        font="bold"
        size="16px"
      ></Text>
      <Text
        text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        color="grey"
      ></Text>
      <ButtonWrapper>
        <Button iconName="message" space="0"></Button>
        <LoremIpsumButton
          text="Lorem"
          background="black"
          color="white"
          borderRadius="8px"
          shadow="2px 2px 5px #8c8a8a"
        ></LoremIpsumButton>
        <LoremIpsumButton
          text="Lorem"
          background="white"
          borderRadius="8px"
          shadow="2px 2px 5px #8c8a8a"
        ></LoremIpsumButton>
        <Button iconName="share-nodes" space="0"></Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #dcdada;
  border-radius: 16px;
  text-align: center;
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  margin: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Component as FirstContent };
