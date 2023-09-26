import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Header>
      <Space></Space>
      <Wrapper>
        <Title text="Lorem Ipsum"></Title>
        <Title text="Lorem Ipsum"></Title>
        <Button iconName="arrows-rotate"></Button>
      </Wrapper>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  position: fixed;
  background: white;
  top: 0;
  left: 16px;
  right: 30px;
`;

const Space = styled.div`
  width: 70px;
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;
  flex-grow: 1;
`;

const Title = styled(Text)`
  color: grey;
  :hover {
    color: black;
    font-weight: bold;
    padding-bottom: 4px;
    border-bottom: 2px solid currentColor;
  }
`;

export { Component as Header };
