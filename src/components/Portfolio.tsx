"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { LightboxModal } from "./LightboxModal";

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "rolling" | "static" | "detail";
}

// Production-ready initial items (Easily expandable)
const initialPortfolio: PhotoItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    alt: "Dark sports coupe parked in industrial backdrop with clean polarizer reflections",
    title: "Porsche GT3 Touring",
    category: "static",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    alt: "Automotive front headlight detail with carbon fiber weave texture",
    title: "Carbon Fiber Optics",
    category: "detail",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    alt: "Vehicle rolling shot along sunset road with wheel motion blur",
    title: "Golden Hour Run",
    category: "rolling",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    alt: "Sports car rear taillight reflection in dusk city light",
    title: "Monochrome Stance",
    category: "static",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    alt: "Classic wheel rim detail with clean circular polarizer specular highlight",
    title: "Bespoke Rim Contour",
    category: "detail",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    alt: "High performance vehicle tracked along asphalt highway curve",
    title: "Motion Perspective",
    category: "rolling",
  },
];

export const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "static" | "rolling" | "detail">("all");
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const filteredItems = filter === "all" 
    ? initialPortfolio 
    : initialPortfolio.filter((item) => item.category === filter);

  const labels = {
    cz: { all: "Vše", static: "Statické", rolling: "Rolling", detail: "Detaily", title: "Vybrané Projekty" },
    en: { all: "All", static: "Static", rolling: "Rolling", detail: "Details", title: "Selected Works" },
  };

  const l = labels[language];

  return (
    <section id="portfolio" className="py-28 bg-charcoal text-beige-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-brown-light font-semibold mb-3 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-beige-50 tracking-tight">
              {l.title}
            </h2>
          </div>

          {/* Gallery Category Filter */}
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider font-medium">
            {(["all", "static", "rolling", "detail"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ease-spring-overshoot ${
                  filter === cat
                    ? "bg-beige-100 text-charcoal border-beige-100 shadow-sm"
                    : "border-white/10 text-beige-200 hover:border-white/30"
                }`}
              >
                {l[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-green-accent/20 aspect-[4/5] transition-transform duration-500 ease-spring-overshoot hover:-translate-y-1.5"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out-smooth group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out-smooth flex items-end p-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-beige-200/80 mb-1 block">
                    {photo.category}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-white">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Lightbox Modal */}
      {activePhoto && (
        <LightboxModal
          photo={activePhoto}
          onClose={() => setActivePhoto(null)}
          onPrev={() => {
            const index = filteredItems.findIndex((p) => p.id === activePhoto.id);
            const prevIndex = (index - 1 + filteredItems.length) % filteredItems.length;
            setActivePhoto(filteredItems[prevIndex]);
          }}
          onNext={() => {
            const index = filteredItems.findIndex((p) => p.id === activePhoto.id);
            const nextIndex = (index + 1) % filteredItems.length;
            setActivePhoto(filteredItems[nextIndex]);
          }}
        />
      )}
    </section>
  );
};