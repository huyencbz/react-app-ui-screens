import styled from "styled-components";

const Component = ({ src, size }) => {
  return <Avatar src={src} alt="Avatar" size={size} />;
};

const Avatar = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 50%;
`;

export { Component as Avatar };
