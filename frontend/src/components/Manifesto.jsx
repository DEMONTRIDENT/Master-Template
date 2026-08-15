import { motion } from "framer-motion";
import { IMAGES } from "../data/menu";

const chapters = [
  {
    no: "01",
    title: "The Crust",
    img: IMAGES.pastries,
    text: "Every roll leaves the oven the same morning it's sold. Shatteringly crisp outside, cloud-light inside — the foundation of every bánh mì we make, and the reason locals buy them by the half-dozen to take home.",
  },
  {
    no: "02",
    title: "The Fill",
    img: IMAGES.banhMi,
    text: "Crackle-skin roast pork carved to order. House pâté, pickled carrot and cucumber, fresh coriander and a hit of hoisin. Nothing pre-made, nothing rushed — 599 people rated our Roast Crackle 91% for a reason.",
  },
  {
    no: "03",
    title: "The Ritual",
    img: IMAGES.coffee,
    text: "Vietnamese iced coffee, dripped slow over condensed milk. Pair it with a vanilla slice or a warm pie and you'll understand why the midday queue goes out the door.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const Manifesto = () => (
  <section id="story" data-testid="manifesto-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
    <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#A84A22] mb-4">
      Our Story
    </motion.p>
    <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A] max-w-3xl mb-20 md:mb-32">
      Three things we refuse <span className="italic font-normal text-[#A84A22]">to compromise.</span>
    </motion.h2>

    <div className="space-y-24 md:space-y-40">
      {chapters.map((c, idx) => (
        <div key={c.no} data-testid={`manifesto-chapter-${c.no}`} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                <span className="font-mono text-sm text-[#A84A22] tracking-[0.2em]">{c.no}</span>
                <h3 className="font-serif font-black text-5xl md:text-7xl tracking-tight text-[#1A1A1A] mt-3">{c.title}</h3>
              </motion.div>
            </div>
          </div>
          <div className={`md:col-span-6 ${idx % 2 ? "md:col-start-7" : "md:col-start-7"}`}>
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-[320px] md:h-[440px] object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="mt-8 text-[#1A1A1A]/70 leading-relaxed max-w-lg text-sm md:text-base">
              {c.text}
            </motion.p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
