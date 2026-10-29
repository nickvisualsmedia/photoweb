import React from "react";

export const StructuredData: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://nickvisuals.media/#business",
        "name": "Nick Visuals Media",
        "description": "Editorial automotive photography based in Prague and Tábor.",
        "url": "https://nickvisuals.media",
        "image": "https://nickvisuals.media/images/og-image.jpg",
        "email": "nickvisuals.media@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Prague",
          "addressCountry": "CZ"
        },
        "sameAs": [
          "https://instagram.com/nickvisuals.media",
          "https://tiktok.com/@nick.mp4x"
        ],
        "priceRange": "2000 CZK - 4500 CZK"
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://nickvisuals.media/#catalog",
        "name": "Automotive Photography Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Basic Package",
            "price": "2000",
            "priceCurrency": "CZK",
            "description": "15 edited photos, 1 location, 40 minutes session, travel in Prague and Tábor included."
          },
          {
            "@type": "Offer",
            "name": "Standard Package",
            "price": "3000",
            "priceCurrency": "CZK",
            "description": "30 edited photos, 1-2 locations, 1 hour session, travel in Prague and Tábor included."
          },
          {
            "@type": "Offer",
            "name": "Premium Package",
            "price": "4500",
            "priceCurrency": "CZK",
            "description": "50 edited photos, multiple locations, 1-2 hours session, travel in Prague and Tábor included."
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};