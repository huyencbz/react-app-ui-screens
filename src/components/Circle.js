import styled from "styled-components";
const Component = ({ size, color, borderRadius, className }) => {
  return (
    <Circle
      className={className}
      color={color}
      size={size}
      borderRadius={borderRadius}
    ></Circle>
  );
};

const Circle = styled.div`
  background: ${(props) => props.color ?? "#bab9b9"};
  border: none;
  height: ${(props) => props.size ?? "48px"};
  width: ${(props) => props.size ?? "48px"};
  border-radius: ${(props) => props.borderRadius ?? "50%"};
  flex-shrink: 0;
`;

export { Component as Circle };
