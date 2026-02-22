import { useFadeIn } from "../slide-in-effect";

export function Contact() {
  const ref = useFadeIn();
  return (
    <section id="contact" className="w-full py-20 sm:py-28 relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-indigo-600/8 blur-[100px]" />
      </div>
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div
          ref={ref}
          className="fi relative overflow-hidden w-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 sm:p-14 lg:p-20 text-center space-y-5"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-80 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Let's connect</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Say Hello 👋</h2>
          <p className="text-zinc-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Internships, collabs, project ideas, or just good tech conversations — my inbox is always open.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <a
              href="mailto:anjorinfavour123@gmail.com"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-indigo-600/25"
            >
              Email me
            </a>
            {[
              { label: "Twitter / X", href: "https://x.com/@DevAnjorin" },
              { label: "LinkedIn", href: "https://portfolio-nine-theta-aw7czqr229.vercel.app/www.linkedin.com/in/anjorin-favour" },
              { label: "GitHub", href: "https://github.com/anjorin001" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-zinc-300 text-sm font-medium transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}