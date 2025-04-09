import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <a href="/" className="flex items-center justify-center md:justify-start">
              <img
                src="/images/Mylogo.png" // Replace with the actual path to your logo image
                alt="Bloom Logo"
                className="h-10 w-10 mr-2"
              />
              <span className="text-white font-bold font-[Pacifico] text-2xl">
                Bloom<span className="text-[#2EA67A]">RP</span>
              </span>
            </a>
            <p className="text-white/60 mt-4 max-w-md">
              BloomRP is a premium FiveM RP server offering an immersive GTA V experience.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faDiscord} className="h-6 w-6" />
              <span className="sr-only">Discord</span>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faTwitch} className="h-6 w-6" />
              <span className="sr-only">Twitch</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-white/40 text-sm">
          <p>
            © {new Date().getFullYear()} BloomRP. All rights reserved. Not affiliated with Rockstar Games or Take-Two
            Interactive.
          </p>
        </div>
      </div>
    </footer>
  );
}