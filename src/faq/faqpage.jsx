import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faScroll,
  faExclamationTriangle,
  faQuestionCircle,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { UnifiedParticles, FloatingElements, BackgroundGradients, SectionTransition, AnimatedTitle } from "./shared/faqEffects.jsx";

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
    question: "I just need help.. Who can I ask?",
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
    <>
      {/* FAQ Header Section */}
      <header className="relative text-center py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
        {/* Unified Background Elements */}
        <UnifiedParticles count={12} sizeRange={[2, 4]} movement={50} />
        <BackgroundGradients variant="header" />
        <FloatingElements variant="header" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          {/* Enhanced Title with Letter Animation */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 tracking-tight overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/85 leading-tight"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              How to Get
            </motion.span>
            <motion.span
              className="block text-[#2EA67A] leading-tight mt-2"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Started
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle with Character Animation */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed font-light tracking-wide">
              {"Find answers to the most common questions about BloomRP. If you can't find what you're looking for, feel free to contact us!".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.02, 
                    delay: 0.8 + index * 0.01,
                    ease: "easeOut"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#2EA67A] rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/3 left-1/6 w-1.5 h-1.5 bg-[#24734E] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          </motion.div>
        </div>
        
        {/* Seamless transition to next section */}
        <SectionTransition direction="bottom" fromColor="transparent" toColor="[#0a0a0a]" />
      </header>

      {/* FAQ Questions Section */}
      <section className="relative bg-[#0a0a0a] py-0 px-4 overflow-hidden">
        {/* Connecting transition from header */}
        <SectionTransition direction="top" fromColor="[#0a0a0a]" toColor="transparent" showConnector={false} />
        
        {/* Unified Background Elements */}
        <UnifiedParticles count={20} sizeRange={[1, 3]} movement={40} />
        <BackgroundGradients variant="content" />
        <FloatingElements variant="content" />

        {/* Content container with enhanced spacing */}
        <div className="relative py-20 sm:py-24">
          <div className="max-w-4xl mx-auto relative z-10">

            {/* Enhanced FAQ Accordion */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {questions.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                layout
                initial={false}
                transition={{ 
                  layout: { 
                    duration: 0.3, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  } 
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                className={`
                  relative overflow-hidden rounded-2xl border backdrop-blur-md shadow-lg
                  transition-all duration-300 ease-out group cursor-pointer
                  ${isOpen 
                    ? "border-[#2EA67A]/50 bg-gradient-to-br from-[#2EA67A]/[0.08] to-[#24734E]/[0.04] shadow-2xl shadow-[#2EA67A]/10 scale-[1.02]" 
                    : "border-white/10 bg-white/[0.02] hover:border-[#2EA67A]/30 hover:bg-white/[0.04] hover:shadow-xl"
                  }
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#2EA67A]/5 before:to-transparent 
                  before:opacity-0 before:transition-all before:duration-300
                  ${isOpen ? "before:opacity-100" : "hover:before:opacity-60"}
                `}
                whileHover={!isOpen ? { 
                  scale: 1.015,
                  transition: { duration: 0.2, ease: "easeOut" }
                } : {}}
                whileTap={{ 
                  scale: isOpen ? 1.01 : 0.995,
                  transition: { duration: 0.1 }
                }}
              >
                {/* Question Header */}
                <motion.div
                  className="flex justify-between items-center p-6 sm:p-8 select-none relative z-10"
                  onClick={() => toggleAccordion(index)}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Enhanced Icon Container */}
                    <div className={`
                      relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 
                      rounded-full transition-all duration-300
                      ${isOpen 
                        ? "bg-gradient-to-br from-[#2EA67A]/20 to-[#24734E]/10 scale-110" 
                        : "bg-gradient-to-br from-[#2EA67A]/10 to-[#24734E]/5 group-hover:scale-105"
                      }
                    `}>
                      <div className={`
                        absolute inset-0 rounded-full transition-opacity duration-300
                        ${isOpen 
                          ? "bg-gradient-to-br from-[#2EA67A]/30 to-transparent opacity-100" 
                          : "bg-gradient-to-br from-[#2EA67A]/20 to-transparent opacity-0 group-hover:opacity-100"
                        }
                      `} />
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`
                          relative z-10 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300
                          ${isOpen ? "text-[#2EA67A] scale-110" : "text-[#2EA67A]/80 group-hover:text-[#2EA67A]"}
                        `}
                      />
                    </div>
                    
                    {/* Enhanced Question Text */}
                    <h3 className={`
                      text-lg sm:text-xl md:text-2xl font-semibold transition-all duration-300 leading-tight
                      ${isOpen ? "text-white" : "text-white/90 group-hover:text-white"}
                    `}>
                      {item.question}
                    </h3>
                  </div>
                  
                  {/* Enhanced Expand/Collapse Icon */}
                  <motion.div
                    className={`
                      flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
                      rounded-full transition-all duration-300 ml-4
                      ${isOpen 
                        ? "bg-[#2EA67A]/20 text-[#2EA67A] scale-110" 
                        : "bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white/80 group-hover:scale-105"
                      }
                    `}
                    animate={{ 
                      rotate: isOpen ? 180 : 0,
                      scale: isOpen ? 1.1 : 1
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={!isOpen ? { scale: 1.05 } : {}}
                  >
                    <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                  </motion.div>
                </motion.div>

                {/* Enhanced Answer Content with Smooth Animation */}
                <motion.div
                  className="overflow-hidden relative z-10"
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{
                    height: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth expansion
                    },
                    opacity: {
                      duration: 0.25,
                      delay: isOpen ? 0.15 : 0, // Delay opacity fade-in, immediate fade-out
                      ease: "easeOut"
                    }
                  }}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="border-t border-white/10 pt-6">
                      <motion.div
                        initial={false}
                        animate={{
                          y: isOpen ? 0 : -15,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isOpen ? 0.2 : 0,
                          ease: "easeOut"
                        }}
                      >
                        <p className="text-white/80 text-base sm:text-lg leading-relaxed pl-16 sm:pl-18">
                          {item.answer}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Corner Elements */}
                <div className={`
                  absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#2EA67A]/5 to-transparent 
                  transition-opacity duration-300
                  ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"}
                `} />
                <div className={`
                  absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#24734E]/5 to-transparent 
                  transition-opacity duration-300
                  ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"}
                  `} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
        
        {/* Connecting transition to next section */}
        <SectionTransition direction="bottom" fromColor="transparent" toColor="[#0a0a0a]" />
      </section>
    </>
  );
}
