import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton({ url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 22px 50px rgba(37,211,102,0.3)",
      }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-xl transition-shadow"
    >
      <FaWhatsapp className="h-5 w-5" />
      <span className="text-sm font-semibold">WhatsApp</span>
    </motion.a>
  );
}

export default WhatsAppButton;
