import React from "react";
import { motion } from "framer-motion";

export default function FAQHeader() {
  return (
    <header className="relative text-center py-20 overflow-hidden bg-[#0a0a0a]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/[0.05] via-transparent to-[#24734E]/[0.05] blur-3xl -z-10" />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#2EA67A]/30 to-transparent rounded-full blur-2xl opacity-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-[#24734E]/30 to-transparent rounded-full blur-2xl opacity-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Title */}
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        How to Get Started
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Find answers to the most common questions about BloomRP. If you can't find what you're looking for, feel free to contact us!
      </motion.p>
    </header>
  );
}