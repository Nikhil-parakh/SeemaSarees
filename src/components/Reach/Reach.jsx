import { motion } from "framer-motion";

function Reach({ cities }) {
  return (
    <section
      id="reach"
      className="mt-16 rounded-[32px] border border-burgundy/10 bg-white p-8 shadow-soft md:p-10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
            Cities We Serve
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-maroon sm:text-4xl">
            Regional coverage for wholesale distribution
          </h2>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city, index) => (
          <motion.div
            key={city}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="rounded-[24px] border border-burgundy/10 bg-cream p-5 text-smoke/90"
          >
            <p className="text-base font-semibold text-maroon">{city}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Reach;
