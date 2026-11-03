import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const categories = ['All', 'Microsoft', 'AI', 'Robotics', 'IoT', 'Programming', 'Networking', 'Web Dev', 'Internship'];

  const filteredCerts = activeCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === activeCategory);

  return (
    <>
      <SectionHeading
        kicker="Awards & Recognition"
        title="Top Moments"
        aside={<p className="max-w-xs text-sm text-mist">Leadership honors, university accolades, and 30+ verified credentials.</p>}
      />

      {/* Featured Award: University NSS Best Volunteer Award */}
      <div className="gutter mb-12">
        <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(120%_100%_at_50%_0%,#2d2010,#0e0c08_60%,#07070a)] p-6 sm:p-10 ring-1 ring-[#d9b46a]/30">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/80 to-transparent" />
          <div aria-hidden className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#d9b46a]/15 blur-3xl" />

          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="rounded-full bg-[#d9b46a]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#d9b46a] ring-1 ring-[#d9b46a]/30">
              🏆 Featured University Award
            </span>
            <span className="text-xs font-semibold tracking-wider text-mist">2025 – 2026</span>
          </div>

          <div className="max-w-3xl">
            <h3 className="font-display text-3xl sm:text-5xl tracking-wide text-bone">
              University NSS Best Volunteer Award 2025–26
            </h3>
            <p className="mt-2 text-sm sm:text-base font-semibold text-[#d9b46a]">
              Presented by Dr. Amitabh Ranjan (Registrar, Indian Institute of Public Administration)
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-bone/80">
              Honoured to receive the University NSS Best Volunteer Award 2025–26 at Yenepoya (Deemed to be University). A proud milestone recognizing dedication, community service leadership, and social impact initiatives.
            </p>
          </div>

          {/* Award Ceremony Moments Gallery */}
          <div className="mt-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-smoke">
              📸 Award Ceremony Moments
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['./nss-award-1.jpeg', './nss-award-2.jpeg', './nss-award-3.jpeg', './nss-award-4.jpeg'].map((src, i) => (
                <div
                  key={src}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedPhoto(src)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedPhoto(src)}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-ink ring-1 ring-white/10 transition hover:ring-[#d9b46a]/60"
                >
                  <img
                    src={src}
                    alt={`NSS Award Moment ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute bottom-2 right-2 rounded-full bg-black/60 p-1 text-[10px] text-bone backdrop-blur">
                    🔍
                  </span>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="mt-8 rounded-xl bg-white/[0.03] p-4 border-l-4 border-[#d9b46a] text-xs sm:text-sm italic text-bone/90">
            &ldquo;Grateful to everyone who supported me throughout this journey. Privileged to receive this honor from Dr. Amitabh Ranjan, Registrar, Indian Institute of Public Administration.&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Other Awards & Laurels Grid */}
      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    View Credential ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Certifications Shelf */}
      <div className="mt-16">
        <div className="gutter mb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
              Professional Certificates <span className="text-mist">· {certifications.length} Credentials</span>
            </h3>
            <p className="text-xs text-smoke mt-1">Click any card to open the official certificate PDF</p>
          </div>
          {/* Category Filters */}
          <div className="rail flex flex-wrap gap-1.5" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-crimson text-white'
                    : 'bg-white/[0.06] text-mist hover:bg-white/10 hover:text-bone'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Rail */}
        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-3 overflow-x-auto py-5">
            {filteredCerts.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="group relative flex w-[260px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2 p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-crimson-2/60 hover:shadow-[0_12px_30px_rgba(229,19,43,0.15)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.03, ease: EASE }}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded bg-white/[0.06] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-crimson-2">
                    {c.issuer}
                  </span>
                  <span className="text-sm text-smoke transition group-hover:text-bone">↗</span>
                </div>
                <div className="my-4">
                  <p className="text-[15px] font-semibold leading-snug text-bone group-hover:text-white">{c.name}</p>
                  {c.description && (
                    <p className="mt-1 text-xs text-mist leading-relaxed line-clamp-2">{c.description}</p>
                  )}
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-smoke">
                  <span>{c.category}</span>
                  <span className="text-crimson-2 font-medium">Open PDF →</span>
                </div>
              </motion.a>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>

      {/* Photo enlargement modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl ring-1 ring-white/20"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedPhoto} alt="Award ceremony moment" className="max-h-[85vh] w-auto object-contain" />
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-lg text-bone hover:bg-black"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
