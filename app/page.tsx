const activities = [
  {
    icon: "🌱",
    title: "Community Development",
    text: "Working together to create stronger, healthier and more connected communities.",
  },
  {
    icon: "🎓",
    title: "Youth Empowerment",
    text: "Encouraging young people to learn, lead and create positive change.",
  },
  {
    icon: "🤝",
    title: "Social Service",
    text: "Supporting people in need through meaningful community initiatives.",
  },
  {
    icon: "❤️",
    title: "Helping Families",
    text: "Extending care and support to families and individuals who need it most.",
  },
];

const sponsors = [
  "Main Sponsors",
  "Gold Sponsors",
  "Silver Sponsors",
  "Community Supporters",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-50 backdrop-blur">
              ✨ Together for a better tomorrow
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Sunshine Youth
              <span className="block text-emerald-300">
                Association
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-emerald-50/85 sm:text-xl">
              Empowering young people, strengthening communities and creating
              opportunities for a brighter future.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#about"
                className="rounded-full bg-white px-7 py-3.5 text-center font-semibold text-emerald-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Discover Our Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Get Involved →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          <div className="px-6 py-8 text-center">
            <div className="text-3xl font-bold text-emerald-800">01</div>
            <p className="mt-1 text-sm text-slate-500">Community</p>
          </div>

          <div className="px-6 py-8 text-center">
            <div className="text-3xl font-bold text-emerald-800">100+</div>
            <p className="mt-1 text-sm text-slate-500">People Reached</p>
          </div>

          <div className="px-6 py-8 text-center">
            <div className="text-3xl font-bold text-emerald-800">24/7</div>
            <p className="mt-1 text-sm text-slate-500">Commitment</p>
          </div>

          <div className="px-6 py-8 text-center">
            <div className="text-3xl font-bold text-emerald-800">∞</div>
            <p className="mt-1 text-sm text-slate-500">Hope</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Building a brighter future,
              <span className="block text-emerald-700">
                one community at a time.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sunshine Youth Association is a community-focused organization
              dedicated to bringing people together and creating meaningful
              opportunities for young people and families.
            </p>

            <p className="mt-4 leading-7 text-slate-500">
              Through social initiatives, youth activities, community support
              and collective action, we believe that even a small contribution
              can create a lasting impact.
            </p>

            <a
              href="#activities"
              className="mt-8 inline-flex items-center font-semibold text-emerald-700 transition hover:text-emerald-900"
            >
              Explore our activities <span className="ml-2">→</span>
            </a>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-50 p-8 shadow-sm sm:p-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-800 text-4xl shadow-lg">
                ☀️
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                A stronger society where young people are empowered, families
                are supported and every individual has an opportunity to
                contribute and grow.
              </p>

              <div className="mt-8 h-1 w-16 rounded-full bg-emerald-700" />
            </div>
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="bg-emerald-950">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Our Mission
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Small actions can create
              <span className="block text-emerald-300">
                meaningful change.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-emerald-50/75">
              We bring people together to serve, support and empower our
              community through compassion, participation and responsible
              action.
            </p>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section
        id="activities"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Turning care into action.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our work focuses on practical initiatives that bring positive
            change to people and communities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl transition group-hover:bg-emerald-100">
                {activity.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {activity.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {activity.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPONSORS */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Our Supporters
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Together, we make an impact.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              We are grateful to everyone who supports our vision and helps us
              serve the community.
            </p>
          </div>

         <div className="mt-12 mx-auto max-w-3xl">
  <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 text-center shadow-sm sm:p-10">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
      🤝
    </div>

    <h3 className="mt-5 text-2xl font-bold text-slate-800">
      Become a Sponsor
    </h3>

    <p className="mx-auto mt-3 max-w-xl text-slate-600 leading-7">
      We are looking forward to partnering with individuals and organizations
      who believe in creating a brighter future for our community.
    </p>

    <a
      href="#contact"
      className="mt-6 inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
    >
      Support Our Mission →
    </a>
  </div>
</div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-800 to-teal-700 px-8 py-16 text-center shadow-xl sm:px-16">

          <div className="text-5xl">🤝</div>

          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Be part of the change.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50/80">
            Whether you volunteer, support an initiative or simply spread the
            word, your contribution can make a difference.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/donations"
              className="rounded-full bg-white px-8 py-3.5 font-semibold text-emerald-900 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Support Our Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <div className="text-3xl">☀️</div>
              <h2 className="mt-4 text-2xl font-bold">
                Sunshine Youth Association
              </h2>
              <p className="mt-3 leading-7 text-slate-500">
                Serving the community with compassion, unity and hope.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Quick Links
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                <a href="#about" className="hover:text-emerald-700">
                  About Us
                </a>
                <a href="#activities" className="hover:text-emerald-700">
                  Activities
                </a>
                <a href="/donations" className="hover:text-emerald-700">
                  Donations
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Get Involved
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Interested in volunteering, partnering with us or supporting
                our work? We would love to hear from you.
              </p>

              <a
                href="mailto:contact@sunshineyouthassociation.org"
                className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900"
              >
                Contact us →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Sunshine Youth Association. All rights
        reserved.
      </footer>

    </main>
  );
}
