import { TextMessage } from "./TextMessage";
import styled from "styled-components";
import { VideoCall } from "./VideoCall";

export default function Content() {
  return (
    <Container>
      <TextMessage text="HuyencuteHuyencute qua di"></TextMessage>
      <TextMessage hasAvatar text="HuyencuteHuyencute"></TextMessage>
      <TextMessage
        isSender
        text="HuyencuteHuyencuteHuyencuteHuyencuteHuyencuteHuyencuteHuyencuteHuyencuteHuyencuteHuyencute"
      ></TextMessage>
      <TextMessage hasAvatar text="HuyencuteHuyencute"></TextMessage>
      <TextMessage isSender text="cute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>
      <TextMessage isSender text="Huyencute"></TextMessage>

      <TextMessage
        isSender
        text="huyenn cute huyen cute huyenn hên hy "
      ></TextMessage>
      {/* <VideoCall isSender text="Video call" hasBackground="#dcdcdc"></VideoCall>
      <VideoCall text="Missed video call" hasBackground="red"></VideoCall> */}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 52px;
  margin-bottom: 50px;
  overflow: hidden auto;
  background: linear-gradient(
    rgb(255, 143, 178) 0%,
    rgb(167, 151, 255) 50%,
    rgb(0, 229, 255) 100%
  );
`;
