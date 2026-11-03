import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE, Magnetic } from './fx';
import { ProjectArt } from './Poster';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

export default function ProjectModal({ project, onClose, onSwitch }: { project: Project; onClose: () => void; onSwitch: (p: Project) => void }) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [project.id]);

  const more = projects.filter((p) => p.id !== project.id);

  return (
    <motion.div className="fixed inset-0 z-[140]" role="dialog" aria-modal="true" aria-labelledby={`title-${project.id}-modal`}>
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div ref={scroller} data-lenis-prevent className="absolute inset-0 overflow-y-auto overscroll-contain" onClick={onClose}>
        <motion.div
          className="relative mx-auto min-h-full max-w-5xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* billboard */}
          <div className="relative h-[52vh] min-h-[340px] overflow-hidden sm:rounded-t-2xl">
            <motion.div layoutId={`art-${project.id}`} className="absolute inset-0" transition={{ duration: 0.7, ease: EASE }}>
              <ProjectArt project={project} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close project"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-bone backdrop-blur transition hover:bg-black"
            >
              ✕
            </button>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10">
              <motion.p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-bone/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <span className="font-display text-xl tracking-normal text-crimson-2">S</span> ORIGINAL
              </motion.p>
              <motion.h2
                id={`title-${project.id}-modal`}
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.86] tracking-wide text-bone"
                transition={{ duration: 0.7, ease: EASE }}
              >
                {project.title}
              </motion.h2>
            </div>
          </div>

          <motion.div className="px-5 pb-12 sm:px-10" initial="hidden" animate="show" transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}>
            <motion.div variants={block} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist">
              <span className="font-semibold text-[#46e3a8]">{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-smoke" />
              <span>{project.genre}</span>
            </motion.div>

            <motion.p variants={block} className="mt-4 max-w-3xl text-lg leading-relaxed text-bone sm:text-xl">
              {project.logline}
            </motion.p>

            <motion.div variants={block} className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <Magnetic>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="play"
                    className="flex min-h-12 items-center gap-2 rounded-md bg-crimson px-6 text-[15px] font-bold text-white shadow-[0_0_40px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2"
                  >
                    ▶ Live Application ↗
                  </a>
                </Magnetic>
              )}
              {project.github && (
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="flex min-h-12 items-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
                  >
                    GitHub Repository ↗
                  </a>
                </Magnetic>
              )}
            </motion.div>

            {/* impact */}
            <motion.section variants={block} className="mt-12">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Key Metrics & Impact</h3>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-4">
                {project.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="bg-ink p-4 sm:p-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.5, ease: EASE }}
                  >
                    <dd className="font-display text-3xl leading-none tracking-tight text-bone sm:text-4xl">{m.value}</dd>
                    <dt className="mt-2 text-xs leading-snug text-mist">{m.label}</dt>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* build / architecture */}
            <motion.section variants={block} className="mt-12">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Technical Implementation</h3>
              <ul className="space-y-3">
                {project.build.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-bone/85 sm:text-[15px]">
                    <span className="text-crimson-2">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* features */}
            <motion.section variants={block} className="mt-12">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Key Capabilities</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-white/[0.04] p-3 text-sm text-bone/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson-2/20 text-xs text-crimson-2">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* stack */}
            <motion.section variants={block} className="mt-10">
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-medium text-bone">
                    {t}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* more titles */}
            <motion.section variants={block} className="mt-16 border-t border-white/10 pt-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-mist">More Originals</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {more.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onSwitch(p)}
                    data-cursor="view"
                    className="group relative aspect-video overflow-hidden rounded-lg bg-ink p-3 text-left ring-1 ring-white/10 transition hover:ring-white/30"
                  >
                    <div className="absolute inset-0 opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100">
                      <ProjectArt project={p} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-x-3 bottom-3">
                      <p className="font-display text-lg leading-tight tracking-wide text-bone sm:text-xl">{p.title}</p>
                      <p className="text-[10px] text-mist">{p.genre.split(' • ')[0]}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

