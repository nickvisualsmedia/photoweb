"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Zap, Compass, HeartHandshake } from "lucide-react";

const icons = [ShieldCheck, Zap, Compass, HeartHandshake];

export const WhyChooseMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="whyme" className="py-28 bg-green-accent text-beige-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-brown-light font-semibold mb-3 block">
            {t.whyMe.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-beige-50 tracking-tight">
            {t.whyMe.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {t.whyMe.items.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={index}
                className="p-8 rounded-lg bg-green-primary/40 border border-white/5 hover:border-white/15 transition-all duration-300 ease-spring-overshoot hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-beige-100 mb-6">
                  <IconComponent size={22} className="text-brown-light" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-beige-200/80 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};