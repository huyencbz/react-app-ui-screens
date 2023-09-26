import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Text } from "../components/Text";
import { SwitchButton } from "./SwitchButton";
import { Circle } from "../components/Circle";

const Component = () => {
  return (
    <Wrapper>
      <First>
        <Text as="h2" text="Lorem Ipsum Title" size="14px" font="bold"></Text>
        <FirstContainer>
          <i className={"fa-solid fa-close"}></i>
          <Text as="h2" text="Lorem Ipsum Title" size="14px"></Text>
        </FirstContainer>
      </First>
      <Second>
        <Text as="h2" text="Lorem Ipsum Title" size="14px" font="bold"></Text>
        <SecondContainer>
          <Circle></Circle>
          <Button
            iconName="location-dot"
            hasBackground="white"
            space="0"
            backgroundSize="48px"
          ></Button>
        </SecondContainer>
      </Second>
      <Third>
        <Text as="h2" text="Lorem Ipsum Title" size="14px" font="bold"></Text>
        <ThirdContainer>
          <Text as="h2" text="Lorem Ipsum Title" size="14px"></Text>
          <SwitchButton></SwitchButton>
        </ThirdContainer>
        <Text
          as="h2"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups."
          size="12px"
          color="#beb9b9"
          width="320px"
        ></Text>
      </Third>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  margin: 24px 14px;
`;

const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;

const ThirdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;

const First = styled.div`
  display: flex;
  row-gap: 8px;
  flex-direction: column;
`;

const Second = styled.div`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
`;

const Third = styled.div`
  display: flex;
  row-gap: 14px;
  flex-direction: column;
`;

export { Component as Content };
