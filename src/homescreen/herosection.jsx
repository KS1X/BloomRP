import React, { useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useMediaQuery } from "react-responsive"; // Import useMediaQuery

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

function LotusPetal({
  className = "",
  delay = 0,
  size = 100,
  rotate = 0,
  color = "#10b981",
  opacity = 0.15,
  pathVariant = 1,
  mouseX,
  mouseY,
  reactIntensity = 0.02,
}) {
  const petalPaths = [
    "M50,0 C70,30 90,60 50,100 C10,60 30,30 50,0",
    "M50,5 C75,20 85,50 50,95 C15,50 25,20 50,5",
    "M50,0 C80,20 90,70 50,100 C10,70 20,20 50,0",
    "M50,10 C70,15 85,40 50,90 C15,40 30,15 50,10",
    "M50,0 C85,25 85,75 50,100 C15,75 15,25 50,0",
  ];

  const selectedPath = petalPaths[pathVariant % petalPaths.length];
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (mouseX && mouseY) {
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
  }, [mouseX, mouseY, reactIntensity, x, y]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
        rotate: rotate - 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
      style={{
        x,
        y,
      }}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width: size,
          height: size,
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
          <path
            d={selectedPath}
            fill={color}
            opacity={opacity * 0.5}
            filter="blur(5px)"
            transform="scale(1.05) translate(-2.5, -2.5)"
          />
          <path d={selectedPath} fill={color} opacity={opacity} />
          <path
            d={selectedPath}
            fill="white"
            opacity={opacity * 0.3}
            transform="scale(0.7) translate(15, 15)"
          />
          <path
            d={selectedPath}
            stroke={color}
            strokeWidth="1"
            opacity={opacity * 1.5}
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}


