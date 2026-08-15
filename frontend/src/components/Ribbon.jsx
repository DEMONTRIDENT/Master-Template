import Marquee from "react-fast-marquee";

const items = ["Freshly Baked Daily", "Vietnamese Inspired", "Craigieburn's Finest", "Crackle-Skin Bánh Mì", "Real Drip Coffee"];

export const Ribbon = ({ dark }) => (
  <div
    data-testid="editorial-marquee"
    className={`py-6 md:py-8 border-y ${dark ? "bg-[#1A1A1A] border-[#F4F1EB]/10" : "bg-transparent border-[#1A1A1A]/10"}`}
  >
    <Marquee speed={35} gradient={false} autoFill>
      {items.map((t) => (
        <span key={t} className="flex items-center">
          <span className={`font-serif italic text-2xl md:text-4xl mx-12 md:mx-16 ${dark ? "text-[#F4F1EB]" : "text-[#1A1A1A]"}`}>{t}</span>
          <span className="text-[#A84A22] text-xl">✦</span>
        </span>
      ))}
    </Marquee>
  </div>
);
