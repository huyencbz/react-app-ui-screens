import styled from "styled-components";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Shape></Shape>
      <Summary>
        <TitleWrapper>
          <Text text="Lorem Ipsum Title" size="14px" font="bold"></Text>
          <Text text="10k" size="14px" font="bold"></Text>
        </TitleWrapper>
        <Text
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          size="12px"
        ></Text>
      </Summary>
    </Wrapper>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Shape = styled.div`
  background: #d1caca;
  height: 80px;
  width: 80px;
  border-radius: 20px;
  flex-shrink: 0;
`;
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export { Component as SecondItem };
