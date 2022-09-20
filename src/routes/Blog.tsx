import { Link, Outlet } from "react-router-dom";

export function titleToSlug(title: string) {
  return title.toLowerCase().split(" ").join("-");
}

export function slugToTile(slug: string) {
  return slug
    ?.split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export const posts = [
  {
    title: "Blog Post 1",
    content: "This is my first blog post",
  },
  {
    title: "Blog Post 2",
    content: "This is my second blog post",
  },
  {
    title: "Blog Post 3",
    content: "This is my third blog post",
  },
];
export function Blog() {
  return (
    <div className="pt-20">
      <h1>Blog</h1>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            to={`/blog/${titleToSlug(post.title)}`}
            key={post.title}
            className="border border-slate-700 shadow-md"
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
