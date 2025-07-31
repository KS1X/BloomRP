import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDollarSign, faUsers, faServer } from "@fortawesome/free-solid-svg-icons";

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />

      {Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.3 + 0.1;
        const animationDuration = Math.random() * 20 + 10;
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
              opacity: [opacity, opacity * 1.5, opacity],
            }}
            transition={{
              duration: animationDuration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

export default function DonationCta() {
  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faServer} className="h-8 w-8 text-[#2EA67A]" />,
      title: "Server Infrastructure",
      description: "Keep our dedicated servers running 24/7 with optimal performance"
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-[#2EA67A]" />,
      title: "Community Resources",
      description: "Fund new custom scripts, maps, and features for enhanced roleplay"
    },
    {
      icon: <FontAwesomeIcon icon={faDollarSign} className="h-8 w-8 text-[#2EA67A]" />,
      title: "Staff Support",
      description: "Support our volunteer staff team and community moderators"
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gtabg2.jpg"
          alt="GTA V City Background"
          className="w-full h-full object-cover opacity-10 filter grayscale brightness-50"
        />
      </div>
      <ParticleBackground />
      
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
            Help Keep BloomRP <span className="text-[#2EA67A]">Thriving</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-8 font-light">
            BloomRP is entirely <strong className="text-white/80">community-driven and funded</strong>. 
            With your support, we can continue creating new resources and investing back into our community. 
            Every donation helps us maintain our servers, develop new features, and provide the best possible roleplay experience.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-xl p-6 hover:border-[#2EA67A]/50 transition-all"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Donation Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a
              href="https://www.paypal.com/donate?hosted_button_id=36TTXQG8QZTF4" // Replace with your actual donation link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2EA67A] hover:bg-[#24734E] text-white px-8 py-4 text-lg font-semibold rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faHeart} className="h-5 w-5" />
              Support Our Community
            </a>
          </div>

          {/* Thank You Message */}
          <div className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Thank You for Your Support!</h3>
            <p className="text-white/70 leading-relaxed">
              Your contributions help us maintain our servers, develop new content, and create amazing experiences 
              for hundreds of players every day. Every donation, no matter the size, makes a real difference in 
              keeping BloomRP running and growing.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-2 text-[#2EA67A]">
                <FontAwesomeIcon icon={faHeart} className="h-5 w-5" />
                <span className="font-medium">From all of us at BloomRP - Thank you!</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
