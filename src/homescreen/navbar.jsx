import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Rules", href: "/#/rules" },
    { name: "Gallery", href: "/#/gallery" },
    { name: "Get Started", href: "/#/faq" },
    { name: "Donate", href: "/#/donation" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
                <img
                  src="/images/Mylogo.png" // Path to logo image
                  alt="Bloom Logo"
                  className="h-8 w-8 mr-2" // Adjust size & spacing as needed
                />
              <span className="text-white font-bold font-[Pacifico] text-xl">
                Bloom<span className="text-[#2EA67A]">RP</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white p-2" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 border-b border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/70 hover:text-white py-2 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                ))}
                  <a
                    href="/#/faq"
                    className="bg-[#2EA67A] hover:bg-[#24734E] text-white w-full px-4 py-2 rounded text-center"
                    onClick={toggleMenu}
                  >
                    Join Now
                  </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}