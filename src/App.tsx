import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./routes/About";
import { Blog } from "./routes/Blog";
import { Home } from "./routes/Home";
import { Post } from "./routes/Post";
import { SpecialBlog } from "./routes/SpecialBlog";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="special-blog" element={<SpecialBlog />}>
          <Route index element={<p>Please select a blog post</p>} />
          <Route path=":slug" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
}
