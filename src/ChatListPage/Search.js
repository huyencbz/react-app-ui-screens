import styled from "styled-components";

const Component = () => {
  return (
    <Wrapper>
      <Icon className="fa-solid fa-search"></Icon>
      <Input type="search" placeholder="Search" />
    </Wrapper>
  );
};

const Input = styled.input`
  border: none;
  flex-grow: 1;
  background: transparent;
  margin-right: 20px;
  :focus {
    outline: none;
  }
  font-size: 16px;
`;

const Icon = styled.i`
  margin-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  border-radius: 20px;
  background: #dcdcdc;
  height: 40px;
  width: 100%;
  margin: 54px 0 24px 0;
  :focus-within {
    border: 1px solid #000;
  }
`;

export { Component as Search };
