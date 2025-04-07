import React from "react";
import { motion } from "framer-motion";

export default function GalleryHeader() {
  return (
    <header className="relative text-center py-24 overflow-hidden bg-[#030303]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/[0.05] via-transparent to-[#24734E]/[0.05] blur-3xl -z-10" />

      {/* Cloud-Like Decorative Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-40 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-50"
        initial={{ opacity: 0.2, x: -50, y: -20 }}
        animate={{ opacity: 0.7, x: 0, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-48 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-50"
        initial={{ opacity: 0.2, x: 50, y: 20 }}
        animate={{ opacity: 0.7, x: 0, y: 0 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-36 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-50"
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Community Gallery
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-white/70 text-md md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Explore some of the best moments captured by our community. Join us to create your own unforgettable memories!
      </motion.p>
    </header>
  );
}