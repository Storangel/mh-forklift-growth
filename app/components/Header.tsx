export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-black tracking-tight">
          <span className="text-[#F05A00]">MH</span>{" "}
          <span className="text-black">Forklift</span>
        </a>

        <nav className="hidden gap-6 text-sm font-medium text-neutral-700 md:flex">
          <a href="/lp/alquiler-carretillas-valencia">Alquiler</a>
          <a href="/lp/robots-limpieza-cenobots">CENOBOTS</a>
          <a href="/blog">Blog</a>
        </nav>

        <a
          href="tel:963575361"
          className="rounded-full bg-[#F05A00] px-5 py-2 text-sm font-bold text-white"
        >
          96 357 53 61
        </a>
      </div>
    </header>
  );
}