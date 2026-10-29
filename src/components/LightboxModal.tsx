"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { PhotoItem } from "./Portfolio";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  photo: PhotoItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxProps> = ({ photo, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 ease-out-smooth"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-beige-100 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-transform duration-300 hover:scale-110 active:scale-90 ease-spring-overshoot"
        aria-label="Close full-screen image view"
      >
        <X size={26} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 text-beige-100 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-transform duration-300 hover:scale-110 active:scale-90 ease-spring-overshoot"
        aria-label="Previous photograph"
      >
        <ChevronLeft size={28} />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[75vh]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="text-center mt-4">
          <p className="text-base font-serif text-white">{photo.title}</p>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 text-beige-100 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-transform duration-300 hover:scale-110 active:scale-90 ease-spring-overshoot"
        aria-label="Next photograph"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};