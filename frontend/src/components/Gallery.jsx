import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { BUSINESS } from "../config/business";

const photos = BUSINESS.gallery.photos;

const Card = ({ p, tall }) => (
  <figure data-testid="gallery-photo" className="group relative overflow-hidden mx-3 md:mx-4 w-[240px] md:w-[300px] flex-shrink-0" style={{ height: tall ? 400 : 330 }}>
    <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    <figcaption className="absolute bottom-3 left-3 bg-cream/90 backdrop-blur-md px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-ink">
      {p.caption}
    </figcaption>
  </figure>
);

export const Gallery = () => (
  <section id="gallery" data-testid="gallery-section" className="py-24 md:py-36 overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand mb-4">{BUSINESS.gallery.overline}</p>
        <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink">
          {BUSINESS.gallery.heading} <span className="italic font-normal text-brand">{BUSINESS.gallery.headingItalic}</span>
        </h2>
      </motion.div>
    </div>
    <Marquee speed={28} gradient={false} pauseOnHover autoFill>
      {photos.map((p, i) => (
        <Card key={p.caption} p={p} tall={i % 2 === 0} />
      ))}
    </Marquee>
  </section>
);
