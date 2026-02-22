import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["About", "Story", "Skills", "Gallery", "Contact"];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        <span className="font-mono text-sm tracking-widest text-zinc-400 uppercase select-none">
          AU<span className="text-indigo-400">.</span>CS
        </span>

        <nav className="hidden md:flex gap-7 text-sm text-zinc-400">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative group hover:text-white transition-colors duration-200"
            >
              {l}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-indigo-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-full h-[1.5px] bg-zinc-400 transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-full h-[1.5px] bg-zinc-400 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-full h-[1.5px] bg-zinc-400 transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="bg-[#0a0a0f]/98 backdrop-blur-xl border-b border-white/[0.06] px-5 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white text-sm py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}