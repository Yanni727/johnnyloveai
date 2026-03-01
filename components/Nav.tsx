import Link from "next/link";

const links = [
  { href: "/lead-reactivation", label: "Lead Reactivation" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 glow-border" />
          <div className="leading-tight">
            <div className="font-semibold tracking-tight neon-blue">
              Johnny Love <span className="neon-green">AI</span>
            </div>
            <div className="text-xs text-white/70">Florida-First Automation</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="text-sm px-4 py-2 rounded-xl bg-white/5 border border-white/10 glow-border hover:bg-white/10 transition"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}