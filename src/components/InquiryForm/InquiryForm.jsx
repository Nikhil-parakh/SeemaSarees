import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const initialValues = {
  name: "",
  phone: "",
  city: "",
  type: "",
  message: "",
};

function InquiryForm({ inquiry }) {
  const [formData, setFormData] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.phone.trim()) {
      nextErrors.phone = "Mobile number is required.";
    } else if (!/^\+?[0-9]{10,13}$/.test(formData.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.city.trim()) nextErrors.city = "City is required.";
    if (!formData.type.trim()) nextErrors.type = "Business type is required.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData(initialValues);
    }
  };

  return (
    <section className="rounded-[32px] border border-burgundy/10 bg-white p-8 shadow-soft md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-[0.28em] text-burgundy">
          {inquiry.title}
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-maroon sm:text-4xl">
          {inquiry.description}
        </h2>
      </motion.div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-smoke/85">
            <span>{inquiry.fields.name}</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-3xl border border-burgundy/10 bg-cream/70 px-4 py-3 text-sm text-smoke outline-none transition focus:border-maroon focus:ring-2 focus:ring-maroon/10"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-xs text-rose-600">{errors.name}</span>
            )}
          </label>
          <label className="space-y-2 text-sm text-smoke/85">
            <span>{inquiry.fields.phone}</span>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-3xl border border-burgundy/10 bg-cream/70 px-4 py-3 text-sm text-smoke outline-none transition focus:border-maroon focus:ring-2 focus:ring-maroon/10"
              placeholder="e.g. +919876543210"
            />
            {errors.phone && (
              <span className="text-xs text-rose-600">{errors.phone}</span>
            )}
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-smoke/85">
            <span>{inquiry.fields.city}</span>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full rounded-3xl border border-burgundy/10 bg-cream/70 px-4 py-3 text-sm text-smoke outline-none transition focus:border-maroon focus:ring-2 focus:ring-maroon/10"
              placeholder="City / Region"
            />
            {errors.city && (
              <span className="text-xs text-rose-600">{errors.city}</span>
            )}
          </label>
          <label className="space-y-2 text-sm text-smoke/85">
            <span>{inquiry.fields.type}</span>
            <input
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-3xl border border-burgundy/10 bg-cream/70 px-4 py-3 text-sm text-smoke outline-none transition focus:border-maroon focus:ring-2 focus:ring-maroon/10"
              placeholder="Retailer / Wholesaler / Distributor"
            />
            {errors.type && (
              <span className="text-xs text-rose-600">{errors.type}</span>
            )}
          </label>
        </div>

        <label className="space-y-2 text-sm text-smoke/85">
          <span>{inquiry.fields.message}</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full rounded-3xl border border-burgundy/10 bg-cream/70 px-4 py-3 text-sm text-smoke outline-none transition focus:border-maroon focus:ring-2 focus:ring-maroon/10"
            placeholder="Tell us what you are looking for"
          />
          {errors.message && (
            <span className="text-xs text-rose-600">{errors.message}</span>
          )}
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-burgundy"
          >
            Submit Inquiry
          </button>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-700"
            >
              Thank you! Your inquiry has been received.
            </motion.p>
          )}
        </div>
      </form>
    </section>
  );
}

export default InquiryForm;
