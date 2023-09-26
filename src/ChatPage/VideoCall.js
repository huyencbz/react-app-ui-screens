import styled from "styled-components";
import { Button } from "../components/ButtonIcon";
import { Title } from "../components/Title";

const Component = ({ isSender, text, hasBackground }) => {
  return (
    <Container isSender={isSender}>
      huyen
      {/* <Wrapper>
        <Button iconName="video-slash" hasBackground={hasBackground}></Button>
        <WrapperTitle>
          <Title size="16px">{text}</Title>
          <Status>10:10 AM</Status>
        </WrapperTitle>
      </Wrapper>
      <ButtonCallback>CALL BACK</ButtonCallback> */}
    </Container>
  );
};

const Container = styled.li`
  /* display: flex;
  width: 100%;
  border-style: solid;
  border-color: white;
  border-width: 4px 16px 8px 8px; */
  /* background: grey; */
  flex-direction: column;
  flex-direction: row-reverse;
 
  /* box-sizing: border-box; */
  /* border-right-width: ${(props) => (props.isSender ? "8px" : "100px")};
  border-left-width: ${(props) => (props.isSender ? "100px" : "52px")}; */

  /* position: relative; */
  /* ::before {
    content: "";
    position: absolute;
    left: -8px;
    top: -8px;
    bottom: -8px;
    right: -8px;
    border: 8px solid white;
    border-radius: 24px;
    pointer-events: none;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

const WrapperTitle = styled.div`
  flex-grow: 1;
`;
const Status = styled.div`
  font-size: 14px;
  color: #b1adad;
`;

const ButtonCallback = styled.button`
  padding: 10px;
  border-radius: 10px;
`;

export { Component as VideoCall };
