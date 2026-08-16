import Marquee from "react-fast-marquee";
import { BUSINESS } from "../config/business";

const items = BUSINESS.marquee;

export const Ribbon = ({ dark }) => (
  <div
    data-testid="editorial-marquee"
    className={`py-6 md:py-8 border-y ${dark ? "bg-ink border-cream/10" : "bg-transparent border-ink/10"}`}
  >
    <Marquee speed={35} gradient={false} autoFill>
      {items.map((t) => (
        <span key={t} className="flex items-center">
          <span className={`font-serif italic text-2xl md:text-4xl mx-12 md:mx-16 ${dark ? "text-cream" : "text-ink"}`}>{t}</span>
          <span className="text-brand text-xl">✦</span>
        </span>
      ))}
    </Marquee>
  </div>
);
