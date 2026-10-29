"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { Pricing } from "@/components/Pricing";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState<"BASIC" | "STANDARD" | "PREMIUM">("STANDARD");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <WhyChooseMe />
        <Pricing onSelectPackage={setSelectedPackage} />
        <BookingForm
          selectedPackage={selectedPackage}
          onSelectPackage={setSelectedPackage}
        />
      </main>
      <Footer />
    </div>
  );
}