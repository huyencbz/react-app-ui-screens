import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Part1>
        <Button iconName="video"></Button>
        <Title text="Lorem Ipsum" size="16px" color="grey"></Title>
      </Part1>
      <SecondTitle text="Lorem Ipsum" size="16px" color="grey"></SecondTitle>
    </Wrapper>
  );
};
const Part1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  position: fixed;
  background: white;
  top: 0;
  left: 6px;
  right: 10px;
`;

const Title = styled(Text)`
  :hover {
    color: black;
    font-weight: bold;
    padding-bottom: 4px;
    border-bottom: 2px solid currentColor;
  }
`;

const SecondTitle = styled(Title)``;

export { Component as Header };
