import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { robotMedia } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function IoTShowcase() {
  const [activeTab, setActiveTab] = useState<'videos' | 'photos'>('videos');
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const video = robotMedia.videos[selectedVideo];

  return (
    <>
      <SectionHeading
        kicker="Special Feature"
        title="IoT & Robotics Showcase"
        aside={
          <p className="max-w-xs text-sm text-mist">
            Autonomous Human Following Robot — real-time sensor fusion, PID motion control, and working prototype test drives.
          </p>
        }
      />

      <div className="gutter">
        {/* Feature Tab Switcher */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('videos')}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeTab === 'videos' ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
              }`}
            >
              ▶ Video Demos ({robotMedia.videos.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeTab === 'photos' ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
              }`}
            >
              📸 Build Gallery ({robotMedia.images.length})
            </button>
          </div>
          <span className="hidden text-xs text-smoke sm:inline-block">
            Hardware Prototype · Sensor Fusion · Arduino / Raspberry Pi
          </span>
        </div>

        {/* Video Player & Selector */}
        {activeTab === 'videos' && (
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            {/* Primary Cinematic Player */}
            <div className="overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
              <div className="relative aspect-video w-full bg-black">
                <video
                  key={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
              <div className="flex items-center justify-between p-4 sm:p-5 bg-ink-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">NOW PLAYING DEMO {selectedVideo + 1} OF {robotMedia.videos.length}</span>
                  <h4 className="mt-1 font-display text-2xl text-bone sm:text-3xl">{video.title}</h4>
                </div>
                <span className="rounded border border-white/20 px-2 py-1 text-xs font-semibold text-mist">
                  HD MP4
                </span>
              </div>
            </div>

            {/* Video Playlist */}
            <div className="flex flex-col gap-2.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-smoke">DEMONSTRATION LOGS</p>
              {robotMedia.videos.map((v, i) => (
                <button
                  key={v.src}
                  type="button"
                  onClick={() => setSelectedVideo(i)}
                  className={`group flex items-center gap-3.5 rounded-xl p-3 text-left transition ring-1 ${
                    selectedVideo === i
                      ? 'bg-white/[0.08] ring-crimson-2/80'
                      : 'bg-ink-2 ring-white/5 hover:bg-white/[0.04] hover:ring-white/20'
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-xs font-bold text-bone ring-1 ring-white/10 group-hover:text-crimson-2">
                    {selectedVideo === i ? '▶' : String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`truncate text-sm font-semibold ${selectedVideo === i ? 'text-bone' : 'text-mist group-hover:text-bone'}`}>
                      {v.title}
                    </p>
                    <p className="text-[11px] text-smoke">Operational Test Flight</p>
                  </div>
                </button>
              ))}

              <div className="mt-auto rounded-xl bg-ink-2 p-4 ring-1 ring-white/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">Telemetry Specs</p>
                <p className="mt-1 text-xs leading-relaxed text-mist">
                  Ultrasonic distance sensing combined with dynamic PID algorithms drives real-time motor correction and person tracking.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Photo Gallery */}
        {activeTab === 'photos' && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {robotMedia.images.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              >
                <Tilt max={8} className="group h-full rounded-xl">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedPhoto(img.src)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedPhoto(img.src)}
                    data-cursor="view"
                    className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-ink-2 ring-1 ring-white/10 transition duration-500 group-hover:ring-white/30"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <span className="text-xs font-semibold text-bone">{img.alt}</span>
                      <span className="rounded-full bg-black/60 p-1.5 text-xs text-bone backdrop-blur">🔍</span>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal for viewing high-res photo */}
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
                <img src={selectedPhoto} alt="Enlarged view" className="max-h-[85vh] w-auto object-contain" />
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
      </div>
    </>
  );
}

