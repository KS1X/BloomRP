import React from "react";
import { motion } from "framer-motion";

// Define sentences and tag a few as "highlighted"
const sentences = [
  { text: "Open your own mechanic shop.", highlight: false },
  { text: "Pretend to have a muscle spasm.", highlight: false },
  { text: "Run a nightclub downtown.", highlight: true },
  { text: "Join the LSPD and protect the city.", highlight: false },
  { text: "Launch your own tech startup.", highlight: true },
  { text: "Rise through the ranks of a cartel.", highlight: false },
  { text: "Buy property and flip houses.", highlight: false },
  { text: "Design and sell custom vehicles.", highlight: true },
  { text: "Lie to the police.", highlight: true },
  { text: "Become a judge in criminal court.", highlight: false },
  { text: "Traffic & sell drugs.", highlight: false },
  { text: "Spend all of your money playing blackjack.", highlight: false },
  { text: "Host live music and DJ events.", highlight: true },
  { text: "Campaign to become city mayor.", highlight: false },
  { text: "Be homeless in the sewers and become rat king.", highlight: true },
  { text: "Solve mysteries as a private investigator.", highlight: false },
  { text: "Spend a 20 min in jail for public nudity.", highlight: false },
  { text: "Buy a coffee shop.", highlight: false },
  { text: "Commit tax fraud.", highlight: false },
  { text: "Get treated for a headache - x2 GSW to chest.", highlight: false },
];

export default function RoleplayTicker() {
  // Duplicate for seamless scroll
  const scrollingText = [...sentences, ...sentences];

  return (
    <section className="bg-[#0a0a0a] py-12 overflow-hidden border-t border-white/10">
      <div className="relative w-full whitespace-nowrap">
        <motion.div
          className="flex gap-12 text-white/80 text-lg font-light px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          }}
        >
          {scrollingText.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <span
                className={`px-4 py-2 rounded backdrop-blur-sm border transition-all duration-300
                  ${
                    item.highlight
                      ? "border-[#2EA67A]/40 text-white bg-[#2EA67A]/10 animate-pulse-glow shadow-[0_0_15px_#2EA67A55]"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
