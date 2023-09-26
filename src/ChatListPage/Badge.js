import styled from "styled-components";

const Component = ({ children }) => {
  return <Badge>{children}</Badge>;
};

const Badge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: solid 2px #fff;
  background: red;
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: -6px;
  top: 4px;
  font-weight: bold;
`;

export { Component as Badge };
