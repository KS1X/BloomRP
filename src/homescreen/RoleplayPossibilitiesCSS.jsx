import React, { memo } from "react";

// Define sentences and tag a few as "highlighted" - moved outside component to prevent recreation
const sentences = [
  { text: "Open your own mechanic shop.", highlight: false },
  { text: "Pretend to have a muscle spasm.", highlight: false },
  { text: "Run a nightclub downtown.", highlight: true },
  { text: "Join the LSPD and protect the city.", highlight: false },
  { text: "Launch your own tech startup.", highlight: false },
  { text: "Own the racing scene.", highlight: true },
  { text: "Rise through the ranks of a cartel.", highlight: false },
  { text: "Buy & flip property.", highlight: false },
  { text: "Design and sell custom vehicles.", highlight: true },
  { text: "Lie to the police.", highlight: true },
  { text: "Become a criminal court judge.", highlight: false },
  { text: "Traffic & sell drugs.", highlight: false },
  { text: "Spend all your money playing blackjack.", highlight: false },
  { text: "Host live music and DJ events.", highlight: true },
  { text: "Campaign to become city mayor.", highlight: false },
  { text: "Be homeless and become rat king.", highlight: true },
  { text: "Solve mysteries as a private investigator.", highlight: false },
  { text: "Go to jail for public nudity.", highlight: false },
  { text: "Own a coffee shop.", highlight: false },
  { text: "Commit tax fraud.", highlight: false },
  { text: "Get treated for a headache.", highlight: false },
];

// Pre-calculate duplicated array to avoid recreation on every render
const scrollingText = [...sentences, ...sentences];

// Memoized individual ticker item component
const TickerItem = memo(({ item, index }) => (
  <div className="flex-shrink-0">
    <span
      className={`px-4 py-2 rounded backdrop-blur-sm border transition-all duration-300 ${
        item.highlight
          ? "border-[#2EA67A]/40 text-white bg-[#2EA67A]/10 animate-pulse-glow shadow-[0_0_15px_#2EA67A55]"
          : "bg-white/5 border-white/10 hover:bg-white/10"
      }`}
    >
      {item.text}
    </span>
  </div>
));

TickerItem.displayName = 'TickerItem';

export default function RoleplayTickerCSS() {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-animate {
          animation: ticker-scroll 30s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-animate { animation-play-state: paused; }
        }
      `}</style>
      
      <section className="bg-[#0a0a0a] py-12 overflow-hidden border-t border-white/10">
        <div className="relative w-full whitespace-nowrap">
          <div className="flex gap-12 text-white/80 text-lg font-light px-4 ticker-animate">
            {scrollingText.map((item, index) => (
              <TickerItem key={`${item.text}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
