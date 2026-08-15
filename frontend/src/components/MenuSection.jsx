import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "../data/menu";

export const MenuSection = () => {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const cat = CATEGORIES.find((c) => c.id === active);

  return (
    <section id="menu" data-testid="menu-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#A84A22] mb-4">The Menu</p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A]">
            Simple. Fresh. <span className="italic font-normal text-[#A84A22]">Every day.</span>
          </h2>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/50">All prices in AUD · Walk-ins welcome</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12 md:mb-16" data-testid="menu-tabs">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            data-testid={`menu-tab-${c.id}`}
            className={`font-mono text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border transition-colors duration-300 ${
              active === c.id
                ? "bg-[#1A1A1A] text-[#F4F1EB] border-[#1A1A1A]"
                : "bg-transparent text-[#1A1A1A]/70 border-[#1A1A1A]/20 hover:border-[#A84A22] hover:text-[#A84A22]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          data-testid={`menu-list-${active}`}
        >
          {cat.note && <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-8">{cat.note}</p>}
          <ul className="divide-y divide-[#1A1A1A]/10 border-t border-b border-[#1A1A1A]/10">
            {cat.items.map((item) => (
              <li key={item.name} data-testid="menu-item" className="group py-6 md:py-7 flex items-baseline gap-4 hover:bg-[#1A1A1A]/[0.03] transition-colors duration-300 md:px-4 md:-mx-4">
                <div className="flex-shrink-0 max-w-[70%]">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] group-hover:text-[#A84A22] transition-colors duration-300">{item.name}</h3>
                    {item.tag && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] bg-[#A84A22]/10 text-[#A84A22] px-2.5 py-1 rounded-full">{item.tag}</span>
                    )}
                  </div>
                  {item.desc && <p className="text-[#1A1A1A]/55 text-sm leading-relaxed mt-1.5 max-w-md">{item.desc}</p>}
                </div>
                <span className="flex-grow border-b border-dotted border-[#1A1A1A]/25 translate-y-[-4px]" />
                <span className="font-mono text-sm md:text-base text-[#1A1A1A] flex-shrink-0">${item.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
