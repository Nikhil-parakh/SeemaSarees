import { FiMapPin } from "react-icons/fi";
import mapImage from "../../assets/map.png";

const MAP_URL = "https://maps.app.goo.gl/8TkgVv8qw4T6YmsM9";

function MapPlaceholder() {
  return (
    <div className="rounded-[28px] border border-burgundy/10 bg-cream p-6 text-smoke/90">
      <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
        Location
      </p>
      <h3 className="mt-3 text-xl font-semibold text-maroon">Seema Sarees</h3>
      <p className="mt-3 text-sm leading-7 text-smoke/80">Visit our store.</p>

      <a
        href={MAP_URL}
        target="_blank"
        rel="noreferrer"
        className="group mt-6 block overflow-hidden rounded-[28px] border border-burgundy/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative aspect-video overflow-hidden bg-[#f9f2e8]">
          <img
            src={mapImage}
            alt="Store location map"
            className="h-full w-full object-cover"
          />

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
