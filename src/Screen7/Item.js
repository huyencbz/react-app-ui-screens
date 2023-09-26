import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Text } from "../components/Text";

const Component = ({ height, className }) => {
  return (
    <Wrapper height={height} className={className}>
      <Shape height={height}></Shape>
      <Summary>
        <Title text="Lorem Ipsum is simply dummy text of text"></Title>
        <Button iconName="ellipsis-vertical"></Button>
      </Summary>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: calc((100% / 2) - 6px);
`;

const Title = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Summary = styled.div`
  display: flex;
  align-items: center;
`;

const Shape = styled.div`
  height: ${(props) => props.height ?? "170px"};
  background: #cbc8c8;
  border-radius: 12px;
`;

export { Component as Item };
