import styled from "styled-components";
import { Button } from "../components/ButtonIcon";

const Component = () => {
  return (
    <Footer>
      <Button size="42px" iconName="square"></Button>
      <Button size="42px" iconName="circle"></Button>
      <Button size="42px" iconName="folder"></Button>
    </Footer>
  );
};

const Footer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 30px;
  right: 40px;
  bottom: 0px;
  background: #fff;
  z-index: 1000;
`;

export { Component as Footer };
