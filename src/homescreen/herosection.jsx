import React, { useEffect, useMemo, useCallback, memo } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faImages } from "@fortawesome/free-solid-svg-icons";

// Optimized particle background with reduced count and better performance
const ParticleBackground = memo(() => {
  const prefersReducedMotion = useReducedMotion();
  const particleCount = 30; // Reduced from 100 for better performance

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />

      {Array.from({ length: particleCount }).map((_, i) => {
        const size = Math.random() * 2 + 1; // Smaller particles
        const opacity = Math.random() * 0.2 + 0.05; // Lower opacity
        const animationDuration = Math.random() * 15 + 10; // Slightly faster
        const delay = Math.random() * 3;

        return (
          <motion.div
            key={i}
            className="absolute bg-emerald-400 rounded-full will-change-transform"
            style={{
              width: size,
              height: size,
              opacity,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0], // Reduced movement
              x: [0, Math.random() * 15 - 7.5, 0], // Reduced movement
              opacity: [opacity, opacity * 1.3, opacity], // Less dramatic change
            }}
            transition={{
              duration: animationDuration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
});

const LotusPetal = memo(({
  className = "",
  delay = 0,
  size = 100,
  rotate = 0,
  color = "#10b981",
  opacity = 0.15,
  pathVariant = 1,
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  const petalPaths = useMemo(() => [
    "M50,0 C70,30 90,60 50,100 C10,60 30,30 50,0",
    "M50,5 C75,20 85,50 50,95 C15,50 25,20 50,5",
    "M50,0 C80,20 90,70 50,100 C10,70 20,20 50,0",
    "M50,10 C70,15 85,40 50,90 C15,40 30,15 50,10",
    "M50,0 C85,25 85,75 50,100 C15,75 15,25 50,0",
  ], []);

  const selectedPath = petalPaths[pathVariant % petalPaths.length];

  // Simplified animations for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className={`absolute ${className} pointer-events-none`}>
        <div
          style={{
            width: size,
            height: size,
            transform: `rotate(${rotate}deg)`,
          }}
          className="relative"
        >
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <path d={selectedPath} fill={color} opacity={opacity} />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 1.8, // Faster
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1 },
      }}
      className={`absolute ${className} pointer-events-none`}
    >
      <motion.div
        animate={{
          y: [0, 8, 0], // Reduced movement
          x: [0, 4, 0], // Reduced movement
        }}
        transition={{
          duration: 6 + Math.random() * 2, // Faster
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: size,
          height: size,
        }}
        className="relative will-change-transform"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <path
            d={selectedPath}
            fill={color}
            opacity={opacity * 0.4}
            filter="blur(3px)"
            transform="scale(1.03) translate(-1.5, -1.5)"
          />
          <path d={selectedPath} fill={color} opacity={opacity} />
          <path
            d={selectedPath}
            fill="white"
            opacity={opacity * 0.2}
            transform="scale(0.7) translate(15, 15)"
          />
          <path
            d={selectedPath}
            stroke={color}
            strokeWidth="0.5"
            opacity={opacity * 1.2}
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
});


const LotusFlowerGroup = memo(({
  className = "",
  delay = 0,
  size = 300,
  rotate = 0,
  baseColor = "#10b981",
  mouseX,
  mouseY,
  reactIntensity = 0.02, // Reduced default intensity
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  // Optimized color generation with memoization
  const generateColor = useCallback((base, variation) => {
    if (base.startsWith("#")) {
      const r = parseInt(base.slice(1, 3), 16);
      const g = parseInt(base.slice(3, 5), 16);
      const b = parseInt(base.slice(5, 7), 16);

      const newR = Math.max(0, Math.min(255, r + variation));
      const newG = Math.max(0, Math.min(255, g + variation));
      const newB = Math.max(0, Math.min(255, b + variation));

      return `#${newR.toString(16).padStart(2, "0")}${newG
        .toString(16)
        .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
    }
    return base;
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (mouseX && mouseY && !prefersReducedMotion) {
      const updatePosition = () => {
        const mouseXValue = mouseX.get();
        const mouseYValue = mouseY.get();

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const centerX = windowWidth / 2;
        const centerY = windowHeight / 2;

        const offsetX = (mouseXValue - centerX) * reactIntensity;
        const offsetY = (mouseYValue - centerY) * reactIntensity;

        x.set(offsetX);
        y.set(offsetY);
      };

      const unsubscribeX = mouseX.onChange(updatePosition);
      const unsubscribeY = mouseY.onChange(updatePosition);

      return () => {
        unsubscribeX();
        unsubscribeY();
      };
    }
  }, [mouseX, mouseY, reactIntensity, x, y, prefersReducedMotion]);

  // Static version for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className={`absolute ${className} pointer-events-none`}>
        <div
          style={{
            width: size,
            height: size,
            position: "relative",
            transform: `rotate(${rotate}deg)`,
          }}
        >
          <LotusPetal
            size={size * 0.4}
            color={generateColor(baseColor, 20)}
            opacity={0.15}
            pathVariant={2}
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          {Array.from({ length: 6 }).map((_, i) => { // Reduced from 8
            const angle = i * 60 * (Math.PI / 180);
            const distance = size * 0.25;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            return (
              <LotusPetal
                key={i}
                size={size * 0.4}
                rotate={i * 60}
                color={generateColor(baseColor, i * 5 - 15)}
                opacity={0.12 + (i % 3) * 0.03}
                pathVariant={i % 5}
                className="left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${i * 60}deg)`,
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate,
      }}
      transition={{
        duration: 1.5, // Faster
        delay,
        ease: "easeOut",
      }}
      className={`absolute ${className} pointer-events-none`}
      style={{
        x,
        y,
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 3, 0, -3, 0], // Reduced rotation
        }}
        transition={{
          duration: 15, // Faster
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: size,
          height: size,
          position: "relative",
        }}
        className="will-change-transform"
      >
        {/* Center petal */}
        <LotusPetal
          size={size * 0.4}
          color={generateColor(baseColor, 20)}
          opacity={0.15}
          pathVariant={2}
          className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Surrounding petals - reduced count */}
        {Array.from({ length: 6 }).map((_, i) => { // Reduced from 8
          const angle = i * 60 * (Math.PI / 180);
          const distance = size * 0.25;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;

          return (
            <LotusPetal
              key={i}
              size={size * 0.4}
              rotate={i * 60}
              delay={delay + i * 0.08}
              color={generateColor(baseColor, i * 5 - 15)}
              opacity={0.12 + (i % 3) * 0.03}
              pathVariant={i % 5}
              className="left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${i * 60}deg)`,
              }}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
});

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Optimized animation variants with better performance
  const fadeUpVariants = useMemo(() => (i) => ({
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 // Reduced movement
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.3 : 0.8, // Faster
        delay: prefersReducedMotion ? 0 : 0.3 + i * 0.15, // Reduced delay
        ease: "easeOut" 
      },
    },
  }), [prefersReducedMotion]);

  // Mouse move handler with throttling
  const handleMouseMove = useCallback((e) => {
    if (!prefersReducedMotion && !isMobile) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }
  }, [mouseX, mouseY, prefersReducedMotion, isMobile]);

  // Optimized decorative elements with better memoization
  const decorativeElements = useMemo(() => {
    if (isMobile || prefersReducedMotion) {
      return <ParticleBackground />;
    }

    return (
      <>
        <ParticleBackground />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Simplified individual petals */}
          <LotusPetal
            delay={0.4}
            size={isTablet ? 120 : 150}
            rotate={45}
            color="#2EA67A"
            opacity={0.15}
            pathVariant={2}
            className="left-[25%] top-[15%]"
          />
          <LotusPetal
            delay={0.6}
            size={isTablet ? 180 : 220}
            rotate={45}
            color="#24734E"
            opacity={0.2}
            pathVariant={4}
            className="right-[15%] bottom-[10%]"
          />
          <LotusPetal
            delay={0.5}
            size={isTablet ? 100 : 120}
            rotate={50}
            color="#24734E"
            opacity={0.2}
            pathVariant={4}
            className="left-[15%] bottom-[25%]"
          />

          {/* Optimized petal groups with reduced complexity */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[80%] h-[80%]">
              <LotusPetal 
                delay={0.6} 
                size={isTablet ? 340 : 420} 
                rotate={48} 
                color="#24734E" 
                opacity={0.25} 
                pathVariant={4} 
                className="right-[4%] top-[-30%]" 
              />
              <LotusPetal 
                delay={0.7} 
                size={isTablet ? 300 : 380} 
                rotate={8} 
                color="#24734E" 
                opacity={0.2} 
                pathVariant={4} 
                className="right-[-2%] top-[-20%]" 
              />
              <LotusPetal 
                delay={0.7} 
                size={isTablet ? 270 : 360}  
                rotate={16} 
                color="#24734E" 
                opacity={0.2} 
                pathVariant={4} 
                className="right-[4%] top-[-20%]" 
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[80%] h-[80%]">
              <LotusPetal 
                delay={0.6} 
                size={isTablet ? 380 : 450} 
                rotate={-120} 
                color="#24734E" 
                opacity={0.25} 
                pathVariant={4} 
                className="right-[70%] top-[-30%]" 
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[80%] h-[80%]">
              <LotusPetal 
                delay={0.4} 
                size={isTablet ? 280 : 350} 
                rotate={-310} 
                color="#24734E" 
                opacity={0.2} 
                pathVariant={4} 
                className="left-[-20%] bottom-[15%]" 
              />
              <LotusPetal 
                delay={0.5} 
                size={isTablet ? 320 : 400} 
                rotate={-300} 
                color="#24734E" 
                opacity={0.15} 
                pathVariant={4} 
                className="left-[-20%] bottom-[5%]" 
              />
              <LotusPetal 
                delay={0.5} 
                size={isTablet ? 260 : 340} 
                rotate={-280} 
                color="#24734E" 
                opacity={0.15} 
                pathVariant={4} 
                className="left-[-20%] bottom-[5%]" 
              />
            </div>
          </div>

          {/* Simplified Lotus Flower Groups */}
          <LotusFlowerGroup
            delay={0.5}
            size={isTablet ? 250 : 300}
            rotate={0}
            baseColor="#2EA67A"
            className="left-[5%] top-[15%]"
            mouseX={mouseX}
            mouseY={mouseY}
          />
          <LotusFlowerGroup
            delay={0.7}
            size={isTablet ? 350 : 420}
            rotate={45}
            baseColor="#24734E"
            className="right-[8%] bottom-[25%]"
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </div>
      </>
    );
  }, [isMobile, isTablet, prefersReducedMotion, mouseX, mouseY]);

  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/gtabg3.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10 filter grayscale brightness-20"
        />
      </div>

      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/[0.06] via-transparent to-[#24734E]/[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-[#030303]/40" />
      
      {decorativeElements}
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#2EA67A]/10 to-[#24734E]/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -8, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-[#24734E]/10 to-[#2EA67A]/10 rounded-full blur-xl"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants(1)}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 md:mb-8 tracking-tight text-white leading-[0.9] relative">
              <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/85 drop-shadow-2xl">
                Welcome To
              </span>
              <span className="block font-[Pacifico] mt-2 md:mt-4 relative">
                {/* Glow effect behind text */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#2EA67A] to-[#24734E] blur-2xl opacity-10"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#2EA67A] via-[#2EA67A] to-[#24734E] drop-shadow-lg">
                  Bloom<span className="text-white drop-shadow-lg">RP</span>
                </span>
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants(2)}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 md:mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto relative">
              <span className="relative z-10">
                Creating exceptional experiences since 2022.
              </span>
              {/* Subtle background glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl"></span>
            </p>
            
            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <motion.a
                href="#faq"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(46, 166, 122, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#2EA67A] to-[#24734E] text-white font-semibold rounded-full overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FontAwesomeIcon icon={faRocket} className="h-4 w-4" />
                  Explore Features
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#24734E] to-[#2EA67A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
              
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#2EA67A] hover:text-[#2EA67A] transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FontAwesomeIcon icon={faImages} className="h-4 w-4" />
                  View Gallery
                </span>
              </motion.a>
            </motion.div>
            
            {/* Stats or additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex items-center justify-center gap-8 text-sm text-white/40 font-light"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2EA67A] rounded-full animate-pulse"></div>
                <span>Active Community</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#24734E] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <span>Live Stream Friendly</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced bottom gradient for better blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/20 to-transparent pointer-events-none" />
      
      {/* Subtle vignette effect using multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export default HeroSection;
