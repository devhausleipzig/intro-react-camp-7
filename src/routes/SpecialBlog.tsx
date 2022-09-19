import { Link, Outlet } from "react-router-dom";
import { posts, titleToSlug } from "./Blog";
export function SpecialBlog() {
  return (
    <div className="h-screen flex">
      <aside className="bg-slate-700 pt-20 flex flex-col px-8 gap-4">
        {posts.map((post) => (
          <Link
            key={post.title}
            className="text-slate-50 hover:underline"
            to={`/special-blog/${titleToSlug(post.title)}`}
          >
            {post.title}
          </Link>
        ))}
      </aside>
      <div className="flex-1 pt-20 pl-20">
        <Outlet />
      </div>
    </div>
  );
}
