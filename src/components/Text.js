import styled from "styled-components";
const Component = ({ text, size, color, font, width, className }) => {
  return (
    <Text
      className={className}
      color={color}
      size={size}
      font={font}
      width={width}
    >
      {text}
    </Text>
  );
};

const Text = styled.div`
  color: ${(props) => props.color ?? "black"};
  font-size: ${(props) => props.size ?? "14px"};
  font-weight: ${(props) => props.font ?? "none"};
  max-width: ${(props) => props.width ?? "none"};
  white-space: wrap;
`;

export { Component as Text };
