import styled from "styled-components";
const Component = ({
  padding,
  text,
  className,
  color,
  background,
  borderRadius,
  shadow
}) => {
  return (
    <Button
      padding={padding}
      className={className}
      color={color}
      background={background}
      borderRadius={borderRadius}
      shadow={shadow}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
  background: ${(props) => props.background ?? "transparent"};
  color: ${(props) => props.color ?? "black"};
  box-shadow: ${(props) => props.shadow ?? "4px 4px 5px #d1cece"};
  border-radius: ${(props) => props.borderRadius ?? "4px"};
  border: none;
  padding: ${(props) => props.padding ?? "6px 30px"};
  flex-shrink: 1;
`;

export { Component as LoremIpsumButton };
