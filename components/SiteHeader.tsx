export default function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div>
          <h1 className="text-xl font-bold">
            Sunshine Youth Association
          </h1>
          <p className="text-sm opacity-70">
            Ganesh Utsav
          </p>
        </div>

        <nav className="flex gap-4 text-sm font-medium">
          <a href="/">Home</a>
          <a href="/donations">Donations</a>
        </nav>
      </div>
    </header>
  );
}
