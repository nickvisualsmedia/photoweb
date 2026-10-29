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
      headline: "Každý shot vypráví příběh",
      subheadline:
        "S radostí a vášní zachycuji krásu aut a emoce s nimi spojené. Věnuji se tvorbě fotografií pro majitele jedinečných vozů a pro všechny, kteří mají rádi automobilovou kulturu.",
      ctaPrimary: "Rezervovat focení",
      ctaSecondary: "Prohlédnout portfolio",
    },
    about: {
      sectionTag: "Příběh a Vize",
      title: "Kdo stojí za Nick Visuals",
      paragraph1:
        "Jmenuji se Nick a auta pro mě představují vášeň od mala a zároveň hobby, které dělá radost také ostatním. Vizuální tvorbě se věnuji s důrazem na čistotu kompozice.",
      paragraph2:
        "Můj přístup stojí na vychycených detailech. Nehledám nějaké kraviny ale vyhledávám lokace které vystihnou každé auto a dodají fotkám charakter.",
      gearTitle: "Technika a Vybavení",
      gearDesc:
        "Využívám iPhone 12 Pro doplněný CPL filtrem. Tenhle polarizační filtr eliminuje rušivé odlesky karoserie oken a umožňuje zachytit skutečnou hloubku laku i vnitřních textur s neobyčejnou čistotou.",
    },
    whyMe: {
      sectionTag: "Důvody pro spolupráci",
      title: "Proč svěřit focení svého vozu právě mně",
      items: [
        {
          title: "Praxe a cit pro kompozici",
          desc: "Každý vůz má své specifické úhly které z něj dělají unikát. Vím přesně kam postavit světlo a jak komponovat scénu.",
        },
        {
          title: "Rychlé dodání fotografií",
          desc: "Kompletně zpracované a vyretušované snímky obdržíte v plném rozlišení již během několika málo dnů od realizace.",
        },
        {
          title: "Pečlivě zvolené lokace",
          desc: "Scenérie vybírám tak, aby ladila s vaším vozem ať už jde o moderní architekturu, venkovské cesty nebo industriální prostředí.",
        },
        {
          title: "Skutečná vášeň pro automobily",
          desc: "Autíčkářská kultura je mým životním stylem což se odráží v každém jednom vyfoceném a upraveném snímku.",
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
      notes: "Lokace, poznámky nebo specifické požadavky",
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
      headline: "Every shot tells a story",
      subheadline:
        "Precise capture of automotive design and motion. Editorial photography dedicated to car enthusiasts collectors and creative projects.",
      ctaPrimary: "Book a Photoshoot",
      ctaSecondary: "View Portfolio",
    },
    about: {
      sectionTag: "Story & Vision",
      title: "Who Is Behind Nick Visuals",
      paragraph1:
        "I'm Nick, and cars have been my passion since I was a kid. Photography is a hobby of mine that lets me bring a little joy to others, too. When it comes to my visuals, I always focus on keeping the composition clean and natural.",
      paragraph2:
        "My approach is all about focusing on the small details. I don't care for cliché fluff, but I look for locations that truly fit each car and give the photos real character.",
      gearTitle: "Gear & Equipment",
      gearDesc:
        "I shoot on an iPhone 12 Pro paired with a CPL filter. This polarizing filter cuts out harsh reflections on the bodywork and windows, letting the real depth of the paint and interior textures shine through with beautiful clarity.",
    },
    whyMe: {
      sectionTag: "Value Proposition",
      title: "Why entrust your car shoot to me",
      items: [
        {
          title: "An Eye for Composition",
          desc: "Every car has unique angles that make it stand out. I know exactly how to set up the lighting and frame the shot.",
        },
        {
          title: "Quick Turnaround",
          desc: "You will get your fully edited and retouched photos in full resolution just a few days after the shoot.",
        },
        {
          title: "Handpicked Locations",
          desc: "I choose spots that vibe with your car, whether it is modern architecture, country roads, or an industrial backdrop.",
        },
        {
          title: "True Passion for Cars",
          desc: "Car culture is a way of life for me, and that love shows in every single shot I take and edit.",
        },
      ]
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
      notes: "Location, notes or specific requests",
      submitBtn: "Send Booking Request",
      submitting: "Submitting request...",
      successMessage:
        "Thank you for reaching out. Your shoot request has been received and I will contact you shortly to confirm.",
      errorMessage: "An error occurred while submitting your request. Please try again.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Editorial car photography portfolio.",
    },
  },
};