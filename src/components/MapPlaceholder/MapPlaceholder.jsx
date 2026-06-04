import { FiMapPin } from "react-icons/fi";

const MAP_URL = "https://maps.app.goo.gl/8TkgVv8qw4T6YmsM9";

function MapPlaceholder() {
  return (
    <div className="rounded-[28px] border border-burgundy/10 bg-cream p-6 text-smoke/90">
      <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
        Location
      </p>
      <h3 className="mt-3 text-xl font-semibold text-maroon">Seema Sarees</h3>
      <p className="mt-3 text-sm leading-7 text-smoke/80">
        Visit our manufacturing hub and wholesale sourcing center in Kanpur,
        designed for retail and distribution partners.
      </p>

      <a
        href={MAP_URL}
        target="_blank"
        rel="noreferrer"
        className="group mt-6 block overflow-hidden rounded-[28px] border border-burgundy/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative aspect-video overflow-hidden bg-[#f9f2e8]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,18,50,0.12),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(196,154,108,0.14),_transparent_25%)]" />
          <div className="absolute inset-0 opacity-100 transition duration-500 group-hover:opacity-0">
            <svg
              viewBox="0 0 640 480"
              className="h-full w-full object-cover"
              preserveAspectRatio="none"
            >
              <rect width="640" height="480" fill="#f8f2e9" />
              <path
                d="M80 380 C 190 270, 320 260, 430 360 C 520 440, 620 420, 620 330"
                fill="#7D1232"
                opacity="0.12"
              />
              <path
                d="M120 320 C 220 240, 320 230, 430 310"
                stroke="#5C1221"
                strokeWidth="20"
                fill="none"
              />
              <circle cx="490" cy="180" r="34" fill="#C49A6C" opacity="0.2" />
              <path
                d="M190 150 C 240 120, 320 110, 390 150"
                stroke="#7D1232"
                strokeWidth="18"
                fill="none"
              />
            </svg>
          </div>

          <div className="absolute inset-x-0 top-4 flex items-center justify-between px-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-maroon shadow-sm backdrop-blur-sm">
              <FiMapPin className="h-4 w-4" /> Location
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-burgundy/10 px-3 py-2 text-xs font-semibold text-maroon shadow-sm backdrop-blur-sm">
              Click to view
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default MapPlaceholder;
