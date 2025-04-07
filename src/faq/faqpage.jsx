import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faScroll,
  faExclamationTriangle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const questions = [
  {
    icon: faSignInAlt,
    question: "How do I join the server?",
    answer:
      "Search for the server in the FiveM server list or use the direct connect option. Make sure you have FiveM installed and your GTA V account is in good standing.",
  },
  {
    icon: faScroll,
    question: "Read the server rules",
    answer:
      "Before joining, please make sure to read our server rules thoroughly. You can find them on the Rules page. Violating these rules can result in a ban.",
  },
  {
    icon: faExclamationTriangle,
    question: "Why can't I connect to the server?",
    answer:
      "There could be several reasons for this. Make sure you have a stable internet connection, that your FiveM client is up to date, and that you are using the correct server address. You must also be verified in our Discord server to join.",
  },
  {
    icon: faQuestionCircle,
    question: "I just need help... who can I ask?",
    answer:
      "Join our Discord server to get help from the community or staff. Once in-game, you can also use support channels or reach out to staff members directly.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                initial={false}
                transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                className={`rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-md ${
                  isOpen ? "border-[#2EA67A]/40" : ""
                }`}
              >
                <motion.div
                  className="flex justify-between items-center p-5 cursor-pointer select-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-[#2EA67A] w-5 h-5"
                    />
                    <h3 className="text-white text-lg md:text-xl font-medium">
                      {item.question}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-2xl"
                  >
                    +
                  </motion.span>
                </motion.div>

                {isOpen && (
                  <motion.div
                    className="px-5 pb-5 text-white/70 text-sm md:text-base"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pt-2">{item.answer}</div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
