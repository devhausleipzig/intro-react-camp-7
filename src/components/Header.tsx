import { useState } from "react";
import shuffle from "just-shuffle";
import { Link } from "react-router-dom";

export function Header() {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ]);

  return (
    <header className="flex fixed w-full justify-between items-center bg-slate-700 text-slate-50 px-6 py-4">
      <span>Logo</span>
      <button onClick={() => setNavigation(shuffle(navigation))}>
        Shuffle
      </button>
      <nav className="space-x-4">
        {navigation.map((item) => (
          <Link key={item.name} to={item.href}>
            {item.name}
          </Link>
        ))}
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a> */}
      </nav>
    </header>
  );
}
