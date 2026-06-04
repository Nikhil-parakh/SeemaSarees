import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiZoomIn } from "react-icons/fi";

function Gallery({ images }) {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="mt-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-maroon sm:text-4xl">
            Curated saree visuals
          </h2>
        </div>
      </div>
      <div className="mt-8 columns-1 gap-4 sm:columns-2 xl:columns-3">
        {images.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            onClick={() => setActive(item)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35 }}
            className="group mb-4 inline-block w-full overflow-hidden rounded-[28px] border border-burgundy/10 bg-white shadow-soft break-inside-avoid"
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-maroon shadow-soft backdrop-blur-sm">
                  <FiZoomIn className="h-4 w-4" /> Preview
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-maroon">
                {item.title}
              </h3>
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl overflow-hidden rounded-[32px] bg-white p-4 shadow-soft"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-smoke shadow-soft"
                aria-label="Close image preview"
              >
                <FiX className="text-xl" />
              </button>
              <img
                src={active.image}
                alt={active.title}
                className="h-[520px] w-full rounded-[28px] object-cover"
              />
              <div className="mt-4 px-4 pb-4 text-sm text-smoke/85">
                <p className="font-semibold text-maroon">{active.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
