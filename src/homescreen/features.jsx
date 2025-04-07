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
} from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Community",
      description:
        "Engage with a vibrant and seasoned community dedicated to collaborative storytelling and the creation of immersive narratives",
    },
    {
      icon: <FontAwesomeIcon icon={faPalette} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Premium UI Design",
      description:
        "BloomRP has been meticulously designed with a focus on user interaction and experience, delivering a seamless and elegant interface.",
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Career Customization",
      description:
        "Select from a diverse range of career paths, allowing your character to pursue roles in law enforcement, criminal organizations, gangs, business, and more.",
    },
    {
      icon: <FontAwesomeIcon icon={faCogs} className="h-10 w-10 text-[#2EA67A]" />,
      title: "High-Quality Resources",
      description:
        "BloomRP utilizes a collection of premium, curated scripts. All resources are rigorously reviewed and tested prior to their release to the community.",
    },
    {
      icon: <FontAwesomeIcon icon={faBalanceScale} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Equitable Moderation",
      description:
        "Our experienced staff team is committed to maintaining a balanced and enjoyable environment for all participants.",
    },
    {
      icon: <FontAwesomeIcon icon={faNetworkWired} className="h-10 w-10 text-[#2EA67A]" />,
      title: "Superior Infrastructure",
      description:
        "Our dedicated, bare-metal servers ensure an optimal performance and an enjoyable user experience.",
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
        duration: 0.5,
      },
    },
  };

  return (
    <section id="server-info" className="py-20 bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/50 border border-white/10 hover:border-[#2EA67A]/50 transition-all duration-300 rounded-lg p-6"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}