import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faServer } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

function PBackground() {
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


export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg_image.png"
            alt="GTA V City Background"
            className="w-full h-full object-cover opacity-15 filter grayscale brightness-50"
          />
        </div>
      < PBackground />
        {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Ready to Start Your <span className="text-[#2EA67A]">Journey</span>?
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-14 font-light">
            Join our welcoming community today and become part of an immersive experience. New players are always welcome!
          </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                <a
                  href="https://discord.gg/s2W9YyJSfz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-6 py-4 text-base font-medium rounded-full flex items-center gap-2 shadow hover:shadow-lg transition"
                >
                  <FontAwesomeIcon icon={faDiscord} className="h-5 w-5" />
                  Join Discord
                </a>
                <a
                  href="https://cfx.re/join/m7r3y7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2EA67A] hover:bg-[#24734E] text-white px-6 py-4 text-base font-medium rounded-full flex items-center gap-2 shadow hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faServer} className="h-5 w-5" />
                  Connect to Server
                  <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5 ml-1" />
                </a>
                </div>

                {/* Server Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "500+", desc: "Active Players" },
              { title: "24/7", desc: "Server Uptime" },
              { title: "100+", desc: "Custom Scripts" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md p-6 shadow-inner transition transform hover:scale-105 hover:shadow-lg hover:border-[#2EA67A]/50"
              >
                <h3 className="text-3xl font-bold text-white mb-1">{stat.title}</h3>
                <p className="text-white/60 text-sm tracking-wide">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
