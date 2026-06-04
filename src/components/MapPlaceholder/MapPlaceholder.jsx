function MapPlaceholder() {
  return (
    <div className="rounded-[28px] border border-burgundy/10 bg-cream p-6 text-smoke/90">
      <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
        Location
      </p>
      <h3 className="mt-3 text-xl font-semibold text-maroon">
        Map placeholder
      </h3>
      <p className="mt-3 text-sm leading-7 text-smoke/80">
        A dedicated map container is prepared here for future Google Maps or
        location embed integration.
      </p>
      <div className="mt-6 h-64 rounded-[28px] border border-burgundy/10 bg-white shadow-soft" />
    </div>
  );
}

export default MapPlaceholder;
