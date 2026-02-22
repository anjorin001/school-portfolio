export function Hero() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-violet-600/8 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative w-full px-5 sm:px-8 lg:px-12 pt-28 pb-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
        <div className="relative flex-shrink-0">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-indigo-900/20">
            <img
              src="/gallery/pfp2.jpg"
              alt="Your Name"
              className="w-full h-full object-cover bg-[#0d0d1a]"
            />
          </div>
          <div className="absolute -bottom-2.5 -right-2.5 w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl border border-indigo-500/20 -z-10" />
          <div className="absolute -top-3 -right-3 flex items-center gap-1.5 bg-[#0f0f1a] border border-white/10 rounded-full px-3 py-1.5 text-[11px] text-zinc-300 shadow-lg whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Final Year 🎓
          </div>
        </div>

        <div className="text-center md:text-left space-y-5 w-full max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-zinc-400 font-mono">
            Hey there, welcome
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Anjorin Favour
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            400-level Computer Science student at{" "}
            <span className="text-indigo-400 font-medium">
              Adeleke University
            </span>
            , Ede. Full-stack developer focused on secure systems, scalable
            backends, and clean frontend architecture. I build software that
            solves real problems — not just demos.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#story"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-indigo-600/25"
            >
              My Story
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-zinc-300 text-sm font-medium transition-all duration-200"
            >
              Get in touch
            </a>
          </div>

          <div className="flex gap-8 sm:gap-12 pt-2 justify-center md:justify-start">
            {[
              { label: "Level", value: "400L" },
              { label: "Projects", value: "5" },
              { label: "Semesters", value: "7" },
            ].map(({ label, value }) => (
              <div key={label} className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {value}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
