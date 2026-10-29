"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check, MapPin } from "lucide-react";

interface PricingProps {
  onSelectPackage: (pkgId: "BASIC" | "STANDARD" | "PREMIUM") => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  const { t } = useLanguage();

  const handleBookClick = (pkgId: "BASIC" | "STANDARD" | "PREMIUM") => {
    onSelectPackage(pkgId);
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-28 bg-beige-100 text-charcoal px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brown-primary font-semibold mb-3 block">
            {t.pricing.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-charcoal mb-6">
            {t.pricing.title}
          </h2>

          {/* Travel Information Highlight */}
          <div className="inline-flex items-center gap-2 bg-beige-50 px-5 py-2.5 rounded-full border border-brown-primary/20 text-xs sm:text-sm font-medium text-brown-primary shadow-sm">
            <MapPin size={16} />
            <span>{t.pricing.travelNote}</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {t.pricing.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ease-spring-overshoot hover:-translate-y-2 ${
                pkg.popular
                  ? "bg-charcoal text-beige-50 shadow-2xl ring-2 ring-brown-light"
                  : "bg-beige-50 text-charcoal border border-charcoal/10 shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brown-primary text-white text-[11px] uppercase tracking-widest px-4 py-1 rounded-full font-bold">
                  Recommended
                </div>
              )}

              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight font-serif">
                    {pkg.price}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wider text-charcoal/60 dark:text-beige-200/60">
                    {t.pricing.currency}
                  </span>
                </div>

                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-brown-primary flex-shrink-0 mt-0.5" />
                    <span>{pkg.photos}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-brown-primary flex-shrink-0 mt-0.5" />
                    <span>{pkg.locationsCount}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-brown-primary flex-shrink-0 mt-0.5" />
                    <span>{pkg.time}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-brown-primary flex-shrink-0 mt-0.5" />
                    <span>{pkg.deliveryDays}</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleBookClick(pkg.id)}
                className={`w-full py-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-95 ease-spring-overshoot ${
                  pkg.popular
                    ? "bg-beige-100 text-charcoal hover:bg-white shadow"
                    : "bg-charcoal text-beige-50 hover:bg-green-primary shadow"
                }`}
              >
                {t.pricing.bookBtn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};