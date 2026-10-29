"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { format, addDays } from "date-fns";
import { Calendar as CalendarIcon, CheckCircle2, AlertCircle } from "lucide-react";

interface BookingFormProps {
  selectedPackage: "BASIC" | "STANDARD" | "PREMIUM";
  onSelectPackage: (pkg: "BASIC" | "STANDARD" | "PREMIUM") => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedPackage, onSelectPackage }) => {
  const { t } = useLanguage();

  const [date, setDate] = useState<string>(format(addDays(new Date(), 2), "yyyy-MM-dd"));
  const [time, setTime] = useState<string>("14:00");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [carModel, setCarModel] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const [occupiedDates, setOccupiedDates] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState<string>("");

  // Načtení obsazených termínů z databáze při načtení komponenty
  useEffect(() => {
    async function fetchOccupiedDates() {
      try {
        const res = await fetch("/api/bookings/occupied");
        const data = await res.json();
        if (data.occupiedDates) {
          setOccupiedDates(data.occupiedDates);
        }
      } catch (err) {
        console.error("Chyba při načítání obsazených termínů:", err);
      }
    }
    fetchOccupiedDates();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Kontrola, zda vybraný den není již obsazený
    if (occupiedDates.includes(date)) {
      setStatus("error");
      setErrorText("Tento termín je již obsazený. Vyberte prosím jiný den.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorText("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: name,
          clientEmail: email,
          clientPhone: phone,
          carModel,
          requestedDate: date,
          requestedTime: time,
          packageTier: selectedPackage,
          userNotes: notes,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit request");

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorText(err instanceof Error ? err.message : t.booking.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const minDate = format(addDays(new Date(), 1), "yyyy-MM-dd");

  return (
    <section id="booking" className="py-28 bg-charcoal text-beige-100 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brown-light font-semibold mb-3 block">
            {t.booking.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-beige-50 tracking-tight mb-4">
            {t.booking.title}
          </h2>
          <p className="text-beige-200/80 text-sm sm:text-base font-light">
            {t.booking.subtitle}
          </p>
        </div>

        {status === "success" ? (
          <div className="p-8 sm:p-12 rounded-xl bg-green-accent/40 border border-green-light text-center animate-in fade-in ease-out-smooth">
            <CheckCircle2 size={48} className="text-beige-100 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-3">Rezervace Přijata</h3>
            <p className="text-beige-200/90 text-base max-w-lg mx-auto">
              {t.booking.successMessage}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-12 backdrop-blur-sm space-y-8"
          >
            {status === "error" && (
              <div className="p-4 rounded-lg bg-red-950/50 border border-red-500/30 text-red-200 text-sm flex items-center gap-3">
                <AlertCircle size={18} />
                <span>{errorText}</span>
              </div>
            )}

            {/* Package selector */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-beige-200 mb-3">
                {t.booking.selectPackage}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(["BASIC", "STANDARD", "PREMIUM"] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => onSelectPackage(tier)}
                    className={`py-3 px-2 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ease-spring-overshoot ${
                      selectedPackage === tier
                        ? "bg-beige-100 text-charcoal border-beige-100 shadow"
                        : "border-white/10 text-beige-200 hover:border-white/20"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-beige-200 mb-2">
                  {t.booking.selectDate}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={minDate}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className={`w-full bg-charcoal/80 border rounded-lg px-4 py-3 text-sm text-beige-100 focus:outline-none transition-colors ${
                      occupiedDates.includes(date)
                        ? "border-red-500 text-red-300"
                        : "border-white/15 focus:border-beige-100"
                    }`}
                  />
                  <CalendarIcon size={16} className="absolute right-4 top-3.5 text-beige-200 pointer-events-none" />
                </div>
                {occupiedDates.includes(date) && (
                  <p className="text-xs text-red-400 mt-1">⚠️ Tento den je již obsazený a potvrzený.</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-beige-200 mb-2">
                  {t.booking.preferredTime}
                </label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="14:00"
                  required
                  className="w-full bg-charcoal/80 border border-white/15 rounded-lg px-4 py-3 text-sm text-beige-100 focus:outline-none focus:border-beige-100 transition-colors"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-beige-200 mb-2">
                  {t.booking.name}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-charcoal/80 border border-white/15 rounded-lg px-4 py-3 text-sm text-beige-100 focus:outline-none focus:border-beige-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-beige-200 mb-2">
                  {t.booking.email}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-charcoal/80 border border-white/15 rounded-lg px-4 py-3 text-sm text-beige-100 focus:outline-none focus:border-beige-100 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-beige-200 mb-2">
                  {t.booking.phone}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-charcoal/80 border border-white/15 rounded-lg px-4 py-3 text-sm text-beige-100 focus:outline-none focus:border-beige-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-beige-200 mb-2">
                  {t.booking.carModel}
                </label>
                <input
                  type="text"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  placeholder="např. BMW M3 G80 2022"
                  required
                  className="w-full bg-charcoal/80 border border-white/15 rounded-lg px-4 py-3 text-sm text-beige-100 focus:outline-none focus:border-beige-100 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-beige-200 mb-2">
                {t.booking.notes}
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-charcoal/80 border border-white/15 rounded-lg px-4 py-3 text-sm text-beige-100 focus:outline-none focus:border-beige-100 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading || occupiedDates.includes(date)}
              className="w-full py-4 rounded-full bg-beige-100 text-charcoal font-semibold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 hover:scale-[1.02] active:scale-95 ease-spring-overshoot shadow-lg disabled:opacity-50"
            >
              {loading ? t.booking.submitting : t.booking.submitBtn}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};