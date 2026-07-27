import type { Dictionary } from "@/locales/types";

export const nl: Dictionary = {
  common: {
    branding: { wordmark: "MOVRR", iconAlt: "MOVRR-icoon" },
    languageSwitcher: {
      ariaLabel: "Kies een taal",
      englishLabel: "EN",
      dutchLabel: "NL",
      englishName: "Engels",
      dutchName: "Nederlands",
    },
    navigation: {
      howItWorks: "Zo werkt het",
      rewards: "Beloningen",
      brands: "Merken",
      riders: "Rijders",
      signIn: "Inloggen",
      getStarted: "Aan de slag",
      openMenu: "Navigatiemenu openen",
      closeMenu: "Navigatiemenu sluiten",
    },
    footer: {
      ctaTitle: "Klaar om met MOVRR te bewegen?",
      ctaBody: "De straten wachten op je.",
      startEarning: "Begin met verdienen",
      talkToSales: "Praat met sales",
      tagline: "Beweging die beloont. Campagnes die presteren. Gebouwd voor de stad.",
      sectionPlatform: "Platform",
      sectionCompany: "Bedrijf",
      sectionResources: "Informatie",
      sectionLegal: "Juridisch",
      about: "Over ons",
      careers: "Werken bij",
      press: "Pers",
      contact: "Contact",
      help: "Helpcentrum",
      blog: "Journal",
      partners: "Partners",
      privacy: "Privacy",
      terms: "Voorwaarden",
      cookies: "Cookies",
      deleteAccount: "Account verwijderen",
      accessibility: "Toegankelijkheid",
      sitemap: "Sitemap",
      copyright: "MOVRR B.V. Alle rechten voorbehouden.",
    },
    systemStatus: {
      unavailable: "Status niet beschikbaar",
      checking: "Status controleren…",
      operational: "Alle systemen operationeel",
      degraded: "Verminderde dienstverlening",
      disruption: "Dienst onderbroken",
    },
    earlyAccess: {
      ariaLabel: "Aankondiging over early access",
      dismiss: "Aankondiging sluiten",
      ctaAriaSuffix: "early access",
      riders: {
        badge: "Early access",
        variants: [
          {
            headline:
              "MOVRR lanceert in Rotterdam en Den Haag. Meld je aan voor de wachtlijst.",
            cta: "Naar de wachtlijst",
          },
          {
            headline:
              "Verdien met elke kilometer. Early access voor rijders is nu open.",
            cta: "Vraag early access aan",
          },
        ],
      },
      brands: {
        badge: "Beperkt beschikbaar",
        variants: [
          {
            headline:
              "De eerste merkpartnerschappen zijn open — er zijn nog maar enkele plaatsen.",
            cta: "Reserveer een plek",
          },
        ],
      },
      partners: {
        badge: "Nu geopend",
        variants: [
          {
            headline:
              "Aanmelden voor technische en commerciële integraties is nu mogelijk.",
            cta: "Praat met ons",
          },
        ],
      },
    },
    consent: {
      bannerAria: "Cookietoestemming",
      title: "We gebruiken cookies.",
      body:
        "Sommige zijn nodig om de site te laten werken. Andere helpen ons begrijpen hoe mensen de site gebruiken.",
      manage: "Jij kiest.",
      manageAria: "Cookievoorkeuren beheren",
      acceptAll: "Alles accepteren",
      reject: "Niet-essentiële weigeren",
      preferencesTitle: "Cookievoorkeuren",
      preferencesBody:
        "Kies welke cookies je toestaat. Je keuze wordt opgeslagen en kan altijd worden aangepast.",
      preferencesAria: "Cookievoorkeuren",
      close: "Voorkeuren sluiten",
      alwaysOn: "Altijd actief",
      cookieSuffix: "cookies",
      save: "Voorkeuren opslaan",
      categories: [
        {
          key: "necessary",
          label: "Strikt noodzakelijk",
          description:
            "Nodig om de website te laten werken. Deze cookies maken kernfuncties zoals sessiebeveiliging en accounttoegang mogelijk en kunnen niet worden uitgeschakeld.",
          required: true,
        },
        {
          key: "analytics",
          label: "Prestaties en analytics",
          description:
            "Helpen ons begrijpen hoe bezoekers de website gebruiken, welke pagina's het meest worden bezocht en waar bezoekers vandaan komen. Alle gegevens zijn geaggregeerd en geanonimiseerd.",
        },
        {
          key: "marketing",
          label: "Marketing",
          description:
            "Worden gebruikt om de effectiviteit te meten van campagnes die verkeer naar deze site leiden. We gebruiken deze cookies niet voor retargetingadvertenties.",
        },
      ],
    },
    notFound: {
      titleLine1: "Pagina niet",
      titleLine2: "gevonden.",
      description:
        "Deze pagina bestaat niet. Ga terug en ontdek hoe MOVRR beweging omzet in waarde.",
      backHome: "Terug naar MOVRR",
    },
  },
  metadata: {
    siteName: "MOVRR",
    keywords: [
      "beloningen voor beweging",
      "mobiliteitsplatform",
      "stedelijke beloningen",
      "merkactivatie",
      "geverifieerde beweging",
      "fietsbeloningen",
    ],
    pages: {
      home: {
        title: "Platform voor bewegingsbeloningen",
        description:
          "Zet beweging om in waarde. MOVRR verbindt geverifieerde beweging met meetbare impact voor rijders, merken en steden.",
      },
      waitlist: {
        title: "Meld je aan voor de wachtlijst",
        description:
          "MOVRR lanceert stad voor stad. Registreer je als rijder, merk of partner en hoor als eerste wanneer jouw stad live gaat.",
      },
      howItWorks: {
        title: "Zo werkt het",
        description:
          "Fiets om te verdienen. Activeer op schaal. Ontdek precies hoe MOVRR werkt voor rijders en merken.",
      },
      rewards: {
        title: "Beloningen",
        description:
          "Fiets om te verdienen. Elke geverifieerde kilometer levert beloningen op. Kies voor merkcampagnes en verdien meer.",
      },
      brands: {
        title: "Voor merken",
        description:
          "Bereik actieve stadsfietsers met geverifieerde campagnes op basis van beweging. Premium zichtbaarheid. Meetbare resultaten.",
      },
      riders: {
        title: "Voor rijders",
        description:
          "Fiets door jouw stad. Verdien met elke kilometer. Draag een merk en verdien meer. Jouw beweging, jouw keuze.",
      },
      about: {
        title: "Over ons",
        description:
          "Gebouwd rondom de rit. MOVRR beloont fietsers voor beweging en geeft merken geverifieerd bereik.",
      },
      blog: {
        title: "Journal",
        description:
          "Gedachten over beweging, steden en het platform dat erachter zit.",
      },
      press: {
        title: "Pers & Media",
        description:
          "De MOVRR-newsroom. Publicaties, perskit en mediacontact voor journalisten en redacties.",
      },
      help: {
        title: "Helpcentrum",
        description:
          "Antwoorden op veelgestelde vragen over beloningen, communityritten, accountinstellingen en meer.",
      },
      careers: {
        title: "Werken bij",
        description:
          "Werk mee aan het platform waarop steden bewegen. Bekijk vacatures bij MOVRR.",
      },
      contact: {
        title: "Contact",
        description:
          "Neem contact op met MOVRR voor campagnes, support voor rijders en persvragen.",
      },
      partners: {
        title: "Partners",
        description:
          "Bouw voort op de bewegingslaag van MOVRR met integraties voor mobiliteitsplatforms, steden, gezondheidsapps en woon-werkprogramma's.",
      },
      accessibility: {
        title: "Toegankelijkheid",
        description:
          "De toegankelijkheidsverklaring van MOVRR en onze inzet voor WCAG 2.1 AA en inclusief ontwerp.",
      },
      sitemapPage: {
        title: "Sitemap",
        description: "Elke pagina op movrr.nl, geordend per onderdeel.",
      },
      privacy: {
        title: "Privacybeleid",
        description:
          "Hoe MOVRR persoonsgegevens verzamelt, gebruikt en beschermt.",
      },
      terms: {
        title: "Gebruiksvoorwaarden",
        description:
          "De voorwaarden voor het gebruik van MOVRR door rijders en merkpartners.",
      },
      cookies: {
        title: "Cookiebeleid",
        description:
          "Hoe MOVRR cookies en vergelijkbare technologie gebruikt en hoe je die beheert.",
      },
      accountDeletion: {
        title: "Je account verwijderen",
        description:
          "Zo verwijder je jouw MOVRR-account en bijbehorende gegevens definitief.",
      },
    },
  },
  pages: {
    home: {
      hero: {
        imageAlt: "Fietsers in beweging door een stedelijke omgeving",
        titleLine1: "Beweging,",
        titleLine2: "beloond.",
        description:
          "Fiets door de stad. Verdien met elke kilometer. Voor merken is het bereik dat mensen écht in beweging brengt.",
        riderCta: "Word rijder",
        brandCta: "Adverteer met MOVRR",
      },
      valueStrip: {
        titleLine1: "Echte beweging.",
        titleLine2: "Echt resultaat.",
        learnMore: "Ontdek meer",
        description:
          "Een beloningsplatform voor fietsers. Verdien door te fietsen. Merken bereiken mensen die al in beweging zijn.",
        values: [
          {
            title: "Verdien met elke rit",
            description:
              "Fiets om te verdienen. Draag een merk op je fiets en verdien meer. Helemaal jouw keuze.",
          },
          {
            title: "Campagnes die bewegen",
            description:
              "Maak contact met mensen in beweging. Echte doelgroepen, echte straten.",
          },
          {
            title: "Bereik dat beweegt",
            description: "Bereik op stadsschaal. Resultaten die meetellen.",
          },
        ],
      },
      useCases: {
        titleLine1: "Eén platform.",
        titleLine2: "Elke toepassing.",
        description:
          "Fiets om te verdienen. Breng een stad in beweging. Bouw op het netwerk. Drie manieren waarop hetzelfde platform stedelijke beweging meer waard maakt.",
        items: [
          {
            title: "Dagelijkse beweging die beloont",
            category: "Beloningen voor rijders",
            description:
              "Fiets om te verdienen. Kies voor merkcampagnes en verdien meer. Jouw beweging, jouw keuze.",
            imageAlt: "Fietser bekijkt MOVRR-inkomsten",
          },
          {
            title: "Altijd zichtbaar, of alles tegelijk.",
            category: "Merkactivaties",
            description:
              "Destination Ride voor dagelijkse zichtbaarheid op routes. Swarm voor momenten die een stad stilzetten.",
            imageAlt: "Gesponsorde communityrit door de stad",
          },
          {
            title: "Initiatieven voor stad en merk",
            category: "Stedelijke partnerschappen",
            description:
              "Programma's die hele gemeenschappen bewegen. Voor steden die voorop durven te lopen.",
            imageAlt: "Fietsers langs een stedelijke waterkant",
          },
        ],
      },
      metrics: {
        titleLine1: "Verwachte",
        titleLine2: "campagne-impact.",
        description:
          "De schaal van campagnes op basis van beweging. Geschat bereik binnen actieve stedelijke netwerken.",
        imageAlt: "Fiets met MOVRR-branding",
        items: [
          {
            value: "400K — 1,2M",
            label: "Geverifieerd maandbereik",
            description:
              "Potentiële geverifieerde impressies binnen actieve netwerken van rijders.",
          },
          {
            value: "VANAF € 3,50",
            label: "Per 1.000 geverifieerde views",
            description:
              "Efficiënte zichtbaarheid. Echte betrokkenheid. Niets opgeblazen.",
          },
          {
            value: "UNIEK BEREIK",
            label: "Stedelijk bereik met hoge intentie",
            description:
              "Doelgroepen in beweging, niet aan het scrollen. Dagelijks, stedelijk, echt.",
          },
        ],
      },
      appPreview: {
        imageAlt: "MOVRR-app op het stuur van een fiets",
        routeName: "Tour Rotterdam Centraal",
        routeDetails: "5 KM — 45 MIN",
      },
      howItWorks: {
        titleLine1: "Twee kanten.",
        titleLine2: "Eén platform.",
        description:
          "Links: zo werkt het voor fietsers. Rechts: zo werkt het voor merken.",
        steps: [
          {
            number: "01",
            label: "Rijders",
            title: "Fiets en verdien",
            description:
              "Geverifieerde kilometers leveren beloningen op. Woon-werkritten, boodschappen, dagelijkse beweging — alles telt.",
            side: "left",
          },
          {
            number: "01",
            label: "Merken",
            title: "Bepaal je koers",
            description:
              "Kies je doelgroep, budget en strategie. Alles vooraf, niets verborgen.",
            side: "right",
          },
          {
            number: "02",
            label: "Rijders",
            title: "Kies mee, verdien meer",
            description:
              "Kies zelf of je merkcampagnes meeneemt op je rit. Volledig vrijwillig, met extra beloningen als je meedoet.",
            side: "left",
          },
          {
            number: "02",
            label: "Merken",
            title: "Ga live",
            description:
              "Je campagne gaat de straat op. Fietsers verdienen. Jouw merk beweegt met ze mee.",
            side: "right",
          },
          {
            number: "03",
            label: "Rijders",
            title: "Verzamel je beloningen",
            description:
              "Met elke geverifieerde rit lopen je beloningen op. Ze zijn van jou, hoe je ze ook verdiende.",
            side: "left",
          },
          {
            number: "03",
            label: "Merken",
            title: "Zie het werken",
            description:
              "Live data. Echte betrokkenheid. Geverifieerde resultaten. Stuur onderweg bij.",
            side: "right",
          },
        ],
      },
      safety: {
        imageAlt: "MOVRR-app op een apparaat",
        title: "Jouw merk beschermd",
        description:
          "Vertrouwen is geen functie. Het is de basis. Elke rit geverifieerd, elke plaatsing gecontroleerd.",
        integrityTitle: "Gebouwd op integriteit",
        points: [
          {
            title: "Geverifieerde deelname",
            description: "Elke rit geverifieerd. Geen simulaties, geen sluiproutes.",
          },
          {
            title: "Privacy als uitgangspunt",
            description: "Wat je fietst blijft van jou. Standaard geanonimiseerd.",
          },
          {
            title: "Merkveilige plaatsingen",
            description:
              "Elke plaatsing gecontroleerd. Jouw merk, altijd in de juiste context.",
          },
        ],
      },
    },
    waitlist: {
      hero: {
        wave: "Golf 01",
        titleLine1: "Beweging begint",
        titleLine2: "vóór de massa.",
        description:
          "MOVRR lanceert stad voor stad. Registreer je en hoor als eerste wanneer jouw stad opent.",
        citiesLabel: "Lancering in 2026",
        cities: ["Rotterdam", "Den Haag", "Amsterdam", "Utrecht"],
      },
      form: {
        heading: "Registreer je vroeg.",
        introduction:
          "MOVRR opent stad voor stad. Registreer je vroeg en krijg voorrang wanneer jouw stad lanceert.",
        benefits: [
          {
            label: "Als eerste bericht",
            note: "Je hoort het als eerste wanneer jouw stad opent.",
          },
          {
            label: "Voorrang bij toegang",
            note: "Met early access geef je MOVRR in jouw stad mede vorm.",
          },
          {
            label: "Zonder verplichtingen",
            note: "Je registratie reserveert je plek. Meer niet.",
          },
        ],
        audienceLabel: "Ik ben een",
        audiences: [
          {
            id: "rider",
            label: "Rijder",
            description:
              "Je fietst, stept of loopt door de stad en wilt met elke rit verdienen.",
            submitLabel: "Registreer als rijder",
            namePlaceholder: "Jouw naam",
          },
          {
            id: "brand",
            label: "Merk",
            description:
              "Je voert campagnes en zoekt geverifieerd bereik onder actieve stadsrijders.",
            submitLabel: "Registreer je merk",
            namePlaceholder: "Jouw naam of bedrijfsnaam",
          },
          {
            id: "partner",
            label: "Partner",
            description:
              "Je bouwt producten of platforms die aansluiten op hoe mensen door steden bewegen.",
            submitLabel: "Registreer als partner",
            namePlaceholder: "Jouw naam of bedrijfsnaam",
          },
        ],
        fields: {
          name: "Naam",
          city: "Stad",
          email: "E-mail",
          cityPlaceholder: "Rotterdam, Den Haag…",
          emailPlaceholder: "jij@voorbeeld.nl",
          bikeQuestion: "Heb je een fiets?",
          optional: "optioneel",
        },
        bikeOptions: [
          { id: "own", label: "Ja, ik heb er een" },
          { id: "interested", label: "Nog niet, wel interesse" },
          { id: "planning", label: "Ik wil er een aanschaffen" },
        ],
        validation: {
          nameRequired: "Vul je naam in",
          emailInvalid: "Vul een geldig e-mailadres in",
          cityRequired: "Vul je stad in",
        },
        submitting: "Registreren…",
        noSpam: "Geen spam. Uitschrijven kan altijd.",
        success: {
          eyebrow: "Je zit in de eerste golf.",
          title: "Je bent erbij.",
          cityPrefix: "We nemen contact op zodra MOVRR opent in",
          cityFallback: "jouw stad",
          registeredAs: "Geregistreerd als",
          audienceNames: {
            rider: "rijder",
            brand: "merk",
            partner: "partner",
          },
        },
        errors: {
          invalid: "De formuliergegevens zijn ongeldig.",
          duplicate: "Dit e-mailadres staat al op de lijst.",
          generic: "Er ging iets mis. Probeer het opnieuw.",
        },
      },
    },
    howItWorks: {
      hero: { titleLine1: "Beweging", titleLine2: "helder gemaakt.", description: "Rijder of merk — de werking is duidelijk, de resultaten zijn echt.", riders: "Rijders", forRiders: "Voor rijders", brands: "Merken", forBrands: "Voor merken" },
      riders: {
        titleLine1: "Fiets om te verdienen.", titleLine2: "Meer is niet nodig.", description: "Fiets en verdien. Draag een merk wanneer je meer wilt. Jouw beweging, jouw keuze.",
        steps: [
          { number: "01", title: "Fiets jouw route", description: "Elke geverifieerde rit telt. Woon-werk, boodschappen, een weekendronde — beweging is beweging." },
          { number: "02", title: "Kies mee en verdien meer", description: "Kies zelf of je een merk op je fiets draagt. Volledig vrijwillig, met extra beloningen als je meedoet." },
          { number: "03", title: "Verzamel je beloningen", description: "Met elke geverifieerde rit lopen je beloningen op. Ze zijn van jou, hoe je ze ook verdiende." },
        ],
      },
      brands: {
        titleLine1: "Campagnes die", titleLine2: "met mensen meebewegen.", description: "Bereik in de echte wereld. Geverifieerde betrokkenheid. Een doelgroep die er zelf voor koos.",
        steps: [
          { number: "01", title: "Bepaal je koers", description: "Kies je stad, format en periode. Alles vooraf, niets verborgen." },
          { number: "02", title: "Ga live", description: "Je campagne gaat de straat op. Rijders verdienen. Jouw merk beweegt met ze mee." },
          { number: "03", title: "Zie het werken", description: "Live data. Echte betrokkenheid. Geverifieerde resultaten. Geen wachttijd." },
        ],
      },
      platform: {
        titleLine1: "Gebouwd voor vertrouwen.", titleLine2: "Aan beide kanten.", description: "Geverifieerde data, toestemming van rijders, niets verborgen. Dat is de basis waarop alles draait.",
        pillars: [
          { number: "01", title: "Geverifieerde beweging", description: "Elke rit geverifieerd. Geen simulaties, geen sluiproutes. Geverifieerde data stuurt elke beloning en campagnestatistiek." },
          { number: "02", title: "Privacy als standaard", description: "Wat je fietst blijft van jou. Merken zien bewegingspatronen, nooit jou." },
          { number: "03", title: "Realtime inzicht", description: "Rijders en merken zien prestaties terwijl ze ontstaan. Live bereik, geverifieerde impressies, betrokkenheid in beweging." },
          { number: "04", title: "Merkintegriteit", description: "Elke rijder die jouw merk draagt, koos daar zelf voor. Geen passieve plaatsingen. Alleen mensen die ja zeiden." },
        ],
      },
      cta: { ridersLabel: "Rijders", ridersTitleLine1: "Begin vandaag", ridersTitleLine2: "met verdienen.", ridersBody: "Fiets en verdien. Draag een merk wanneer je meer wilt. Jouw beweging, jouw keuze.", ridersCta: "Download de app", brandsLabel: "Merken", brandsTitleLine1: "Lanceer je", brandsTitleLine2: "eerste campagne.", brandsBody: "Praat met het team. We nemen bereik, kosten en geverifieerde zichtbaarheid op basis van beweging met je door.", brandsCta: "Praat met sales" },
    },
    rewards: {
      hero: { titleLine1: "Elke kilometer", titleLine2: "telt.", description: "Fiets en verdien. Draag een merk om meer te verdienen. Beloningen die elke kilometer weerspiegelen.", cta: "Begin met verdienen", stats: [{ value: "Automatisch", label: "Vanaf de eerste rit" }, { value: "Elke km", label: "Gekoppeld aan geverifieerde afstand" }, { value: "Verdien meer", label: "Kies ervoor een merk te dragen" }] },
      mechanics: { titleLine1: "Fietsen verdient.", titleLine2: "Kiezen verdient meer.", description: "Beloningen zijn direct gekoppeld aan geverifieerde beweging. Hoe meer je fietst, hoe meer je verdient, met of zonder merk.", items: [
        { number: "01", title: "Rit geverifieerd", description: "Elke rit wordt gecontroleerd. Afstand, route en beweging zijn geverifieerd vóór de beloning. Niets gesimuleerd." },
        { number: "02", title: "Standaard verdienen", description: "Geverifieerde kilometers leveren automatisch beloningen op. Geen minimumafstand of activatie. Gewoon fietsen." },
        { number: "03", title: "Draag een merk, verdien meer", description: "Kies ervoor een merkcampagne op je fiets te dragen. Helemaal jouw keuze, en elke kilometer levert dan meer op." },
      ] },
      imageAlt: "Fietser verdient beloningen met geverifieerde beweging",
      tiers: { titleLine1: "Drie manieren", titleLine2: "om te verdienen.", items: [
        { number: "01", label: "Basis", title: "Fiets om te verdienen", description: "Kilometers leveren direct iets op. Geen doelen, geen minimum. Alleen geverifieerde beweging.", detail: "Beloningen voor geverifieerde beweging" },
        { number: "02", label: "Boost", title: "Draag een merk", description: "Kies een campagne en neem die mee door de stad. Elke geverifieerde kilometer levert meer op.", detail: "Beloningen voor beweging + merkbereik" },
        { number: "03", label: "Campagne", title: "Communityritten", description: "Doe mee aan een route van een stad of merk, of fiets met anderen. Hoe meer je samen beweegt, hoe meer iedereen verdient.", detail: "Open voor iedereen · of op uitnodiging" },
      ] },
      cta: { titleLine1: "Je volgende rit", titleLine2: "begint te verdienen.", description: "Fiets je eerste route. Elke geverifieerde kilometer levert automatisch iets op.", primary: "Download de app", secondary: "Zo werkt het" },
    },
    brands: {
      hero: { titleLine1: "Bereik dat", titleLine2: "beweegt.", description: "Jouw merk door de stad gedragen door fietsers die er bewust voor kiezen. Geverifieerd bereik. Niets geschat.", primary: "Praat met sales", secondary: "Zo werkt het", imageAlt: "Merkcampagne door fietsers door de stad gedragen" },
      reach: { titleLine1: "Geen display.", titleLine2: "Beweging.", items: [
        { number: "01", title: "Beweging op stadsschaal", description: "Campagnes volgen de routes die fietsers al nemen — woon-werk, boodschappen en routes door het hart van de stad." },
        { number: "02", title: "Geverifieerde impressies", description: "Elke zichtbaarheid gekoppeld aan geverifieerde bewegingsdata. Geen opgeblazen cijfers of geschat bereik." },
        { number: "03", title: "Doelgroepen met toestemming", description: "Fietsers kiezen ervoor jouw merk te dragen. Die keuze zegt meer dan welke impressie ook." },
      ] },
      formats: [
        { index: "01", tag: "Altijd zichtbaar", nameTop: "Destination", nameBottom: "Ride", description: "Jouw merk verweven in dagelijkse fietsroutes. Buurt voor buurt, dag na dag.", useCases: ["Maandlange aanwezigheid", "Lokaal bereik", "Woon-werkroutes"], cta: "Lanceer een Destination Ride", dark: true },
        { index: "02", tag: "Alles tegelijk", nameTop: "Swarm", nameBottom: "Campagne", description: "Een gesynchroniseerde vloot beweegt samen op jouw signaal. Eén moment. Eén stad. Niet te missen.", useCases: ["Productlanceringen", "Winkelopeningen", "Merkevenementen"], cta: "Plan een Swarm", dark: false },
      ],
      campaign: { titleLine1: "Stel in.", titleLine2: "Ga de straat op.", description: "Van briefing tot live in enkele dagen. Jouw campagne reist door de stad, gedragen door fietsers die voor jouw merk kozen.", steps: [
        { number: "01", title: "Bepaal je campagne", description: "Jouw stad. Jouw zone. Jouw periode. Van briefing naar live in minuten." },
        { number: "02", title: "Rijders kiezen mee", description: "Fietsers kiezen ervoor jouw merk te dragen. Iedereen echt. Iedereen geverifieerd." },
        { number: "03", title: "Volg realtime", description: "Live kilometers, geverifieerd bereik. Zie je campagne door de stad bewegen." },
      ] },
      metrics: [
        { value: "400K — 1,2M", label: "Geverifieerd maandbereik", description: "Geverifieerde impressies van rijders die door je stad bewegen, niet langs een scherm." },
        { value: "VANAF € 3,50", label: "Per 1.000 geverifieerde views", description: "Efficiënte zichtbaarheid. Echte betrokkenheid. Niets opgeblazen." },
        { value: "100% OPT-IN", label: "Stedelijk bereik met hoge intentie", description: "Doelgroepen in beweging, niet aan het scrollen. Dagelijks, stedelijk, echt." },
      ],
      cta: { titleLine1: "Jouw merk,", titleLine2: "in beweging.", description: "Vertel waar je jouw merk wilt brengen. Wij laten zien hoe dat er in de stad uitziet.", primary: "Praat met sales", secondary: "Zo werkt het" },
      estimator: {
        label: "Bereikcalculator", titleLine1: "Zie jouw merk bewegen", titleLine2: "door de stad.", description: "Kies een stad en campagneschaal om het geschatte bereik te bekijken voordat we praten.",
        notes: ["Bereikscijfers op basis van geverifieerde bewegingsdata, niet geschatte impressies.", "Elke rijder is een echt persoon die koos jouw merk te dragen.", "Projecties worden vervangen door werkelijke cijfers zodra jouw stad live is."],
        cityQuestion: "In welke stad activeer je?", changeCity: "Stad wijzigen", statuses: { live: "Live", upcoming: "Binnenkort live", planned: "Gepland" }, country: "Nederland", theHague: "Den Haag",
        scaleQuestionBefore: "Hoe breed moet de activatie in", scaleQuestionAfter: "zijn?", scales: { focused: { label: "Gericht", description: "Gericht bereik in geselecteerde stadszones." }, "city-wide": { label: "Stadsbreed", description: "Volledige dekking van alle actieve stadszones." }, "multi-city": { label: "Meerdere steden", description: "Gecoördineerde activatie in meerdere steden." } },
        reachLabel: "geschat maandbereik", riders: "Rijders", zones: "Stadszones", window: "Campagneperiode", weeks: "weken", monthlyKm: "Geschatte km per maand", talk: "Praat met het team", reset: "Opnieuw beginnen", disclaimer: "Projecties op basis van pre-launchschattingen. Live data vervangt projecties na lancering.",
        methodology: "Zo berekenen we dit", participation: "Deelname rijders", impressions: "Impressiemodel", campaignWindow: "Campagneperiode", multiplier: "Multiplier meerdere steden", dataBasis: "Databasis", activeRidersSuffix: "van actieve rijders", impressionsSuffix: "geschatte impressies per rijder per dag", activationSuffix: "weken standaardactivatie", multiplierSuffix: "toegepast voor netwerkeffecten tussen steden", dataBasisValue: "Pre-launchprojecties. Na lancering vervangen door geverifieerde data.",
      },
    },
    riders: {
      hero: { titleLine1: "Fiets door de stad.", titleLine2: "Pak je beloning.", description: "Elke geverifieerde kilometer levert MOVRR Points op — inwisselbaar voor fietsuitrusting, eten, vouchers en meer. Draag een merk wanneer je ze wilt vermenigvuldigen.", primary: "Aan de slag", secondary: "Bekijk beloningen", imageAlt: "Fietser onderweg met MOVRR" },
      proposition: { titleLine1: "Jouw rit.", titleLine2: "Jouw voorwaarden.", items: [
        { title: "Geverifieerd, niet geschat", description: "Elke rit geverifieerd. Jouw beloningen zijn gekoppeld aan echte, geverifieerde kilometers. Geen aannames." },
        { title: "Altijd jouw keuze", description: "Een merk dragen is volledig jouw keuze. Kies ervoor als je meer wilt verdienen. Naarmate je ritgeschiedenis groeit, komen waardevollere campagnes beschikbaar." },
        { title: "Privacy in het ontwerp", description: "Jouw individuele routes blijven van jou. MOVRR anonimiseert bewegingsdata. Merken zien patronen, geen personen." },
      ] },
      earnings: { titleLine1: "Drie manieren", titleLine2: "om meer te verdienen.", items: [
        { number: "01", label: "Basis", title: "Gewoon fietsen", description: "Kilometers leveren direct MOVRR Points op. Geen doelen, geen minimum. Alleen geverifieerde beweging.", note: "Voor elke rijder, vanaf dag één" },
        { number: "02", label: "Boost", title: "Draag een merk", description: "Kies een campagne en neem die mee door de stad. Elke geverifieerde kilometer vermenigvuldigt je punten boven het basistarief.", note: "Elke keer jouw keuze" },
        { number: "03", label: "Campagne", title: "Doe mee aan een campagnerit", description: "Doe mee aan routes van steden of merken in jouw omgeving. Met je ritgeschiedenis ontgrendel je waardevollere campagnes.", note: "Open voor iedereen · of op uitnodiging naarmate je historie groeit" },
      ] },
      cta: { titleLine1: "Je volgende rit", titleLine2: "verdient.", description: "Fiets door jouw stad. Verdien MOVRR Points met elke geverifieerde kilometer. Draag een merk wanneer je ze wilt vermenigvuldigen.", primary: "Download de app", secondary: "Bekijk beloningen" },
    },
    about: {
      hero: {
        titleLine1: "Gebouwd rondom",
        titleLine2: "de rit.",
        description:
          "Een platform voor rijders en de merken die met hen meebewegen.",
      },
      origin: {
        titleLine1: "Beweging was",
        titleLine2: "altijd het uitgangspunt.",
        body:
          "Steden zitten vol mensen die onderweg zijn. Fietsers bewegen elke dag door het verkeer en leggen stedelijke routes af. Wij zagen wat reclame had gemist: een doelgroep die al beweegt, al aanwezig is, maar geen reden heeft om aandacht te geven aan de reclame die ze passeert. MOVRR is gebouwd op één inzicht: beloon de reis en het bereik volgt vanzelf. Niet door advertenties vóór mensen te plaatsen, maar door onderdeel te worden van de rit zelf.",
      },
      beliefsLabel: "Waar we in geloven",
      beliefs: [
        {
          statement: "Beweging verdient.\nDat deed het altijd al.",
          elaboration:
            "Wij maken die verdienste echt, verifieerbaar en gekoppeld aan elke geverifieerde kilometer.",
        },
        {
          statement: "Reclame werkt wanneer mensen ervoor kiezen.",
          elaboration:
            "Elke fietser die een merkcampagne draagt, heeft daar zelf voor gekozen. Geen passieve blootstelling of veronderstelde aandacht. Alleen bereik met toestemming.",
        },
        {
          statement: "Elke statistiek is echt.",
          elaboration:
            "Geen simulaties, geen geschatte impressies. Elk getal in MOVRR is gekoppeld aan geverifieerde bewegingsdata.",
        },
      ],
      model: {
        titleLine1: "Eén platform.",
        titleLine2: "Twee ingangen.",
        description:
          "MOVRR is een tweezijdig platform. Fietsers verdienen met elke geverifieerde kilometer. Merken bereiken doelgroepen die bewust kiezen voor fysieke zichtbaarheid. Geen van beide kanten levert in voor de ander.",
        ridersLabel: "Rijders",
        ridersBody:
          "Elke geverifieerde kilometer levert iets op. Draag een merk en verdien meer, of niet; het basistarief blijft altijd gelden. Jouw route, jouw tempo, jouw keuze.",
        ridersCta: "Bekijk hoe rijders verdienen",
        brandsLabel: "Merken",
        brandsBody:
          "Jouw merk beweegt door de stad, gedragen door fietsers die ervoor kozen. Geverifieerd bereik, niet geschat. Een doelgroep in beweging, niet aan het scrollen.",
        brandsCta: "Werk samen met MOVRR",
      },
      ctaTitle: "Waar ga je nu heen?",
      ctaLinks: [
        { audience: "Rijders", label: "Download de app", description: "Begin vandaag met verdienen", href: "/riders" },
        { audience: "Merken", label: "Werk samen met MOVRR", description: "Praat met het team", href: "/brands" },
      ],
    },
    blog: {
      titleLine1: "Vanaf het", titleLine2: "platform.", read: "Lees", readArticle: "Lees artikel", imageAlt: "MOVRR-platform — uitgelicht artikel",
      featured: { category: "Product", date: "12 mrt 2025", readTime: "6 min lezen", title: "Waarom bewegingsdata het enige eerlijke signaal in stedelijke reclame is", excerpt: "Impressies, klikratio's en view-through-attributie meten nabijheid, geen deelname. MOVRR vertrekt vanuit een ander uitgangspunt.", href: "#" },
      secondary: [
        { category: "Steden", date: "28 feb 2025", readTime: "4 min lezen", title: "Wat Amsterdam ons leerde over bouwen voor mensen die fietsen, niet alleen voor wie zichzelf fietser noemt" },
        { category: "Platform", date: "14 feb 2025", readTime: "5 min lezen", title: "Hoe we een kilometer verifiëren, en waarom gps alleen niet genoeg is" },
        { category: "Merken", date: "31 jan 2025", readTime: "3 min lezen", title: "De briefing die eindelijk klopte: bereik mensen terwijl ze bewegen" },
      ],
      posts: [
        { category: "Community", date: "17 jan 2025", readTime: "4 min lezen", title: "De rijders die vroegen: wat als de route zelf je betaalt?", excerpt: "Early-accessrijders gaven communityritten meer vorm dan welk productdocument ook. Dit leerden we." },
        { category: "Platform", date: "9 jan 2025", readTime: "5 min lezen", title: "Een beloningssysteem bouwen dat niet te manipuleren is", excerpt: "Bewegingsverificatie bestand maken tegen misbruik zonder echte rijders te benadelen kostte meer tijd dan verwacht." },
        { category: "Merken", date: "22 dec 2024", readTime: "3 min lezen", title: "Waarom we geverifieerd bereik prijzen, niet geschat bereik", excerpt: "De meeste advertentieplatforms verkopen beloften. Wij verkopen bewijs. Dat verandert structuur, prijs en meting." },
        { category: "Steden", date: "10 dec 2024", readTime: "4 min lezen", title: "Eén verificatielaag voor elke vervoersvorm", excerpt: "Fietsen, e-steps en lopen. Eén laag bouwen voor elke stedelijke mix liet ons anders denken." },
        { category: "Product", date: "27 nov 2024", readTime: "6 min lezen", title: "De keuzes die we vóór de lancering vastlegden", excerpt: "Sommige architectuurkeuzes zijn saai om uit te leggen en duur om terug te draaien. Dit zijn de onze." },
        { category: "Community", date: "14 nov 2024", readTime: "3 min lezen", title: "Waarom ritbegeleiders zich aanmelden in plaats van door een algoritme te worden gekozen", excerpt: "Communityritten hebben organisatoren nodig. Selectie op criteria in plaats van engagement verandert wie opstaat." },
      ],
    },
    press: {
      title: "Pers & Media",
      facts: [{ label: "Opgericht", value: "2024" }, { label: "Hoofdkantoor", value: "Rotterdam, Nederland" }, { label: "Categorie", value: "Beloningen op basis van beweging" }, { label: "Markten", value: "Europa — in lancering" }],
      coverageTitle: "Publicaties", selectedCoverage: "Selectie uit de media",
      coverage: [
        { outlet: "TechCrunch", date: "mrt 2025", headline: "MOVRR wil van elke fietsrit een merkcontact maken. Zonder de ruis.", type: "Achtergrond", href: "#" },
        { outlet: "The Economic Times", date: "feb 2025", headline: "Rotterdamse startup voor beloningen aan stadsfietsers haalt pre-seedronde op", type: "Nieuws", href: "#" },
        { outlet: "Forbes", date: "jan 2025", headline: "Reclame op basis van beweging is de volgende stap voor stedelijke mobiliteitsmerken", type: "Opinie", href: "#" },
        { outlet: "Sifted", date: "dec 2024", headline: "Vijf Europese mobiliteitsstartups om in 2025 te volgen", type: "Overzicht", href: "#" },
        { outlet: "Cycling Weekly", date: "nov 2024", headline: "Kan geverifieerde bewegingsdata sponsoring voor dagelijkse rijders verbeteren?", type: "Analyse", href: "#" },
      ],
      kit: { label: "Perskit", title: "Alles wat je nodig hebt om over MOVRR te publiceren.", description: "Logo's, screenshots, fotografie en merkrichtlijnen, klaar voor gebruik onder een standaard perslicentie.", briefings: "Briefings op aanvraag", assets: [
        { label: "Merklogo's", description: "SVG en PNG, lichte en donkere varianten", file: "movrr-logos.zip" },
        { label: "Productscreenshots", description: "App-UI van kernflows in hoge resolutie", file: "movrr-screenshots.zip" },
        { label: "Persfotografie", description: "Oprichters, product en lifestyle. Klaar voor drukwerk.", file: "movrr-photography.zip" },
        { label: "Merkrichtlijnen", description: "Lettertype, kleurenpalet en gebruiksregels", file: "movrr-brand-guidelines.pdf" },
      ] },
    },
    help: {
      title: "Hoe kunnen we helpen?", searchPlaceholder: "Zoek naar antwoorden…", topicsLabel: "Onderwerpen", notFound: "Niet gevonden wat je zoekt?", contact: "Neem contact op.",
      topics: [
        { id: "aan-de-slag", category: "Aan de slag", faqs: [
          { q: "Wat is MOVRR?", a: "MOVRR is een beloningsplatform op basis van beweging. Je verdient beloningen wanneer je binnen ondersteunde stadszones fietst. Merken financieren die voor geverifieerd bereik." },
          { q: "Hoe word ik lid van MOVRR?", a: "Download de MOVRR-app en maak een account aan. Na verificatie kun je vanaf je eerste kilometer verdienen." },
          { q: "In welke steden is MOVRR beschikbaar?", a: "MOVRR lanceert in Europa, te beginnen met Rotterdam en Den Haag. Nieuwe steden kondigen we aan voordat ze live gaan." },
        ] },
        { id: "beloningen-verdienen", category: "Beloningen verdienen", faqs: [
          { q: "Hoe worden beloningen berekend?", a: "Je verdient per geverifieerde kilometer. Het basistarief geldt voor geschikte beweging. Gesponsorde campagnes en communityritten kunnen meer opleveren." },
          { q: "Wat telt als geverifieerde kilometer?", a: "De MOVRR-app verifieert beweging. Ritten moeten voldoen aan snelheids- en duurgrenzen. Stilstaan en ritten buiten geschikte zones tellen niet." },
          { q: "Wanneer staan beloningen op mijn account?", a: "Beloningen verschijnen na elke rit als in behandeling. Na een campagne worden ze meestal binnen 24–72 uur bevestigd." },
          { q: "Is er een minimum voor uitbetaling?", a: "Ja. De minimale inwisseldrempel is € 5,00. Kleinere saldi blijven staan tot je die bereikt." },
        ] },
        { id: "communityritten", category: "Communityritten", faqs: [
          { q: "Wat zijn communityritten?", a: "Communityritten zijn groepsroutes van goedgekeurde MOVRR-rijders. Dezelfde verificatieregels gelden en campagnes kunnen een hoger tarief bieden." },
          { q: "Hoe word ik een goedgekeurde rijder?", a: "Voltooi voldoende geverifieerde ritten, behoud een goede accountstatus en meld je aan via Community in de app." },
          { q: "Kan ik meedoen zonder goedkeuring?", a: "Ja. Elke rijder kan deelnemen. Goedkeuring is alleen nodig om ritten te maken en leiden." },
        ] },
        { id: "account-privacy", category: "Account en privacy", faqs: [
          { q: "Welke gegevens verzamelt MOVRR?", a: "We verzamelen bewegings-, account- en interactiedata voor verificatie en beloningen. Individuele locatiegeschiedenis delen we nooit met merken." },
          { q: "Kan ik mijn account verwijderen?", a: "Ja. Vraag verwijdering aan via Instellingen in de app. We verwerken dit binnen 30 dagen en bevestigen per e-mail." },
          { q: "Hoe wijzig ik mijn betaalgegevens?", a: "Ga in de app naar Instellingen → Betaling. Wijzigingen gelden vanaf de volgende uitbetalingscyclus." },
        ] },
        { id: "voor-merken", category: "Voor merken", faqs: [
          { q: "Hoe werkt MOVRR voor merken?", a: "Merken financieren campagnes rond routes, zones of gedrag en betalen voor geverifieerde betrokkenheid in plaats van geschatte impressies." },
          { q: "Welke rapportage krijgen merken?", a: "Campagnedashboards tonen realtime en achteraf geverifieerd bereik, routedekking en betrokkenheid per zone." },
        ] },
      ],
    },
    careers: {
      hero: {
        titleLine1: "We bouwen het platform",
        titleLine2: "waarop steden bewegen.",
        description:
          "MOVRR staat aan het begin. De keuzes van nu bepalen wat MOVRR wordt. We zoeken mensen die op de lange termijn denken.",
      },
      valuesLabel: "Hoe we werken",
      values: [
        { title: "Werk dat echt is.", description: "Het platform verifieert beweging. Beloningen worden verdiend. Het bereik is authentiek. Voor onszelf geldt dezelfde norm: geen theater, geen vage roadmaps." },
        { title: "Bouw het één keer, bouw het goed.", description: "We optimaliseren niet voor de demo. We bouwen infrastructuur voor hoe steden bewegen en nemen het onzichtbare werk net zo serieus als wat iedereen ziet." },
        { title: "Klein team, volledig eigenaarschap.", description: "Iedereen draagt een betekenisvol deel van het platform. Er zit geen laag mensen tussen jouw werk en de impact ervan op het product." },
      ],
      rolesTitle: "Openstaande vacatures",
      positionsOpen: "vacatures open",
      roles: [
        { department: "Engineering", title: "Senior Full-Stack Engineer", location: "Rotterdam / Remote", type: "Fulltime" },
        { department: "Engineering", title: "Mobile Engineer (React Native)", location: "Rotterdam / Remote", type: "Fulltime" },
        { department: "Product", title: "Product Designer", location: "Rotterdam / Remote", type: "Fulltime" },
        { department: "Operations", title: "Rider Community Lead", location: "Rotterdam", type: "Fulltime" },
        { department: "Growth", title: "Brand Partnerships Manager", location: "Rotterdam / Amsterdam", type: "Fulltime" },
      ],
      openApplication: "Staat jouw rol er niet bij?",
      openApplicationCta: "Stuur ons toch een bericht.",
    },
    contact: {
      header: {
        titleLine1: "Neem",
        titleLine2: "contact op.",
        description:
          "Het juiste contact hangt af van wie je bent. Vind jouw route hieronder.",
      },
      paths: [
        { audience: "Merken & bureaus", index: "01", heading: "Voer een campagne met MOVRR", description: "Of je nu een campagne voert of plant, ons team behandelt merkvragen rechtstreeks. Bereik, prijs en campagnestructuur bespreken we in één gesprek.", channel: "hello@movrr.nl", action: "Stuur een bericht", href: "mailto:hello@movrr.nl", note: "We reageren binnen één werkdag." },
        { audience: "Rijders", index: "02", heading: "Support voor rijders", description: "Vragen over inkomsten, verificatie of campagnes: ons supportteam behandelt ze allemaal rechtstreeks.", channel: "support@movrr.nl", action: "Neem contact op met support", href: "mailto:support@movrr.nl", note: "We reageren meestal binnen 24 uur." },
        { audience: "Pers & media", index: "03", heading: "Persvragen", description: "Schrijf je over MOVRR, reclame op basis van beweging of stedelijke mobiliteit? Ons persteam reageert snel en de perskit staat klaar.", channel: "press@movrr.nl", action: "Mail het persteam", href: "mailto:press@movrr.nl", note: "Perskit beschikbaar op aanvraag." },
      ],
      credentialsIntro:
        "Elk bericht komt bij het team terecht, niet in een ticketsysteem.",
    },
    partners: {
      hero: { titleLine1: "Bouw op de", titleLine2: "bewegingslaag.", description: "MOVRR is de infrastructuur onder geverifieerde stedelijke beweging. Raakt jouw platform aan hoe mensen door steden bewegen? Dan moeten we praten.", imageAlt: "MOVRR-platform" },
      typesTitle: "Met wie we samenwerken",
      types: [
        { index: "01", title: "Mobiliteitsplatforms", description: "Elke reis wordt een verdienmoment. MOVRR regelt verificatie en merkinfrastructuur — jij behoudt de ervaring.", fit: "API-integratie", cta: "Ontdek de API", href: "mailto:partners@movrr.nl" },
        { index: "02", title: "Steden en vervoersautoriteiten", description: "Geverifieerde bewegingsdata laat zien waar een stad heen gaat — en waar niet. Ontwerp betere infrastructuur en versnel actieve mobiliteit.", fit: "Data & inzichten", cta: "Praat met ons", href: "mailto:partners@movrr.nl" },
        { index: "03", title: "Fitness- en gezondheidsplatforms", description: "Jouw gebruikers bewegen al. Beloon die beweging zonder je product opnieuw te hoeven bouwen.", fit: "SDK + beloningen", cta: "Vraag toegang aan", href: "mailto:partners@movrr.nl" },
        { index: "04", title: "Zakelijke mobiliteitsprogramma's", description: "Koppel woon-werkbeloningen aan geverifieerde kilometers, niet aan zelfgerapporteerde ritten. Prikkels die betekenis hebben.", fit: "B2B-programma", cta: "Neem contact op", href: "mailto:partners@movrr.nl" },
      ],
      contactIntro: "We zijn selectief in onze partnerships. We bouwen liever enkele diepe integraties dan een lange lijst oppervlakkige. Als het past, schakelen we snel.",
      process: [
        { step: "01", text: "Stuur ons een bericht over je platform, toepassing en globale schaal." },
        { step: "02", text: "We reageren binnen twee werkdagen. Bij een goede match plannen we een gesprek van 30 minuten." },
        { step: "03", text: "Technische en commerciële voorwaarden bespreken we parallel, zonder lange inkooptrajecten." },
        { step: "04", text: "De integratie wordt afgebakend, afgesproken en live gezet. Zodra er afstemming is, gaan we snel." },
      ],
    },
    accessibility: {
      statement: { titleLine1: "Toegang is geen", titleLine2: "bijzaak.", targetLabel: "Conformiteitsdoel", target: "WCAG 2.1 niveau AA. Doorlopend. Geen eenmalige audit." },
      commitmentsLabel: "Onze toezeggingen",
      commitments: [
        { id: "01", title: "Toetsenbordnavigatie", description: "Elke pagina en functie is volledig met alleen een toetsenbord te bedienen. Een muis is niet nodig om te browsen, een rit af te ronden of beloningen in te wisselen." },
        { id: "02", title: "Ondersteuning voor schermlezers", description: "We gebruiken semantische HTML en ARIA-landmarks. Volgorde, labels en live-regio's worden getest met VoiceOver en NVDA." },
        { id: "03", title: "Kleurcontrast", description: "Alle tekst voldoet aan WCAG AA. Informatieve UI voldoet aan AAA. Contrast wordt bij elke designreview gecontroleerd." },
        { id: "04", title: "Minder beweging", description: "Animaties respecteren prefers-reduced-motion. Elk bewegend element heeft een statisch alternatief met dezelfde informatie." },
        { id: "05", title: "Focusbeheer", description: "Zichtbare focusindicatoren zijn overal aanwezig. Modals en overlays beheren focus correct, zonder toetsenbordvallen." },
        { id: "06", title: "Tekstalternatieven", description: "Betekenisvolle afbeeldingen hebben beschrijvende alt-tekst. Decoratieve beelden zijn als zodanig gemarkeerd. Grafieken bevatten tekstsamenvattingen." },
      ],
      contact: { label: "Een drempel gevonden?", description: "Vormt iets op het platform een drempel — een ontbrekend label, navigatieprobleem of contrastfout — dan horen we dat graag. Meldingen gaan rechtstreeks naar het team en krijgen prioriteit.", responseTitle: "Reactietijd", responseBody: "We bevestigen meldingen binnen 2 werkdagen en geven binnen 5 werkdagen een planning voor de oplossing.", complaintTitle: "Formele klacht", complaintBeforeLink: "Ben je niet tevreden met onze reactie, dan kun je contact opnemen met de Irish Human Rights and Equality Commission via", standardTitle: "Technische norm", standardBody: "We streven naar WCAG 2.1 niveau AA op het hele platform en deze website. Elk kwartaal voeren we een audit uit." },
    },
    sitemapPage: {
      title: "Alles op één plek.",
      description: "Alle pagina's op movrr.nl",
      sections: [
        { id: "01", category: "Platform", description: "Hoe MOVRR werkt en voor wie", primary: true, links: [{ label: "Zo werkt het", href: "/how-it-works" }, { label: "Beloningen", href: "/rewards" }, { label: "Merken", href: "/brands" }, { label: "Rijders", href: "/riders" }] },
        { id: "02", category: "Bedrijf", description: "Het team, verhaal en vacatures", primary: true, links: [{ label: "Over ons", href: "/about" }, { label: "Werken bij", href: "/careers" }, { label: "Pers & Media", href: "/press" }, { label: "Partners", href: "/partners" }, { label: "Journal", href: "/blog" }] },
        { id: "03", category: "Support", description: "Hulp en contactmogelijkheden", primary: false, links: [{ label: "Helpcentrum", href: "/help" }, { label: "Contact", href: "/contact" }] },
        { id: "04", category: "Juridisch", description: "Beleid, voorwaarden en jouw rechten", primary: false, links: [{ label: "Privacybeleid", href: "/privacy" }, { label: "Gebruiksvoorwaarden", href: "/terms" }, { label: "Cookiebeleid", href: "/cookies" }, { label: "Toegankelijkheid", href: "/accessibility" }] },
      ],
    },
    privacy: {
      title: "Privacybeleid", effectiveLabel: "Geldig vanaf", effectiveDate: "1 januari 2025", contentsLabel: "Inhoud", relatedLabel: "Gerelateerd",
      summary: "Hoe we persoonsgegevens verzamelen, gebruiken en beschermen. Bewegings- en locatiegegevens staan centraal in MOVRR; dit beleid legt uit hoe we ermee omgaan.",
      sections: [
        { id: "who-we-are", title: "Wie we zijn", paragraphs: ["MOVRR B.V., gevestigd in Rotterdam, exploiteert het MOVRR-platform en is verwerkingsverantwoordelijke voor de persoonsgegevens die hier worden beschreven.", "Vragen over privacy kun je sturen naar privacy@movrr.nl."] },
        { id: "what-we-collect", title: "Gegevens die we verzamelen", paragraphs: ["We verzamelen alleen gegevens die nodig zijn om MOVRR te exploiteren, beveiligen en verbeteren."], bullets: ["Account-, profiel- en apparaatgegevens van rijders, plus rit- en beloningshistorie", "Bewegings- en locatiegegevens om ritten te verifiëren", "Campagne-, facturatie- en zakelijke contactgegevens van merkpartners", "Website-analytics, toestemmingskeuzes en informatie uit formulieren"] },
        { id: "movement-data", title: "Bewegings- en locatiegegevens", paragraphs: ["GPS-route, afstand en duur worden alleen verzameld tijdens een actieve rit die je zelf start. De verzameling loopt door wanneer de app gesloten of geminimaliseerd is of het scherm uitstaat, zodat de rit veilig kan worden geverifieerd; Android toont daarbij een permanente melding en de verzameling stopt zodra de rit eindigt.", "We volgen je locatie nooit buiten actieve ritten, verkopen geen individuele routegegevens en delen geen herleidbare locatiegeschiedenis met merken. Merken ontvangen alleen geaggregeerde, geanonimiseerde cijfers zoals geverifieerde impressies, campagneafstand en heatmaps op zoneniveau.", "Bewegingsgegevens verwerken we op basis van jouw uitdrukkelijke toestemming. Je kunt die in je accountinstellingen intrekken; toekomstige ritten worden dan niet meer gevolgd."] },
        { id: "how-we-use-data", title: "Hoe we je gegevens gebruiken", paragraphs: ["We verwerken gegevens om de dienst te leveren, onze overeenkomst uit te voeren, wettelijke verplichtingen na te komen, gerechtvaardigde belangen te beschermen en toestemming uit te voeren waar vereist.", "We verkopen geen persoonsgegevens en gebruiken ze niet voor geautomatiseerde profilering met juridische of vergelijkbaar ingrijpende gevolgen."], bullets: ["Ritten verifiëren en beloningen berekenen", "Campagnes uitvoeren en geverifieerde bereikcijfers leveren", "Accounts, support en inwisselingen beheren", "Fraude detecteren, beveiligen en prestaties verbeteren", "Serviceberichten en marketing met toestemming versturen"] },
        { id: "your-rights", title: "Jouw rechten", paragraphs: ["Onder de AVG kun je via privacy@movrr.nl jouw rechten uitoefenen. We kunnen je identiteit controleren en reageren binnen 30 dagen.", "Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens."], bullets: ["Inzage en een kopie van je gegevens", "Onjuiste gegevens corrigeren", "Verwijdering of beperking aanvragen", "Bezwaar maken tegen bepaalde verwerking", "Gegevensoverdraagbaarheid waar van toepassing", "Toestemming altijd intrekken zonder gevolgen voor eerdere rechtmatige verwerking"] },
        { id: "data-retention", title: "Bewaartermijnen", paragraphs: ["We bewaren persoonsgegevens alleen zolang dat nodig is voor het beschreven doel of wettelijk vereist is."], bullets: ["Accountgegevens zolang het account actief is en 24 maanden na sluiting", "Rit- en bewegingsgegevens 36 maanden voor beloningsverificatie en geschillen", "Inwissel- en voucherrecords 7 jaar voor de wettelijke boekhouding", "Marketinggegevens totdat je je afmeldt of verwijdering aanvraagt"] },
        { id: "changes", title: "Wijzigingen in dit beleid", paragraphs: ["We kunnen dit beleid aanpassen wanneer het platform verandert. Materiële wijzigingen melden we geregistreerde gebruikers minimaal 14 dagen vóór de ingangsdatum per e-mail.", "Voortgezet gebruik na een wijziging geldt als aanvaarding. Vragen kun je sturen naar privacy@movrr.nl."] },
      ],
      relatedLinks: [{ label: "Cookiebeleid", href: "/cookies" }, { label: "Gebruiksvoorwaarden", href: "/terms" }, { label: "Account verwijderen", href: "/account-deletion" }],
    },
    terms: {
      title: "Gebruiksvoorwaarden", effectiveLabel: "Geldig vanaf", effectiveDate: "1 januari 2025", contentsLabel: "Inhoud", relatedLabel: "Gerelateerd",
      summary: "De voorwaarden voor het gebruik van MOVRR door rijders die verdienen met geverifieerde beweging en merken die campagnes voeren.",
      sections: [
        { id: "platform", title: "Het platform", paragraphs: ["MOVRR verbindt fietsers en merken via geverifieerde beweging. Rijders verdienen beloningen; merken krijgen fysieke zichtbaarheid met toestemming en geverifieerde rapportages.", "Door een account te maken of MOVRR te gebruiken ga je akkoord met deze voorwaarden."] },
        { id: "rider-accounts", title: "Accounts van rijders", paragraphs: ["Je moet minimaal 18 zijn, correcte informatie verstrekken, je inloggegevens beschermen en bent verantwoordelijk voor activiteit op je account.", "MOVRR kan accounts opschorten of sluiten bij onjuiste informatie, schending van voorwaarden of vermoedelijke fraude."] },
        { id: "earning-rewards", title: "Verdienen en beloningen", paragraphs: ["Beloningen hangen af van geverifieerde afstand, route en duur. Manipulatie of vervalsing kan leiden tot permanente opschorting.", "Basistarieven en inwisselopties staan in de app en kunnen voor de toekomst wijzigen. Merkcampagnes en gesponsorde communityritten kunnen hogere tarieven bieden."] },
        { id: "brand-campaigns", title: "Merkcampagnes", paragraphs: ["Voor merkpartners geldt ook de Brand Partner Agreement. Creatief materiaal moet voldoen aan reclameregels; MOVRR kan materiaal weigeren.", "Publieke claims over campagneprestaties moeten de geverifieerde MOVRR-cijfers correct weergeven."] },
        { id: "acceptable-use", title: "Toegestaan gebruik", paragraphs: ["Je gebruikt MOVRR rechtmatig en verstoort de dienst of andere gebruikers niet."], bullets: ["Geen ritdata vervalsen of geautomatiseerde activiteit genereren", "Geen gegevens van andere gebruikers benaderen", "Geen schadelijke code uploaden of de app reverse-engineeren", "Geen rechten schenden of het platform schadelijk of onrechtmatig gebruiken"] },
        { id: "platform-rights", title: "Rechten en beschikbaarheid van het platform", paragraphs: ["MOVRR kan functies wijzigen, opschorten of beëindigen en geeft waar praktisch redelijke kennisgeving. Beschikbaarheid is niet gegarandeerd.", "Materiële wijzigingen aan deze voorwaarden worden vooraf gecommuniceerd. Voortgezet gebruik daarna geldt als aanvaarding."] },
        { id: "governing-law", title: "Toepasselijk recht", paragraphs: ["Op deze voorwaarden is het recht van Ierland van toepassing. Geschillen die uit deze voorwaarden voortvloeien vallen onder de exclusieve bevoegdheid van de Ierse rechtbanken.", "Als een bepaling niet afdwingbaar blijkt, blijven de overige bepalingen volledig van kracht. Vragen kun je sturen naar hello@movrr.nl."] },
      ],
      relatedLinks: [{ label: "Privacybeleid", href: "/privacy" }, { label: "Cookiebeleid", href: "/cookies" }],
    },
    cookies: {
      title: "Cookiebeleid", effectiveLabel: "Geldig vanaf", effectiveDate: "1 januari 2025", contentsLabel: "Inhoud", relatedLabel: "Gerelateerd",
      summary: "Hoe we cookies op deze website gebruiken, wat elke categorie doet en hoe je voorkeuren beheert.",
      sections: [
        { id: "what-cookies-are", title: "Wat cookies zijn", paragraphs: ["Cookies zijn kleine tekstbestanden die je browser opslaat. Vergelijkbare technologie kan voor dezelfde doelen identificatoren opslaan of uitlezen.", "Dit beleid geldt voor movrr.nl en hoort bij ons Privacybeleid."] },
        { id: "cookie-categories", title: "Cookiecategorieën", paragraphs: ["Strikt noodzakelijke cookies ondersteunen beveiliging, toestemming en kernfuncties en kunnen niet via onze tool worden uitgeschakeld.", "Prestatie- en analyticscookies helpen geaggregeerd gebruik begrijpen. Functionele cookies onthouden keuzes. Marketingcookies meten campagne-effectiviteit. Niet-essentiële categorieën gebruiken we alleen met toestemming waar vereist."] },
        { id: "specific-cookies", title: "Cookies die we gebruiken", paragraphs: ["Noodzakelijke opslag omvat toestemmingsvoorkeuren en essentiële sessie- en beveiligingswaarden. Analytics kan privacyvriendelijke meettools omvatten. Functionele opslag onthoudt instellingen zoals taal.", "Leveranciers en bewaartermijnen kunnen wijzigen; de toestemmingstool toont de actieve categorieën."] },
        { id: "managing-cookies", title: "Cookies beheren", paragraphs: ["Via de toestemmingsinterface kun je niet-essentiële cookies accepteren, weigeren of instellen. Je kunt je keuze later aanpassen en cookies in je browser verwijderen of blokkeren.", "Het blokkeren van noodzakelijke cookies kan delen van de site onbruikbaar maken. Opt-outtools van leveranciers kunnen extra controle bieden."] },
        { id: "changes", title: "Wijzigingen in dit beleid", paragraphs: ["We kunnen dit beleid aanpassen wanneer onze technologie of wettelijke verplichtingen wijzigen. De ingangsdatum toont de nieuwste versie.", "Vragen over cookies of toestemming kun je sturen naar privacy@movrr.nl."] },
      ],
      relatedLinks: [{ label: "Privacybeleid", href: "/privacy" }, { label: "Gebruiksvoorwaarden", href: "/terms" }],
    },
    accountDeletion: {
      title: "Je account verwijderen", effectiveLabel: "Geldig vanaf", effectiveDate: "14 juli 2026", contentsLabel: "Inhoud", relatedLabel: "Gerelateerd",
      summary: "Zo verwijder je jouw MOVRR-rijdersaccount en gekoppelde persoonsgegevens in de app, of op verzoek als je niet meer kunt inloggen.",
      sections: [
        { id: "which-app", title: "Voor welke app dit geldt", paragraphs: ["Dit proces geldt voor de MOVRR-rijdersapp, inclusief Android-package nl.movrr.app en de bijbehorende iOS-app. MOVRR B.V. in Rotterdam is verwerkingsverantwoordelijke."] },
        { id: "delete-in-app", title: "Je account verwijderen in de app", paragraphs: ["De snelste route loopt rechtstreeks via de MOVRR-app. Na bevestiging start de verwijdering."], bullets: ["Open MOVRR en log in", "Ga naar Account → Gegevens & privacy", "Kies Account verwijderen", "Bevestig wanneer daarom wordt gevraagd"] },
        { id: "delete-by-email", title: "Verwijdering aanvragen per e-mail", paragraphs: ["Kun je niet inloggen, mail dan vanaf het gekoppelde adres naar privacy@movrr.nl met als onderwerp ‘Verzoek tot accountverwijdering’. We kunnen je identiteit controleren en bevestigen de afronding.", "Je hoeft geen reden op te geven."] },
        { id: "what-we-delete", title: "Wat we verwijderen", paragraphs: ["We verwijderen of anonimiseren gegevens die jou kunnen identificeren onomkeerbaar."], bullets: ["Profiel- en contactgegevens", "Locatie, gps, routes en ritgeschiedenis", "Campagnegegevens, puntensaldo en verdienhistorie", "Geregistreerde apparaten en notificatietokens", "Voorkeuren en instellingen", "Communityritten en geüploade afbeeldingen"] },
        { id: "what-we-keep", title: "Wat we bewaren, en waarom", paragraphs: ["Beperkte gegevens kunnen blijven bestaan als de wet dat vereist of om het platform te beschermen. Ze worden geminimaliseerd en waar mogelijk gepseudonimiseerd."], bullets: ["Ingewisselde beloningen en transactiegegevens voor de boekhouding", "Beveiligings- en antifraudelogs gedurende een evenredige periode", "Geaggregeerde anonieme statistieken"] },
        { id: "unredeemed-points", title: "Niet-ingewisselde MOVRR Points", paragraphs: ["Niet-ingewisselde MOVRR Points vervallen definitief bij verwijdering. Ze hebben geen geldwaarde en kunnen niet worden overgedragen of uitbetaald.", "Wissel een beschikbaar saldo in voordat je jouw account verwijdert."] },
        { id: "how-long", title: "Hoelang verwijdering duurt", paragraphs: ["Je account is niet meer toegankelijk zodra verwijdering is bevestigd of een e-mailverzoek is geverifieerd. Persoonsgegevens worden binnen 30 dagen uit actieve systemen verwijderd.", "Versleutelde back-ups verlopen binnen 90 dagen via normale rotatie."] },
        { id: "other-rights", title: "Jouw andere privacyrechten", paragraphs: ["Verwijdering is één AVG-recht. Je kunt ook inzage, correctie, overdraagbaarheid of beperking aanvragen en bezwaar maken. Het Privacybeleid legt dit uit.", "Neem contact op via privacy@movrr.nl of dien een klacht in bij de Autoriteit Persoonsgegevens."] },
      ],
      relatedLinks: [{ label: "Privacybeleid", href: "/privacy" }, { label: "Gebruiksvoorwaarden", href: "/terms" }],
    },
  },
};
