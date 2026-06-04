import { motion } from "framer-motion";

function WhyChooseUs({ features }) {
  return (
    <section
      id="why-us"
      className="mt-16 rounded-[32px] border border-burgundy/10 bg-cream p-8 shadow-soft md:p-10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-maroon sm:text-4xl">
            Dependable advantages for wholesale buyers
          </h2>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-[28px] border border-burgundy/10 bg-white p-6"
          >
            <p className="text-lg font-semibold text-maroon">{feature.title}</p>
            <p className="mt-3 text-sm text-smoke/75">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
