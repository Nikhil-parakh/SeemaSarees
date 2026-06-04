import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar({ links, companyName }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-500 ${
        scrolled
          ? "border-burgundy/10 bg-white/95 backdrop-blur-xl shadow-sm"
          : "border-transparent bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3 text-smoke">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-burgundy/15 bg-cream text-2xl font-semibold text-maroon shadow-sm">
            S
          </span>
          <div>
            <p className="font-semibold text-smoke">{companyName}</p>
            <p className="text-xs text-smoke/60">Premium wholesale sarees</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-smoke transition hover:text-maroon after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-maroon after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-burgundy/15 bg-white text-xl text-maroon transition hover:shadow-md md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-burgundy/10 bg-cream/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-smoke transition hover:bg-white hover:text-maroon"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
