export type Language = "cz" | "en";

export interface Translations {
  nav: {
    portfolio: string;
    about: string;
    whyMe: string;
    services: string;
    booking: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    sectionTag: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    gearTitle: string;
    gearDesc: string;
  };
  whyMe: {
    sectionTag: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  pricing: {
    sectionTag: string;
    title: string;
    travelNote: string;
    bookBtn: string;
    currency: string;
    guarantee: string;
    locations: string;
    duration: string;
    delivery: string;
    packages: {
      id: "BASIC" | "STANDARD" | "PREMIUM";
      name: string;
      price: string;
      photos: string;
      locationsCount: string;
      time: string;
      deliveryDays: string;
      popular?: boolean;
    }[];
  };
  booking: {
    sectionTag: string;
    title: string;
    subtitle: string;
    selectPackage: string;
    selectDate: string;
    preferredTime: string;
    name: string;
    email: string;
    phone: string;
    carModel: string;
    notes: string;
    submitBtn: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

export const translations: Record<Language, Translations> = {
  cz: {
    nav: {
      portfolio: "Portfolio",
      about: "O mně",
      whyMe: "Proč se mnou",
      services: "Ceník",
      booking: "Rezervace",
    },
    hero: {
      badge: "Automobilová Fotografie",
      headline: "Každá křivka vypráví příběh",
      subheadline:
        "Precizní zachycení automobilové estetiky a emocí v pohybu i klidu. Specializovaná tvorba vizuálů pro majitele unikátních vozů a komunitní projekty.",
      ctaPrimary: "Rezervovat focení",
      ctaSecondary: "Prohlédnout portfolio",
    },
    about: {
      sectionTag: "Příběh a Vize",
      title: "Za objektivem Nick Visuals",
      paragraph1:
        "Jmenuji se Nick a automobily pro mě představují dokonalé spojení inženýrského umu a sochařského designu. Vizuální tvorbě se věnuji s důrazem na čistotu kompozice přirozeného světla a zachycení autentického charakteru každého stroje.",
      paragraph2:
        "Můj přístup stojí na respektu k detailům. Nehledám prefabrikovaná klišé ale vyhledávám lokace které podtrhnou identitu konkrétního vozu a dodají snímkům nadčasový charakter.",
      gearTitle: "Technika a Vybavení",
      gearDesc:
        "Využívám iPhone 12 Pro doplněný o prémiový Circular Polarizer Filter CPL. Tento polarizační filtr eliminuje rušivé odlesky karoserie oken a umožňuje zachytit skutečnou hloubku laku i vnitřních textur s neobyčejnou čistotou.",
    },
    whyMe: {
      sectionTag: "Důvody pro spolupráci",
      title: "Proč svěřit vizuál svého vozu právě mně",
      items: [
        {
          title: "Cítění pro designové linie",
          desc: "Každý vůz má své specifické úhly které z něj dělají unikát. Vím přesně kam postavit světlo a jak komponovat scénu.",
        },
        {
          title: "Bleskové dodání fotografií",
          desc: "Kompletně zpracované a vyretušované snímky obdržíte v plném rozlišení již během několika málo dnů od realizace.",
        },
        {
          title: "Pečlivě zvolené lokace",
          desc: "Scenérie vybírám tak aby ladila s charakterem vašeho vozu ať už jde o moderní architekturu nebo venkovské cesty.",
        },
        {
          title: "Skutečná vášeň pro automobily",
          desc: "Automotive kultura je mým životním stylem což se odráží v každém jednom vyfoceném a upraveném snímku.",
        },
      ],
    },
    pricing: {
      sectionTag: "Transparentní Nabídka",
      title: "Ceník fotografických služeb",
      travelNote: "Doprava v okolí Prahy a Tábora je již zahrnuta v ceně každého balíčku.",
      bookBtn: "Rezervovat tento balíček",
      currency: "Kč",
      guarantee: "Garantovaný počet fotografií",
      locations: "Počet lokací",
      duration: "Délka focení",
      delivery: "Doba dodání",
      packages: [
        {
          id: "BASIC",
          name: "Basic",
          price: "2 000",
          photos: "15 editovaných fotografií",
          locationsCount: "1 lokace (Okolí Prahy a Tábora v ceně)",
          time: "40 minut focení",
          deliveryDays: "Do 4 dnů",
        },
        {
          id: "STANDARD",
          name: "Standard",
          price: "3 000",
          photos: "30 editovaných fotografií",
          locationsCount: "1 až 2 lokace (Okolí Prahy a Tábora v ceně)",
          time: "1 hodina focení",
          deliveryDays: "Do 5 dnů",
          popular: true,
        },
        {
          id: "PREMIUM",
          name: "Premium",
          price: "4 500",
          photos: "50 editovaných fotografií",
          locationsCount: "Více lokací (Okolí Prahy a Tábora v ceně)",
          time: "1 až 2 hodiny focení",
          deliveryDays: "Do 8 dnů",
        },
      ],
    },
    booking: {
      sectionTag: "Rezervační Systém",
      title: "Zajistěte si termín pro svůj vůz",
      subtitle:
        "Vyberte vyhovující datum z kalendáře a balíček. Po odeslání žádosti obratem prověřím dostupnost a potvrdím váš termín.",
      selectPackage: "Zvolený balíček",
      selectDate: "Výběr dne",
      preferredTime: "Preferovaný čas (např. 14:00)",
      name: "Vaše celé jméno",
      email: "E mailová adresa",
      phone: "Telefonní číslo",
      carModel: "Model vozu a rok výroby",
      notes: "Poznámka ke konkrétní představě či lokaci",
      submitBtn: "Odeslat nezávaznou poptávku",
      submitting: "Odesílám rezervaci...",
      successMessage:
        "Děkuji za projevený zájem. Vaše žádost byla úspěšně přijata a během dne vás budu kontaktovat pro finální potvrzení termínu.",
      errorMessage: "Omlouváme se nastala chyba při odesílání formuláře. Zkuste to prosím znovu.",
    },
    footer: {
      rights: "Všechna práva vyhrazena.",
      tagline: "Autentická automobilová vizuální tvorba.",
    },
  },
  en: {
    nav: {
      portfolio: "Portfolio",
      about: "About",
      whyMe: "Why Me",
      services: "Pricing",
      booking: "Book Now",
    },
    hero: {
      badge: "Automotive Visuals",
      headline: "Every contour tells an authentic story",
      subheadline:
        "Precise capture of automotive design and motion. Editorial photography dedicated to car enthusiasts collectors and creative projects.",
      ctaPrimary: "Book a Photoshoot",
      ctaSecondary: "View Portfolio",
    },
    about: {
      sectionTag: "Story and Vision",
      title: "Behind the lens of Nick Visuals",
      paragraph1:
        "I am Nick and to me vehicles represent a synthesis of mechanical engineering and pure sculptural art. I focus on raw compositional balance natural lighting and honoring the genuine spirit of every machine.",
      paragraph2:
        "My approach focuses on clean lines and texture clarity. Rather than rely on artificial setups I match unique architectural or scenic environments to the personality of your car.",
      gearTitle: "Equipment and Technique",
      gearDesc:
        "I shoot using an iPhone 12 Pro equipped with an optical grade Circular Polarizer Filter CPL. This specialized filter cuts glare from glass and paintwork revealing true reflections and deep color contrast.",
    },
    whyMe: {
      sectionTag: "Value Proposition",
      title: "Why work with Nick Visuals",
      items: [
        {
          title: "Eye for automotive geometry",
          desc: "Every car possesses signature perspectives. I compose with absolute precision to showcase that unique stance.",
        },
        {
          title: "Prompt turnaround",
          desc: "Receive your fully edited high resolution photographs safely within a few working days without long delays.",
        },
        {
          title: "Tailored shoot locations",
          desc: "Locations are curated specifically around your vehicle character whether industrial architectural or open road.",
        },
        {
          title: "Genuine motoring passion",
          desc: "Cars are my true craft and obsession and that authentic commitment translates directly into final imagery.",
        },
      ],
    },
    pricing: {
      sectionTag: "Transparent Rates",
      title: "Photoshoot packages",
      travelNote: "Travel within Prague and Tábor surrounding areas is included in every package price.",
      bookBtn: "Reserve this package",
      currency: "CZK",
      guarantee: "Guaranteed deliverable photos",
      locations: "Number of locations",
      duration: "Session duration",
      delivery: "Turnaround time",
      packages: [
        {
          id: "BASIC",
          name: "Basic",
          price: "2 000",
          photos: "15 edited high resolution photos",
          locationsCount: "1 location (Prague and Tábor travel included)",
          time: "40 minutes session",
          deliveryDays: "Within 4 days",
        },
        {
          id: "STANDARD",
          name: "Standard",
          price: "3 000",
          photos: "30 edited high resolution photos",
          locationsCount: "1 to 2 locations (Prague and Tábor travel included)",
          time: "1 hour session",
          deliveryDays: "Within 5 days",
          popular: true,
        },
        {
          id: "PREMIUM",
          name: "Premium",
          price: "4 500",
          photos: "50 edited high resolution photos",
          locationsCount: "Multiple locations (Prague and Tábor travel included)",
          time: "1 to 2 hours session",
          deliveryDays: "Within 8 days",
        },
      ],
    },
    booking: {
      sectionTag: "Reservation",
      title: "Reserve your automotive photoshoot",
      subtitle:
        "Select your preferred date from the calendar and choose a package. Once received I will verify scheduling and reply promptly.",
      selectPackage: "Selected Package",
      selectDate: "Select Day",
      preferredTime: "Preferred Time (e.g. 14:00)",
      name: "Your Full Name",
      email: "Email Address",
      phone: "Phone Number",
      carModel: "Vehicle Make and Model",
      notes: "Notes or specific location ideas",
      submitBtn: "Send Booking Request",
      submitting: "Submitting request...",
      successMessage:
        "Thank you for reaching out. Your photoshoot request has been received and I will contact you shortly to confirm.",
      errorMessage: "An error occurred while submitting your request. Please try again.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Editorial automotive photography portfolio.",
    },
  },
};