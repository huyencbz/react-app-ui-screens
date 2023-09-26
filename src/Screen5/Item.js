import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Circle } from "../components/Circle";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Circle color="#ebe7e7" size="38px"></Circle>
      <Summary>
        <Title
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups."
          size="12px"
        ></Title>
        <IdText text="1d" size="9px" color="#b6b2b2">
          Id
        </IdText>
      </Summary>

      <Button iconName="ellipsis-vertical"></Button>
    </Wrapper>
  );
};
const Summary = styled.div`
  display: flex;
  align-items: flex-end;
`;

const IdText = styled(Text)`
  margin-bottom: 1px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const Title = styled(Text)`
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export { Component as Item };
