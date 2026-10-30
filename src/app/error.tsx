"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Zalokování chyby do konzole pro tvou kontrolu
    console.error("Zachycená chyba aplikace:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-charcoal text-beige-100 flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full p-8 sm:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center shadow-2xl space-y-6">
        
        <div className="w-16 h-16 rounded-full bg-red-950/50 border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
          <AlertTriangle size={32} />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-brown-light font-semibold mb-2 block">
            Neočekávaná chyba
          </span>
          <h1 className="text-3xl font-serif font-bold text-beige-50 mb-3">
            Něco se pokazilo
          </h1>
          <p className="text-beige-200/80 text-sm font-light leading-relaxed">
            Omlouváme se, na serveru nebo při načítání došlo k chybě. Zkuste prosím akci opakovat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-beige-100 text-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-lg"
          >
            <RefreshCw size={14} />
            Zkusit znovu
          </button>

          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-beige-100 font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
          >
            <Home size={14} />
            Hlavní stránka
          </Link>
        </div>

      </div>
    </div>
  );
}