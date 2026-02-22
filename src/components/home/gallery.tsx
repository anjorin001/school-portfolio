/* eslint-disable react-hooks/rules-of-hooks */
import { useFadeIn } from "../slide-in-effect";

const photos = [
  { src: "/gallery/matric.jpg", caption: "Matriculation 2022 🎓", wide: true },
  { src: "/gallery/au-tech.jpg", caption: "AU Tech Club ⚡", wide: false },
  { src:"/gallery/siwes-best.jpg", caption: "SIWES — Lagos ✈️", wide: false },
  { src:"/gallery/grinding.jpg" , caption: "FYP Grinding 🚀", wide: true },
];

export function Gallery() {
  const headRef = useFadeIn();
  return (
    <section id="gallery" className="w-full py-20 sm:py-28">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div ref={headRef} className="fi space-y-2 mb-10 sm:mb-12">
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Memories</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Gallery</h2>
          <p className="text-zinc-400 text-sm sm:text-base">Moments from the Adeleke years.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 auto-rows-[140px] sm:auto-rows-[190px] md:auto-rows-[230px] lg:auto-rows-[260px]">
          {photos.map((p, i) => {
            const r = useFadeIn(i * 70);
            return (
              <div
                key={i}
                ref={r}
                className={`fi relative overflow-hidden rounded-xl border border-white/[0.07] group cursor-pointer ${p.wide ? "col-span-2" : "col-span-1"}`}
              >
                <img src={p.src} alt={p.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-4">
                  <p className="text-sm text-white font-medium">{p.caption}</p>
                </div>

                <div className="sm:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent p-2.5">
                  <p className="text-[11px] text-white font-medium leading-tight">{p.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}