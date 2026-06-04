import { motion } from "framer-motion";

function About({ content }) {
  return (
    <section className="mt-14 rounded-[32px] border border-burgundy/10 bg-white p-8 shadow-soft md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
          About Us
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-maroon sm:text-4xl">
          {content.title}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-8 text-smoke/85">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
