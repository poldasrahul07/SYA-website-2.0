export const metadata = { title: "Sponsors" };

const tiers = [
  { name: "Main Sponsors", size: "h-24" },
  { name: "Gold Sponsors", size: "h-20" },
  { name: "Silver Sponsors", size: "h-16" },
  { name: "Supporters", size: "h-12" },
];

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="font-display text-4xl text-ink">Our Sponsors</h1>
      <p className="mt-3 max-w-prose text-ink/70">
        Ganesh Utsav {new Date().getFullYear()} is made possible by the
        generosity of our sponsors.
      </p>

      {tiers.map((tier) => (
        <section key={tier.name} className="mt-12">
          <h2 className="font-display text-2xl text-vermillion">
            {tier.name}
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`${tier.size} rounded-xl border border-dashed border-brass/30 bg-clothdeep`}
              />
            ))}
          </div>
        </section>
      ))}

      <a
        href="/contact"
        className="mt-14 inline-block rounded-full bg-ink px-6 py-3 font-medium text-cloth transition-colors hover:bg-ink/85"
      >
        Become a sponsor
      </a>
    </div>
  );
}
