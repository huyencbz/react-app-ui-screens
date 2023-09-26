import styled from "styled-components";
import { Icon } from "./Icon";

const Component = () => {
  return (
    <Footer>
      <Icon iconName="comments" title="Chats" active></Icon>
      <Icon iconName="video" title="Calls"></Icon>
      <Icon iconName="users" title="People"></Icon>
      <Icon iconName="film" title="Stories"></Icon>
    </Footer>
  );
};

const Footer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
`;

export { Component as Footer };
