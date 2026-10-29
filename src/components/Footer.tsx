"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal border-t border-white/5 py-12 px-6 text-beige-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div>
          <span className="font-serif font-bold text-sm text-beige-50">nickvisuals.media</span>
          <p className="mt-1 text-beige-200/60 font-light">{t.footer.tagline}</p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://instagram.com/nickvisuals.media"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Instagram size={16} />
            <span>@nickvisuals.media</span>
          </a>
          <a
            href="https://tiktok.com/@nick.mp4x"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 hover:text-white transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <span>@nick.mp4x</span>
          </a>
        </div>

        <p className="text-beige-200/40">
          &copy; {new Date().getFullYear()} Nick Visuals Media. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};