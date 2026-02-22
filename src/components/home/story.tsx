/* eslint-disable react-hooks/rules-of-hooks */
import { useFadeIn } from "../slide-in-effect";

type TItem = {
  year: string;
  title: string;
  school: string;
  desc: string;
  tag: string;
};
const timeline: TItem[] = [
  {
    year: "2021",
    title: "100 Level — Foundation",
    school: "Adeleke University, Ede",
    desc: "My introduction to university-level Computer Science. Adjusting to C programming, discrete mathematics, and the intensity of structured academic learning. The transition was challenging, but it laid the foundation for disciplined problem-solving and deeper technical curiosity.",
    tag: "100L",
  },
  {
    year: "2022",
    title: "200 Level — Building Momentum",
    school: "Adeleke University, Ede",
    desc: "Data Structures, Object-Oriented Programming, and database systems began to connect theory with practical implementation. Started building small independent projects beyond coursework and began thinking more seriously about backend architecture and system design.",
    tag: "200L",
  },
  {
    year: "2023",
    title: "300 Level — Practical Exposure (SIWES)",
    school: "Adeleke University, Ede",
    desc: "Industrial training year. Gained hands-on exposure to real-world development workflows — version control, debugging production issues, and collaborative coding environments. This period shifted my mindset from writing code that works to writing code that scales and maintains integrity.",
    tag: "300L / SIWES",
  },
  {
    year: "2024 – 2025",
    title: "400 Level — Specialization & Final Project",
    school: "Adeleke University, Ede",
    desc: "Final year focused on advanced topics, backend systems, authentication flows, and secure application development. Currently completing a capstone project centered on building a robust web-based system with emphasis on security, usability, and scalability.",
    tag: "400L ✨",
  },
];

export function Story() {
  const headRef = useFadeIn();
  return (
    <section id="story" className="w-full py-20 sm:py-28 relative">
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-600/5 blur-[90px]" />

      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div ref={headRef} className="fi space-y-2 mb-14">
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
            The journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My School Story
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            My journey at Adeleke University has shaped my growth from a curious
            student into a disciplined Computer Science finalist focused on
            building real-world software solutions.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/20 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const cardRef = useFadeIn(i * 60);
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  ref={cardRef}
                  className={`fi relative flex md:items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-[5px] md:left-1/2 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-[#0a0a0f] z-10" />

                  <div
                    className={`pl-10 md:pl-0 w-full md:w-[calc(50%-32px)] ${isEven ? "md:pr-10" : "md:pl-10"}`}
                  >
                    <div className="p-5 sm:p-6 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-indigo-500/20 transition-all duration-300">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <span className="text-[11px] font-mono text-indigo-400 tracking-wider">
                            {item.year}
                          </span>
                          <h3 className="text-sm sm:text-base font-semibold text-white mt-0.5 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-zinc-500 mt-0.5">
                            {item.school}
                          </p>
                        </div>
                        <span className="flex-shrink-0 text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-white/[0.08] text-zinc-400 bg-white/[0.04] whitespace-nowrap">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-[calc(50%-32px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
