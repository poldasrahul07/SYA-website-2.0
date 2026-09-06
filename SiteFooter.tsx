import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-brass/20 bg-dusk pb-16 pt-14 text-cloth/85 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-lg text-cloth">
            Sunshine Youth Association
          </p>
          <p className="mt-2 text-sm text-cloth/60">
            Mangalpally, Hyderabad
            <br />
            Telangana, India
          </p>
        </div>

        <FooterColumn
          title="Explore"
          links={[
            { href: "/utsav", label: "Ganesh Utsav" },
            { href: "/gallery", label: "Gallery" },
            { href: "/events", label: "Events" },
            { href: "/history", label: "Our History" },
          ]}
        />

        <FooterColumn
          title="Get involved"
          links={[
            { href: "/donate", label: "Chandha / Donations" },
            { href: "/sponsors", label: "Sponsors" },
            { href: "/volunteer", label: "Volunteer" },
            { href: "/contact", label: "Contact" },
          ]}
        />

        <FooterColumn
          title="Association"
          links={[
            { href: "/privacy", label: "Privacy policy" },
            { href: "/terms", label: "Terms" },
            { href: "/admin/login", label: "Admin login" },
          ]}
        />
      </div>

      <p className="mx-auto mt-12 max-w-6xl px-5 text-xs text-cloth/40">
        © {new Date().getFullYear()} Sunshine Youth Association. Ganpati
        Bappa Morya.
      </p>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-medium text-marigold">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-cloth/70 transition-colors hover:text-cloth"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
