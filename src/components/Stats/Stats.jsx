import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Counter({ value }) {
  const target = useMemo(() => Number(value.replace(/\D/g, "")) || 0, [value]);
  const suffix = useMemo(() => value.replace(/[0-9]/g, ""), [value]);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 70, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(`${Math.round(latest)}${suffix}`);
    });
    motionValue.set(target);
    return () => unsubscribe();
  }, [springValue, motionValue, suffix, target]);

  return <p className="text-3xl font-semibold text-maroon">{display}</p>;
}

function Stats({ items }) {
  return (
    <section className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((stat, index) => (
        <motion.article
          key={stat.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: index * 0.12 }}
          className="rounded-[28px] border border-burgundy/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
        >
          <Counter value={stat.value} />
          <p className="mt-3 text-sm text-smoke/75">{stat.label}</p>
        </motion.article>
      ))}
    </section>
  );
}

export default Stats;
