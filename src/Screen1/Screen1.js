import { Content } from "./Content";
import { CommonHeader } from "./CommonHeader";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Screen1() {
  return (
    <>
      <CommonHeader></CommonHeader>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}
