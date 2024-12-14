import MenuTemplate from "@/scene/Menu";
import Content from "@/components/Home";
import { deflate } from "zlib";

const Home = () => {
  return (
    <MenuTemplate>
      <Content />
    </MenuTemplate>
  )
}

export default Home