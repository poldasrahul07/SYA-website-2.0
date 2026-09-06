export const metadata = { title: "About Us" };

const milestones = [
  { year: "2019", event: "Sunshine Youth Association established" },
  { year: "2020", event: "First community Ganesh Utsav celebration" },
  { year: "2021", event: "Launched a local community initiative" },
  { year: "2022", event: "Expanded celebrations across Mangalpally" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl text-ink">About Us</h1>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-vermillion">Who we are</h2>
        <p className="mt-3 max-w-prose text-ink/75">
          Sunshine Youth Association is a community group based in
          Mangalpally, Hyderabad, bringing residents together each year to
          celebrate Ganesh Utsav and support local initiatives.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-vermillion">Our mission</h2>
        <p className="mt-3 max-w-prose text-ink/75">
          We organize the annual Ganesh Utsav, encourage youth participation
          in cultural activities, and run community and social-service
          initiatives throughout the year.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-vermillion">
          Association history
        </h2>
        <ol className="mt-5 space-y-4 border-l border-brass/30 pl-6">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-vermillion" />
              <p className="font-display text-lg text-ink">{m.year}</p>
              <p className="text-ink/70">{m.event}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
