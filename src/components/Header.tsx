export function Header() {
  return (
    <header className="flex fixed w-full justify-between items-center bg-slate-700 text-slate-50 px-6 py-4">
      <span>Logo</span>
      <nav className="space-x-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </nav>
    </header>
  );
}
