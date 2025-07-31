import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { UnifiedParticles, FloatingElements, BackgroundGradients, SectionTransition, AnimatedTitle } from "./shared/faqEffects.jsx";

const topics = [
  {
    title: "How to Use the Phone",
    description:
      "Press `F1` to open your phone. Use apps like Messages, Twitter, Yellow Pages, or Services. Download new apps via the App Store.",
    media: "/images/example.png",
  },
  {
    title: "How to Get a Job",
    description:
      "Open your phone > Job Center or visit the in-game Job Center. Choose starter jobs like Taxi Driver, Delivery, or Sanitation.",
      media: "/images/example.png",
  },
  {
    title: "How to Rent a Car",
    description:
      "Visit the car rental lot marked on the map. Choose a vehicle, pay the fee, and it will spawn nearby.",
      media: "/images/example.png",
  },
  {
    title: "How to Buy a Car",
    description:
      "Visit a car dealership. Browse, test drive, and purchase using your bank balance. Requires a valid license.",
      media: "/images/example.png",
  },
  {
    title: "How to Get an Apartment",
    description:
      "Go to a real estate building or map marker. Interact with the door to rent. Use `/setspawn` to spawn there.",
      media: "/images/example.png",
  },
  {
    title: "How to Get Licenses (Car, Boat, Firearms)",
    description:
      "Head to the DMV. Complete a theory and practical test. Firearms may require a background check.",
      media: "/images/example.png",
  },
  {
    title: "How to Change Your Character’s Appearance",
    description:
      "Visit a clothing store, barber shop, or plastic surgeon. Save outfits and change looks anytime.",
      media: "/images/example.png",
  },
  {
    title: "How to Call EMS",
    description:
      "Use Phone > Services > EMS or type `/911 EMS` with your location. Stay nearby for help to arrive.",
      media: "/images/example.png",
  },
  {
    title: "How to Call Police",
    description:
      "Use Phone > Services > Police or type `/911 Police` in chat with your location and message.",
      media: "/images/example.png",
  },
  {
    title: "How to Do Crime",
    description:
      "Try car boosting, house robbery, or pickpocketing. Get tools from black market NPCs. Be discreet — cops may be watching.",
      media: "/images/example.png",
  },
  {
    title: "How to Get Whitelisted Jobs",
    description:
      "Apply on our Discord or website. Includes Police, EMS, DOJ, Mechanic, and more. Some require interviews.",
        media: "/images/example.png",
  },
  {
    title: "How to Start a Business",
    description:
      "Submit a business proposal in Discord. Staff will help you set up. Manage inventory, finances, and hiring in-game.",
      media: "/images/example.png",
  },
  {
    title: "How to Join a Gang",
    description:
      "Roleplay and earn trust with existing gangs. Loyalty and immersion lead to invites. Gangs offer unique RP opportunities.",
      media: "/images/example.png",
  },
  {
    title: "How to Buy a House",
    description:
      "Use the phone or work with a real estate agent. Houses offer garages, storage, and spawning privileges.",
      media: "/images/example.png",
  },
];

export default function GettingStarted() {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <section className="relative py-0 bg-gradient-to-b from-[#030303] to-[#0a0a0a] text-white overflow-hidden">
      {/* Connecting transition from previous section */}
      <SectionTransition direction="top" fromColor="[#030303]" toColor="transparent" />
      
      {/* Unified Background Elements */}
      <UnifiedParticles count={18} sizeRange={[1, 3.5]} movement={25} />
      <BackgroundGradients variant="guides" />
      <FloatingElements variant="guides" />

      {/* Content container with enhanced spacing */}
      <div className="relative py-24 sm:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Use shared animated title component */}
          <AnimatedTitle 
            title="Getting Started"
            subtitle="Guide"
            description="Everything you need to know to begin your roleplay journey"
          />

          {/* Enhanced Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-[#2EA67A]/40 hover:shadow-2xl hover:shadow-[#2EA67A]/10"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Enhanced Image Container */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <motion.img
                  src={topic.media}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#2EA67A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Enhanced Content */}
              <div className="relative p-6 sm:p-8">
                {/* Background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white group-hover:text-[#2EA67A] transition-colors duration-300 leading-tight">
                    {topic.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                    {topic.description}
                  </p>
                </div>

                {/* Decorative Bottom Element */}
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#24734E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Help Callout */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2EA67A]/5 to-transparent blur-xl -z-10" />
            
            <motion.p
              className="text-white/70 mb-8 text-lg sm:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Still have questions? Join the Discord or type{" "}
              <code className="bg-gradient-to-r from-[#2EA67A]/20 to-[#24734E]/20 px-3 py-1 rounded-lg border border-[#2EA67A]/30 text-[#2EA67A] font-mono">
                /help
              </code>{" "}
              in-game.
            </motion.p>
            
            <motion.a
              href="https://discord.gg/s2W9YyJSfz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#3c45a5] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#5865F2]/25 gap-3 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(88, 101, 242, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon 
                icon={faDiscord} 
                className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" 
              />
              Join the Discord
            </motion.a>
          </div>
        </motion.div>
        </div>
      </div>
      
      {/* Connecting transition to next section */}
      <SectionTransition direction="bottom" fromColor="transparent" toColor="[#0a0a0a]" />
    </section>
  );
}
