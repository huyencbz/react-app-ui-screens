import styled from "styled-components";

const Component = ({
  iconName,
  hasBackground,
  space,
  size,
  backgroundSize,
  className
}) => {
  return (
    <Button
      hasBackground={hasBackground}
      space={space}
      size={size}
      backgroundSize={backgroundSize}
      className={className}
    >
      <i className={`fa-solid fa-${iconName}`}></i>
    </Button>
  );
};

const Button = styled.button`
  height: ${(props) => props.backgroundSize ?? "40px"};
  width: ${(props) => props.backgroundSize ?? "40px"};
  border-radius: 50%;
  border: none;
  background: ${(props) => props.hasBackground ?? "transparent"};
  font-size: ${(props) => props.size ?? "20px"};
  margin: ${(props) => props.space ?? "14px 0"};
`;

export { Component as Button };
