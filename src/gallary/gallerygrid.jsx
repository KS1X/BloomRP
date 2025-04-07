import React, { useState } from "react";
import { motion } from "framer-motion";

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />

      {Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 3 + 1
        const opacity = Math.random() * 0.3 + 0.1
        const animationDuration = Math.random() * 20 + 10
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            className="absolute bg-emerald-400 rounded-full"
            style={{
              width: size,
              height: size,
              opacity,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [opacity, opacity * 1.5, opacity],
            }}
            transition={{
              duration: animationDuration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}

const images = [
  { src: "/images/image1.png", alt: "Roleplay Scene 1" },
  { src: "/images/image2.png", alt: "Roleplay Scene 2" },
  { src: "/images/image3.png", alt: "Roleplay Scene 3" },
  { src: "/images/image4.png", alt: "Roleplay Scene 4" },
  { src: "/images/image5.png", alt: "Roleplay Scene 5" },
  { src: "/images/image6.png", alt: "Roleplay Scene 6" },
  { src: "/images/image7.jpg", alt: "Roleplay Scene 1" },
  { src: "/images/image8.jpg", alt: "Roleplay Scene 2" },
  { src: "/images/image9.jpg", alt: "Roleplay Scene 3" },
  { src: "/images/image10.jpg", alt: "Roleplay Scene 1" },
  { src: "/images/image11.jpg", alt: "Roleplay Scene 1" },
  { src: "/images/image12.jpg", alt: "Roleplay Scene 1" },
  { src: "/images/image13.jpg", alt: "Roleplay Scene 1" },
  { src: "/images/image14.jpg", alt: "Roleplay Scene 1" },
  { src: "/images/image15.jpg", alt: "Roleplay Scene 1" },
  { src: "/images/image16.jpg", alt: "Roleplay Scene 1" },
  { src: "/images/image17.jpg", alt: "Roleplay Scene 1" },
  { src: "/images/image18.png", alt: "Roleplay Scene 1" },
];

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: null });

  const openLightbox = (image) => {
    setLightbox({ isOpen: true, image });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, image: null });
  };

  return (
    <section className="py-16 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
      <ParticleBackground />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg border border-white/10 hover:border-[#2EA67A] transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold">View</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <motion.img
            src={lightbox.image.src}
            alt={lightbox.image.alt}
            className="max-w-full max-h-full rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          />
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={closeLightbox}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}