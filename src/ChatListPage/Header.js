import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Badge } from "./Badge";
import { Title } from "../components/Title";

const Component = () => {
  return (
    <Header>
      <Bars>
        <Button iconName="bars" hasBackground="#dcdcdc"></Button>
        <Badge>1</Badge>
      </Bars>
      <Title size="24px">Chats</Title>
      <Button iconName="camera" hasBackground="#dcdcdc"></Button>
      <Button iconName="pen" hasBackground="#dcdcdc"></Button>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  column-gap: 12px;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 0 18px;
`;

const Bars = styled.div`
  position: relative;
`;

export { Component as Header };
