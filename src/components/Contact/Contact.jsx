import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiClock } from "react-icons/fi";

function Contact({ company }) {
  return (
    <section
      id="contact"
      className="mt-16 rounded-[32px] border border-burgundy/10 bg-white p-8 shadow-soft md:p-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-maroon sm:text-4xl">
          Reach our wholesale team
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <article className="rounded-[28px] border border-burgundy/10 bg-cream p-6">
          <div className="flex items-center gap-3 text-maroon">
            <FiMapPin className="h-6 w-6" />
            <p className="font-semibold">Address</p>
          </div>
          <p className="mt-4 text-sm text-smoke/80">{company.address}</p>
        </article>
        <article className="rounded-[28px] border border-burgundy/10 bg-cream p-6">
          <div className="flex items-center gap-3 text-maroon">
            <FiPhone className="h-6 w-6" />
            <p className="font-semibold">Phone</p>
          </div>
          <a
            href={`tel:${company.phone}`}
            className="mt-4 block text-sm text-smoke/80 hover:text-maroon"
          >
            {company.phone}
          </a>
        </article>
        <article className="rounded-[28px] border border-burgundy/10 bg-cream p-6">
          <div className="flex items-center gap-3 text-maroon">
            <FiMail className="h-6 w-6" />
            <p className="font-semibold">Email</p>
          </div>
          <a
            href={`mailto:${company.email}`}
            className="mt-4 block text-sm text-smoke/80 hover:text-maroon"
          >
            {company.email}
          </a>
          <div className="mt-6 flex items-center gap-3 text-smoke/85">
            <FiClock className="h-5 w-5 text-maroon" />
            <p>{company.hours}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contact;
