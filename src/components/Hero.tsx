"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDownRight } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal overflow-hidden px-6 pt-12 pb-24">
      {/* Editorial Background Aesthetics */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-light via-charcoal to-charcoal" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brown-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium tracking-widest uppercase text-beige-200 bg-white/5 mb-8">
          {t.hero.badge}
        </span>

        {/* Mandatory exactly ONE <h1> Tag per page */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-beige-50 font-bold tracking-tight leading-[1.08] mb-8">
          {t.hero.headline}
        </h1>

        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-beige-200/80 leading-relaxed font-light mb-12">
          {t.hero.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link
            href="#booking"
            className="w-full sm:w-auto px-9 py-4 bg-beige-100 text-charcoal font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.04] active:scale-95 ease-spring-overshoot shadow-lg text-sm tracking-wide text-center"
          >
            {t.hero.ctaPrimary}
          </Link>
          <Link
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-beige-100 rounded-full hover:bg-white/5 transition-all duration-300 hover:scale-[1.04] active:scale-95 ease-spring-overshoot text-sm tracking-wide flex items-center justify-center gap-2"
          >
            {t.hero.ctaSecondary}
            <ArrowDownRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};