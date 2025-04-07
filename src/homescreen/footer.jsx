import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center">
              <img
                src="/images/Mylogo.png" // Replace with the actual path to your logo image
                alt="Bloom Logo"
                className="h-8 w-8 mr-2" // Adjust size and spacing as needed
              />
              <span className="text-white font-bold font-[Pacifico] text-xl">
                Bloom<span className="text-[#2EA67A]">RP</span>
              </span>
            </a>
            <p className="text-white/60 mb-6 max-w-md">
              BloomRP is a premium FiveM roleplay server offering an immersive GTA V experience with a welcoming
              community and custom features.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faDiscord} className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitch} className="h-5 w-5" />
                <span className="sr-only">Twitch</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/rules" className="text-white/60 hover:text-white transition-colors">
                  Server Rules
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white/60 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white/60 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>
            © {new Date().getFullYear()} BloomRP. All rights reserved. Not affiliated with Rockstar Games or Take-Two
            Interactive.
          </p>
        </div>
      </div>
    </footer>
  );
}