function AnimatedGradient() {
  return (
    <motion.div
      className="absolute inset-0 opacity-30"
      animate={{
        background: [
          "radial-gradient(circle at 30% 40%, rgba(16,185,129,0.1) 0%, transparent 50%)",
          "radial-gradient(circle at 70% 60%, rgba(20,184,166,0.1) 0%, transparent 50%)",
          "radial-gradient(circle at 40% 70%, rgba(5,150,105,0.1) 0%, transparent 50%)",
          "radial-gradient(circle at 60% 30%, rgba(16,185,129,0.1) 0%, transparent 50%)",
          "radial-gradient(circle at 30% 40%, rgba(16,185,129,0.1) 0%, transparent 50%)",
        ],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}


function LotusFlowerGroup({
  className = "",
  delay = 0,
  size = 300,
  rotate = 0,
  baseColor = "#10b981",
  mouseX,
  mouseY,
  reactIntensity = 0.03,
}) {
  // Generate colors with slight variations
  const generateColor = (base, variation) => {
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
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (mouseX && mouseY) {
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
  }, [mouseX, mouseY, reactIntensity, x, y]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate,
      }}
      transition={{
        duration: 2,
        delay,
        ease: "easeOut",
      }}
      className={`absolute ${className}`}
      style={{
        x,
        y,
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width: size,
          height: size,
          position: "relative",
        }}
      >
        {/* Center petal */}
        <LotusPetal
          size={size * 0.4}
          color={generateColor(baseColor, 20)}
          opacity={0.2}
          pathVariant={2}
          className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          mouseX={mouseX}
          mouseY={mouseY}
          reactIntensity={reactIntensity * 0.5}
        />

        {/* Surrounding petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45 * (Math.PI / 180);
          const distance = size * 0.3;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;

          return (
            <LotusPetal
              key={i}
              size={size * 0.5}
              rotate={i * 45}
              delay={delay + i * 0.1}
              color={generateColor(baseColor, i * 5 - 20)}
              opacity={0.15 + (i % 3) * 0.05}
              pathVariant={i % 5}
              className="left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${i * 45}deg)`,
              }}
              mouseX={mouseX}
              mouseY={mouseY}
              reactIntensity={reactIntensity * (0.7 + (i % 3) * 0.1)}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
}

function HeroSection() {
  const fadeUpVariants = (i) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.2, ease: "easeOut" },
    },
  });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/[0.05] via-transparent to-[#24734E]/[0.05] blur-3xl" />

      {/* Animated gradient background */}
      <AnimatedGradient />

      {/* Particle background */}
      <ParticleBackground />
      <ParticleBackground />
      <ParticleBackground />
      <ParticleBackground />
      <ParticleBackground />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <LotusPetal
          delay={0.6}
          size={150}
          rotate={45}
          color="#2EA67A"
          opacity={0.2}
          pathVariant={2}
          className="left-[30%] top-[20%]"
        />
        <LotusPetal
          delay={0.8}
          size={220}
          rotate={45}
          color="#24734E"
          opacity={0.3}
          pathVariant={4}
          className="right-[20%] bottom-[5%]"
        />
        <LotusPetal
          delay={0.8}
          size={120}
          rotate={50}
          color="#24734E"
          opacity={0.3}
          pathVariant={4}
          className="left-[20%] bottom-[20%]"
        />
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[80%] h-[80%]">
        <LotusPetal // top right md petal for balance
          delay={0.8}
          size={460}
          rotate={62}
          color="#24734E"
          opacity={0.4}
          pathVariant={4}
          className="right-[8%] top-[-30%]"
        />
          <LotusPetal // top right md petal for balance
          delay={0.8}
          size={460}
          rotate={8}
          color="#24734E"
          opacity={0.3}
          pathVariant={4}
          className="right-[-2%] top-[-25%]"
        />
        <LotusPetal // top right md petal for balance
          delay={0.8}
          size={460}
          rotate={45}
          color="#24734E"
          opacity={0.3}
          pathVariant={4}
          className="right-[0%] top-[-25%]"
        />
        <LotusPetal // top right petal for balance
          delay={0.6}
          size={600}
          rotate={45}
          color="#2EA67A"
          opacity={0.2}
          pathVariant={2}
          className="right-[0%] top-[-30%]"
        />
      </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[80%] h-[80%]">
          <LotusPetal // top left LG petal for balance
          delay={0.8}
          size={500}
          rotate={-120}
          color="#24734E"
          opacity={0.4}
          pathVariant={4}
          className="right-[70%] top-[-34%]"
        />
        <LotusPetal // top left LG petal for balance
          delay={0.8}
          size={380}
          rotate={-130}
          color="#24734E"
          opacity={0.4}
          pathVariant={4}
          className="right-[70%] top-[-25%]"
        /> 
      </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[80%] h-[80%]">
        <LotusPetal // bottom left md petal for balance
          delay={0.6}
          size={380}
          rotate={-310}
          color="#24734E"
          opacity={0.3}
          pathVariant={4}
          className="left-[-25%] bottom-[15%]"
        />
        <LotusPetal // bottom left LG MD petal for balance
          delay={0.8}
          size={520}
          rotate={-300}
          color="#24734E"
          opacity={0.2}
          pathVariant={4}
          className="left-[-25%] bottom-[0%]"
        />
        <LotusPetal // bottom left SM MD petal for balance
          delay={0.4}
          size={320}
          rotate={-300}
          color="#24734E"
          opacity={0.5}
          pathVariant={4}
          className="left-[-20%] bottom-[10%]"
        />
        <LotusPetal // bottom left md petal for balance
          delay={0.6}
          size={380}
          rotate={-280}
          color="#24734E"
          opacity={0.3}
          pathVariant={4}
          className="left-[-20%] bottom-[0%]"
        />
      </div>
      </div>
        <LotusFlowerGroup
          delay={0.6}
          size={330}
          rotate={0}
          baseColor="#2EA67A"
          className="left-[5%] top-[20%]"
        />
        <LotusFlowerGroup
          delay={0.8}
          size={460}
          rotate={45}
          baseColor="#24734E"
          className="right-[10%] bottom-[30%]"
        />
      </div>

      {!isMobile && ( // Render only on non-mobile devices
        <div className="absolute inset-0 overflow-hidden">
          <LotusPetal
            delay={0.6}
            size={150}
            rotate={45}
            color="#2EA67A"
            opacity={0.2}
            pathVariant={2}
            className="left-[30%] top-[20%]"
          />
          <LotusPetal
            delay={0.8}
            size={220}
            rotate={45}
            color="#24734E"
            opacity={0.3}
            pathVariant={4}
            className="right-[20%] bottom-[5%]"
          />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants(1)}
          >
            <h1 className="text-4xl sm:text-8xl font-bold mb-4 tracking-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Welcome To
              </span>
              <br />
              <span className="bg-clip-text font-[Pacifico] text-[#2EA67A]">
                BloomRP ‎
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants(2)}
          >
            <p className="text-base sm:text-lg text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
              Creating exceptional experiences since 2022.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export default HeroSection;