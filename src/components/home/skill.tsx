import { useFadeIn } from "../slide-in-effect";

const skills = [
  "TypeScript",
  "React (Vite)",
  "Node.js",
  "Nest js",
  "MongoDB (Mongoose)",
  "Next.js",
  "REST API Design",
  "Middleware Architecture",
  "Tailwind CSS",
  "Git & GitHub",
  "SQL",
];

export function Skills() {
  const ref = useFadeIn();
  return (
    <section id="skills" className="w-full py-20 sm:py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div ref={ref} className="fi space-y-2 mb-8">
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Tools & Tech</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/[0.07] bg-white/[0.02] text-xs sm:text-sm text-zinc-300 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/[0.06] transition-all duration-200 cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
