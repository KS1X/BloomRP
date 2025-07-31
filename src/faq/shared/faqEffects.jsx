import React from "react";
import { motion } from "framer-motion";

// Unified particle system for all FAQ components
export function UnifiedParticles({ 
  count = 15, 
  sizeRange = [1, 3], 
  opacityRange = [0.02, 0.12],
  animationDuration = [20, 30],
  movement = 35 
}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(46,166,122,0.03)_0%,transparent_70%)]" />
      
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
        const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
        const duration = Math.random() * (animationDuration[1] - animationDuration[0]) + animationDuration[0];
        const delay = Math.random() * 8;

        return (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full"
            style={{
              width: size,
              height: size,
              opacity,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -movement, 0],
              x: [0, Math.random() * 25 - 12.5, 0],
              opacity: [opacity, opacity * 2.5, opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

// Shared floating decorative elements
export function FloatingElements({ variant = "default" }) {
  const elements = {
    header: [
      { 
        className: "top-16 left-16 w-48 h-32",
        color: "from-[#2EA67A]/25 to-transparent",
        animation: { duration: 8, delay: 0 }
      },
      { 
        className: "bottom-20 right-20 w-56 h-40",
        color: "from-[#24734E]/25 to-transparent",
        animation: { duration: 10, delay: 1 }
      },
      { 
        className: "top-1/2 left-1/3 w-40 h-28",
        color: "from-white/10 to-emerald-400/15",
        animation: { duration: 12, delay: 0.5 }
      }
    ],
    content: [
      { 
        className: "top-1/4 left-1/6 w-40 h-40",
        color: "from-[#2EA67A]/8 to-[#24734E]/5",
        animation: { duration: 12, delay: 0 }
      },
      { 
        className: "bottom-1/3 right-1/6 w-32 h-32",
        color: "from-[#24734E]/8 to-[#2EA67A]/5",
        animation: { duration: 15, delay: 2 }
      }
    ],
    guides: [
      { 
        className: "top-1/5 left-1/8 w-36 h-36",
        color: "from-[#2EA67A]/6 to-[#24734E]/4",
        animation: { duration: 14, delay: 0 }
      },
      { 
        className: "bottom-1/4 right-1/8 w-28 h-28",
        color: "from-[#24734E]/6 to-[#2EA67A]/4",
        animation: { duration: 16, delay: 1.5 }
      }
    ]
  };

  const selectedElements = elements[variant] || elements.default || elements.content;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {selectedElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${element.color} rounded-full blur-2xl ${element.className}`}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: element.animation.duration,
            delay: element.animation.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Shared section transition component
export function SectionTransition({ 
  direction = "bottom", 
  height = "h-32", 
  fromColor = "transparent", 
  toColor = "[#0a0a0a]",
  showConnector = true 
}) {
  const gradientClass = direction === "bottom" 
    ? `bg-gradient-to-b from-${fromColor} to-${toColor}` 
    : `bg-gradient-to-t from-${fromColor} to-${toColor}`;

  return (
    <>
      <div className={`absolute ${direction}-0 left-0 right-0 ${height} ${gradientClass} pointer-events-none`} />
      
      {showConnector && (
        <div className={`absolute ${direction}-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-${direction === "bottom" ? "b" : "t"} from-[#2EA67A]/20 to-transparent`} />
      )}
    </>
  );
}

// Enhanced background gradients component
export function BackgroundGradients({ 
  primaryOpacity = 0.03, 
  secondaryOpacity = 0.60,
  variant = "default" 
}) {
  const gradients = {
    header: [
      `bg-gradient-to-br from-[#2EA67A]/[0.08] via-transparent to-[#24734E]/[0.08] blur-3xl`,
      `bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#030303]/${secondaryOpacity}`
    ],
    content: [
      `bg-gradient-to-br from-[#2EA67A]/[${primaryOpacity.toFixed(2)}] via-transparent to-[#24734E]/[${primaryOpacity.toFixed(2)}]`,
      `bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/${secondaryOpacity}`
    ],
    guides: [
      `bg-gradient-to-br from-[#2EA67A]/[0.04] via-transparent to-[#24734E]/[0.04]`,
      `bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#030303]/80`
    ]
  };

  const selectedGradients = gradients[variant] || gradients.content;

  return (
    <>
      {selectedGradients.map((gradient, index) => (
        <div key={index} className={`absolute inset-0 ${gradient}`} />
      ))}
    </>
  );
}

// Shared animated title component
export function AnimatedTitle({ 
  title, 
  subtitle, 
  description,
  titleDelay = 0.2,
  subtitleDelay = 0.4,
  descriptionDelay = 0.6 
}) {
  return (
    <motion.div
      className="text-center mb-16 sm:mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight overflow-hidden">
        <motion.span
          className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/80"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: titleDelay, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {title}
        </motion.span>
        <motion.span
          className="block text-[#2EA67A] mt-2"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: subtitleDelay, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.span>
      </h1>
      
      {description && (
        <motion.p
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: descriptionDelay }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
