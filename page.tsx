const stats = [
  { value: "2026", label: "Ganesh Utsav" },
  { value: "1000+", label: "Community Members" },
  { value: "10+", label: "Years of Service" },
];

export const metadata = {
  title: "Sunshine Youth Association",
  description:
    "Sunshine Youth Association — celebrating Ganesh Utsav with devotion, unity and community spirit.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#2b2118]">
      
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7e8] via-[#fffaf3] to-[#f8eee0]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-medium text-orange-700 shadow-sm">
              🪔 Ganesh Utsav 2026
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Sunshine Youth
              <span className="block text-orange-600">
                Association
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              Together in devotion. Together as a community.
              <br />
              Celebrating the spirit of Ganesh Utsav with faith,
              friendship and service.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/donations"
                className="rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Donate Now →
              </a>

              <a
                href="#about"
                className="rounded-full border border-stone-300 bg-white px-7 py-3.5 font-semibold text-stone-700 transition hover:border-orange-300 hover:text-orange-700"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 right-20 h-64 w-64 rounded-full bg-amber-200/30 blur-2xl" />
      </section>

      {/* STATS */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-stone-200 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-8 text-center"
            >
              <p className="text-3xl font-bold text-orange-600">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-stone-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Faith, unity &amp; service.
            </h2>

            <p className="mt-6 leading-8 text-stone-600">
              Sunshine Youth Association is a community-driven youth
              organization dedicated to bringing people together through
              culture, celebration and social service.
            </p>

            <p className="mt-4 leading-8 text-stone-600">
              Our Ganesh Utsav is more than a festival. It is a celebration
              of togetherness, devotion and the bonds that make our community
              stronger.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 p-1 shadow-xl shadow-orange-100">
            <div className="rounded-[22px] bg-white/95 p-8 sm:p-10">
              <div className="text-5xl">🙏</div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                To create a united, positive and supportive community where
                every person can participate, contribute and celebrate
                together.
              </p>

              <div className="mt-7 h-1 w-16 rounded-full bg-orange-500" />
            </div>
          </div>

        </div>
      </section>

      {/* FESTIVAL */}
      <section className="bg-[#fff3df]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Ganesh Utsav 2026
            </p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Celebrate with us 🪔
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">
              Join our community as we come together to celebrate Lord
              Ganesha with devotion, cultural programs and joyful moments.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-orange-100">
              <div className="text-3xl">🙏</div>
              <h3 className="mt-5 text-xl font-bold">Devotion</h3>
              <p className="mt-2 text-sm leading-6 text-stone-500">
                Experience the spiritual joy and blessings of Ganesh Utsav.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-orange-100">
              <div className="text-3xl">🎉</div>
              <h3 className="mt-5 text-xl font-bold">Celebration</h3>
              <p className="mt-2 text-sm leading-6 text-stone-500">
                Enjoy cultural activities and memorable community moments.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-orange-100">
              <div className="text-3xl">🤝</div>
              <h3 className="mt-5 text-xl font-bold">Togetherness</h3>
              <p className="mt-2 text-sm leading-6 text-stone-500">
                Bringing families, friends and young people together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
        <div className="overflow-hidden rounded-3xl bg-stone-900 px-7 py-12 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Be a part of it
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Every contribution makes a difference.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-stone-300">
            Support our celebrations and community initiatives.
            Together, we can make this Ganesh Utsav truly special.
          </p>

          <a
            href="/donations"
            className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-3.5 font-semibold text-white transition hover:bg-orange-400"
          >
            Support Us →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-center text-sm text-stone-500 sm:px-10">
          <p className="font-semibold text-stone-700">
            Sunshine Youth Association
          </p>
          <p>
            © {new Date().getFullYear()} Sunshine Youth Association. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
