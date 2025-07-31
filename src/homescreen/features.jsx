import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPalette,
  faBriefcase,
  faCogs,
  faBalanceScale,
  faNetworkWired,
  faMask,
  faWalkieTalkie,
} from "@fortawesome/free-solid-svg-icons";

// Background particle component for visual interest
function FeatureParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(46,166,122,0.03)_0%,transparent_70%)]" />
      
      {Array.from({ length: 15 }).map((_, i) => {
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.1 + 0.02;
        const animationDuration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;

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
              opacity: [opacity, opacity * 2, opacity],
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
}

export default function Features() {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Community",
      description:
        "Engage with a vibrant and seasoned community dedicated to collaborative storytelling and the creation of immersive narratives",
      gradient: "from-[#2EA67A]/10 to-[#24734E]/5",
    },
    {
      icon: <FontAwesomeIcon icon={faPalette} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Premium UX/UI Design",
      description:
        "BloomRP has been meticulously designed with a focus on user experience, delivering a seamless and elegant interface.",
      gradient: "from-[#24734E]/10 to-[#2EA67A]/5",
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Whitelisted Businesses",
      description:
        "Select from a diverse range of business opportunities, allowing your character to pursue roles in a variety of different industries.",
      gradient: "from-[#2EA67A]/10 to-[#24734E]/5",
    },
    {
      icon: <FontAwesomeIcon icon={faCogs} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Custom Resources",
      description:
        "BloomRP offers a variety of custom scripts, assets, and maps designed for a truly unique experience. Our resources are regularly maintained and tested prior to production.",
      gradient: "from-[#24734E]/10 to-[#2EA67A]/5",
    },
    {
      icon: <FontAwesomeIcon icon={faBalanceScale} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Equitable Moderation",
      description:
        "Our experienced staff team is committed to maintaining a balanced and enjoyable environment for our community.",
      gradient: "from-[#2EA67A]/10 to-[#24734E]/5",
    },
    {
      icon: <FontAwesomeIcon icon={faMask} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Criminal Organizations",
      description:
        "Engage with a variety of criminal organizations and gangs, each with its own unique culture and opportunities. Who will run the streets?",
      gradient: "from-[#24734E]/10 to-[#2EA67A]/5",
    },
    {
      icon: <FontAwesomeIcon icon={faWalkieTalkie} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Law Enforcement",
      description:
        "Engage with a variety of law enforcement agencies, catch criminals, and uphold the law. All while enjoying our custom police scripts and resources.",
      gradient: "from-[#2EA67A]/10 to-[#24734E]/5",
    },
    {
      icon: <FontAwesomeIcon icon={faNetworkWired} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Superior Infrastructure",
      description:
        "Our dedicated, bare-metal servers and network infrastructure ensure optimal performance and an enjoyable user experience.",
      gradient: "from-[#24734E]/10 to-[#2EA67A]/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  return (
    <section id="server-info" className="relative py-20 bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
      {/* Background Particles */}
      <FeatureParticles />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Server <span className="text-[#2EA67A]">Features</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Built for immersion. Backed by community.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`
                relative overflow-hidden bg-gradient-to-br ${feature.gradient} 
                backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl 
                p-4 sm:p-6 lg:p-8 text-center 
                group cursor-pointer
                hover:scale-[1.02] sm:hover:scale-105 
                active:scale-[0.98] sm:active:scale-[1.02]
                transition-all duration-300 ease-out
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#2EA67A]/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-100 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-[#2EA67A]/10
                hover:border-[#2EA67A]/20 active:border-[#2EA67A]/30
                transform-gpu will-change-transform
              `}
              whileHover={{ 
                scale: window.innerWidth >= 640 ? 1.05 : 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: window.innerWidth >= 640 ? 1.02 : 0.98,
                transition: { duration: 0.1 }
              }}
            >
              {/* Icon Container with Enhanced Styling */}
              <div className="relative mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto bg-gradient-to-br from-[#2EA67A]/20 to-[#24734E]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-[#2EA67A] text-lg sm:text-xl lg:text-2xl">
                    {React.cloneElement(feature.icon, {
                      className: "h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#2EA67A]"
                    })}
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto border-2 border-[#2EA67A]/20 rounded-full scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
              </div>

              {/* Enhanced Typography */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 group-hover:text-[#2EA67A] transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-4 sm:line-clamp-none">
                {feature.description}
              </p>

              {/* Mobile-specific touch indicator */}
              <div className="absolute bottom-2 right-2 sm:hidden opacity-30 group-active:opacity-60 transition-opacity">
                <div className="w-2 h-2 bg-[#2EA67A] rounded-full"></div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl from-[#2EA67A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tr from-[#24734E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}