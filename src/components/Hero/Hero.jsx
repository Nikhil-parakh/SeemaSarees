import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Hero({ content }) {
  return (
    <section className="relative overflow-hidden rounded-[42px] border border-burgundy/10 bg-cream py-16 shadow-soft md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(197,154,108,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(92,18,33,0.08),_transparent_24%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-16 h-52 w-52 rounded-full bg-maroon/10 blur-3xl" />
      <div className="pointer-events-none absolute left-8 bottom-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-center md:gap-16 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={heroVariants}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full bg-burgundy/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">
            Premium Saree Manufacturing
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-maroon sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-smoke/85">
            {content.subtitle}
          </p>
          <p className="mt-6 text-smoke/80 max-w-xl text-base leading-8">
            {content.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{
                y: -2,
                boxShadow: "0 18px 40px rgba(92,18,33,0.18)",
              }}
              transition={{ duration: 0.3 }}
              href="#collections"
              className="inline-flex items-center justify-center rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition"
            >
              {content.ctaPrimary}
              <FiArrowRight className="ml-2" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-burgundy/20 bg-white px-6 py-3 text-sm font-semibold text-maroon transition hover:bg-cream"
            >
              {content.ctaSecondary}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="group relative mx-auto flex max-w-xl justify-center rounded-[32px] bg-white/95 p-6 shadow-soft backdrop-blur-sm md:p-8"
        >
          <div className="absolute inset-0 rounded-[32px] border border-white/40 bg-white/20 blur-0" />
          <div className="relative overflow-hidden rounded-[32px] shadow-xl">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
              src={content.image}
              alt="Seema Sarees showcase"
              className="relative h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
