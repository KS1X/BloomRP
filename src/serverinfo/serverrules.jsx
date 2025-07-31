import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Floating particles component for extra visual flair
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 4 + 2;
        const opacity = Math.random() * 0.4 + 0.1;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute bg-[#2EA67A] rounded-full"
            style={{
              width: size,
              height: size,
              opacity,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [opacity, opacity * 1.5, opacity],
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

export default function ServerRulesPage() {
  const rules = [
    {
      category: "Community Rules",
      items: [
        "All users must have a quality, working microphone.",
        "This server is only available to users who are at least 18 years old.",
        "Understand and speak fluent English.",
      ],
    },
    {
      category: "Community Rules",
      items: [
        "Derogatory remarks regarding race, gender, sexual orientation, or age are strictly prohibited.",
        "Toxicity: OOC toxicity towards other members of the community is not tolerated in any BloomRP-related server.",
      ],
    },
    {
      category: "General RP Rules",
      items: [
        "Players must stay in character while in server.",
        "OOC Communication: All out-of-character (OOC) communication must be done in the designated OOC channels.",
        "The use of /OOC chat should be used sparingly for information or context. Frequent use of /OOC is prohibited.",
        "References such as “gods”, “admins”, “the server”, or other related language out of context of RP is prohibited.",
        "RP acts or scenarios involving sexual assault, sexual harassment, or racism are prohibited.",
        "If a player is involved in a RP scenario they are not comfortable with, they may use /report to notify staff and may leave the server. Failure to notify staff may result in a ban.",
        "Players must respect the RP of others and not disrupt ongoing scenes.",
      ],
    },
    {
      category: "Distinct RP Rules",
      items: [
        "Metagaming: Using or relaying information your character did not obtain through roleplay.",
        "Powergaming: Using any game mechanic to your advantage in an unrealistic manner.",
        "Fail RP: Performing game mechanics, actions, or communication with others in an unrealistic manner.",
        "RDM & VDM: Attacking other roleplayers without prior communication or with a real reason.",
        "NVL (Not Valuing Life): Acting in a way that shows you do not value your own life or the life of others.",
        "Combat Logging: Logging out during a combat situation is strictly prohibited.",
        "Third-party Applications: The use of voice communications such as Teamspeak or Discord is not allowed for in-game purposes.",
      ],
    },
    {
      category: "Character Requirements",
      items: [
        "Character names containing special characters or foul language are not permitted.",
        "All characters must be the age 18 years or older. “RPing” as a character under 18, baby, child, or minor is strictly prohibited.",
        "Characters are allowed to have one “whitelisted” job at a time, meaning one character cannot share two jobs (e.g., Police and EMS).",
        "Characters are allowed to have one associated criminal organization or gang, meaning one character cannot be associated with multiple organizations.",
      ],
    },
    {
      category: "Distinct Rules and Definitions",
      items: [
        "Metagaming: The use of relaying information your character did not obtain through roleplay.",
        "Powergaming: The use of game mechanic to your advantage in an unrealistic manner.",
        "Fail RP: Performing game mechanics, actions, or communication with others in an unrealistic manner.",
        "RDM & VDM: Attacking other roleplayers without prior communication or with a real reason.",
        "NVL (Not Valuing Life): Acting in a way that shows you do not value your own life or the life of others.",
      ],
    },
    {
      category: "Illegal Activities",
      items: [
        "Criminal activity groups are limited to 4 players at a time, this includes general association, lookouts, getaway drivers, etc.",
        "Characters are allowed to scam other characters for money, but must be done in a realistic manner.",
        "Characters may not be forcibly made to withdraw from a bank or ATM.",
        "Characters may not be kidnapped more than twice in a 24-hour period.",
        "Civilian characters may not be held hostage for more than 1/hr in a single RP scenario unless otherwise agreed upon by all parties involved, gang members are not included in this rule and may be held for longer periods of time.",
        "Characters may not store or retrieve a vehicle from a garage in a police chase.",
        "Complete Pocket Wiping is prohibited, characters may steal 5 maximum items (stacks included).",
        "Cop Baiting in a low-quality RP manner is prohibited.",
      ],
    },
    {
      category: "Gang and Organization Rules",
      items: [
        "Maximum Gang size is 20 members.",
        "Gang members must have a clear and defined role within the gang.",
        "Gangs or organizations must have a clear hierarchy and structure.",
        "Gang members must respect the RP of other gangs and organizations.",
        "Gangs or organizations have a maximum of 2 whitelisted businesses owned by members of the gang.",
        "Gang members must follow the rules of engagement with civilians and may engage in random acts of violence against rival gangs with reasonable interaction or engagement.",
        "Gang wars must be declared in a realistic manner, and announced in a public medium (use Birdy, InstaPick, Darkchat), gangs must have a clear reason for the war.",
      ],
    },
    {
      category: "Whitelisted Business Rules",
      items: [
        "Whitelisted businesses must have a clear and defined role within the server.",
        "Players may own 1 business across all characters, meaning a player may not own multiple businesses with different characters.",
        "WL business owner characters may engage in criminal activity, must do so in a realistic manner.",
        "In the event of a business owners death, the business will be brought to the courts to determine ownership.",
        "Businesses may have a maximum of 10 employees.",
      ],
    },
    {
      category: "Police & EMS Rules",
      items: [
        "Police and EMS must follow the rules of engagement with civilians.",
        "Police may PIT maneuver vehicles after a minimum of 2 minutes while in a chase.",
        "Corruption is not allowed for police or EMS characters, or engage in criminal activity.",
        "NVL rule does not apply to police or EMS characters, meaning they may act in a way that shows they do not value their own life or the life of others.",
        "Police and EMS must follow the rules of engagement with civilians and may engage in random acts of violence against civilians with reasonable interaction or engagement.",
      ],
    },
    {
      category: "Court & Legal System",
      items: [
        "The legal system is made of three courts: Civil (trial), Criminal (trial), and Supreme.",
        "The state penal code is the only law that is recognized in the court system.",
        "the legal system only recognizes the case laws noted in the penal code, other laws are not recognized.",
        "The court system is based on the principles of fairness and justice, and all players are expected to follow the rules of the court.",
        "Judges are responsible for ensuring that the court system is fair and just, and may impose penalties on players who violate the rules of the court.",
        "All Character assets may be seized by the court system, including vehicles, money, property.",
        "Players may appeal court decisions to the supreme court if they believe that the decision was unfair or unjust, this court is a staff members who will review the case and make final determination.",
        "Donations are not immune to the court system.",
      ],
    },
    {
      category: "Player Reports, Bans, and Appeals",
      items: [
        "Players may report rule violations by using /report in server or submitting a ticket.",
        "Players may be banned for any reason deemed necessary by the staff team.",
        "Ban lengths are determined by the severity of the violation and may range from 1 day to permanent.",
        "Players have the right to appeal bans by submitting an appeal ticket.",
        "All Staff members are held to the same rules and regulations as players.",
        "Staff members may not abuse systems or resources or engage in any form of corruption.",
        "Donations do not grant special privileges or exemption from the rules.",
      ],
    },
  ];

  return (
    <>
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
        <FloatingParticles />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Enhanced Title Section */}
          <motion.div 
            className="relative text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/[0.05] via-transparent to-[#24734E]/[0.05] blur-3xl -z-10" />
            
            {/* Enhanced Decorative Shapes */}
            <motion.div
              className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#2EA67A]/30 to-transparent rounded-full blur-2xl opacity-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.65, scale: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-[#24734E]/30 to-transparent rounded-full blur-2xl opacity-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.75, scale: 1 }}
              transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
            />

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold mb-6 tracking-tight text-white overflow-hidden">
              Rules & Guidelines
          </h1>
          <motion.p 
            className="text-lg md:text-xl text-white/60 leading-relaxed font-light tracking-wide max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animated text reveal */}
            {"Please review our rules and guidelines carefully. These rules help ensure a great experience for our community.".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.02, delay: 0.5 + index * 0.02 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Enhanced Rules Section */}
        <motion.div
          className="max-w-5xl mx-auto space-y-6"
          initial="hidden"
          animate="visible"
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
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group relative bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10 p-8 hover:border-[#2EA67A]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/[0.03] hover:shadow-[#2EA67A]/10"
            >
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#2EA67A]/0 via-[#2EA67A]/5 to-[#24734E]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={{ 
                  background: [
                    "linear-gradient(90deg, rgba(46,166,122,0) 0%, rgba(46,166,122,0.05) 50%, rgba(36,115,78,0) 100%)",
                    "linear-gradient(90deg, rgba(36,115,78,0) 0%, rgba(46,166,122,0.05) 50%, rgba(46,166,122,0) 100%)",
                    "linear-gradient(90deg, rgba(46,166,122,0) 0%, rgba(46,166,122,0.05) 50%, rgba(36,115,78,0) 100%)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Category Header */}
              <div className="flex items-center mb-6 relative z-10">
                <motion.div 
                  className="w-1 h-8 bg-gradient-to-b from-[#2EA67A] to-[#24734E] rounded-full mr-4"
                  initial={{ height: 0 }}
                  animate={{ height: 32 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
                <motion.h3 
                  className="text-2xl font-bold text-white group-hover:text-[#2EA67A] transition-colors duration-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {rule.category.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + charIndex * 0.03,
                        ease: "easeOut"
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h3>
              </div>
              
              {/* Rules List */}
              <ul className="space-y-3 relative z-10">
                {rule.items.map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start text-white/90 hover:text-white group-hover:text-white/95 transition-colors duration-200 relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Animated bullet point */}
                    <motion.div 
                      className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 relative"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 + 0.2, type: "spring" }}
                    >
                      <motion.div
                        className="w-full h-full bg-[#2EA67A] rounded-full"
                        animate={{ 
                          boxShadow: [
                            "0 0 5px rgba(46,166,122,0.5)",
                            "0 0 15px rgba(46,166,122,0.8)",
                            "0 0 5px rgba(46,166,122,0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    {/* Animated text with hover effect */}
                    <motion.span 
                      className="leading-relaxed relative"
                      whileHover={{
                        color: "#2EA67A",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {/* Background highlight on hover */}
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[#2EA67A]/10 to-transparent rounded opacity-0 -z-10"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      {item}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-auto overflow-hidden group hover:border-[#2EA67A]/30 transition-all duration-500">
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#2EA67A]/5 via-transparent to-[#24734E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(46,166,122,0.05) 0%, transparent 50%, rgba(36,115,78,0.05) 100%)",
                  "linear-gradient(45deg, rgba(36,115,78,0.05) 0%, transparent 50%, rgba(46,166,122,0.05) 100%)",
                  "linear-gradient(45deg, rgba(46,166,122,0.05) 0%, transparent 50%, rgba(36,115,78,0.05) 100%)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.h3 
              className="text-2xl font-semibold text-white mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {"Questions About Our Rules?".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.02 }}
                  whileHover={{ 
                    y: -2,
                    color: "#2EA67A",
                    transition: { duration: 0.2 }
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h3>
            <motion.p 
              className="text-white/60 mb-6 leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              If you have any questions or need clarification on any of our rules, don't hesitate to reach out to our staff team.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="https://discord.gg/s2W9YyJSfz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:shadow-[#5865F2]/25 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(88, 101, 242, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faDiscord} className="h-5 w-5 text-white" />
                Ask in Discord
              </motion.a>
              <motion.a
                href="/#/faq"
                className="bg-[#2EA67A] hover:bg-[#24734E] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:shadow-[#2EA67A]/25 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(46, 166, 122, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-white" />
                View FAQ
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}