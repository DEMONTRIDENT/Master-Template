import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const photos = [
  { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/e351c1af50f3bdd1096d39a3925a5a4edb25fa9bca169fb5145b0502b372e63f.jpeg", caption: "Roast Crackle Bánh Mì" },
  { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/3a045a3fdb2b09f29e3dbf8223a22cd993c75dd9e626707814b882bb1458a1ee.jpeg", caption: "Vanilla Slice" },
  { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/5545d8d1074ebc9ad4a4f5da15ac751b1dc35574f44abb6b0b4bd4639ccb997c.jpeg", caption: "Donuts & Long Johns" },
  { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/5750368371a43cb1c8b6721e7d4fdd8cc7acd451545d4decaba770802f0e7296.jpeg", caption: "Beef & Cheese Pie" },
  { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/72d9078bfad9f0be482b3364849034deb884fb396b573992575d3f960f06f2c5.jpeg", caption: "Vietnamese Iced Coffee" },
  { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/24c5740273f9091ab3f1d7ce373d043d9d0b94c9bf22c3ec141ce9355260caf4.jpeg", caption: "Fresh Bread Rolls" },
];

const Card = ({ p, tall }) => (
  <figure data-testid="gallery-photo" className="group relative overflow-hidden mx-3 md:mx-4 w-[240px] md:w-[300px] flex-shrink-0" style={{ height: tall ? 400 : 330 }}>
    <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    <figcaption className="absolute bottom-3 left-3 bg-[#F4F1EB]/90 backdrop-blur-md px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A]">
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
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#A84A22] mb-4">From the Counter</p>
        <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A]">
          Let the food <span className="italic font-normal text-[#A84A22]">do the talking.</span>
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
