import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.size ?? "16px"};
  font-weight: bold;
  flex-grow: 1;
`;
