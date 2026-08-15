import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-colors duration-500 ${
        scrolled ? "bg-[#F4F1EB]/85 border-b border-[#1A1A1A]/10" : "bg-[#F4F1EB]/50"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
        <a href="#top" data-testid="nav-logo" className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#1A1A1A]">
          The Flying Loaf<span className="text-[#A84A22]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/70 hover:text-[#A84A22] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#visit"
          data-testid="nav-cta"
          className="font-mono text-[11px] uppercase tracking-[0.2em] bg-[#1A1A1A] text-[#F4F1EB] px-5 py-2.5 rounded-full hover:bg-[#A84A22] transition-colors duration-300"
        >
          Visit Us
        </a>
      </div>
    </motion.header>
  );
};
