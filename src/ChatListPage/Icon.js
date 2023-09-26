import styled from "styled-components";

const Component = ({ iconName, title, active }) => {
  return (
    <Wrapper active={active}>
      <i className={`fa-solid fa-${iconName}`}></i>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  font-size: 32px;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  margin: 8px 0;
  border: none;
  background: transparent;
  flex-grow: 1;
  color: ${(props) => (props.active ? "#0971f1" : "#9e9a9a")};
`;

const Title = styled.div`
  font-size: 18px;
`;

export { Component as Icon };
