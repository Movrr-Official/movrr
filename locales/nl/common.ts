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
      riders: "Fietsers",
      signIn: "Inloggen",
      getStarted: "Aan de slag",
      openMenu: "Navigatiemenu openen",
      closeMenu: "Navigatiemenu sluiten",
    },
    footer: {
      ctaTitle: "Laat elke rit meetellen.",
      ctaBody: "Voor fietsers, merken en de stad.",
      startEarning: "Meld je aan",
      talkToSales: "Bespreek een campagne",
      tagline: "Elke rit beloond. Elk bereik onderbouwd.",
      sectionPlatform: "Platform",
      sectionCompany: "Bedrijf",
      sectionResources: "Informatie",
      sectionLegal: "Juridisch",
      about: "Over ons",
      careers: "Werken bij",
      press: "Pers",
      contact: "Contact",
      help: "Helpcentrum",
      blog: "Verhalen",
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
      checking: "Status wordt gecontroleerd…",
      operational: "Alle systemen operationeel",
      degraded: "Beperkte dienstverlening",
      disruption: "Storing",
    },
    earlyAccess: {
      ariaLabel: "Aankondiging over vroege toegang",
      dismiss: "Aankondiging sluiten",
      ctaAriaSuffix: "vroege toegang",
      riders: {
        badge: "Als eerste toegang",
        variants: [
          {
            headline:
              "MOVRR start in Rotterdam en Den Haag. Meld je aan voor de wachtlijst.",
            cta: "Naar de wachtlijst",
          },
          {
            headline:
              "Laat elke kilometer meetellen. Meld je aan en krijg als eerste toegang.",
            cta: "Meld je aan",
          },
        ],
      },
      brands: {
        badge: "Beperkt beschikbaar",
        variants: [
          {
            headline:
              "De eerste campagnes gaan van start. Er is nog ruimte voor enkele merken.",
            cta: "Bespreek een campagne",
          },
        ],
      },
      partners: {
        badge: "Aanmelden kan nu",
        variants: [
          {
            headline:
              "We openen de eerste technische en commerciële samenwerkingen.",
            cta: "Neem contact op",
          },
        ],
      },
    },
    consent: {
      bannerAria: "Cookietoestemming",
      title: "Over cookies",
      body: "Noodzakelijke cookies laten de site werken. Met jouw toestemming gebruiken we andere cookies om de site te verbeteren.",
      manage: "Zelf kiezen",
      manageAria: "Cookievoorkeuren beheren",
      acceptAll: "Alles accepteren",
      reject: "Alleen noodzakelijk",
      preferencesTitle: "Cookievoorkeuren",
      preferencesBody:
        "Bepaal welke cookies we mogen gebruiken. Je kunt je keuze later altijd aanpassen.",
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
            "Deze cookies zijn nodig voor de werking en beveiliging van de website, bijvoorbeeld om je sessie en accounttoegang te beschermen. Je kunt ze niet uitschakelen.",
          required: true,
        },
        {
          key: "analytics",
          label: "Analyse en prestaties",
          description:
            "Laten zien hoe bezoekers de site gebruiken, welke pagina's populair zijn en hoe bezoekers ons vinden. We bekijken deze gegevens alleen op groepsniveau.",
        },
        {
          key: "marketing",
          label: "Marketing",
          description:
            "Meten welke campagnes bezoekers naar deze site brengen. We gebruiken deze cookies niet om je later opnieuw advertenties te tonen.",
        },
      ],
    },
    notFound: {
      titleLine1: "Pagina niet",
      titleLine2: "gevonden.",
      description:
        "Deze pagina bestaat niet of is verplaatst. Vanaf de homepage vind je snel de juiste route.",
      backHome: "Naar de homepage",
    },
  },
  metadata: {
    siteName: "MOVRR",
    keywords: [
      "beloningen voor fietsritten",
      "mobiliteitsplatform",
      "beloningen voor fietsers",
      "merkactivatie",
      "geverifieerde ritten",
      "fietsbeloningen",
    ],
    pages: {
      home: {
        title: "Beloningen voor fietsers, bereik voor merken",
        description:
          "MOVRR beloont geverifieerde fietsritten en geeft merken aantoonbaar bereik in de stad.",
      },
      waitlist: {
        title: "Meld je aan voor de wachtlijst",
        description:
          "MOVRR start stad voor stad. Meld je aan als fietser, merk of partner en hoor als eerste wanneer jouw stad aan de beurt is.",
      },
      howItWorks: {
        title: "Zo werkt het",
        description:
          "Ontdek hoe fietsers met hun ritten verdienen en merken aantoonbaar bereik opbouwen.",
      },
      rewards: {
        title: "Beloningen",
        description:
          "Elke geverifieerde kilometer levert MOVRR Points op. Doe vrijwillig mee aan een merkcampagne en verdien meer.",
      },
      brands: {
        title: "Voor merken",
        description:
          "Bereik actieve stadsfietsers met campagnes waarvan elke kilometer en elk contactmoment aantoonbaar is.",
      },
      riders: {
        title: "Voor fietsers",
        description:
          "Verdien MOVRR Points met elke geverifieerde kilometer. Meedoen aan een merkcampagne is altijd jouw keuze.",
      },
      about: {
        title: "Over ons",
        description:
          "MOVRR maakt dagelijkse fietsritten waardevol voor fietsers, merken en steden.",
      },
      blog: {
        title: "Verhalen",
        description:
          "Verhalen en inzichten over fietsen, steden en de techniek achter MOVRR.",
      },
      press: {
        title: "Pers en media",
        description:
          "Nieuws, persmateriaal en contactgegevens voor journalisten en redacties.",
      },
      help: {
        title: "Helpcentrum",
        description:
          "Antwoorden over MOVRR Points, ritverificatie, groepsritten, je account en meer.",
      },
      careers: {
        title: "Werken bij",
        description:
          "Werk mee aan een platform dat fietsen in de stad meer waard maakt. Bekijk onze vacatures.",
      },
      contact: {
        title: "Contact",
        description:
          "Neem contact op over campagnes, hulp voor fietsers, samenwerkingen of persvragen.",
      },
      partners: {
        title: "Partners",
        description:
          "Koppel MOVRR aan mobiliteitsplatforms, steden, gezondheidsapps en zakelijke fietsprogramma's.",
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
          "De voorwaarden voor fietsers en merkpartners die MOVRR gebruiken.",
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
        imageAlt: "Fietsers onderweg door de stad",
        titleLine1: "Elke rit",
        titleLine2: "telt.",
        description:
          "Fiets door de stad en verdien met elke kilometer. Merken bereiken mensen waar ze echt onderweg zijn.",
        riderCta: "Meld je aan als fietser",
        brandCta: "Bekijk de mogelijkheden",
      },
      valueStrip: {
        titleLine1: "Echte ritten.",
        titleLine2: "Aantoonbaar resultaat.",
        learnMore: "Zo werkt het",
        description:
          "MOVRR beloont fietsers voor hun dagelijkse kilometers. Merken bouwen bereik op in de straten waar het gebeurt.",
        values: [
          {
            title: "Verdien met elke rit",
            description:
              "Elke geverifieerde kilometer levert MOVRR Points op. Meedoen aan een campagne levert extra op.",
          },
          {
            title: "Zichtbaar in de stad",
            description:
              "Bereik mensen op hun dagelijkse route, gedragen door fietsers die daar zelf voor kiezen.",
          },
          {
            title: "Resultaat dat klopt",
            description:
              "Elke kilometer geverifieerd. Elk resultaat helder gerapporteerd.",
          },
        ],
      },
      useCases: {
        titleLine1: "Eén platform.",
        titleLine2: "Drie mogelijkheden.",
        description:
          "Voor dagelijkse beloningen, zichtbare merkcampagnes en programma's die meer mensen op de fiets krijgen.",
        items: [
          {
            title: "Elke dagelijkse rit beloond",
            category: "Voor fietsers",
            description:
              "Verdien MOVRR Points met je gewone ritten. Kies zelf of je met een merkcampagne extra wilt verdienen.",
            imageAlt: "Fietser bekijkt verdiende MOVRR Points",
          },
          {
            title: "Dagelijks zichtbaar of één groot moment",
            category: "Voor merken",
            description:
              "Kies een Destination Ride voor doorlopend bereik of een Swarm voor een opvallend moment in de stad.",
            imageAlt: "Gesponsorde groepsrit door de stad",
          },
          {
            title: "Meer mensen op de fiets",
            category: "Voor steden en partners",
            description:
              "Bouw programma's die fietsen aantrekkelijker maken voor buurten, werkgevers en hele steden.",
            imageAlt: "Fietsers langs een stedelijke waterkant",
          },
        ],
      },
      metrics: {
        titleLine1: "Wat een campagne",
        titleLine2: "kan opleveren.",
        description:
          "Een onderbouwde prognose van het bereik binnen actieve fietsnetwerken in de stad.",
        imageAlt: "Fiets met MOVRR-branding",
        items: [
          {
            value: "400K — 1,2M",
            label: "Verwacht maandbereik",
            description:
              "Verwachte contactmomenten binnen een actief netwerk van fietsers.",
          },
          {
            value: "VANAF € 3,50",
            label: "Per 1.000 contactmomenten",
            description:
              "Zichtbaarheid in de openbare ruimte, onderbouwd met ritgegevens.",
          },
          {
            value: "UNIEK BEREIK",
            label: "Bereik midden in de stad",
            description:
              "Mensen onderweg op de plekken waar jouw merk relevant is.",
          },
        ],
      },
      appPreview: {
        imageAlt: "MOVRR-app op het stuur van een fiets",
        routeName: "Ronde Rotterdam Centraal",
        routeDetails: "5 KM — 45 MIN",
      },
      howItWorks: {
        titleLine1: "Twee kanten.",
        titleLine2: "Eén platform.",
        description:
          "Fietsers verdienen met hun kilometers. Merken bouwen aantoonbaar bereik op.",
        steps: [
          {
            number: "01",
            label: "Fietsers",
            title: "Fiets en verdien",
            description:
              "Woon-werk, boodschappen of een omweg voor je plezier: elke geverifieerde kilometer telt.",
            side: "left",
          },
          {
            number: "01",
            label: "Merken",
            title: "Kies je campagne",
            description:
              "Kies de stad, doelgroep, looptijd en het budget. Vooraf weet je precies waar je aan toe bent.",
            side: "right",
          },
          {
            number: "02",
            label: "Fietsers",
            title: "Doe mee als jij dat wilt",
            description:
              "Je kiest zelf welke campagne je op je fiets meeneemt. Als je meedoet, verdien je extra.",
            side: "left",
          },
          {
            number: "02",
            label: "Merken",
            title: "Start de campagne",
            description:
              "Fietsers nemen jouw campagne mee op hun gewone routes door de stad.",
            side: "right",
          },
          {
            number: "03",
            label: "Fietsers",
            title: "Zie je punten oplopen",
            description:
              "Na elke geverifieerde rit zie je wat je hebt verdiend. Je MOVRR Points blijven van jou.",
            side: "left",
          },
          {
            number: "03",
            label: "Merken",
            title: "Volg het resultaat",
            description:
              "Volg kilometers, bereik en deelname terwijl de campagne loopt. Stuur bij waar nodig.",
            side: "right",
          },
        ],
      },
      safety: {
        imageAlt: "MOVRR-app op een apparaat",
        title: "Je merk in goede handen",
        description:
          "Elke rit wordt geverifieerd en elke plaatsing gecontroleerd. Zo blijft het resultaat betrouwbaar.",
        integrityTitle: "Betrouwbaar geregeld",
        points: [
          {
            title: "Geverifieerde deelname",
            description:
              "We controleren iedere rit op afstand, route en werkelijk gereden kilometers.",
          },
          {
            title: "Privacy als uitgangspunt",
            description:
              "Je persoonlijke routes blijven privé. Merken zien alleen geanonimiseerde resultaten.",
          },
          {
            title: "Merkveilige plaatsingen",
            description:
              "We controleren iedere campagne en plaatsing voordat die de straat op gaat.",
          },
        ],
      },
    },
    waitlist: {
      hero: {
        wave: "Golf 01",
        titleLine1: "Als eerste",
        titleLine2: "de stad in.",
        description:
          "MOVRR start stad voor stad. Meld je aan en hoor als eerste wanneer jouw stad aan de beurt is.",
        citiesLabel: "Lancering in 2026",
        cities: ["Rotterdam", "Den Haag", "Amsterdam", "Utrecht"],
      },
      form: {
        heading: "Meld je aan.",
        introduction:
          "We beginnen in Rotterdam en Den Haag. Wie op de wachtlijst staat, krijgt als eerste bericht en toegang.",
        benefits: [
          {
            label: "Als eerste op de hoogte",
            note: "Je krijgt bericht zodra MOVRR in jouw stad start.",
          },
          {
            label: "Als eerste toegang",
            note: "Probeer MOVRR vóór de openbare lancering en deel je ervaring.",
          },
          {
            label: "Zonder verplichtingen",
            note: "Aanmelden kost niets en verplicht je nergens toe.",
          },
        ],
        audienceLabel: "Ik ben een",
        audiences: [
          {
            id: "rider",
            label: "Fietser",
            description:
              "Je fietst door de stad en wilt je kilometers laten meetellen.",
            submitLabel: "Meld me aan als fietser",
            namePlaceholder: "Je naam",
          },
          {
            id: "brand",
            label: "Merk",
            description:
              "Je zoekt aantoonbaar bereik onder actieve stadsfietsers.",
            submitLabel: "Meld mijn merk aan",
            namePlaceholder: "Je naam of bedrijfsnaam",
          },
          {
            id: "partner",
            label: "Partner",
            description:
              "Je bouwt een product of platform voor stedelijke mobiliteit.",
            submitLabel: "Meld me aan als partner",
            namePlaceholder: "Je naam of bedrijfsnaam",
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
          { id: "interested", label: "Nog niet, maar ik heb interesse" },
          { id: "planning", label: "Ik ben van plan er een te kopen" },
        ],
        validation: {
          nameRequired: "Vul je naam in.",
          emailInvalid: "Vul een geldig e-mailadres in.",
          cityRequired: "Vul je stad in.",
        },
        submitting: "Aanmelden…",
        noSpam: "Alleen relevante updates. Afmelden kan altijd.",
        success: {
          eyebrow: "Je staat op de wachtlijst.",
          title: "Je bent erbij.",
          cityPrefix: "Je krijgt bericht zodra MOVRR start in",
          cityFallback: "jouw stad",
          registeredAs: "Geregistreerd als",
          audienceNames: {
            rider: "fietser",
            brand: "merk",
            partner: "partner",
          },
        },
        errors: {
          invalid: "Controleer de ingevulde gegevens.",
          duplicate: "Dit e-mailadres staat al op de lijst.",
          generic: "Er ging iets mis. Probeer het opnieuw.",
        },
      },
    },
    howItWorks: {
      hero: {
        titleLine1: "Zo werkt",
        titleLine2: "MOVRR.",
        description:
          "Fietsers verdienen met hun ritten. Merken krijgen aantoonbaar bereik in de stad.",
        riders: "Fietsers",
        forRiders: "Voor fietsers",
        brands: "Merken",
        forBrands: "Voor merken",
      },
      riders: {
        titleLine1: "Jij fietst.",
        titleLine2: "MOVRR telt mee.",
        description:
          "Elke geverifieerde kilometer levert MOVRR Points op. Meedoen aan een merkcampagne is altijd jouw keuze.",
        steps: [
          {
            number: "01",
            title: "Fiets zoals je altijd doet",
            description:
              "Naar je werk, de winkel of gewoon een ronde door de stad. Elke geverifieerde kilometer telt.",
          },
          {
            number: "02",
            title: "Kies zelf een campagne",
            description:
              "Wil je extra verdienen? Kies dan een merkcampagne die bij je past. Meedoen is altijd vrijwillig.",
          },
          {
            number: "03",
            title: "Zie je punten oplopen",
            description:
              "Na iedere geverifieerde rit zie je hoeveel MOVRR Points je hebt verdiend.",
          },
        ],
      },
      brands: {
        titleLine1: "Van briefing",
        titleLine2: "naar de straat.",
        description:
          "Bereik actieve stadsfietsers met een campagne waarvoor ze bewust kiezen.",
        steps: [
          {
            number: "01",
            title: "Stel je campagne samen",
            description:
              "Kies de stad, het format en de looptijd. Vooraf is helder wat je krijgt en wat het kost.",
          },
          {
            number: "02",
            title: "Ga de straat op",
            description:
              "Fietsers die bewust meedoen, nemen jouw merk mee op hun dagelijkse routes.",
          },
          {
            number: "03",
            title: "Volg het resultaat",
            description:
              "Bekijk kilometers, bereik en deelname terwijl de campagne loopt.",
          },
        ],
      },
      platform: {
        titleLine1: "Vertrouwen",
        titleLine2: "zit ingebouwd.",
        description:
          "Ritten worden geverifieerd, fietsers geven toestemming en resultaten zijn inzichtelijk. Voor beide kanten.",
        pillars: [
          {
            number: "01",
            title: "Geverifieerde ritten",
            description:
              "Afstand, route en werkelijk gereden kilometers vormen de basis voor elke beloning en rapportage.",
          },
          {
            number: "02",
            title: "Privacy als uitgangspunt",
            description:
              "Je persoonlijke routes blijven privé. Merken zien patronen en totalen, geen individuele fietsers.",
          },
          {
            number: "03",
            title: "Direct inzicht",
            description:
              "Fietsers en merken zien hun resultaat zodra de ritgegevens zijn verwerkt.",
          },
          {
            number: "04",
            title: "Bewuste deelname",
            description:
              "Iedere fietser kiest zelf welke campagne op de fiets meegaat. Dat maakt het bereik geloofwaardig.",
          },
        ],
      },
      cta: {
        ridersLabel: "Fietsers",
        ridersTitleLine1: "Laat je volgende rit",
        ridersTitleLine2: "meetellen.",
        ridersBody:
          "Verdien MOVRR Points met elke geverifieerde kilometer. Een campagne meenemen is altijd jouw keuze.",
        ridersCta: "Meld je aan",
        brandsLabel: "Merken",
        brandsTitleLine1: "Breng je merk",
        brandsTitleLine2: "de stad in.",
        brandsBody:
          "We bespreken de stad, het gewenste bereik en een campagnevorm die daarbij past.",
        brandsCta: "Bespreek een campagne",
      },
    },
    rewards: {
      hero: {
        titleLine1: "Elke kilometer",
        titleLine2: "levert iets op.",
        description:
          "Je gewone fietsritten leveren MOVRR Points op. Met een merkcampagne verdien je extra.",
        cta: "Meld je aan",
        stats: [
          { value: "Automatisch", label: "Vanaf je eerste rit" },
          { value: "Elke km", label: "Op basis van gereden afstand" },
          { value: "Extra punten", label: "Als je voor een campagne kiest" },
        ],
      },
      mechanics: {
        titleLine1: "Fiets.",
        titleLine2: "Verdien. Kies zelf.",
        description:
          "MOVRR Points zijn gekoppeld aan je geverifieerde kilometers. Met of zonder campagne.",
        items: [
          {
            number: "01",
            title: "Wij verifiëren je rit",
            description:
              "We controleren afstand, route en werkelijk gereden kilometers voordat je punten worden toegekend.",
          },
          {
            number: "02",
            title: "Elke kilometer telt",
            description:
              "Je verdient automatisch MOVRR Points. Geen minimale afstand en niets extra's aanzetten.",
          },
          {
            number: "03",
            title: "Een campagne levert extra op",
            description:
              "Kies zelf een merkcampagne voor op je fiets. Zolang je meedoet, krijg je meer punten per kilometer.",
          },
        ],
      },
      imageAlt: "Fietser verdient MOVRR Points met geverifieerde kilometers",
      tiers: {
        titleLine1: "Drie manieren",
        titleLine2: "om meer te verdienen.",
        items: [
          {
            number: "01",
            label: "Basis",
            title: "Je dagelijkse rit",
            description:
              "Elke geverifieerde kilometer levert punten op. Zonder doel of minimale afstand.",
            detail: "MOVRR Points voor gereden kilometers",
          },
          {
            number: "02",
            label: "Extra",
            title: "Kies een merkcampagne",
            description:
              "Neem een campagne mee door de stad en verdien meer per geverifieerde kilometer.",
            detail: "Kilometers + campagnevergoeding",
          },
          {
            number: "03",
            label: "Samen",
            title: "Groepsritten",
            description:
              "Fiets een route van een stad of merk, alleen of met anderen. Voor sommige ritten geldt een extra beloning.",
            detail: "Open deelname of op uitnodiging",
          },
        ],
      },
      cta: {
        titleLine1: "Laat je volgende rit",
        titleLine2: "meetellen.",
        description:
          "Vanaf je eerste geverifieerde kilometer verdien je MOVRR Points.",
        primary: "Meld je aan",
        secondary: "Zo werkt het",
      },
    },
    brands: {
      hero: {
        titleLine1: "Je merk.",
        titleLine2: "Midden in de stad.",
        description:
          "Gedragen door fietsers die bewust voor jouw campagne kiezen. Elke kilometer aantoonbaar.",
        primary: "Bespreek een campagne",
        secondary: "Zo werkt het",
        imageAlt: "Fietsers dragen een merkcampagne door de stad",
      },
      reach: {
        titleLine1: "Niet op een scherm.",
        titleLine2: "Wel op straat.",
        items: [
          {
            number: "01",
            title: "Op dagelijkse routes",
            description:
              "Je campagne reist mee naar werk, winkels en door buurten waar stadsfietsers elke dag komen.",
          },
          {
            number: "02",
            title: "Bereik dat is onderbouwd",
            description:
              "Ritgegevens onderbouwen kilometers, zones en contactmomenten. Geen opgeblazen aantallen.",
          },
          {
            number: "03",
            title: "Fietsers kiezen bewust",
            description:
              "Iedere deelnemer kiest zelf voor jouw campagne. Dat maakt de zichtbaarheid geloofwaardig.",
          },
        ],
      },
      formats: [
        {
          index: "01",
          tag: "Altijd zichtbaar",
          nameTop: "Destination",
          nameBottom: "Ride",
          description:
            "Je merk reist mee op dagelijkse fietsroutes. Buurt voor buurt, dag na dag.",
          useCases: [
            "Langdurige aanwezigheid",
            "Lokaal bereik",
            "Woon-werkroutes",
          ],
          cta: "Bespreek een Destination Ride",
          dark: true,
        },
        {
          index: "02",
          tag: "Eén opvallend moment",
          nameTop: "Swarm",
          nameBottom: "Campagne",
          description:
            "Een groep fietsers trekt tegelijk door de stad. Eén route, één moment, volop zichtbaar.",
          useCases: [
            "Productintroducties",
            "Winkelopeningen",
            "Merkevenementen",
          ],
          cta: "Bespreek een Swarm",
          dark: false,
        },
      ],
      campaign: {
        titleLine1: "Van plan",
        titleLine2: "naar straatbeeld.",
        description:
          "We vertalen je briefing naar een campagne die past bij de stad en de fietsers die er rijden.",
        steps: [
          {
            number: "01",
            title: "Bepaal de kaders",
            description:
              "Kies de stad, zones, looptijd en het gewenste bereik.",
          },
          {
            number: "02",
            title: "Fietsers melden zich aan",
            description:
              "Deelnemers kiezen bewust voor jouw campagne en worden vóór de start geverifieerd.",
          },
          {
            number: "03",
            title: "Volg de campagne",
            description:
              "Bekijk gereden kilometers, zones en bereik terwijl de campagne loopt.",
          },
        ],
      },
      metrics: [
        {
          value: "400K — 1,2M",
          label: "Verwacht maandbereik",
          description:
            "Contactmomenten op straat, onderbouwd met geverifieerde ritgegevens.",
        },
        {
          value: "VANAF € 3,50",
          label: "Per 1.000 contactmomenten",
          description:
            "Een transparante indicatie van de kosten voor zichtbaarheid in de stad.",
        },
        {
          value: "100% VRIJWILLIG",
          label: "Bewuste deelname",
          description:
            "Iedere fietser kiest zelf voor de campagne die op de fiets meegaat.",
        },
      ],
      cta: {
        titleLine1: "Klaar voor",
        titleLine2: "de stad?",
        description:
          "Vertel ons waar en wie je wilt bereiken. Wij werken een passende campagne uit.",
        primary: "Bespreek een campagne",
        secondary: "Zo werkt het",
      },
      estimator: {
        label: "Bereikcalculator",
        titleLine1: "Bereken je bereik",
        titleLine2: "in de stad.",
        description:
          "Kies een stad en campagneschaal voor een eerste bereikprognose.",
        notes: [
          "De prognose is gebaseerd op verwachte deelname en ritgegevens.",
          "Iedere deelnemer kiest bewust voor jouw campagne.",
          "Na de start vervangen werkelijke campagneresultaten de prognose.",
        ],
        cityQuestion: "In welke stad wil je starten?",
        changeCity: "Kies een andere stad",
        statuses: {
          live: "Actief",
          upcoming: "Binnenkort",
          planned: "Gepland",
        },
        country: "Nederland",
        theHague: "Den Haag",
        scaleQuestionBefore: "Hoe groot wordt de campagne in",
        scaleQuestionAfter: "?",
        scales: {
          focused: {
            label: "Gericht",
            description: "Bereik in een aantal gekozen stadszones.",
          },
          "city-wide": {
            label: "Stadsbreed",
            description: "Dekking in alle actieve zones van de stad.",
          },
          "multi-city": {
            label: "Meerdere steden",
            description: "Eén campagne, afgestemd over meerdere steden.",
          },
        },
        reachLabel: "verwacht maandbereik",
        riders: "Fietsers",
        zones: "Stadszones",
        window: "Campagneduur",
        weeks: "weken",
        monthlyKm: "Verwachte kilometers per maand",
        talk: "Bespreek de uitkomst",
        reset: "Opnieuw berekenen",
        disclaimer:
          "Deze prognose gebruikt aannames van vóór de lancering. Na de start tonen we werkelijke campagneresultaten.",
        methodology: "Zo komt de prognose tot stand",
        participation: "Deelname fietsers",
        impressions: "Contactmomenten",
        campaignWindow: "Campagneduur",
        multiplier: "Correctie voor meerdere steden",
        dataBasis: "Uitgangspunten",
        activeRidersSuffix: "van de actieve fietsers",
        impressionsSuffix: "verwachte contactmomenten per fietser per dag",
        activationSuffix: "weken als standaardduur",
        multiplierSuffix: "voor het gecombineerde bereik van meerdere steden",
        dataBasisValue:
          "Aannames van vóór de lancering. Na de start gebruiken we geverifieerde campagneresultaten.",
      },
    },
    riders: {
      hero: {
        titleLine1: "Jij fietst.",
        titleLine2: "Je punten lopen op.",
        description:
          "Elke geverifieerde kilometer levert MOVRR Points op. Wissel ze in voor fietsartikelen, eten, vouchers en meer.",
        primary: "Meld je aan",
        secondary: "Bekijk de beloningen",
        imageAlt: "Fietser onderweg met MOVRR",
      },
      proposition: {
        titleLine1: "Jouw rit.",
        titleLine2: "Jij bepaalt.",
        items: [
          {
            title: "Op basis van echte kilometers",
            description:
              "Je MOVRR Points zijn gekoppeld aan de afstand die je daadwerkelijk fietst.",
          },
          {
            title: "Meedoen is jouw keuze",
            description:
              "Je kiest zelf of je een merkcampagne op je fiets wilt. Doe je mee, dan verdien je extra.",
          },
          {
            title: "Je routes blijven privé",
            description:
              "MOVRR anonimiseert ritgegevens. Merken zien alleen patronen en totalen, nooit jouw persoonlijke route.",
          },
        ],
      },
      earnings: {
        titleLine1: "Drie manieren",
        titleLine2: "om punten te verdienen.",
        items: [
          {
            number: "01",
            label: "Basis",
            title: "Je dagelijkse rit",
            description:
              "Elke geverifieerde kilometer levert MOVRR Points op. Geen doel en geen minimale afstand.",
            note: "Voor iedere fietser, vanaf de eerste rit",
          },
          {
            number: "02",
            label: "Extra",
            title: "Kies een merkcampagne",
            description:
              "Neem een campagne mee door de stad en verdien meer punten per geverifieerde kilometer.",
            note: "Meedoen is altijd jouw keuze",
          },
          {
            number: "03",
            label: "Samen",
            title: "Fiets een campagneroute",
            description:
              "Doe mee aan een route van een stad of merk. Met meer ritervaring krijg je toegang tot nieuwe campagnes.",
            note: "Open deelname of op uitnodiging",
          },
        ],
      },
      cta: {
        titleLine1: "Laat je volgende rit",
        titleLine2: "meetellen.",
        description:
          "Verdien MOVRR Points met elke geverifieerde kilometer. Een campagne meenemen is altijd jouw keuze.",
        primary: "Meld je aan",
        secondary: "Bekijk de beloningen",
      },
    },
    about: {
      hero: {
        titleLine1: "Begonnen bij",
        titleLine2: "de dagelijkse rit.",
        description:
          "Een platform dat fietsen beloont en merken aantoonbaar bereik geeft.",
      },
      origin: {
        titleLine1: "De stad beweegt al.",
        titleLine2: "Wij laten dat tellen.",
        body: "Elke dag fietsen mensen door de stad naar hun werk, de winkel of vrienden. Die kilometers hebben waarde. Voor de fietser én voor merken die op een geloofwaardige manier zichtbaar willen zijn. Daarom beloont MOVRR de rit en maakt het bereik aantoonbaar. Niet met nog een scherm, maar als onderdeel van de route.",
      },
      beliefsLabel: "Waar we in geloven",
      beliefs: [
        {
          statement: "Elke rit heeft waarde.\nOok de gewone.",
          elaboration:
            "MOVRR maakt die waarde zichtbaar en koppelt beloningen aan daadwerkelijk gereden kilometers.",
        },
        {
          statement: "Een campagne werkt beter als mensen bewust meedoen.",
          elaboration:
            "Iedere fietser kiest zelf welke campagne op de fiets meegaat. Zo ontstaat bereik met draagvlak.",
        },
        {
          statement: "Elk resultaat moet te herleiden zijn.",
          elaboration:
            "Onze rapportages zijn gebaseerd op geverifieerde ritgegevens, niet op opgeblazen schattingen.",
        },
      ],
      model: {
        titleLine1: "Eén platform.",
        titleLine2: "Twee kanten.",
        description:
          "Fietsers verdienen MOVRR Points met hun kilometers. Merken bereiken mensen die bewust kiezen voor een campagne. Beide kanten houden zelf de regie.",
        ridersLabel: "Fietsers",
        ridersBody:
          "Elke geverifieerde kilometer levert punten op. Met een merkcampagne verdien je extra, maar meedoen is nooit verplicht.",
        ridersCta: "Bekijk hoe je verdient",
        brandsLabel: "Merken",
        brandsBody:
          "Je merk reist door de stad met fietsers die daar bewust voor kiezen. Het resultaat wordt onderbouwd met ritgegevens.",
        brandsCta: "Bekijk de mogelijkheden",
      },
      ctaTitle: "Waar wil je beginnen?",
      ctaLinks: [
        {
          audience: "Fietsers",
          label: "Meld je aan",
          description: "Krijg als eerste toegang",
          href: "/riders",
        },
        {
          audience: "Merken",
          label: "Bekijk de mogelijkheden",
          description: "Bespreek een campagne",
          href: "/brands",
        },
      ],
    },
    blog: {
      titleLine1: "Verhalen van",
      titleLine2: "onderweg.",
      read: "Lees verder",
      readArticle: "Lees het artikel",
      imageAlt: "Uitgelicht artikel van MOVRR",
      featured: {
        category: "Product",
        date: "12 mrt 2025",
        readTime: "6 min leestijd",
        title: "Waarom ritgegevens meer zeggen dan een geschat bereik",
        excerpt:
          "Kliks en impressies vertellen wie in de buurt was. Ritgegevens laten zien wat er werkelijk gebeurde.",
        href: "#",
      },
      secondary: [
        {
          category: "Steden",
          date: "28 feb 2025",
          readTime: "4 min leestijd",
          title:
            "Wat Amsterdam ons leerde over bouwen voor iedereen die fietst",
        },
        {
          category: "Platform",
          date: "14 feb 2025",
          readTime: "5 min leestijd",
          title:
            "Hoe we een kilometer verifiëren — en waarom gps alleen niet genoeg is",
        },
        {
          category: "Merken",
          date: "31 jan 2025",
          readTime: "3 min leestijd",
          title: "Een betere briefing begint bij de route",
        },
      ],
      posts: [
        {
          category: "Fietsers",
          date: "17 jan 2025",
          readTime: "4 min leestijd",
          title: "Wat als je dagelijkse route iets oplevert?",
          excerpt:
            "De eerste testfietsers hielpen onze groepsritten vormgeven. Dit namen we daarvan mee.",
        },
        {
          category: "Platform",
          date: "9 jan 2025",
          readTime: "5 min leestijd",
          title: "Een beloningssysteem dat tegen misbruik kan",
          excerpt:
            "Misbruik tegengaan zonder eerlijke fietsers in de weg te zitten vroeg om zorgvuldige keuzes.",
        },
        {
          category: "Merken",
          date: "22 dec 2024",
          readTime: "3 min leestijd",
          title: "Waarom we alleen onderbouwd bereik rapporteren",
          excerpt:
            "Een campagne heeft meer aan bewijs dan aan beloften. Dat verandert hoe we opzetten, prijzen en meten.",
        },
        {
          category: "Steden",
          date: "10 dec 2024",
          readTime: "4 min leestijd",
          title: "Eén verificatielaag voor elke manier van reizen",
          excerpt:
            "Fietsen, e-steps en lopen vragen om één systeem dat verschillende vormen van stedelijke mobiliteit begrijpt.",
        },
        {
          category: "Product",
          date: "27 nov 2024",
          readTime: "6 min leestijd",
          title: "De keuzes die we vóór de lancering maakten",
          excerpt:
            "Sommige technische keuzes zie je nooit, maar bepalen wel wat een platform aankan. Dit zijn de onze.",
        },
        {
          category: "Fietsers",
          date: "14 nov 2024",
          readTime: "3 min leestijd",
          title: "Waarom een goede groepsrit begint bij de begeleider",
          excerpt:
            "Groepsritten hebben mensen nodig die verantwoordelijkheid nemen. Daarom kiezen we begeleiders op heldere criteria.",
        },
      ],
    },
    press: {
      title: "Pers en media",
      facts: [
        { label: "Opgericht", value: "2024" },
        { label: "Hoofdkantoor", value: "Rotterdam, Nederland" },
        { label: "Categorie", value: "Beloningen voor fietsritten" },
        { label: "Markten", value: "Start in Europa" },
      ],
      coverageTitle: "In de media",
      selectedCoverage: "Een selectie van publicaties",
      coverage: [
        {
          outlet: "TechCrunch",
          date: "mrt 2025",
          headline: "MOVRR maakt van elke fietsrit aantoonbaar merkbereik",
          type: "Achtergrond",
          href: "#",
        },
        {
          outlet: "The Economic Times",
          date: "feb 2025",
          headline:
            "Rotterdamse startup voor fietsbeloningen haalt pre-seedfinanciering op",
          type: "Nieuws",
          href: "#",
        },
        {
          outlet: "Forbes",
          date: "jan 2025",
          headline:
            "Waarom merken steeds vaker kiezen voor zichtbaarheid op straat",
          type: "Opinie",
          href: "#",
        },
        {
          outlet: "Sifted",
          date: "dec 2024",
          headline: "Vijf Europese mobiliteitsstartups om in 2025 te volgen",
          type: "Overzicht",
          href: "#",
        },
        {
          outlet: "Cycling Weekly",
          date: "nov 2024",
          headline:
            "Wat geverifieerde ritgegevens kunnen betekenen voor dagelijkse fietsers",
          type: "Analyse",
          href: "#",
        },
      ],
      kit: {
        label: "Perskit",
        title: "Alles voor een publicatie over MOVRR.",
        description:
          "Download logo's, screenshots, fotografie en merkrichtlijnen voor redactioneel gebruik.",
        briefings: "Toelichting op aanvraag",
        assets: [
          {
            label: "Merklogo's",
            description: "SVG en PNG, lichte en donkere varianten",
            file: "movrr-logos.zip",
          },
          {
            label: "Productscreenshots",
            description: "App-UI van kernflows in hoge resolutie",
            file: "movrr-screenshots.zip",
          },
          {
            label: "Persfotografie",
            description:
              "Oprichters, product en gebruiksbeelden voor print en online",
            file: "movrr-photography.zip",
          },
          {
            label: "Merkrichtlijnen",
            description: "Lettertype, kleurenpalet en gebruiksregels",
            file: "movrr-brand-guidelines.pdf",
          },
        ],
      },
    },
    help: {
      title: "Waar kunnen we mee helpen?",
      searchPlaceholder: "Zoek een antwoord…",
      topicsLabel: "Onderwerpen",
      notFound: "Staat je vraag er niet bij?",
      contact: "Neem contact op",
      topics: [
        {
          id: "aan-de-slag",
          category: "Aan de slag",
          faqs: [
            {
              q: "Wat is MOVRR?",
              a: "MOVRR beloont je voor geverifieerde fietsritten. Je verdient MOVRR Points met je dagelijkse kilometers. Merken financieren extra beloningen via vrijwillige campagnes.",
            },
            {
              q: "Hoe kan ik MOVRR gebruiken?",
              a: "Meld je aan en maak een account zodra MOVRR in jouw stad beschikbaar is. Vanaf je eerste geverifieerde kilometer verdien je MOVRR Points.",
            },
            {
              q: "In welke steden is MOVRR beschikbaar?",
              a: "MOVRR begint in Rotterdam en Den Haag en breidt daarna uit naar andere Europese steden. Als je op de wachtlijst staat, krijg je bericht zodra jouw stad aan de beurt is.",
            },
          ],
        },
        {
          id: "beloningen-verdienen",
          category: "Beloningen verdienen",
          faqs: [
            {
              q: "Hoe berekent MOVRR mijn beloning?",
              a: "Je verdient MOVRR Points per geverifieerde kilometer. Voor sommige merkcampagnes en groepsritten geldt een hoger tarief.",
            },
            {
              q: "Wanneer telt een kilometer mee?",
              a: "De MOVRR-app controleert of je rit voldoet aan de voorwaarden voor snelheid, duur en gebied. Stilstand en kilometers buiten actieve zones tellen niet mee.",
            },
            {
              q: "Wanneer zie ik mijn MOVRR Points?",
              a: "Na je rit verschijnen de punten eerst als ‘in behandeling’. Meestal zijn ze binnen 24 tot 72 uur definitief.",
            },
            {
              q: "Geldt er een minimumbedrag voor inwisselen?",
              a: "Ja. Je kunt je saldo inwisselen vanaf € 5,00. Een lager saldo blijft gewoon staan tot je de grens bereikt.",
            },
          ],
        },
        {
          id: "communityritten",
          category: "Groepsritten",
          faqs: [
            {
              q: "Wat zijn groepsritten?",
              a: "Groepsritten zijn routes die fietsers samen afleggen. De gewone verificatieregels blijven gelden. Soms hoort er een extra campagnebeloning bij.",
            },
            {
              q: "Hoe word ik ritbegeleider?",
              a: "Bouw eerst een goede ritgeschiedenis op en meld je daarna in de app aan als begeleider. We beoordelen elke aanvraag afzonderlijk.",
            },
            {
              q: "Kan ik zonder goedkeuring meefietsen?",
              a: "Ja. Iedere fietser kan aan een openbare groepsrit deelnemen. Goedkeuring is alleen nodig om zelf een rit te organiseren of begeleiden.",
            },
          ],
        },
        {
          id: "account-privacy",
          category: "Account en privacy",
          faqs: [
            {
              q: "Welke gegevens verzamelt MOVRR?",
              a: "We gebruiken account- en ritgegevens om kilometers te verifiëren en punten toe te kennen. We delen je persoonlijke route of locatiegeschiedenis nooit met merken.",
            },
            {
              q: "Kan ik mijn account verwijderen?",
              a: "Ja. Vraag verwijdering aan via Instellingen in de app. Je ontvangt een e-mail zodra de aanvraag is verwerkt. Dat gebeurt binnen 30 dagen.",
            },
            {
              q: "Hoe wijzig ik mijn betaalgegevens?",
              a: "Ga in de app naar Instellingen → Betaling. Je wijziging geldt vanaf de volgende uitbetaling.",
            },
          ],
        },
        {
          id: "voor-merken",
          category: "Voor merken",
          faqs: [
            {
              q: "Hoe werkt MOVRR voor merken?",
              a: "Merken voeren campagnes in gekozen steden, zones en periodes. Fietsers bepalen zelf of ze meedoen. De rapportage is gebaseerd op geverifieerde ritgegevens.",
            },
            {
              q: "Welke resultaten krijgen merken te zien?",
              a: "Het campagnedashboard toont gereden kilometers, dekking per zone, deelname en onderbouwd bereik tijdens en na de campagne.",
            },
          ],
        },
      ],
    },
    careers: {
      hero: {
        titleLine1: "Bouw mee aan",
        titleLine2: "de stad op de fiets.",
        description:
          "MOVRR staat aan het begin. Wat we nu kiezen, bepaalt wat het platform straks kan. Daarom zoeken we mensen die verder kijken dan de volgende release.",
      },
      valuesLabel: "Hoe we werken",
      values: [
        {
          title: "Doe werk dat ergens over gaat.",
          description:
            "We beloven alleen wat we kunnen onderbouwen. Dat geldt voor ons product, onze planning en hoe we samenwerken.",
        },
        {
          title: "Bouw voor de lange termijn.",
          description:
            "We bouwen niet voor een mooie demo, maar voor dagelijks gebruik in echte steden. Ook het werk achter de schermen moet kloppen.",
        },
        {
          title: "Neem verantwoordelijkheid.",
          description:
            "In een klein team heeft je werk direct invloed op het product. Je krijgt de ruimte én de verantwoordelijkheid die daarbij horen.",
        },
      ],
      rolesTitle: "Openstaande vacatures",
      positionsOpen: "vacatures open",
      roles: [
        {
          department: "Engineering",
          title: "Senior Full-Stack Engineer",
          location: "Rotterdam / op afstand",
          type: "Fulltime",
        },
        {
          department: "Engineering",
          title: "Mobile Engineer (React Native)",
          location: "Rotterdam / op afstand",
          type: "Fulltime",
        },
        {
          department: "Product",
          title: "Product Designer",
          location: "Rotterdam / op afstand",
          type: "Fulltime",
        },
        {
          department: "Operations",
          title: "Community Lead Fietsers",
          location: "Rotterdam",
          type: "Fulltime",
        },
        {
          department: "Growth",
          title: "Manager Merkpartnerschappen",
          location: "Rotterdam / Amsterdam",
          type: "Fulltime",
        },
      ],
      openApplication: "Staat jouw rol er niet bij?",
      openApplicationCta: "Stuur een open sollicitatie",
    },
    contact: {
      header: {
        titleLine1: "Neem",
        titleLine2: "contact op.",
        description:
          "Kies hieronder waarvoor je contact opneemt. Dan komt je bericht meteen bij het juiste team terecht.",
      },
      paths: [
        {
          audience: "Merken en bureaus",
          index: "01",
          heading: "Bespreek een campagne",
          description:
            "Vertel ons wat je wilt bereiken. In één gesprek bespreken we de stad, campagnevorm, planning en kosten.",
          channel: "hello@movrr.nl",
          action: "Neem contact op",
          href: "mailto:hello@movrr.nl",
          note: "Je krijgt binnen één werkdag antwoord.",
        },
        {
          audience: "Fietsers",
          index: "02",
          heading: "Hulp voor fietsers",
          description:
            "Heb je een vraag over MOVRR Points, ritverificatie, campagnes of je account? Ons supportteam helpt je verder.",
          channel: "support@movrr.nl",
          action: "Mail het supportteam",
          href: "mailto:support@movrr.nl",
          note: "Meestal krijg je binnen 24 uur antwoord.",
        },
        {
          audience: "Pers en media",
          index: "03",
          heading: "Persvragen",
          description:
            "Werk je aan een verhaal over MOVRR, buitenreclame of stedelijke mobiliteit? Ons persteam helpt met informatie, beeld en interviews.",
          channel: "press@movrr.nl",
          action: "Mail het persteam",
          href: "mailto:press@movrr.nl",
          note: "Persmateriaal is op aanvraag beschikbaar.",
        },
      ],
      credentialsIntro:
        "Je bericht komt rechtstreeks bij het juiste team terecht.",
    },
    partners: {
      hero: {
        titleLine1: "Koppel aan",
        titleLine2: "elke fietsrit.",
        description:
          "MOVRR verifieert stedelijke ritten en koppelt daar beloningen aan. Werk je aan mobiliteit, gezondheid of zakelijke fietsprogramma's? Laten we de mogelijkheden bespreken.",
        imageAlt: "Het MOVRR-platform",
      },
      typesTitle: "Met wie we samenwerken",
      types: [
        {
          index: "01",
          title: "Mobiliteitsplatforms",
          description:
            "Voeg ritverificatie en beloningen toe zonder je eigen gebruikerservaring uit handen te geven.",
          fit: "API-integratie",
          cta: "Bespreek de API",
          href: "mailto:partners@movrr.nl",
        },
        {
          index: "02",
          title: "Steden en vervoersregio's",
          description:
            "Geanonimiseerde ritgegevens laten zien waar mensen fietsen en waar routes tekortschieten. Gebruik die inzichten voor beter beleid en betere infrastructuur.",
          fit: "Data en inzichten",
          cta: "Neem contact op",
          href: "mailto:partners@movrr.nl",
        },
        {
          index: "03",
          title: "Gezondheids- en fitnessplatforms",
          description:
            "Beloon de kilometers die je gebruikers toch al maken, zonder zelf ritverificatie te hoeven bouwen.",
          fit: "SDK en beloningen",
          cta: "Vraag toegang aan",
          href: "mailto:partners@movrr.nl",
        },
        {
          index: "04",
          title: "Zakelijke fietsprogramma's",
          description:
            "Koppel woon-werkbeloningen aan daadwerkelijk gereden kilometers in plaats van handmatige opgaven.",
          fit: "Zakelijk programma",
          cta: "Neem contact op",
          href: "mailto:partners@movrr.nl",
        },
      ],
      contactIntro:
        "We kiezen bewust voor een beperkt aantal samenwerkingen waarin we echt waarde kunnen toevoegen. Is er een goede match, dan kunnen we snel schakelen.",
      process: [
        {
          step: "01",
          text: "Vertel ons kort over je platform, de toepassing en het verwachte gebruik.",
        },
        {
          step: "02",
          text: "Je krijgt binnen twee werkdagen antwoord. Zien we een goede match, dan plannen we een gesprek van 30 minuten.",
        },
        {
          step: "03",
          text: "We bespreken techniek en commerciële afspraken naast elkaar, zodat er snel duidelijkheid is.",
        },
        {
          step: "04",
          text: "We leggen de inhoud en planning vast en werken samen toe naar de start.",
        },
      ],
    },
    accessibility: {
      statement: {
        titleLine1: "Toegankelijkheid",
        titleLine2: "hoort erbij.",
        targetLabel: "Onze norm",
        target: "WCAG 2.1 niveau AA, blijvend getoetst.",
      },
      commitmentsLabel: "Onze toezeggingen",
      commitments: [
        {
          id: "01",
          title: "Bediening met het toetsenbord",
          description:
            "Elke pagina en functie is volledig met het toetsenbord te gebruiken. Je hebt geen muis nodig om door de site te gaan, een rit af te ronden of beloningen in te wisselen.",
        },
        {
          id: "02",
          title: "Ondersteuning voor schermlezers",
          description:
            "We gebruiken semantische HTML en ARIA-herkenningspunten. Leesvolgorde, labels en livegebieden testen we met VoiceOver en NVDA.",
        },
        {
          id: "03",
          title: "Kleurcontrast",
          description:
            "Alle tekst voldoet aan WCAG AA. Informatieve onderdelen voldoen aan AAA. Bij iedere ontwerpbeoordeling controleren we het contrast.",
        },
        {
          id: "04",
          title: "Minder animatie",
          description:
            "We respecteren de instelling ‘verminder beweging’. Elk bewegend onderdeel heeft een stil alternatief met dezelfde informatie.",
        },
        {
          id: "05",
          title: "Zichtbare focus",
          description:
            "Je ziet altijd welk onderdeel actief is. Dialoogvensters en lagen houden de toetsenbordfocus op de juiste plek.",
        },
        {
          id: "06",
          title: "Tekstalternatieven",
          description:
            "Betekenisvolle afbeeldingen hebben beschrijvende alt-tekst. Decoratieve beelden zijn als zodanig gemarkeerd. Grafieken bevatten tekstsamenvattingen.",
        },
      ],
      contact: {
        label: "Loop je ergens tegenaan?",
        description:
          "Kun je iets niet goed lezen, vinden of bedienen? Laat het ons weten. Je melding gaat rechtstreeks naar het team en krijgt voorrang.",
        responseTitle: "Wanneer hoor je van ons?",
        responseBody:
          "We bevestigen je melding binnen 2 werkdagen. Binnen 5 werkdagen laten we weten wanneer we het oplossen.",
        complaintTitle: "Een klacht indienen",
        complaintBeforeLink:
          "Ben je niet tevreden met onze reactie? Neem dan contact op met de Irish Human Rights and Equality Commission via",
        standardTitle: "Technische norm",
        standardBody:
          "Voor het platform en deze website hanteren we WCAG 2.1 niveau AA. Elk kwartaal controleren we of we daaraan voldoen.",
      },
    },
    sitemapPage: {
      title: "Alles op één plek.",
      description: "Alle pagina's op movrr.nl",
      sections: [
        {
          id: "01",
          category: "Platform",
          description: "Hoe MOVRR werkt en voor wie",
          primary: true,
          links: [
            { label: "Zo werkt het", href: "/how-it-works" },
            { label: "Beloningen", href: "/rewards" },
            { label: "Merken", href: "/brands" },
            { label: "Fietsers", href: "/riders" },
          ],
        },
        {
          id: "02",
          category: "Bedrijf",
          description: "Het team, verhaal en vacatures",
          primary: true,
          links: [
            { label: "Over ons", href: "/about" },
            { label: "Werken bij", href: "/careers" },
            { label: "Pers & Media", href: "/press" },
            { label: "Partners", href: "/partners" },
            { label: "Verhalen", href: "/blog" },
          ],
        },
        {
          id: "03",
          category: "Hulp",
          description: "Antwoorden en contactmogelijkheden",
          primary: false,
          links: [
            { label: "Helpcentrum", href: "/help" },
            { label: "Contact", href: "/contact" },
          ],
        },
        {
          id: "04",
          category: "Juridisch",
          description: "Beleid, voorwaarden en jouw rechten",
          primary: false,
          links: [
            { label: "Privacybeleid", href: "/privacy" },
            { label: "Gebruiksvoorwaarden", href: "/terms" },
            { label: "Cookiebeleid", href: "/cookies" },
            { label: "Toegankelijkheid", href: "/accessibility" },
          ],
        },
      ],
    },
    privacy: {
      title: "Privacybeleid",
      effectiveLabel: "Geldig vanaf",
      effectiveDate: "1 januari 2025",
      contentsLabel: "Inhoud",
      relatedLabel: "Gerelateerd",
      summary:
        "Hier lees je welke persoonsgegevens we verzamelen, waarom we dat doen en hoe we ze beschermen. We leggen extra duidelijk uit hoe we omgaan met rit- en locatiegegevens.",
      sections: [
        {
          id: "who-we-are",
          title: "Wie we zijn",
          paragraphs: [
            "MOVRR B.V. is gevestigd in Rotterdam, beheert het MOVRR-platform en is verantwoordelijk voor de verwerking van de persoonsgegevens die in dit beleid staan.",
            "Vragen over privacy kun je sturen naar privacy@movrr.nl.",
          ],
        },
        {
          id: "what-we-collect",
          title: "Gegevens die we verzamelen",
          paragraphs: [
            "We verzamelen alleen gegevens die nodig zijn om MOVRR te laten werken, te beveiligen en te verbeteren.",
          ],
          bullets: [
            "Account-, profiel- en apparaatgegevens van fietsers, plus rit- en beloningsgeschiedenis",
            "Rit- en locatiegegevens om kilometers te verifiëren",
            "Campagne-, facturatie- en zakelijke contactgegevens van merkpartners",
            "Gebruiksstatistieken van de website, toestemmingskeuzes en informatie uit formulieren",
          ],
        },
        {
          id: "movement-data",
          title: "Rit- en locatiegegevens",
          paragraphs: [
            "We verzamelen je gps-route, afstand en ritduur alleen tijdens een actieve rit die je zelf start. Dat gaat door als de app op de achtergrond staat of je scherm uit is, zodat we de rit goed kunnen verifiëren. Op Android zie je daarbij een permanente melding. Zodra de rit eindigt, stopt de verzameling.",
            "Buiten actieve ritten volgen we je locatie niet. We verkopen geen individuele routegegevens en delen geen herleidbare locatiegeschiedenis met merken. Merken ontvangen alleen geaggregeerde en geanonimiseerde cijfers, zoals contactmomenten, campagnekilometers en heatmaps per zone.",
            "We verwerken ritgegevens alleen met jouw uitdrukkelijke toestemming. Je kunt die toestemming in je accountinstellingen intrekken. Nieuwe ritten worden daarna niet meer gevolgd.",
          ],
        },
        {
          id: "how-we-use-data",
          title: "Waarvoor we je gegevens gebruiken",
          paragraphs: [
            "We verwerken gegevens om onze dienst te leveren, afspraken met jou uit te voeren, aan wettelijke verplichtingen te voldoen, gerechtvaardigde belangen te beschermen en — waar nodig — op basis van jouw toestemming.",
            "We verkopen geen persoonsgegevens. Ook gebruiken we ze niet voor geautomatiseerde profilering met juridische of vergelijkbaar ingrijpende gevolgen.",
          ],
          bullets: [
            "Ritten verifiëren en MOVRR Points berekenen",
            "Campagnes uitvoeren en onderbouwde bereikcijfers leveren",
            "Accounts, vragen en inwisselingen afhandelen",
            "Fraude opsporen, de dienst beveiligen en prestaties verbeteren",
            "Serviceberichten versturen en, met toestemming, marketingberichten sturen",
          ],
        },
        {
          id: "your-rights",
          title: "Jouw rechten",
          paragraphs: [
            "Wil je gebruikmaken van je rechten onder de AVG? Mail dan naar privacy@movrr.nl. We mogen je identiteit controleren en reageren binnen 30 dagen.",
            "Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.",
          ],
          bullets: [
            "Inzage en een kopie van je gegevens",
            "Onjuiste gegevens corrigeren",
            "Verwijdering of beperking aanvragen",
            "Bezwaar maken tegen bepaalde verwerking",
            "Je gegevens ontvangen of laten overdragen als dat recht van toepassing is",
            "Je toestemming op elk moment intrekken; dat verandert niets aan de rechtmatigheid van eerdere verwerking",
          ],
        },
        {
          id: "data-retention",
          title: "Bewaartermijnen",
          paragraphs: [
            "We bewaren persoonsgegevens niet langer dan nodig is voor het genoemde doel of zolang de wet dat voorschrijft.",
          ],
          bullets: [
            "Accountgegevens zolang je account actief is en tot 24 maanden na sluiting",
            "Rit- en locatiegegevens tot 36 maanden voor verificatie en eventuele geschillen",
            "Gegevens over ingewisselde punten en vouchers 7 jaar voor de wettelijke administratie",
            "Marketinggegevens totdat je je afmeldt of om verwijdering vraagt",
          ],
        },
        {
          id: "changes",
          title: "Wijzigingen in dit beleid",
          paragraphs: [
            "We kunnen dit beleid aanpassen wanneer het platform verandert. Materiële wijzigingen melden we geregistreerde gebruikers minimaal 14 dagen vóór de ingangsdatum per e-mail.",
            "Blijf je MOVRR na een wijziging gebruiken, dan ga je akkoord met het aangepaste beleid. Vragen kun je mailen naar privacy@movrr.nl.",
          ],
        },
      ],
      relatedLinks: [
        { label: "Cookiebeleid", href: "/cookies" },
        { label: "Gebruiksvoorwaarden", href: "/terms" },
        { label: "Account verwijderen", href: "/account-deletion" },
      ],
    },
    terms: {
      title: "Gebruiksvoorwaarden",
      effectiveLabel: "Geldig vanaf",
      effectiveDate: "1 januari 2025",
      contentsLabel: "Inhoud",
      relatedLabel: "Gerelateerd",
      summary:
        "Deze voorwaarden gelden voor fietsers die MOVRR Points verdienen en voor merken die via MOVRR campagnes voeren.",
      sections: [
        {
          id: "platform",
          title: "Het platform",
          paragraphs: [
            "MOVRR verbindt fietsers en merken via geverifieerde ritten. Fietsers verdienen MOVRR Points; merken krijgen fysieke zichtbaarheid met toestemming van de deelnemer en een onderbouwde rapportage.",
            "Door een account aan te maken of MOVRR te gebruiken, ga je akkoord met deze voorwaarden.",
          ],
        },
        {
          id: "rider-accounts",
          title: "Accounts van fietsers",
          paragraphs: [
            "Je moet minimaal 18 jaar zijn, juiste informatie verstrekken en je inloggegevens goed beveiligen. Je bent verantwoordelijk voor wat er via jouw account gebeurt.",
            "MOVRR kan een account opschorten of sluiten bij onjuiste informatie, overtreding van deze voorwaarden of een vermoeden van fraude.",
          ],
        },
        {
          id: "earning-rewards",
          title: "MOVRR Points verdienen",
          paragraphs: [
            "Je beloning hangt af van de geverifieerde afstand, route en ritduur. Manipulatie of vervalsing kan leiden tot permanente opschorting van je account.",
            "De actuele basistarieven en inwisselmogelijkheden staan in de app. We kunnen die voor toekomstige ritten aanpassen. Merkcampagnes en gesponsorde groepsritten kunnen een hoger tarief hebben.",
          ],
        },
        {
          id: "brand-campaigns",
          title: "Merkcampagnes",
          paragraphs: [
            "Voor merkpartners geldt ook de Brand Partner Agreement. Campagnemateriaal moet voldoen aan de reclameregels. MOVRR kan materiaal weigeren.",
            "Publieke claims over campagneprestaties moeten de geverifieerde MOVRR-cijfers correct weergeven.",
          ],
        },
        {
          id: "acceptable-use",
          title: "Toegestaan gebruik",
          paragraphs: [
            "Je gebruikt MOVRR rechtmatig en verstoort de dienst of andere gebruikers niet.",
          ],
          bullets: [
            "Geen ritdata vervalsen of geautomatiseerde activiteit genereren",
            "Geen gegevens van andere gebruikers benaderen",
            "Geen schadelijke code uploaden of de werking van de app proberen te achterhalen",
            "Geen rechten schenden of het platform schadelijk of onrechtmatig gebruiken",
          ],
        },
        {
          id: "platform-rights",
          title: "Rechten en beschikbaarheid van het platform",
          paragraphs: [
            "MOVRR kan functies wijzigen, tijdelijk stopzetten of beëindigen. Waar dat redelijkerwijs kan, laten we dit vooraf weten. We garanderen niet dat het platform altijd beschikbaar is.",
            "Belangrijke wijzigingen in deze voorwaarden kondigen we vooraf aan. Blijf je MOVRR daarna gebruiken, dan ga je akkoord met de aangepaste voorwaarden.",
          ],
        },
        {
          id: "governing-law",
          title: "Toepasselijk recht",
          paragraphs: [
            "Op deze voorwaarden is het recht van Ierland van toepassing. Geschillen die uit deze voorwaarden voortvloeien vallen onder de exclusieve bevoegdheid van de Ierse rechtbanken.",
            "Als een bepaling niet afdwingbaar blijkt, blijven de overige bepalingen volledig van kracht. Vragen kun je sturen naar hello@movrr.nl.",
          ],
        },
      ],
      relatedLinks: [
        { label: "Privacybeleid", href: "/privacy" },
        { label: "Cookiebeleid", href: "/cookies" },
      ],
    },
    cookies: {
      title: "Cookiebeleid",
      effectiveLabel: "Geldig vanaf",
      effectiveDate: "1 januari 2025",
      contentsLabel: "Inhoud",
      relatedLabel: "Gerelateerd",
      summary:
        "Hoe we cookies op deze website gebruiken, wat elke categorie doet en hoe je voorkeuren beheert.",
      sections: [
        {
          id: "what-cookies-are",
          title: "Wat cookies zijn",
          paragraphs: [
            "Cookies zijn kleine tekstbestanden die je browser bewaart. Andere technieken kunnen voor hetzelfde doel een kenmerk opslaan of uitlezen.",
            "Dit beleid geldt voor movrr.nl en hoort bij ons Privacybeleid.",
          ],
        },
        {
          id: "cookie-categories",
          title: "Soorten cookies",
          paragraphs: [
            "Strikt noodzakelijke cookies zijn nodig voor beveiliging, toestemming en basisfuncties. Je kunt ze daarom niet via onze instellingen uitschakelen.",
            "Analytische cookies laten op groepsniveau zien hoe de site wordt gebruikt. Functionele cookies onthouden je keuzes. Marketingcookies meten het resultaat van campagnes. We gebruiken niet-noodzakelijke cookies alleen met jouw toestemming als dat wettelijk vereist is.",
          ],
        },
        {
          id: "specific-cookies",
          title: "Cookies die we gebruiken",
          paragraphs: [
            "Noodzakelijke opslag bewaart onder meer je cookievoorkeuren en essentiële sessie- en beveiligingsgegevens. Voor analyse kunnen we privacyvriendelijke meetdiensten gebruiken. Functionele opslag onthoudt instellingen, zoals je taalkeuze.",
            "Leveranciers en bewaartermijnen kunnen veranderen. In de cookie-instellingen zie je altijd welke categorieën actief zijn.",
          ],
        },
        {
          id: "managing-cookies",
          title: "Cookies beheren",
          paragraphs: [
            "Via de toestemmingsinterface kun je niet-essentiële cookies accepteren, weigeren of instellen. Je kunt je keuze later aanpassen en cookies in je browser verwijderen of blokkeren.",
            "Blokkeer je noodzakelijke cookies, dan werken sommige delen van de site mogelijk niet. Sommige leveranciers bieden daarnaast een eigen mogelijkheid om metingen uit te zetten.",
          ],
        },
        {
          id: "changes",
          title: "Wijzigingen in dit beleid",
          paragraphs: [
            "We kunnen dit beleid aanpassen wanneer onze technologie of wettelijke verplichtingen wijzigen. De ingangsdatum toont de nieuwste versie.",
            "Vragen over cookies of toestemming kun je sturen naar privacy@movrr.nl.",
          ],
        },
      ],
      relatedLinks: [
        { label: "Privacybeleid", href: "/privacy" },
        { label: "Gebruiksvoorwaarden", href: "/terms" },
      ],
    },
    accountDeletion: {
      title: "Je account verwijderen",
      effectiveLabel: "Geldig vanaf",
      effectiveDate: "14 juli 2026",
      contentsLabel: "Inhoud",
      relatedLabel: "Gerelateerd",
      summary:
        "Zo verwijder je je MOVRR-account en de bijbehorende persoonsgegevens via de app of, als inloggen niet lukt, per e-mail.",
      sections: [
        {
          id: "which-app",
          title: "Voor welke app dit geldt",
          paragraphs: [
            "Dit proces geldt voor de MOVRR-app voor fietsers, inclusief het Android-pakket nl.movrr.app en de bijbehorende iOS-app. MOVRR B.V. in Rotterdam is de verwerkingsverantwoordelijke.",
          ],
        },
        {
          id: "delete-in-app",
          title: "Je account verwijderen in de app",
          paragraphs: [
            "De snelste route loopt rechtstreeks via de MOVRR-app. Na bevestiging start de verwijdering.",
          ],
          bullets: [
            "Open MOVRR en log in",
            "Ga naar Account → Gegevens & privacy",
            "Kies Account verwijderen",
            "Bevestig wanneer daarom wordt gevraagd",
          ],
        },
        {
          id: "delete-by-email",
          title: "Verwijdering aanvragen per e-mail",
          paragraphs: [
            "Kun je niet inloggen, mail dan vanaf het gekoppelde adres naar privacy@movrr.nl met als onderwerp ‘Verzoek tot accountverwijdering’. We kunnen je identiteit controleren en bevestigen de afronding.",
            "Je hoeft geen reden op te geven.",
          ],
        },
        {
          id: "what-we-delete",
          title: "Wat we verwijderen",
          paragraphs: [
            "We verwijderen gegevens die jou kunnen identificeren of anonimiseren ze blijvend.",
          ],
          bullets: [
            "Profiel- en contactgegevens",
            "Locatie, gps, routes en ritgeschiedenis",
            "Campagnegegevens, puntensaldo en verdiengeschiedenis",
            "Geregistreerde apparaten en notificatietokens",
            "Voorkeuren en instellingen",
            "Groepsritten en geüploade afbeeldingen",
          ],
        },
        {
          id: "what-we-keep",
          title: "Wat we bewaren, en waarom",
          paragraphs: [
            "Sommige gegevens moeten we volgens de wet bewaren of hebben we nodig om het platform te beschermen. We bewaren dan zo min mogelijk en vervangen herkenbare gegevens waar mogelijk door een code.",
          ],
          bullets: [
            "Ingewisselde beloningen en transactiegegevens voor de boekhouding",
            "Beveiligings- en antifraudelogs gedurende een evenredige periode",
            "Geaggregeerde anonieme statistieken",
          ],
        },
        {
          id: "unredeemed-points",
          title: "Niet-ingewisselde MOVRR Points",
          paragraphs: [
            "Niet-ingewisselde MOVRR Points vervallen definitief bij verwijdering. Ze hebben geen geldwaarde en kunnen niet worden overgedragen of uitbetaald.",
            "Wissel een beschikbaar saldo in voordat je jouw account verwijdert.",
          ],
        },
        {
          id: "how-long",
          title: "Hoelang verwijdering duurt",
          paragraphs: [
            "Je account is niet meer toegankelijk zodra verwijdering is bevestigd of een e-mailverzoek is geverifieerd. Persoonsgegevens worden binnen 30 dagen uit actieve systemen verwijderd.",
            "Versleutelde reservekopieën worden binnen 90 dagen automatisch overschreven.",
          ],
        },
        {
          id: "other-rights",
          title: "Jouw andere privacyrechten",
          paragraphs: [
            "Verwijdering is één AVG-recht. Je kunt ook inzage, correctie, overdraagbaarheid of beperking aanvragen en bezwaar maken. Het Privacybeleid legt dit uit.",
            "Neem contact op via privacy@movrr.nl of dien een klacht in bij de Autoriteit Persoonsgegevens.",
          ],
        },
      ],
      relatedLinks: [
        { label: "Privacybeleid", href: "/privacy" },
        { label: "Gebruiksvoorwaarden", href: "/terms" },
      ],
    },
  },
};
