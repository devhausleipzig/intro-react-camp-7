import { useState } from "react";
import shuffle from "just-shuffle";

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
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a> */}
      </nav>
    </header>
  );
}
