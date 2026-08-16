import { motion } from "framer-motion";
import { BUSINESS } from "../config/business";

export const Footer = () => (
  <footer data-testid="footer-section" className="bg-ink text-cream pt-20 md:pt-28 pb-10 overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 md:mb-28">
        <div data-testid="footer-visit">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40 mb-3">Visit</p>
          <p className="text-sm leading-relaxed text-cream/80">{BUSINESS.visit.addressLine1}<br />{BUSINESS.visit.addressLine2}</p>
        </div>
        <div data-testid="footer-hours">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40 mb-3">Hours</p>
          <p className="text-sm leading-relaxed text-cream/80">{BUSINESS.visit.hoursDays}<br />{BUSINESS.visit.hoursTime}</p>
        </div>
        <div data-testid="footer-order">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40 mb-3">Order</p>
          <a
            href={BUSINESS.visit.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-ubereats-link"
            className="text-sm text-cream/80 hover:text-brand transition-colors duration-300 underline underline-offset-4"
          >
            {BUSINESS.footer.orderLinkLabel}
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
      {BUSINESS.wordmark}
    </motion.h2>

    <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-12 flex flex-col md:flex-row justify-between gap-3 border-t border-cream/10 pt-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/30">© {new Date().getFullYear()} {BUSINESS.footer.copyrightName}</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/30">{BUSINESS.footer.tagline}</p>
    </div>
  </footer>
);
