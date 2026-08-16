import { motion } from "framer-motion";
import { BUSINESS } from "../config/business";

const chapters = BUSINESS.story.chapters;

const reveal = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const Manifesto = () => (
  <section id="story" data-testid="manifesto-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
    <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand mb-4">
      {BUSINESS.story.overline}
    </motion.p>
    <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink max-w-3xl mb-20 md:mb-32">
      {BUSINESS.story.heading} <span className="italic font-normal text-brand">{BUSINESS.story.headingItalic}</span>
    </motion.h2>

    <div className="space-y-24 md:space-y-40">
      {chapters.map((c, idx) => (
        <div key={c.no} data-testid={`manifesto-chapter-${c.no}`} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                <span className="font-mono text-sm text-brand tracking-[0.2em]">{c.no}</span>
                <h3 className="font-serif font-black text-5xl md:text-7xl tracking-tight text-ink mt-3">{c.title}</h3>
              </motion.div>
            </div>
          </div>
          <div className={`md:col-span-6 ${idx % 2 ? "md:col-start-7" : "md:col-start-7"}`}>
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-[320px] md:h-[440px] object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="mt-8 text-ink/70 leading-relaxed max-w-lg text-sm md:text-base">
              {c.text}
            </motion.p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
