import React from "react";

export default function ServerRulesPage() {
  const rules = [
    {
      category: "General Rules",
      items: [
        "You must have a quality, working microphone.",
        "This server is only available to users who are at least 18 years old.",
        "Understand the rules and guidelines as listed within this document.",
        "Understand and speak fluent English.",
      ],
    },
    {
      category: "Character Requirements",
      items: [
        "All player characters must be the age 18 years or older. “RPing” as a minor is not allowed.",
        "The character must have a realistic name, names obtaining special characters or foul language are not permitted.",
        "Characters are allowed to have one “whitelisted” job at a time, meaning one character cannot share two jobs (e.g., Police and EMS).",
        "All players must stay in character at all times. If an issue happens with a player, roleplay it out, then find a proper report channel.",
      ],
    },
    {
      category: "Community Rules",
      items: [
        "OOC toxicity towards other members of the community is not tolerated in any BloomRP-related server.",
        "Derogatory remarks regarding race, gender, sexual orientation, or age are strictly prohibited.",
        "You must stay in character at all times while in the city. If an issue happens with a player, roleplay it out to the best of your ability and report formally.",
        "The use of /OOC chat in the server must only be used for technical problems that need to be communicated to other players.",
      ],
    },
    {
      category: "Distinct Rules and Definitions",
      items: [
        "Metagaming: Using or relaying information your character did not obtain through roleplay.",
        "Powergaming: Using any game mechanic to your advantage in an unrealistic manner.",
        "Fail RP: Performing game mechanics, actions, or communication with others in an unrealistic manner.",
        "RDM & VDM: Attacking other roleplayers without prior communication or with a real reason.",
        "NVL (Not Valuing Life): Acting in a way that shows you do not value your own life or the life of others.",
      ],
    },
    {
      category: "Server Distinct Rules",
      items: [
        "In the event you are “Finished” or “Put-Down,” you may remember the events leading up to the encounter.",
        "Crime groups are limited to 4 players, including all player involvement, lookouts, getaway drivers, etc.",
        "Players may scam other players at a maximum amount of $100,000.",
        "Cop baiting is not allowed.",
        "The use of third-party voice communications such as Teamspeak or Discord is not allowed.",
      ],
    },
    {
      category: "Disclaimers",
      items: [
        "BloomRP is not responsible for any member’s live streams, content, or language.",
        "BloomRP staff are not responsible to provide 24/7 support, as all staff are volunteers.",
        "All donations are non-refundable and do not guarantee in-game items, permissions, immunity from server violations or bans, and perks.",
        "The use of the Service constitutes acceptance of these terms.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Updated Title Section */}
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2EA67A]/[0.05] via-transparent to-[#24734E]/[0.05] blur-3xl -z-10" />
          <h1 className="text-4xl sm:text-8xl font-bold mb-4 tracking-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Rules and Guidelines</span>
          </h1>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
            Please read our server rules and guidelines carefully. Abiding by these rules ensures a great experience for everyone.
          </p>
        </div>

        {/* Rules Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-lg border border-white/10 p-6 hover:border-[#2EA67A] transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-4">{rule.category}</h3>
              <ul className="list-disc list-inside space-y-2">
                {rule.items.map((item, idx) => (
                  <li key={idx} className="text-white/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}