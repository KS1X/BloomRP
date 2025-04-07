import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";


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
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 tracking-tight">
          Getting Started Guides
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-sm transition hover:border-[#2EA67A]/50"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={topic.media}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {topic.title}
                </h2>
                <p className="text-sm text-white/70 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Help Callout */}
        <div className="text-center mt-20">
          <p className="text-white/60 mb-4 text-lg">
            Still have questions? Join the Discord or type <code className="bg-white/10 px-2 py-1 rounded">/help</code> in-game.
          </p>
          <a
            href="https://discord.gg/s2W9YyJSfz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-full text-sm font-medium transition shadow-md hover:shadow-lg gap-2"
          >
            <FontAwesomeIcon icon={faDiscord} className="h-5 w-5" />
            Join the Discord
          </a>
        </div>
      </div>
    </section>
  );
}
