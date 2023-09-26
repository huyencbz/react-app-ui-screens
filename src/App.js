import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatListPage from "./ChatListPage/ChatListPage";
import ChatPage from "./ChatPage/ChatPage";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";
import Screen1 from "./Screen1/Screen1";
import Screen2 from "./Screen2/Screen2";
import Screen3 from "./Screen3/Screen3";
import Screen4 from "./Screen4/Screen4";
import Screen5 from "./Screen5/Screen5";
import Screen6 from "./Screen6/Screen6";
import Screen7 from "./Screen7/Screen7";
import Screen8 from "./Screen8/Screen8";

export default function App() {
  return (
    <Container className="App">
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatListPage />}></Route>
          <Route path="/0" element={<ChatPage />}></Route>
          <Route path="/1" element={<Screen1 />}></Route>
          <Route path="/2" element={<Screen2 />}></Route>
          <Route path="/3" element={<Screen3 />}></Route>
          <Route path="/4" element={<Screen4 />}></Route>
          <Route path="/5" element={<Screen5 />}></Route>
          <Route path="/6" element={<Screen6 />}></Route>
          <Route path="/7" element={<Screen7 />}></Route>
          <Route path="/8" element={<Screen8 />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;
