import Link from "next/link";

const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/utsav", label: "Utsav" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const mobileNav = [
  { href: "/", label: "Home" },
  { href: "/utsav", label: "Utsav" },
  { href: "/gallery", label: "Gallery" },
  { href: "/donate", label: "Donate" },
  { href: "/about", label: "More" },
];

export default function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brass/20 bg-cloth/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark />
            <span className="font-display text-lg leading-tight text-ink">
              Sunshine Youth
              <br className="hidden sm:block" /> Association
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-ink/80 transition-colors hover:text-vermillion"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/donate"
            className="rounded-full bg-vermillion px-5 py-2.5 text-sm font-medium text-cloth transition-colors hover:bg-vermillion-dark"
          >
            Donate
          </Link>
        </div>
      </header>

      {/* Mobile quick nav — fixed to bottom, thumb-reachable */}
      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-brass/20 bg-cloth/95 backdrop-blur md:hidden"
      >
        {mobileNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex-1 py-2.5 text-center text-xs font-medium text-ink/75"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* Spacer so fixed mobile nav doesn't cover content */}
      <div className="h-14 md:hidden" aria-hidden />
    </>
  );
}

function LogoMark() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="17" cy="17" r="16" fill="#241830" />
      <path
        d="M17 8c3 3.2 3 6-.4 8-3.2 1.9-4.6 4-3.6 6.6.9 2.3 3.3 3.4 6 2.9"
        stroke="#E8A33D"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="17" cy="17" r="2.4" fill="#C1432E" />
    </svg>
  );
}
