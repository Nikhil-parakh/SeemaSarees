import { motion } from "framer-motion";

function Collections({ data }) {
  return (
    <section id="collections" className="mt-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
            Featured Collections
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-maroon sm:text-4xl">
            Selected saree collections
          </h2>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {data.map((collection, index) => (
          <motion.article
            key={collection.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-[28px] border border-burgundy/10 bg-white shadow-soft transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={collection.image}
                alt={collection.name}
                loading="lazy"
                className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
            <div className="space-y-3 p-6">
              <h3 className="text-xl font-semibold text-maroon">
                {collection.name}
              </h3>
              <p className="text-sm text-smoke/75">{collection.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Collections;
