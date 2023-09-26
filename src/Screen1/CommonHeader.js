import styled from "styled-components";

const Component = () => {
  return (
    <Header>
      <Time>9:41</Time>
      <Icon className={`fa-solid fa-signal`}></Icon>
      <Icon className={`fa-solid fa-wifi`}></Icon>
      <Icon className={`fa-solid fa-battery-full`}></Icon>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  column-gap: 6px;
  position: fixed;
  left: 30px;
  right: 40px;
  top: 0px;
  background: #fff;
  z-index: 1000;
  padding: 10px 0;
`;

const Time = styled.div`
  flex-grow: 1;
  font-size: 14px;
`;

const Icon = styled.i`
  font-size: 14px;
`;

export { Component as CommonHeader };
