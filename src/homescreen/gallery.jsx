import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    { src: "/images/image1.png", alt: "Roleplay Scene 1" },
    { src: "/images/image2.png", alt: "Roleplay Scene 2" },
    { src: "/images/image6.png", alt: "Roleplay Scene 3" },
    { src: "/images/image7.jpg", alt: "Roleplay Scene 4" },
    { src: "/images/image5.png", alt: "Roleplay Scene 5" },
    { src: "/images/image9.jpg", alt: "Roleplay Scene 6" },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Featured <span className="text-[#2EA67A]">Gallery</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore unforgettable moments captured by our community.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative group overflow-hidden rounded-xl border border-white/10 hover:border-[#2EA67A]/40 transition-all shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              {/* Removed the text overlay */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
