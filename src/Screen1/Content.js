import styled from "styled-components";
import { LoremIpsumButton } from "../components/LoremIpsumButton";

const Component = () => {
  return (
    <Content>
      <Title>Lorem Ipsum Title</Title>
      <Summary>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Summary>
      <List>
        <Item>
          <Number>1</Number>
          <TextItem>Lorem Ipsum</TextItem>
        </Item>
        <Item>
          <Number>2</Number>
          <TextItem>Lorem Ipsum</TextItem>
        </Item>
        <Item>
          <Number>3</Number>
          <TextItem>Lorem Ipsum</TextItem>
        </Item>
      </List>
      <LoremIpsumButton
        text="Lorem Ipsum"
        padding="8px 24px"
        borderRadius="8px"
        shadow="2px 1px 5px #d1cece"
      ></LoremIpsumButton>
    </Content>
  );
};

const Summary = styled.div`
  max-width: 250px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  text-align: center;
  /* margin: 0 100px; */
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 16px;
`;

const TextItem = styled.span`
  color: #bfbbbb;
`;
const Number = styled.span`
  display: flex;
  background: black;
  color: white;
  border-radius: 50%;
  font-size: 14px;
  height: 28px;
  width: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const List = styled.ul`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  align-items: center;
`;

export { Component as Content };
