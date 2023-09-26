import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Text } from "../components/Text";

const Component = () => {
  return (
    <Wrapper>
      <Text text="Lorem Ipsum Title" size="14px"></Text>
      <Percent text="1.9%" size="14px" color="grey"></Percent>
      <Text text="3.2k" size="14px" color="grey"></Text>
      <Button iconName="angle-right" space="0"></Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  border-bottom: 1px solid #f1e9e9;
  padding: 8px;
`;

const Percent = styled(Text)`
  flex-grow: 2;
  text-align: left;
`;
export { Component as Item };
