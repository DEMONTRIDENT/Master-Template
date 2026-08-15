import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const Visit = () => (
  <section id="visit" data-testid="visit-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#A84A22] mb-4">Find Us</p>
      <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A] mb-14 md:mb-20">
        Come say <span className="italic font-normal text-[#A84A22]">chào.</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="overflow-hidden border border-[#1A1A1A]/10 min-h-[360px]">
        <iframe
          title="The Flying Loaf Bakery map"
          data-testid="visit-map"
          src="https://www.google.com/maps?q=300-332+Grand+Blvd,+Shop+15,+Craigieburn+VIC+3064&output=embed"
          className="w-full h-full min-h-[360px] grayscale-[35%] contrast-[1.05]"
          loading="lazy"
        />
      </motion.div>

      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="flex flex-col justify-between gap-10">
        <div className="space-y-10">
          <div data-testid="visit-address">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/40 mb-3">Address</p>
            <p className="font-serif text-2xl md:text-3xl text-[#1A1A1A] leading-snug">
              Shop 15, 300–332 Grand Blvd<br />Craigieburn, Victoria 3064
            </p>
          </div>
          <div data-testid="visit-hours">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/40 mb-3">Opening Hours</p>
            <div className="flex items-baseline gap-4 border-b border-[#1A1A1A]/10 pb-3">
              <span className="font-serif text-xl text-[#1A1A1A]">Monday — Sunday</span>
              <span className="flex-grow border-b border-dotted border-[#1A1A1A]/25" />
              <span className="font-mono text-sm text-[#1A1A1A]">8:00 AM – 5:00 PM</span>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A84A22] mt-4">Open 7 days · Come early for the crackle</p>
          </div>
          <div data-testid="visit-order">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/40 mb-3">Can't make it in?</p>
            <a
              href="https://www.ubereats.com/au/store/the-flying-loaf-bakery/eT7d4DxzTNuXZswrcGHKkQ"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="visit-ubereats-link"
              className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] bg-[#1A1A1A] text-[#F4F1EB] px-7 py-3.5 rounded-full hover:bg-[#A84A22] transition-colors duration-300"
            >
              Order on Uber Eats →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
