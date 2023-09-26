import { Header } from "../Screen2/Header";
import styled from "styled-components";
import { Content } from "./Content";

export default function Screen2() {
  return (
    <Container>
      <Header></Header>
      <Content></Content>
    </Container>
  );
}

const Container = styled.div`
  background: #f4efef;
  height: 600px;
  border-radius: 6px 6px 0 0;
  padding: 12px;
`;
