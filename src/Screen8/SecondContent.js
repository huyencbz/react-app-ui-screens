import styled from "styled-components";
import { Circle } from "../components/Circle";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Title text="Lorem Ipsum Title" font="bold" size="16px"></Title>
      <FirstItem>
        <Circle color="white"></Circle>
        <TitleWrapper>
          <Text text="Lorem Ipsum" size="18px" font="bold"></Text>
          <Summary>
            <Text text="Lorem"></Text>
            <View>
              <i class="fa-solid fa-eye"></i>
              <Text text="0000" size="12px"></Text>
            </View>
          </Summary>
        </TitleWrapper>
      </FirstItem>
      <SecondItem>
        <Circle color="white"></Circle>
        <Text text="Add a comment" color="grey"></Text>
      </SecondItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #dcdada;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 14px;
`;
const View = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
`;
const Summary = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;
const FirstItem = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;
const SecondItem = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;
const Title = styled(Text)`
  text-align: center;
`;

export { Component as SecondContent };
