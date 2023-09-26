import { Header } from "./Header";
import { Search } from "./Search";
import { MessageList } from "./MessageList";
import { Footer } from "./Footer";

export default function ChatListPage() {
  return (
    <>
      <Header></Header>
      <Search></Search>
      <MessageList></MessageList>
      <Footer></Footer>
    </>
  );
}
