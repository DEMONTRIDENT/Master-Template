import { motion } from "framer-motion";

export const Footer = () => (
  <footer data-testid="footer-section" className="bg-[#1A1A1A] text-[#F4F1EB] pt-20 md:pt-28 pb-10 overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 md:mb-28">
        <div data-testid="footer-visit">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/40 mb-3">Visit</p>
          <p className="text-sm leading-relaxed text-[#F4F1EB]/80">Shop 15, 300–332 Grand Blvd<br />Craigieburn VIC 3064</p>
        </div>
        <div data-testid="footer-hours">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/40 mb-3">Hours</p>
          <p className="text-sm leading-relaxed text-[#F4F1EB]/80">Open 7 days<br />8:00 AM – 5:00 PM</p>
        </div>
        <div data-testid="footer-order">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/40 mb-3">Order</p>
          <a
            href="https://www.ubereats.com/au/store/the-flying-loaf-bakery/eT7d4DxzTNuXZswrcGHKkQ"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-ubereats-link"
            className="text-sm text-[#F4F1EB]/80 hover:text-[#A84A22] transition-colors duration-300 underline underline-offset-4"
          >
            Uber Eats — The Flying Loaf Bakery
          </a>
        </div>
      </div>
    </div>

    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      data-testid="footer-wordmark"
      className="font-serif font-black text-center text-[11.5vw] leading-none tracking-tighter whitespace-nowrap select-none"
    >
      THE FLYING LOAF
    </motion.h2>

    <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-12 flex flex-col md:flex-row justify-between gap-3 border-t border-[#F4F1EB]/10 pt-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F4F1EB]/30">© {new Date().getFullYear()} The Flying Loaf Bakery · Craigieburn</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F4F1EB]/30">Baked with pride, every morning</p>
    </div>
  </footer>
);
