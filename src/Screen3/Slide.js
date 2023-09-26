import styled from "styled-components";

const Component = () => {
  return (
    <Slide>
      <Badge>0:00</Badge>
    </Slide>
  );
};

const Slide = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
  background: #cdcbcb;
  border-radius: 12px;
  flex-shrink: 0;
`;

const Badge = styled.span`
  position: absolute;
  background: #f2eeee;
  border-radius: 10px;
  font-size: 10px;
  padding: 4px;
  top: 8px;
  left: 8px;
`;

export { Component as Slide };
