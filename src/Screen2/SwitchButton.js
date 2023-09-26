import styled from "styled-components";

const Component = () => {
  return (
    <SwitchButton for="input">
      <Checkbox id="input" type="checkbox"></Checkbox>
      <Slider></Slider>
    </SwitchButton>
  );
};

const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 12px;
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 6px;
  /* -webkit-transition: 0.4s; */
  transition: 0.4s;
  ::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 0px;
    bottom: -2px;
    background-color: black;
    /* -webkit-transition: 0.4s; */
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + ${Slider}::before {
    /* -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px); */
    transform: translateX(8px);
  }
`;

export { Component as SwitchButton };
