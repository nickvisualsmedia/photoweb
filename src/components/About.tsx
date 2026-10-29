"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Camera, Eye } from "lucide-react";

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 bg-beige-50 text-charcoal px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl bg-beige-200">
              <div className="absolute inset-0 bg-green-primary/10 mix-blend-multiply" />
              <img
                src="/images/PhotoOfMe.jpg"
                alt="Nick automotive visual creator working on vehicle lines"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Minimalist Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-charcoal text-beige-100 p-6 rounded-lg shadow-xl max-w-xs hidden sm:block border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <Camera size={20} className="text-brown-light" />
                <span className="text-xs uppercase tracking-wider font-semibold">Equipment</span>
              </div>
              <p className="text-xs text-beige-200/90 leading-relaxed">
                iPhone 12 Pro s CPL filtrem či Canon EOS R8 s 24-50mm objektivem a polarizerem pro top fotky.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-brown-primary font-semibold mb-3 block">
              {t.about.sectionTag}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-charcoal mb-8">
              {t.about.title}
            </h2>

            <div className="space-y-6 text-charcoal/85 text-base sm:text-lg leading-relaxed font-normal">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            {/* Gear Authenticity Callout Box */}
            <div className="mt-10 p-6 bg-beige-100 border-l-2 border-brown-primary rounded-r-lg">
              <div className="flex items-center gap-2 mb-2 text-brown-primary font-serif font-bold text-base">
                <Eye size={18} />
                <h3>{t.about.gearTitle}</h3>
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed font-light">
                {t.about.gearDesc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};