import { useParams } from "react-router-dom";
import { posts, slugToTile } from "./Blog";

export function Post() {
  const { slug } = useParams();
  const title = slugToTile(slug!);
  const post = posts.find((item) => item.title === title);
  if (!post) {
    return <p>Couldn't find a post for slug {slug}</p>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
