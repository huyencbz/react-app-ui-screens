import styled from "styled-components";

const Component = () => {
  return <Search placeholder="lorem ipsum"></Search>;
};

const Search = styled.input`
  margin: 38px 14px 0 14px;
  background: #ebe7e7;
  border-radius: 20px;
  border: none;
  height: 30px;
  width: 100%;
  max-width: calc(100% - 40px);
  ::placeholder {
    color: #d3d1d1;
    font-size: 12px;
  }
  padding: 2px 12px;
`;

export { Component as Search };
