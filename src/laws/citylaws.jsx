import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGavel, 
  faScaleBalanced, 
  faHandcuffs, 
  faSearch,
  faBook,
  faExclamationTriangle,
  faChevronDown,
  faChevronRight,
  faShield,
  faPills,
  faCar
} from "@fortawesome/free-solid-svg-icons";

// Particle background component
function LawParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(46,166,122,0.03)_0%,transparent_70%)]" />
      
      {Array.from({ length: 25 }).map((_, i) => {
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.06 + 0.02;
        const animationDuration = Math.random() * 25 + 20;
        const delay = Math.random() * 8;

        return (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-[#2EA67A] to-[#24734E] rounded-full blur-[0.5px]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: opacity,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 60 - 30, 0],
              scale: [1, 1.3, 1],
              opacity: [opacity, opacity * 2, opacity],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

export default function CityLaws() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSections, setExpandedSections] = useState({});

  // State of San Andreas Penal Code
  const lawCategories = [
    {
      id: "felony-murder",
      title: "Felony Charges - Murder",
      icon: faHandcuffs,
      description: "First and second degree murder, manslaughter, and related violent felonies",
      laws: [
        {
          code: "(1)01",
          offense: "First Degree Murder",
          description: "The unlawful killing of a human being with malice aforethought",
          fine: "$10,000",
          jailTime: "30 min",
          severity: "felony"
        },
        {
          code: "(1)02",
          offense: "Second Degree Murder",
          description: "The unlawful killing of a human being with malice aforethought but without premeditation",
          fine: "$7,500",
          jailTime: "25 min",
          severity: "felony"
        },
        {
          code: "(1)03",
          offense: "Voluntary Manslaughter",
          description: "The unlawful killing of a human being without malice aforethought in the heat of passion",
          fine: "$5,000",
          jailTime: "20 min",
          severity: "felony"
        },
        {
          code: "(1)04",
          offense: "Involuntary Manslaughter",
          description: "The unlawful killing of a human being without malice aforethought due to negligence",
          fine: "$3,500",
          jailTime: "15 min",
          severity: "felony"
        },
        {
          code: "(1)05",
          offense: "Vehicular Manslaughter",
          description: "The unlawful killing of a human being through the operation of a motor vehicle",
          fine: "$2,500",
          jailTime: "10 min",
          severity: "felony"
        }
      ]
    },
    {
      id: "felony-violent",
      title: "Felony Charges - Violent Crimes",
      icon: faHandcuffs,
      description: "Attempted murder, assault, kidnapping, and other violent felonies",
      laws: [
        {
          code: "(2)01",
          offense: "Attempted Murder",
          description: "The attempted killing of a human being with malice aforethought",
          fine: "$6,500",
          jailTime: "25 min",
          severity: "felony"
        },
        {
          code: "(2)02",
          offense: "Aggravated Assault with a Deadly Weapon",
          description: "An assault committed with a deadly weapon or instrument likely to produce great bodily injury",
          fine: "$4,500",
          jailTime: "15 min",
          severity: "felony"
        },
        {
          code: "(2)03",
          offense: "Kidnapping",
          description: "The unlawful movement and restraint of another person against their will",
          fine: "$7,500",
          jailTime: "25 min",
          severity: "felony"
        },
        {
          code: "(2)04",
          offense: "Sexual Assault",
          description: "Non-consensual sexual contact or penetration accomplished through force, threat, or incapacitation",
          fine: "$50,000",
          jailTime: "60 min",
          severity: "felony"
        },
        {
          code: "(2)05",
          offense: "Torture",
          description: "The intentional infliction of extreme physical pain for the purpose of revenge, extortion, persuasion or sadistic purpose",
          fine: "$25,000",
          jailTime: "45 min",
          severity: "felony"
        },
        {
          code: "(2)06",
          offense: "Aggravated Battery",
          description: "Unlawful touching resulting in serious bodily injury or permanent disfigurement",
          fine: "$4,500",
          jailTime: "15 min",
          severity: "felony"
        }
      ]
    },
    {
      id: "weapons",
      title: "Weapons & Explosives",
      icon: faShield,
      description: "Manufacturing, possession, and distribution of illegal firearms and explosives",
      laws: [
        {
          code: "(3)01",
          offense: "Manufacturing Illegal Firearms",
          description: "The manufacture, assembly, or production of illegal firearms or weapon modifications",
          fine: "$35,000",
          jailTime: "45 min",
          severity: "felony"
        },
        {
          code: "(3)02",
          offense: "Sale/Distribution of Illegal Firearms",
          description: "The sale, transfer, or distribution of illegal firearms to unauthorized persons",
          fine: "$25,000",
          jailTime: "40 min",
          severity: "felony"
        },
        {
          code: "(3)03",
          offense: "Possession of Explosive Device",
          description: "Possession of explosive devices including but not limited to grenades, bombs, or incendiary devices",
          fine: "$15,000",
          jailTime: "30 min",
          severity: "felony"
        },
        {
          code: "(3)04",
          offense: "Possession of Illegal Firearms",
          description: "Possession of firearms prohibited by law including automatic weapons, sawed-off shotguns, and unregistered firearms",
          fine: "$7,500",
          jailTime: "20 min",
          severity: "felony"
        },
        {
          code: "(3)05",
          offense: "Assault with an Explosive Device",
          description: "The use or threatened use of explosive devices against another person",
          fine: "$45,000",
          jailTime: "55 min",
          severity: "felony"
        }
      ]
    },
    {
      id: "narcotics",
      title: "Narcotics & Controlled Substances",
      icon: faPills,
      description: "Drug possession, distribution, manufacturing, and related offenses",
      laws: [
        {
          code: "(4)01",
          offense: "Possession with Intent to Distribute (Class 1)",
          description: "Possession of Class 1 controlled substances (marijuana) with intent to distribute",
          fine: "$8,500",
          jailTime: "20 min",
          severity: "felony"
        },
        {
          code: "(4)02",
          offense: "Possession with Intent to Distribute (Class 2)",
          description: "Possession of Class 2 controlled substances (hard drugs) with intent to distribute",
          fine: "$25,000",
          jailTime: "40 min",
          severity: "felony"
        },
        {
          code: "(4)03",
          offense: "Maintaining a Place for Drug Sales",
          description: "Operating or maintaining a location for the purpose of drug distribution",
          fine: "$35,000",
          jailTime: "45 min",
          severity: "felony"
        },
        {
          code: "(4)04",
          offense: "Possession of Unprocessed Narcotics",
          description: "Possession of raw or unprocessed narcotic materials",
          fine: "$15,000",
          jailTime: "25 min",
          severity: "felony"
        },
        {
          code: "(4)05",
          offense: "Manufacturing Controlled Substances",
          description: "The production, creation, or synthesis of controlled substances",
          fine: "$50,000",
          jailTime: "55 min",
          severity: "felony"
        },
        {
          code: "(8)01",
          offense: "Drug Paraphernalia",
          description: "Willingly possessing a device used exclusively for processing, distribution, or consumption of illegal controlled substances",
          fine: "$1,500",
          jailTime: "15 min",
          severity: "misdemeanor"
        },
        {
          code: "(8)02",
          offense: "Possession of Controlled Substance (1 bag or less)",
          description: "Possession of highly controlled substances (Cocaine, Crystal Meth, Heroin, etc.)",
          fine: "$1,000",
          jailTime: "5 min",
          severity: "misdemeanor"
        }
      ]
    },
    {
      id: "corruption",
      title: "Corruption & RICO",
      icon: faGavel,
      description: "Bribery, extortion, money laundering, and racketeering offenses",
      laws: [
        {
          code: "(5)01",
          offense: "Bribery",
          description: "Offering, giving, receiving, or soliciting something of value to influence official action",
          fine: "$15,000",
          jailTime: "30 min",
          severity: "felony"
        },
        {
          code: "(5)02",
          offense: "Extortion",
          description: "Using threats or authority to compel action by another with malice aforethought",
          fine: "$10,000",
          jailTime: "30 min",
          severity: "felony"
        },
        {
          code: "(5)03",
          offense: "Money Laundering",
          description: "Concealment of the origins of illegally obtained money through transfers or legitimate businesses",
          fine: "$60,000",
          jailTime: "50 min",
          severity: "felony"
        },
        {
          code: "(5)04",
          offense: "Racketeering / RICO",
          description: "Extended criminal penalties for acts performed as part of an ongoing criminal organization",
          fine: "$10,000,000",
          jailTime: "MAX",
          severity: "felony"
        }
      ]
    },
    {
      id: "vehicular",
      title: "Vehicular Related Crimes",
      icon: faCar,
      description: "Vehicle theft, carjacking, DUI, evasion, and other vehicle-related offenses",
      laws: [
        {
          code: "(6)01",
          offense: "Vehicle Theft",
          description: "Operating a motor vehicle without consent of the registered owner with intent to permanently deprive",
          fine: "$4,500",
          jailTime: "15 min",
          severity: "felony"
        },
        {
          code: "(6)02",
          offense: "Armed Carjacking",
          description: "The theft of an automobile from its driver by force or intimidation with a deadly weapon",
          fine: "$5,500",
          jailTime: "15 min",
          severity: "felony"
        },
        {
          code: "(6)03",
          offense: "Strong-Armed Carjacking",
          description: "The theft of an automobile from its driver by force or intimidation without a deadly weapon",
          fine: "$2,500",
          jailTime: "10 min",
          severity: "felony"
        },
        {
          code: "(6)05",
          offense: "Felony Driving Under the Influence",
          description: "Operating a motor vehicle under the influence causing bodily harm to another",
          fine: "$1,700",
          jailTime: "5 min",
          severity: "felony"
        },
        {
          code: "(6)06",
          offense: "Felony Evasion",
          description: "Intentionally fleeing from a law enforcement officer attempting arrest or detention",
          fine: "$3,500",
          jailTime: "10 min",
          severity: "felony"
        },
        {
          code: "(6)07",
          offense: "Hijacking",
          description: "Taking control of an aircraft with force",
          fine: "$250,000",
          jailTime: "100 min",
          severity: "felony"
        },
        {
          code: "(9)01",
          offense: "Driving Under the Influence",
          description: "Operating a motor vehicle while under the influence of alcohol (BAC > 0.08) or drugs",
          fine: "$5,000",
          jailTime: "20 min",
          severity: "misdemeanor"
        },
        {
          code: "(9)02",
          offense: "Hit and Run",
          description: "Causing or contributing to a traffic accident and failing to stop and identify oneself",
          fine: "$3,500",
          jailTime: "10 min",
          severity: "misdemeanor"
        }
      ]
    },
    {
      id: "misc-felony",
      title: "Miscellaneous Felonies",
      icon: faExclamationTriangle,
      description: "Theft, burglary, escaping custody, fraud, and other felony offenses",
      laws: [
        {
          code: "(7)01",
          offense: "Grand Theft",
          description: "Stealing personal property worth more than $950 or a firearm of any value",
          fine: "$2,000",
          jailTime: "20 min",
          severity: "felony"
        },
        {
          code: "(7)02",
          offense: "Burglary",
          description: "Entering locked or restricted property without permission with intention of committing a crime",
          fine: "$4,500",
          jailTime: "25 min",
          severity: "felony"
        },
        {
          code: "(7)03",
          offense: "Escaping Custody",
          description: "Escaping or attempting to escape from police custody after being detained or arrested",
          fine: "$10,000",
          jailTime: "25 min",
          severity: "felony"
        },
        {
          code: "(7)05",
          offense: "Aiding & Abetting / Accessory",
          description: "Assisting, planning, or aiding another with criminal activity",
          fine: "$5,500",
          jailTime: "20 min",
          severity: "felony"
        },
        {
          code: "(7)07",
          offense: "Forgery / Fraud",
          description: "Knowingly altering, creating, or using a written document with intent to defraud or deceive",
          fine: "$60,000",
          jailTime: "50 min",
          severity: "felony"
        },
        {
          code: "(07)08",
          offense: "Prisoner Breakout",
          description: "Act of aiding the escape of an inmate leaving prison through unofficial or illegal ways",
          fine: "$200,000",
          jailTime: "60 min",
          severity: "felony"
        }
      ]
    },
    {
      id: "misdemeanor",
      title: "Misdemeanor Charges",
      icon: faExclamationTriangle,
      description: "Assault, battery, public disturbance, and other misdemeanor offenses",
      laws: [
        {
          code: "(10)05",
          offense: "Assault",
          description: "Intentionally putting another in reasonable belief of imminent physical harm or offensive contact",
          fine: "$3,000",
          jailTime: "10 min",
          severity: "misdemeanor"
        },
        {
          code: "(10)06",
          offense: "Battery",
          description: "Using intentional and unlawful force or violence to cause physical harm to another person",
          fine: "$2,500",
          jailTime: "5 min",
          severity: "misdemeanor"
        },
        {
          code: "(10)07",
          offense: "Resisting Arrest",
          description: "Avoiding apprehension from an officer by non-vehicular means or resisting apprehension by physical means",
          fine: "$3,500",
          jailTime: "15 min",
          severity: "misdemeanor"
        },
        {
          code: "(10)08",
          offense: "Obstruction of Justice",
          description: "Unlawfully hindering the discovery, apprehension, conviction, or punishment of anyone who has committed a crime",
          fine: "$3,500",
          jailTime: "10 min",
          severity: "misdemeanor"
        },
        {
          code: "(10)09",
          offense: "Disturbing the Peace",
          description: "Unlawfully fighting in public, making loud unreasonable noise, or using offensive words likely to provoke violence",
          fine: "$750",
          jailTime: "10 min",
          severity: "misdemeanor"
        },
        {
          code: "(10)11",
          offense: "Reckless Endangerment",
          description: "Acts that create a substantial risk of serious physical injury to another person",
          fine: "$4,500",
          jailTime: "20 min",
          severity: "misdemeanor"
        },
        {
          code: "(10)12",
          offense: "Criminal Threats",
          description: "Communicating to another that they will physically harm or kill such other, placing them in reasonable state of fear",
          fine: "$2,500",
          jailTime: "10 min",
          severity: "misdemeanor"
        },
        {
          code: "(10)34",
          offense: "Theft",
          description: "Stealing or taking the personal property of another worth $950 or less",
          fine: "$3,500",
          jailTime: "15 min",
          severity: "misdemeanor"
        }
      ]
    },
    {
      id: "traffic",
      title: "Traffic & Moving Violations",
      icon: faCar,
      description: "Speeding, reckless driving, and other traffic-related violations",
      laws: [
        {
          code: "(11)02",
          offense: "Reckless Driving",
          description: "Careless driving, improper driving, or driving without due care and attention",
          fine: "$1,500",
          jailTime: "1 min",
          severity: "misdemeanor"
        },
        {
          code: "(11)13",
          offense: "Speeding (5-15 MPH over)",
          description: "Operation of a vehicle between 5-15 MPH above the speed limit",
          fine: "$250",
          jailTime: "0 min",
          severity: "infraction"
        },
        {
          code: "(11)14",
          offense: "Speeding (15-30 MPH over)",
          description: "Operation of a vehicle between 15-30 MPH above the speed limit",
          fine: "$700",
          jailTime: "0 min",
          severity: "infraction"
        },
        {
          code: "(11)15",
          offense: "Speeding (30+ MPH over)",
          description: "Operation of a vehicle 30 MPH or above the speed limit",
          fine: "$1,700",
          jailTime: "0 min",
          severity: "infraction"
        },
        {
          code: "(11)19",
          offense: "Felony Speeding",
          description: "Speeding in excess of 150 mph throughout the state. Driver's License may be subject to removal",
          fine: "$4,500",
          jailTime: "5 min",
          severity: "felony"
        },
        {
          code: "(11)01",
          offense: "Failure to Stop",
          description: "Failure to come to a complete stop at a posted Stop Sign or steady beam red light",
          fine: "$450",
          jailTime: "0 min",
          severity: "infraction"
        },
        {
          code: "(11)10",
          offense: "Wrong-Way Driving",
          description: "Driving a motor vehicle against the direction of traffic",
          fine: "$1,000",
          jailTime: "0 min",
          severity: "infraction"
        },
        {
          code: "(13)01",
          offense: "Jaywalking",
          description: "Failure to use a crosswalk when crossing the street within the city",
          fine: "$200",
          jailTime: "0 min",
          severity: "infraction"
        }
      ]
    },
    {
      id: "case-law",
      title: "Recognized Case Law",
      icon: faScaleBalanced,
      description: "Established legal precedents that guide law enforcement procedures and judicial decisions",
      laws: [
        {
          code: "1",
          offense: "Tennessee v. Garner",
          description: "States that an officer may NOT utilize deadly force on a fleeing suspect unless they pose an immediate threat of serious injury or death to the officer or those around them.",
          fine: "N/A",
          jailTime: "N/A",
          severity: "precedent"
        },
        {
          code: "2",
          offense: "Pennsylvania v. Mimms",
          description: "States that on a traffic stop, officers have the ability to order the driver out of the vehicle.",
          fine: "N/A",
          jailTime: "N/A",
          severity: "precedent"
        },
        {
          code: "3",
          offense: "Maryland v. Wilson",
          description: "States that on a traffic stop, officers have the ability to order passengers out of the vehicle.",
          fine: "N/A",
          jailTime: "N/A",
          severity: "precedent"
        },
        {
          code: "4",
          offense: "Brendlin v. California",
          description: "States that on a traffic stop an officer has the right to keep the passengers in the vehicle, as they are being stopped or seized along with the vehicle.",
          fine: "N/A",
          jailTime: "N/A",
          severity: "precedent"
        },
        {
          code: "5",
          offense: "Whren v. U.S.",
          description: "States any traffic violation committed by a driver is legal grounds for a traffic stop.",
          fine: "N/A",
          jailTime: "N/A",
          severity: "precedent"
        },
        {
          code: "6",
          offense: "Illinois v. Wardlow",
          description: "States that if an individual flees from an identifiable police officer in a high crime area, then a Terry Stop may be conducted.",
          fine: "N/A",
          jailTime: "N/A",
          severity: "precedent"
        },
        {
          code: "7",
          offense: "Chimel v. California",
          description: "States that if an officer arrests an individual they may perform a warrantless search of the person, and the area immediately surrounding said person (Vehicle they were in, bench they were on, etc.).",
          fine: "N/A",
          jailTime: "N/A",
          severity: "precedent"
        }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "infraction": return "text-yellow-400 bg-yellow-400/10";
      case "misdemeanor": return "text-orange-400 bg-orange-400/10";
      case "felony": return "text-red-400 bg-red-400/10";
      case "precedent": return "text-blue-400 bg-blue-400/10";
      default: return "text-gray-400 bg-gray-400/10";
    }
  };

  const filteredCategories = lawCategories.map(category => ({
    ...category,
    laws: category.laws.filter(law => 
      law.offense.toLowerCase().includes(searchTerm.toLowerCase()) ||
      law.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      law.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => 
    category.laws.length > 0 || 
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    searchTerm === ""
  );

  return (
    <>
      {/* Header Section */}
      <header className="relative text-center py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
        <LawParticles />
        
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/[0.08] via-transparent to-[#24734E]/[0.08] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#030303]/60" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                className="relative"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#2EA67A]/20 to-[#24734E]/20 rounded-full flex items-center justify-center border border-[#2EA67A]/30">
                  <FontAwesomeIcon icon={faGavel} className="h-10 w-10 text-[#2EA67A]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/30 to-transparent rounded-full blur-lg" />
              </motion.div>
            </div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/85 leading-tight">
                City of Los Santos
              </span>
              <span className="block text-[#2EA67A] leading-tight mt-2">
                Penal Code
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Official laws and regulations governing the City of Los Santos. 
              All citizens and visitors are expected to comply with these statutes.
            </motion.p>

            {/* Important Notice */}
            <motion.div
              className="mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faExclamationTriangle} className="h-5 w-5 text-orange-400" />
                <h3 className="text-lg font-semibold text-white">Important Notice</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Ignorance of the law is not a valid defense. All players are responsible for 
                knowing and following these laws while in the city.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Laws Content Section */}
      <section className="relative bg-[#0a0a0a] py-0 px-4 overflow-hidden">
        <LawParticles />
        
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/[0.03] via-transparent to-[#24734E]/[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />

        <div className="relative py-20 sm:py-24">
          <div className="max-w-6xl mx-auto relative z-10">
            
            {/* Search Bar */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative max-w-md mx-auto">
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" 
                />
                <input
                  type="text"
                  placeholder="Search laws by code, offense, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#2EA67A]/50 focus:bg-white/[0.08] transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Law Categories */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleSection(category.id)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-white/[0.05] transition-colors duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2EA67A]/20 to-[#24734E]/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <FontAwesomeIcon icon={category.icon} className="h-6 w-6 text-[#2EA67A]" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-2xl font-semibold text-white group-hover:text-[#2EA67A] transition-colors duration-300">
                          {category.title}
                        </h2>
                        <p className="text-white/60 mt-1">{category.description}</p>
                      </div>
                    </div>
                    <FontAwesomeIcon 
                      icon={expandedSections[category.id] ? faChevronDown : faChevronRight}
                      className="h-5 w-5 text-white/60 group-hover:text-white transition-all duration-300"
                    />
                  </button>

                  {/* Laws List */}
                  {expandedSections[category.id] && (
                    <motion.div
                      className="border-t border-white/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 space-y-4">
                        {category.laws.map((law, lawIndex) => (
                          <motion.div
                            key={law.code}
                            className="bg-white/[0.03] border border-white/5 rounded-xl p-6 hover:border-[#2EA67A]/20 hover:bg-white/[0.05] transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: lawIndex * 0.05 }}
                          >
                            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-[#2EA67A] font-mono font-bold text-lg">
                                    {law.code}
                                  </span>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getSeverityColor(law.severity)}`}>
                                    {law.severity}
                                  </span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                  {law.offense}
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                  {law.description}
                                </p>
                              </div>
                              <div className="lg:text-right space-y-2 min-w-0 lg:min-w-[200px]">
                                <div>
                                  <span className="text-white/60 text-sm block">Fine</span>
                                  <span className="text-white font-semibold">{law.fine}</span>
                                </div>
                                <div>
                                  <span className="text-white/60 text-sm block">Jail Time</span>
                                  <span className="text-white font-semibold">{law.jailTime}</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Footer Notice */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#2EA67A]/10 to-[#24734E]/10 border border-[#2EA67A]/20 rounded-xl p-8 max-w-3xl mx-auto">
                <FontAwesomeIcon icon={faScaleBalanced} className="h-8 w-8 text-[#2EA67A] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Questions about the Law?</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  If you have questions about any laws or need legal assistance, contact the Los Santos Police Department 
                  or consult with a licensed attorney in the city.
                </p>
                <p className="text-white/50 text-sm">
                  This penal code is subject to updates and changes. Always refer to the most current version.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
