import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import emailjs from "@emailjs/browser";
const businessOptions = ["Retailer", "Wholeseller", "Distributer", "Other"];

const initialValues = {
  name: "",
  phone: "",
  city: "",
  type: "",
  otherType: "",
  message: "",
};

function InquiryForm({ inquiry }) {
  const [formData, setFormData] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [typeOpen, setTypeOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const typeRef = useRef(null);

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
    if (formData.type === "Other" && !formData.otherType.trim()) {
      nextErrors.otherType = "Please specify your business type.";
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const closeTypeDropdown = () => {
    setTypeOpen(false);
  };

  const openTypeDropdown = () => {
    setTypeOpen(true);
  };

  const selectType = (value) => {
    setFormData((prev) => ({
      ...prev,
      type: value,
      otherType: value === "Other" ? prev.otherType : "",
    }));
    setErrors((prev) => ({ ...prev, type: "", otherType: "" }));
    setTypeOpen(false);
    setHighlightedIndex(businessOptions.indexOf(value));
  };

  const handleTypeKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setTypeOpen(true);
      setHighlightedIndex((current) => (current + 1) % businessOptions.length);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setTypeOpen(true);
      setHighlightedIndex(
        (current) =>
          (current - 1 + businessOptions.length) % businessOptions.length,
      );
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (typeOpen) {
        selectType(businessOptions[highlightedIndex]);
      } else {
        setTypeOpen(true);
      }
    }
    if (event.key === "Escape") {
      closeTypeDropdown();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (typeRef.current && !typeRef.current.contains(event.target)) {
        closeTypeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (typeOpen) {
      const selectedIndex = businessOptions.indexOf(formData.type);
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }
  }, [typeOpen, formData.type]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  if (!validate()) return;

  try {
    await emailjs.send(
      "service_b4aholk",
      "template_my1q73e",
      {
        name: formData.name,
        mobile: formData.phone,
        city: formData.city,
        businessType:
          formData.type === "Other"
            ? formData.otherType
            : formData.type,
        message: formData.message,
      },
      "kFMJYw-Y7ju7to7uF"
    );

    setSubmitted(true);

    setFormData(initialValues);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send inquiry. Please try again.");
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
            <div ref={typeRef} className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={typeOpen}
                onClick={() => setTypeOpen((open) => !open)}
                onKeyDown={handleTypeKeyDown}
                className="flex h-14 w-full items-center justify-between rounded-[16px] border border-burgundy/10 bg-cream/80 px-4 text-left text-sm text-smoke shadow-[0_18px_42px_rgba(18,15,16,0.09)] transition duration-300 focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/15"
              >
                <span
                  className={`${formData.type ? "text-smoke" : "text-smoke/60"}`}
                >
                  {formData.type || "Select your business type"}
                </span>
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform duration-300 ${typeOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <FiChevronDown className="h-4 w-4 text-maroon" />
                </span>
              </button>

              <AnimatePresence>
                {typeOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
                    role="listbox"
                    aria-activedescendant={`business-option-${highlightedIndex}`}
                    tabIndex={-1}
                    className="absolute left-0 right-0 z-20 mt-3 max-h-60 overflow-hidden rounded-[16px] border border-burgundy/15 bg-white shadow-[0_26px_68px_rgba(18,15,16,0.16)] ring-1 ring-black/5"
                  >
                    {businessOptions.map((option, index) => {
                      const isSelected = formData.type === option;
                      const isHighlighted = highlightedIndex === index;
                      return (
                        <li
                          key={option}
                          id={`business-option-${index}`}
                          role="option"
                          aria-selected={isSelected}
                          onMouseEnter={() => setHighlightedIndex(index)}
                          onPointerDown={(event) => event.preventDefault()}
                          onClick={() => selectType(option)}
                          className={`cursor-pointer px-4 py-3 text-sm font-medium transition duration-200 ${
                            isSelected
                              ? "bg-maroon/10 text-maroon"
                              : isHighlighted
                                ? "bg-burgundy/5 text-smoke"
                                : "text-smoke/80"
                          } hover:bg-burgundy/10 hover:text-maroon`}
                        >
                          {option}
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            {errors.type && (
              <span className="text-xs text-rose-600">{errors.type}</span>
            )}
          </label>
        </div>

        {formData.type === "Other" && (
          <label className="space-y-2 text-sm text-smoke/85">
            <span>Other business type</span>
            <input
              name="otherType"
              value={formData.otherType}
              onChange={handleChange}
              className="w-full rounded-3xl border border-burgundy/10 bg-cream/70 px-4 py-3 text-sm text-smoke outline-none transition focus:border-maroon focus:ring-2 focus:ring-maroon/10"
              placeholder="Enter your business type"
            />
            {errors.otherType && (
              <span className="text-xs text-rose-600">{errors.otherType}</span>
            )}
          </label>
        )}

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
              Thank you! Our team has received your inquiry and will contact you shortly.
            </motion.p>
          )}
        </div>
      </form>
    </section>
  );
}

export default InquiryForm;
