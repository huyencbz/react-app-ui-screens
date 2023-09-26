import styled from "styled-components";
import { Button } from "../components/ButtonIcon";

const Component = () => {
  return (
    <Footer>
      <Button iconName="bars"></Button>
      <Button iconName="camera"></Button>
      <Button iconName="image"></Button>
      <Button iconName="microphone"></Button>
      <InputWrapper>
        <Input type="search" placeholder="Message" />
        <Icon className="fa-solid fa-face-smile"></Icon>
      </InputWrapper>
      <Button iconName="heart"></Button>
    </Footer>
  );
};

const Footer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
`;

const Input = styled.input`
  border: none;
  flex-grow: 1;
  background: transparent;
  margin-left: 10px;
  :focus {
    outline: none;
  }
  font-size: 16px;
`;

const Icon = styled.i`
  margin: 0 6px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #dcdcdc;
  flex-grow: 1;
  height: 36px;
  :focus-within {
    outline: 1px solid #000;
  }
`;

export { Component as Footer };
