import styled from "styled-components";
import { Title } from "../components/Title";
import { Button } from "../components/ButtonIcon";
import { Avatar } from "../components/Avatar";

const Component = () => {
  return (
    <Header>
      <Button iconName="arrow-left"></Button>
      <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" size="48px" />
      <WrapperTitle>
        <Title size="20px">Huyen</Title>
        <Status>Active 3h ago</Status>
      </WrapperTitle>
      <Button iconName="phone"></Button>
      <Button iconName="video"></Button>
      <Button iconName="circle-info"></Button>
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
  z-index: 1000;
`;

const WrapperTitle = styled.div`
  flex-grow: 1;
`;
const Status = styled.div`
  font-size: 14px;
  color: #b1adad;
`;

export { Component as Header };
