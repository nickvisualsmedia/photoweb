"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-charcoal/85 border-b border-white/5 transition-all duration-300 ease-out-smooth">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="text-beige-100 font-serif tracking-wider text-xl md:text-2xl font-bold transition-transform duration-300 hover:scale-[1.02] active:scale-95 ease-spring-overshoot"
        >
          nickvisuals<span className="text-brown-light">.media</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-beige-200">
          <Link href="#portfolio" className="hover:text-white transition-colors duration-200 ease-out-smooth">
            {t.nav.portfolio}
          </Link>
          <Link href="#about" className="hover:text-white transition-colors duration-200 ease-out-smooth">
            {t.nav.about}
          </Link>
          <Link href="#whyme" className="hover:text-white transition-colors duration-200 ease-out-smooth">
            {t.nav.whyMe}
          </Link>
          <Link href="#services" className="hover:text-white transition-colors duration-200 ease-out-smooth">
            {t.nav.services}
          </Link>
          <Link 
            href="#booking" 
            className="px-5 py-2.5 bg-green-accent border border-green-light text-beige-50 rounded-full hover:bg-brown-primary transition-all duration-300 hover:scale-[1.03] active:scale-95 ease-spring-overshoot shadow-sm"
          >
            {t.nav.booking}
          </Link>
        </nav>

        {/* Socials & Language Switcher */}
        <div className="hidden md:flex items-center space-x-5">
          <a
            href="https://instagram.com/nickvisuals.media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="text-beige-200 hover:text-white transition-transform duration-300 hover:scale-110 active:scale-90 ease-spring-overshoot"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://tiktok.com/@nick.mp4x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok profile"
            className="text-beige-200 hover:text-white transition-transform duration-300 hover:scale-110 active:scale-90 ease-spring-overshoot"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>

          {/* Lang Switcher Button */}
          <div className="flex border border-white/10 rounded-full p-1 bg-white/5 text-xs font-semibold">
            <button
              onClick={() => setLanguage("cz")}
              className={`px-2.5 py-1 rounded-full transition-all duration-300 ease-spring-overshoot ${
                language === "cz" ? "bg-white/20 text-white shadow" : "text-beige-200 hover:text-white"
              }`}
            >
              CZ
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all duration-300 ease-spring-overshoot ${
                language === "en" ? "bg-white/20 text-white shadow" : "text-beige-200 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-3 md:hidden">
          <div className="flex border border-white/10 rounded-full p-0.5 bg-white/5 text-xs">
            <button
              onClick={() => setLanguage("cz")}
              className={`px-2 py-0.5 rounded-full ${language === "cz" ? "bg-white/20 text-white" : "text-beige-200"}`}
            >
              CZ
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full ${language === "en" ? "bg-white/20 text-white" : "text-beige-200"}`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-beige-100 p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal/95 border-b border-white/10 px-6 py-8 flex flex-col space-y-6 text-center animate-in fade-in ease-out-smooth duration-200">
          <Link
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-beige-100 uppercase tracking-widest text-lg"
          >
            {t.nav.portfolio}
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-beige-100 uppercase tracking-widest text-lg"
          >
            {t.nav.about}
          </Link>
          <Link
            href="#whyme"
            onClick={() => setMobileMenuOpen(false)}
            className="text-beige-100 uppercase tracking-widest text-lg"
          >
            {t.nav.whyMe}
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-beige-100 uppercase tracking-widest text-lg"
          >
            {t.nav.services}
          </Link>
          <Link
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="mx-auto px-8 py-3 bg-green-accent text-white rounded-full uppercase tracking-wider font-semibold text-sm"
          >
            {t.nav.booking}
          </Link>
          <div className="flex justify-center space-x-6 pt-4 border-t border-white/10">
            <a
              href="https://instagram.com/nickvisuals.media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-beige-200 hover:text-white"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://tiktok.com/@nick.mp4x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-beige-200 hover:text-white flex items-center"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};