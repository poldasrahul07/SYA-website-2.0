import Link from "next/link";

// Placeholder content — once Supabase is connected, these should be
// replaced with data fetched from `years`, `events`, `media`, and
// `sponsors` (see lib/supabase.ts and supabase/migrations).
const currentYear = {
  year: 2026,
  dates: "27 Aug – 6 Sep, 2026",
  venue: "Community Grounds, Mangalpally",
  note: "Prathisthapana begins the celebrations this year — full daily schedule below.",
};

const upcomingEvents = [
  { title: "Ganesh Prathisthapana", when: "27 Aug · 6:00 AM", venue: "Main Pandal" },
  { title: "Cultural Program", when: "31 Aug · 7:00 PM", venue: "Community Grounds" },
  { title: "Annadanam", when: "1 Sep · 12:30 PM", venue: "Main Pandal" },
  { title: "Visarjan", when: "6 Sep · 4:00 PM", venue: "Mangalpally Lake" },
];

const previousYears = [2026, 2025, 2024, 2023, 2022];

const communityStats = [
  { label: "Years celebrating", value: "8" },
  { label: "Volunteers", value: "120+" },
  { label: "Photos archived", value: "6,400+" },
  { label: "Videos archived", value: "180+" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dusk text-cloth">
        <GarlandMotif />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:pb-28 md:pt-24">
          <p className="font-display text-xl italic text-marigold-light">
            Ganpati Bappa Morya
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.08] text-cloth sm:text-5xl md:text-6xl">
            Sunshine Youth Association
          </h1>
          <p className="mt-4 max-w-md text-lg text-cloth/70">
            Mangalpally, Hyderabad — celebrating Ganesh Utsav together,
            year after year.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/utsav"
              className="rounded-full bg-marigold px-6 py-3 font-medium text-ink transition-colors hover:bg-marigold-light"
            >
              Explore Utsav {currentYear.year}
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-cloth/30 px-6 py-3 font-medium text-cloth transition-colors hover:bg-cloth/10"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Current Utsav */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr,1.3fr] md:gap-14">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-vermillion">
              This year
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink">
              Ganesh Utsav {currentYear.year}
            </h2>
            <dl className="mt-6 space-y-3 text-ink/80">
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-ink/50">Dates</dt>
                <dd>{currentYear.dates}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-ink/50">Venue</dt>
                <dd>{currentYear.venue}</dd>
              </div>
            </dl>
            <p className="mt-5 max-w-prose text-ink/70">{currentYear.note}</p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-vermillion">
              Upcoming
            </p>
            <ul className="mt-4 divide-y divide-brass/15 border-y border-brass/15">
              {upcomingEvents.map((event) => (
                <li
                  key={event.title}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <div>
                    <p className="font-medium text-ink">{event.title}</p>
                    <p className="text-sm text-ink/55">{event.venue}</p>
                  </div>
                  <p className="whitespace-nowrap text-sm text-ink/70">
                    {event.when}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Previous years */}
      <section className="bg-clothdeep py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-2xl text-ink">
            Previous celebrations
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {previousYears.map((year) => (
              <Link
                key={year}
                href={`/utsav/${year}`}
                className="rounded-full border border-brass/30 bg-cloth px-6 py-2.5 font-display text-lg text-ink transition-colors hover:border-vermillion hover:text-vermillion"
              >
                {year}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency + community stats */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-2xl text-ink">Transparency</h2>
            <p className="mt-2 max-w-prose text-ink/70">
              Every rupee of chandha and every expense for {currentYear.year}{" "}
              is recorded and open for the community to review.
            </p>
            <Link
              href="/donate"
              className="mt-5 inline-block text-vermillion underline decoration-vermillion/40 underline-offset-4 hover:decoration-vermillion"
            >
              View the full transparency report →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">Our community</h2>
            <div className="mt-5 grid grid-cols-2 gap-6">
              {communityStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-vermillion">
                    {stat.value}
                  </p>
                  <p className="text-sm text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/volunteer"
              className="mt-6 inline-block rounded-full bg-ink px-6 py-3 font-medium text-cloth transition-colors hover:bg-ink/85"
            >
              Become a volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function GarlandMotif() {
  // A restrained, hand-drawn marigold-garland line motif rather than a
  // stock gradient blob — the one bold visual moment on the page.
  return (
    <svg
      className="pointer-events-none absolute -right-16 -top-10 h-[420px] w-[420px] opacity-25 md:opacity-40"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M40 40c60 20 40 70 100 80s60-50 120-40 40 90 100 70"
        stroke="#E8A33D"
        strokeWidth="2"
        fill="none"
      />
      {Array.from({ length: 14 }).map((_, i) => (
        <circle
          key={i}
          cx={40 + i * 26}
          cy={60 + Math.sin(i) * 40}
          r="6"
          fill={i % 3 === 0 ? "#C1432E" : "#E8A33D"}
        />
      ))}
    </svg>
  );
}
