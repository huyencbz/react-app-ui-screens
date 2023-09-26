import styled from "styled-components";
import { Button } from "../components/ButtonIcon";

const Component = () => {
  return (
    <Wrapper>
      <BackButton iconName="arrow-left" space="0"></BackButton>
      <Button iconName="message" space="0"></Button>
      <Button iconName="search" space="0"></Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-right: 14px;
`;

const BackButton = styled(Button)`
  margin-right: auto;
`;

export { Component as Header };
