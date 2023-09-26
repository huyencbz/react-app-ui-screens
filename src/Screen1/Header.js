import styled from "styled-components";
import { Button } from "../components/ButtonIcon";

const Component = () => {
  return (
    <Header>
      <Button iconName="close"></Button>
      <Button iconName="message"></Button>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  column-gap: 6px;
`;

export { Component as Header };
