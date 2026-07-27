import type { Dictionary } from "@/locales/types";

export const en = {
  common: {
    branding: { wordmark: "MOVRR", iconAlt: "MOVRR icon" },
    languageSwitcher: {
      ariaLabel: "Select language",
      englishLabel: "EN",
      dutchLabel: "NL",
      englishName: "English",
      dutchName: "Dutch",
    },
    navigation: {
      howItWorks: "How it works",
      rewards: "Rewards",
      brands: "Brands",
      riders: "Riders",
      signIn: "Sign in",
      getStarted: "Get started",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    footer: {
      ctaTitle: "Ready to move with MOVRR?",
      ctaBody: "The streets are waiting.",
      startEarning: "Start earning",
      talkToSales: "Talk to sales",
      tagline: "Movement that earns. Campaigns that perform. Built for the city.",
      sectionPlatform: "Platform",
      sectionCompany: "Company",
      sectionResources: "Resources",
      sectionLegal: "Legal",
      about: "About",
      careers: "Careers",
      press: "Press",
      contact: "Contact",
      help: "Help centre",
      blog: "Journal",
      partners: "Partners",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      deleteAccount: "Delete account",
      accessibility: "Accessibility",
      sitemap: "Sitemap",
      copyright: "MOVRR B.V. All rights reserved.",
    },
    systemStatus: {
      unavailable: "Status unavailable",
      checking: "Checking status…",
      operational: "All systems operational",
      degraded: "Degraded service",
      disruption: "Service disruption",
    },
    earlyAccess: {
      ariaLabel: "Early access announcement",
      dismiss: "Dismiss announcement",
      ctaAriaSuffix: "early access",
      riders: {
        badge: "Early access",
        variants: [
          {
            headline:
              "MOVRR is launching in Rotterdam and The Hague. Join the waitlist.",
            cta: "Join waitlist",
          },
          {
            headline: "Earn on every kilometre. Early rider access now open.",
            cta: "Get early access",
          },
        ],
      },
      brands: {
        badge: "Limited availability",
        variants: [
          {
            headline:
              "First-round brand partnerships — a small number of slots remaining.",
            cta: "Reserve a spot",
          },
        ],
      },
      partners: {
        badge: "Now open",
        variants: [
          {
            headline:
              "Technical and commercial integrations are available to apply for.",
            cta: "Talk to us",
          },
        ],
      },
    },
    consent: {
      bannerAria: "Cookie consent",
      title: "We use cookies.",
      body:
        "Some are necessary for the site to work. Others help us understand how people use it.",
      manage: "You choose.",
      manageAria: "Manage cookie preferences",
      acceptAll: "Accept all",
      reject: "Reject non-essential",
      preferencesTitle: "Cookie preferences",
      preferencesBody:
        "Choose which cookies you allow. Your choice is stored and can be updated at any time.",
      preferencesAria: "Cookie preferences",
      close: "Close preferences",
      alwaysOn: "Always on",
      cookieSuffix: "cookies",
      save: "Save preferences",
      categories: [
        {
          key: "necessary",
          label: "Strictly necessary",
          description:
            "Required for the website to function. These enable core features such as session security and account access. They cannot be disabled.",
          required: true,
        },
        {
          key: "analytics",
          label: "Performance & analytics",
          description:
            "Help us understand how visitors interact with the website, which pages are visited most and where people navigate from. All data is aggregated and anonymised.",
        },
        {
          key: "marketing",
          label: "Marketing",
          description:
            "Used to measure the effectiveness of campaigns that direct traffic to this site. We do not use these cookies to serve retargeted advertising.",
        },
      ],
    },
    notFound: {
      titleLine1: "Page not",
      titleLine2: "found.",
      description:
        "This page doesn't exist. Head back to discover how MOVRR turns movement into value.",
      backHome: "Back to MOVRR",
    },
  },
  metadata: {
    siteName: "MOVRR",
    keywords: [
      "movement rewards",
      "mobility platform",
      "urban rewards",
      "brand activation",
      "verified movement",
      "cycling rewards",
    ],
    pages: {
      home: {
        title: "Movement Rewards Platform",
        description:
          "Turn movement into value. MOVRR connects verified real-world movement with measurable impact for riders, brands, and cities.",
      },
      waitlist: {
        title: "Join the waitlist",
        description:
          "MOVRR launches city by city. Register as a rider, brand, or partner and be first when your city goes live.",
      },
      howItWorks: {
        title: "How it works",
        description:
          "Ride to earn. Activate at scale. Understand exactly how MOVRR works for riders and brands.",
      },
      rewards: {
        title: "Rewards",
        description:
          "Ride to earn. Every verified kilometre builds your rewards. Opt in to brand campaigns and earn more.",
      },
      brands: {
        title: "For brands",
        description:
          "Reach active urban cyclists with verified, movement-based campaigns. Premium exposure. Measurable outcomes.",
      },
      riders: {
        title: "For riders",
        description:
          "Ride your city. Earn with every kilometre. Carry a brand to earn more. Your movement, your choice.",
      },
      about: {
        title: "Company and mission",
        description:
          "Built around the ride. MOVRR is a movement-based rewards platform for cyclists, and verified reach for brands.",
      },
      blog: {
        title: "Journal",
        description:
          "MOVRR perspectives on verified movement, cycling rewards, healthier cities, and the platform behind them.",
      },
      press: {
        title: "Press & Media",
        description:
          "MOVRR newsroom. Coverage, press kit, and media contact for journalists and editors.",
      },
      help: {
        title: "Help Centre",
        description:
          "Answers to common questions about earning rewards, community rides, account settings, and more.",
      },
      careers: {
        title: "Careers",
        description:
          "Join the team building the platform cities move on. Open roles at MOVRR.",
      },
      contact: {
        title: "Contact",
        description:
          "Get in touch with MOVRR. Campaign enquiries, rider support, and press contact.",
      },
      partners: {
        title: "Partners",
        description:
          "Build on the MOVRR movement layer with integrations for mobility platforms, cities, health apps, and commute programmes.",
      },
      accessibility: {
        title: "Accessibility",
        description:
          "MOVRR's accessibility statement and commitments to WCAG 2.2 AA conformance and inclusive design.",
      },
      sitemapPage: {
        title: "Sitemap",
        description:
          "Explore every public MOVRR page, organised by platform, company, resource, and legal sections.",
      },
      privacy: {
        title: "Privacy Policy",
        description:
          "Learn how MOVRR collects, uses, protects, retains, and enables you to control your personal data.",
      },
      terms: {
        title: "Terms of Service",
        description:
          "Read the terms governing the MOVRR platform, rider accounts, rewards, campaigns, and brand-partner use.",
      },
      cookies: {
        title: "Cookie Policy",
        description:
          "How MOVRR uses cookies and similar technologies, and how you control them.",
      },
      accountDeletion: {
        title: "Delete your account",
        description:
          "Follow the steps to permanently delete your MOVRR account and understand what happens to associated data.",
      },
    },
  },
  pages: {
    home: {
      hero: {
        imageAlt: "Cyclists in motion through an urban environment",
        titleLine1: "Movement,",
        titleLine2: "rewarded.",
        description:
          "Ride the city. Earn with every kilometre. For brands, it's reach that actually moves people.",
        riderCta: "Become a rider",
        brandCta: "Advertise with MOVRR",
      },
      valueStrip: {
        titleLine1: "Real movement.",
        titleLine2: "Real returns.",
        learnMore: "See how MOVRR works",
        description:
          "A rewards platform for cyclists. Earn by riding. Brands reach people already in motion.",
        values: [
          {
            title: "Earn with every ride",
            description:
              "Ride to earn. Carry a brand on your bike to earn more. Entirely your call.",
          },
          {
            title: "Campaigns that move",
            description:
              "Connect with people in motion. Real audiences, real streets.",
          },
          {
            title: "Reach that moves",
            description: "City-scale reach. Outcomes you can count.",
          },
        ],
      },
      useCases: {
        titleLine1: "One platform.",
        titleLine2: "Every use case.",
        description:
          "Ride to earn. Move a city. Build on the network. Three ways the same platform changes what urban movement is worth.",
        items: [
          {
            title: "Rewarded everyday movement",
            category: "Rider rewards",
            description:
              "Ride to earn. Opt in to brand campaigns for more. Your movement, your choice.",
            imageAlt: "Cyclist checking MOVRR earnings",
          },
          {
            title: "Always on, or all at once.",
            category: "Brand activations",
            description:
              "Destination Ride for daily route presence. Swarm for moments that stop a city.",
            imageAlt: "Sponsored community ride through the city",
          },
          {
            title: "City and brand initiatives",
            category: "Urban partnerships",
            description:
              "Programs that move entire communities. Built for cities that dare to lead.",
            imageAlt: "Cyclists riding along an urban waterfront",
          },
        ],
      },
      metrics: {
        titleLine1: "Projected",
        titleLine2: "campaign impact.",
        description:
          "The scale of movement-based campaigns. Estimated reach across active urban networks.",
        imageAlt: "MOVRR branded bicycle",
        items: [
          {
            value: "400K — 1.2M",
            label: "Verified monthly reach",
            description:
              "Potential verified impressions across active rider networks.",
          },
          {
            value: "FROM €3.50",
            label: "Per 1,000 verified views",
            description:
              "Efficient exposure. Authentic engagement. Nothing inflated.",
          },
          {
            value: "UNIQUE REACH",
            label: "High-intent urban exposure",
            description:
              "Audiences in motion, not scrolling. Daily, urban, real.",
          },
        ],
      },
      appPreview: {
        imageAlt: "MOVRR app mounted on a bicycle handlebar",
        routeName: "Rotterdam Central Tour",
        routeDetails: "5 KM — 45 MIN",
      },
      howItWorks: {
        titleLine1: "Two sides.",
        titleLine2: "One platform.",
        description:
          "Left: how it works for cyclists. Right: how it works for brands.",
        steps: [
          {
            number: "01",
            label: "Riders",
            title: "Ride and earn",
            description:
              "Verified kilometres earn rewards. Commutes, errands, everyday movement — it all counts.",
            side: "left",
          },
          {
            number: "01",
            label: "Brands",
            title: "Set your direction",
            description:
              "Define your audience, set your budget, shape your strategy. Everything up front.",
            side: "right",
          },
          {
            number: "02",
            label: "Riders",
            title: "Opt in, earn more",
            description:
              "Choose to carry brand campaigns on your rides. Entirely optional, but when you do, rewards stack.",
            side: "left",
          },
          {
            number: "02",
            label: "Brands",
            title: "Go live",
            description:
              "Your campaign hits the streets. Cyclists earn. Your brand moves with them.",
            side: "right",
          },
          {
            number: "03",
            label: "Riders",
            title: "Collect your rewards",
            description:
              "Rewards accumulate with every authenticated ride. Yours to keep, however you earned them.",
            side: "left",
          },
          {
            number: "03",
            label: "Brands",
            title: "Watch it work",
            description:
              "Live data. Real engagement. Verified outcomes. Refine on the fly.",
            side: "right",
          },
        ],
      },
      safety: {
        imageAlt: "MOVRR app displayed on a device",
        title: "Your brand protected",
        description:
          "Trust isn't a feature. It's the foundation. Every ride verified, every placement reviewed.",
        integrityTitle: "Built on integrity",
        points: [
          {
            title: "Verified participation",
            description: "Every ride, verified. No simulations, no shortcuts.",
          },
          {
            title: "Privacy-first design",
            description: "What you ride stays yours. Anonymised by default.",
          },
          {
            title: "Brand-safe placements",
            description:
              "Every placement reviewed. Your brand, always in context.",
          },
        ],
      },
    },
    waitlist: {
      hero: {
        wave: "Wave 01",
        titleLine1: "Movement starts",
        titleLine2: "before the crowd.",
        description:
          "MOVRR launches city by city. Register and be first when your city opens.",
        citiesLabel: "Cities launching 2026",
        cities: ["Rotterdam", "The Hague", "Amsterdam", "Utrecht"],
      },
      form: {
        heading: "Register early.",
        introduction:
          "MOVRR opens city by city. Register early and get priority access when your city launches.",
        benefits: [
          {
            label: "Priority notification",
            note: "You hear first when your city opens.",
          },
          {
            label: "Priority access",
            note: "Early access shapes what MOVRR becomes in your city.",
          },
          {
            label: "No commitment",
            note: "Registration holds your place. Nothing more.",
          },
        ],
        audienceLabel: "I am a",
        audiences: [
          {
            id: "rider",
            label: "Rider",
            description:
              "You cycle, scoot, or walk city routes and want to earn from every trip.",
            submitLabel: "Register as a rider",
            namePlaceholder: "Your name",
          },
          {
            id: "brand",
            label: "Brand",
            description:
              "You run campaigns and need verified reach among active city riders.",
            submitLabel: "Register your brand",
            namePlaceholder: "Your name or company",
          },
          {
            id: "partner",
            label: "Partner",
            description:
              "You build products or platforms that touch how people move through cities.",
            submitLabel: "Register as a partner",
            namePlaceholder: "Your name or company",
          },
        ],
        fields: {
          name: "Name",
          city: "City",
          email: "Email",
          cityPlaceholder: "Rotterdam, The Hague…",
          emailPlaceholder: "you@example.com",
          bikeQuestion: "Do you own a bike?",
          optional: "optional",
        },
        bikeOptions: [
          { id: "own", label: "I own one" },
          { id: "interested", label: "Not yet, but interested" },
          { id: "planning", label: "Planning to get one" },
        ],
        validation: {
          nameRequired: "Name is required",
          emailInvalid: "Enter a valid email",
          cityRequired: "City is required",
        },
        submitting: "Registering…",
        noSpam: "No spam. Unsubscribe any time.",
        success: {
          eyebrow: "You're in the first wave.",
          title: "You're in.",
          cityPrefix: "We'll reach out when MOVRR opens in",
          cityFallback: "your city",
          registeredAs: "Registered as a",
          audienceNames: {
            rider: "rider",
            brand: "brand",
            partner: "partner",
          },
        },
        errors: {
          invalid: "Invalid form data.",
          duplicate: "This email is already on the list.",
          generic: "Something went wrong. Please try again.",
        },
      },
    },
    howItWorks: {
      hero: { titleLine1: "Movement", titleLine2: "made simple.", description: "Rider or brand — the mechanics are clear, the outcomes are real.", riders: "Riders", forRiders: "For riders", brands: "Brands", forBrands: "For brands" },
      riders: {
        titleLine1: "Ride to earn.", titleLine2: "Nothing else required.", description: "Ride and earn. Carry a brand when you want more. Your movement, your call.",
        steps: [
          { number: "01", title: "Ride your route", description: "Any verified ride counts. Commutes, errands, weekend loops — movement is movement." },
          { number: "02", title: "Opt in to earn more", description: "Choose to carry a brand on your bike. Entirely optional, but when you do, rewards stack. Your movement, your call." },
          { number: "03", title: "Collect your rewards", description: "Rewards accumulate with every authenticated ride. Yours to keep, however you earned them." },
        ],
      },
      brands: {
        titleLine1: "Campaigns that", titleLine2: "move with people.", description: "Real-world reach. Verified engagement. An audience that chose to be there.",
        steps: [
          { number: "01", title: "Set your direction", description: "Choose your city, your format, your window. Everything up front, nothing hidden." },
          { number: "02", title: "Go live", description: "Your campaign hits the streets. Riders earn. Your brand moves with them." },
          { number: "03", title: "Watch it work", description: "Live data. Real engagement. Verified outcomes. Nothing to wait for." },
        ],
      },
      platform: {
        titleLine1: "Built for trust.", titleLine2: "On both sides.", description: "Verified data, rider consent, nothing hidden. That's the foundation everything runs on.",
        pillars: [
          { number: "01", title: "Verified movement", description: "Every ride authenticated. No simulations, no shortcuts. Verified data powers every reward and every campaign metric." },
          { number: "02", title: "Privacy by default", description: "What you ride stays yours. Brands see movement patterns. They never see you." },
          { number: "03", title: "Real-time visibility", description: "Riders and brands see performance as it happens. Live reach, verified impressions, engagement in motion." },
          { number: "04", title: "Brand integrity", description: "Every rider carrying your brand chose to. No passive placements. Just people who said yes." },
        ],
      },
      cta: { ridersLabel: "Riders", ridersTitleLine1: "Start earning", ridersTitleLine2: "today.", ridersBody: "Ride and earn. Carry a brand when you want more. Your movement, your call.", ridersCta: "Get the app", brandsLabel: "Brands", brandsTitleLine1: "Launch your", brandsTitleLine2: "first campaign.", brandsBody: "Talk to the team. We'll walk you through reach, cost, and verified movement-based exposure for your brand.", brandsCta: "Talk to sales" },
    },
    rewards: {
      hero: { titleLine1: "Every kilometre", titleLine2: "counts.", description: "Ride and earn. Carry a brand to earn more. Rewards that reflect every kilometre you ride.", cta: "Start earning", stats: [{ value: "Automatic", label: "From the first ride" }, { value: "Every km", label: "Tied to verified distance" }, { value: "Earn more", label: "Opt in to carry a brand" }] },
      mechanics: { titleLine1: "Ride earns.", titleLine2: "Choice earns more.", description: "Rewards are tied directly to verified movement. The more you ride, the more you earn, with or without a brand.", items: [
        { number: "01", title: "Ride verified", description: "Every ride is authenticated. Distance, route, and movement are verified before rewards are issued. Nothing simulated." },
        { number: "02", title: "Earn by default", description: "Verified kilometres earn rewards automatically. No minimum distance, no activation required. Just ride." },
        { number: "03", title: "Carry a brand, earn more", description: "Opt in to carry a brand campaign on your bike. Entirely your choice, but when you do, every kilometre earns more." },
      ] },
      imageAlt: "Cyclist earning rewards through verified movement",
      tiers: { titleLine1: "Three ways", titleLine2: "to earn.", items: [
        { number: "01", label: "Base", title: "Ride to earn", description: "Kilometres earn the moment you ride. No targets, no minimums. Just verified movement.", detail: "Verified movement rewards" },
        { number: "02", label: "Boosted", title: "Carry a brand", description: "Pick a campaign and carry it through the city. Every verified kilometre you ride with it earns more.", detail: "Movement + brand exposure rewards" },
        { number: "03", label: "Campaign", title: "Community rides", description: "Join a city or brand-sponsored route, or ride with others in your city. The more you move together, the more everyone earns.", detail: "Open to all · or join by invite" },
      ] },
      cta: { titleLine1: "Your next ride", titleLine2: "starts earning.", description: "Ride your first route. Every verified kilometre earns automatically.", primary: "Get the app", secondary: "How it works" },
    },
    brands: {
      hero: { titleLine1: "Reach that", titleLine2: "moves.", description: "Your brand, carried through the city by cyclists who chose to represent it. Verified reach. Nothing estimated.", primary: "Talk to sales", secondary: "How it works", imageAlt: "Brand campaign carried through the city by cyclists" },
      reach: { titleLine1: "Not display.", titleLine2: "Movement.", items: [
        { number: "01", title: "City-scale movement", description: "Campaigns travel the routes cyclists already take — commutes, errands, and routes through the heart of a city." },
        { number: "02", title: "Verified impressions", description: "Every exposure tied to authenticated movement data. No inflated numbers. No estimated reach." },
        { number: "03", title: "Opted-in audiences", description: "Cyclists choose to carry your brand. That choice signals more than any impression could." },
      ] },
      formats: [
        { index: "01", tag: "Always on", nameTop: "Destination", nameBottom: "Ride", description: "Your brand threaded into the daily routes cyclists already take. Neighbourhood by neighbourhood, day after day.", useCases: ["Month-long presence", "Local presence", "Commuter routes"], cta: "Launch a Destination Ride", dark: true },
        { index: "02", tag: "All at once", nameTop: "Swarm", nameBottom: "Campaign", description: "A synchronised fleet moves together, on your signal. One moment. One city. Impossible to miss.", useCases: ["Product launches", "Store openings", "Brand events"], cta: "Plan a Swarm", dark: false },
      ],
      campaign: { titleLine1: "Set up.", titleLine2: "Hit the streets.", description: "From brief to live in days. Your campaign travels through the city, carried by cyclists who chose your brand.", steps: [
        { number: "01", title: "Define your campaign", description: "Your city. Your zone. Your window. Brief to live in minutes." },
        { number: "02", title: "Riders opt in", description: "Cyclists choose to carry your brand. Every one real. Every one verified." },
        { number: "03", title: "Track in real time", description: "Live kilometres, verified reach. Watch your campaign move through the city." },
      ] },
      metrics: [
        { value: "400K — 1.2M", label: "Verified monthly reach", description: "Verified impressions from riders moving through your city, not past a screen." },
        { value: "FROM €3.50", label: "Per 1,000 verified views", description: "Efficient exposure. Real engagement. Nothing inflated." },
        { value: "100% OPT-IN", label: "High-intent urban exposure", description: "Audiences in motion, not scrolling. Daily, urban, real." },
      ],
      cta: { titleLine1: "Your brand,", titleLine2: "in motion.", description: "Tell us where you want your brand to go. We'll show you what that looks like in the city.", primary: "Talk to sales", secondary: "How it works" },
      estimator: {
        label: "Reach estimator", titleLine1: "See your brand move", titleLine2: "through the city.", description: "Select a city and campaign scale to preview estimated reach before we talk.",
        notes: ["Reach figures grounded in verified movement data, not estimated impressions.", "Every rider is a real person who chose to carry your brand.", "Projections are replaced by actuals once your city is live."],
        cityQuestion: "Which city are you activating in?", changeCity: "Change city", statuses: { live: "Live", upcoming: "Launching soon", planned: "Coming soon" }, country: "Netherlands", theHague: "The Hague",
        scaleQuestionBefore: "How broad should the", scaleQuestionAfter: "activation be?", scales: { focused: { label: "Focused", description: "Targeted reach across selected city zones." }, "city-wide": { label: "City-wide", description: "Full coverage across all active city zones." }, "multi-city": { label: "Multi-city", description: "Coordinated activation across multiple cities." } },
        reachLabel: "estimated monthly reach", riders: "Riders", zones: "City zones", window: "Campaign window", weeks: "weeks", monthlyKm: "Est. monthly km", talk: "Talk to the team", reset: "Start over", disclaimer: "Projections based on pre-launch estimates. Live data replaces projections post-launch.",
        methodology: "How we calculate this", participation: "Rider participation", impressions: "Impressions model", campaignWindow: "Campaign window", multiplier: "Multi-city multiplier", dataBasis: "Data basis", activeRidersSuffix: "of active riders", impressionsSuffix: "estimated impressions per rider per day", activationSuffix: "week standard activation", multiplierSuffix: "applied for cross-city network effects", dataBasisValue: "Pre-launch projections. Replaced by verified data post-launch.",
      },
    },
    riders: {
      hero: { titleLine1: "Ride the city.", titleLine2: "Own the reward.", description: "Every verified kilometre earns MOVRR Points — redeemable for cycling gear, food, vouchers, and more. Carry a brand when you want to multiply them.", primary: "Get started", secondary: "See rewards", imageAlt: "Cyclist riding with MOVRR" },
      proposition: { titleLine1: "Your ride.", titleLine2: "Your terms.", items: [
        { title: "Verified, not estimated", description: "Every ride authenticated. Your rewards are tied to real, verified kilometres. Not guesses." },
        { title: "Your choice, always", description: "Carrying a brand is entirely your call. Choose it when you want more. Ride clean when you don't. As your ride history builds, higher-value campaigns become available." },
        { title: "Private by design", description: "Your individual routes stay yours. MOVRR anonymises movement data. Brands see patterns, not people." },
      ] },
      earnings: { titleLine1: "Three ways", titleLine2: "to earn more.", items: [
        { number: "01", label: "Base", title: "Just ride", description: "Kilometres earn MOVRR Points the moment you ride. No targets, no minimums. Just verified movement.", note: "Every rider, from day one" },
        { number: "02", label: "Boosted", title: "Carry a brand", description: "Pick a campaign and carry it through the city. Every verified kilometre with it multiplies your points above the base rate.", note: "Your call, every time" },
        { number: "03", label: "Campaign", title: "Join a campaign ride", description: "Join city or brand-sponsored routes in your area. As your ride history builds, you unlock higher-value campaigns.", note: "Open to all · or invite-only as you build history" },
      ] },
      cta: { titleLine1: "Your next ride", titleLine2: "earns.", description: "Ride your city. Earn MOVRR Points with every verified kilometre. Carry a brand when you want to multiply them.", primary: "Get the app", secondary: "See rewards" },
    },
    about: {
      hero: {
        titleLine1: "Built around",
        titleLine2: "the ride.",
        description:
          "A platform for riders and the brands that move alongside them.",
      },
      origin: {
        titleLine1: "Movement was",
        titleLine2: "always the point.",
        body:
          "Cities are full of people on the move. Cyclists cutting through traffic, covering urban routes, every day. We saw what advertising had missed: an audience already in motion, already present. With no reason to engage with the advertising they were passing. MOVRR is built on one insight: reward the journey, and the reach takes care of itself. Not by placing ads in front of people. By becoming part of the ride itself.",
      },
      beliefsLabel: "What we believe",
      beliefs: [
        {
          statement: "Movement earns.\nIt always did.",
          elaboration:
            "We made that earning real, verifiable, and tied to every verified kilometre.",
        },
        {
          statement: "Advertising works when people choose it.",
          elaboration:
            "Every cyclist carrying a brand campaign made that choice. No passive exposure, no assumed attention. Just opted-in reach.",
        },
        {
          statement: "Every metric is real.",
          elaboration:
            "No simulations, no estimated impressions. Every number on MOVRR is tied to verified movement data.",
        },
      ],
      model: {
        titleLine1: "One platform.",
        titleLine2: "Two ways in.",
        description:
          "MOVRR is a two-sided platform. Cyclists earn with every verified kilometre. Brands reach opted-in audiences through physical exposure. Neither side compromises for the other.",
        ridersLabel: "Riders",
        ridersBody:
          "Every verified kilometre earns. Carry a brand to earn more, or don't; the base rate is always there. Your route, your pace, your call.",
        ridersCta: "See how riders earn",
        brandsLabel: "Brands",
        brandsBody:
          "Your brand moves through the city, carried by cyclists who chose it. Verified reach, not estimated. An audience in motion, not scrolling.",
        brandsCta: "Partner with MOVRR",
      },
      ctaTitle: "Where to next?",
      ctaLinks: [
        {
          audience: "Riders",
          label: "Get the app",
          description: "Start earning today",
          href: "/riders",
        },
        {
          audience: "Brands",
          label: "Partner with MOVRR",
          description: "Talk to the team",
          href: "/brands",
        },
      ],
    },
    blog: {
      titleLine1: "From the", titleLine2: "platform.", read: "Read", readArticle: "Read article", imageAlt: "MOVRR platform — featured article",
      featured: { category: "Product", date: "12 Mar 2025", readTime: "6 min read", title: "Why movement data is the only honest signal left in urban advertising", excerpt: "Impression counts, click-through rates, and view-through attribution all measure proximity, not participation. We built MOVRR around a different premise.", href: "#" },
      secondary: [
        { category: "Cities", date: "28 Feb 2025", readTime: "4 min read", title: "What Amsterdam taught us about building for people who cycle. Not people who identify as cyclists." },
        { category: "Platform", date: "14 Feb 2025", readTime: "5 min read", title: "How we verify a kilometre, and why the answer isn't GPS alone" },
        { category: "Brands", date: "31 Jan 2025", readTime: "3 min read", title: "The brief that finally made sense: reach people while they move" },
      ],
      posts: [
        { category: "Community", date: "17 Jan 2025", readTime: "4 min read", title: "The riders who asked: what if the route itself paid you?", excerpt: "Early access riders shaped community rides more than any product document. Here's what we learned." },
        { category: "Platform", date: "9 Jan 2025", readTime: "5 min read", title: "Building a reward system that can't be gamed", excerpt: "Making movement verification resistant to manipulation without punishing legitimate riders took longer than expected." },
        { category: "Brands", date: "22 Dec 2024", readTime: "3 min read", title: "Why we price on verified reach, not estimated reach", excerpt: "Most ad platforms sell promises. We sell proof. That changes how campaigns are structured, priced, and measured." },
        { category: "Cities", date: "10 Dec 2024", readTime: "4 min read", title: "One verification layer for every mode", excerpt: "Bikes, e-scooters, walking. Building one verification layer for every urban mix made us think differently." },
        { category: "Product", date: "27 Nov 2024", readTime: "6 min read", title: "The decisions we locked in before launch", excerpt: "Some architectural choices are boring to explain and expensive to undo. These are ours." },
        { category: "Community", date: "14 Nov 2024", readTime: "3 min read", title: "Why ride leaders use an application process, not an algorithm", excerpt: "Community rides need organisers. Choosing them by criteria rather than engagement score changes who steps up." },
      ],
    },
    press: {
      title: "Press & Media",
      facts: [{ label: "Founded", value: "2024" }, { label: "Headquartered", value: "Rotterdam, Netherlands" }, { label: "Category", value: "Movement-based rewards" }, { label: "Markets", value: "Europe — launching" }],
      coverageTitle: "Coverage", selectedCoverage: "Selected coverage",
      coverage: [
        { outlet: "TechCrunch", date: "Mar 2025", headline: "MOVRR wants to turn every bike ride into a brand touchpoint. Without the noise.", type: "Feature", href: "#" },
        { outlet: "The Economic Times", date: "Feb 2025", headline: "Rotterdam startup building rewards platform for urban cyclists raises pre-seed round", type: "News", href: "#" },
        { outlet: "Forbes", date: "Jan 2025", headline: "Movement-based advertising is the next frontier for urban mobility brands", type: "Opinion", href: "#" },
        { outlet: "Sifted", date: "Dec 2024", headline: "Five European mobility startups to watch in 2025", type: "Roundup", href: "#" },
        { outlet: "Cycling Weekly", date: "Nov 2024", headline: "Can verified movement data fix the sponsorship model for everyday riders?", type: "Analysis", href: "#" },
      ],
      kit: { label: "Press kit", title: "Everything you need to cover MOVRR.", description: "Logos, screenshots, photography, and brand guidelines, ready to use under a standard press licence.", briefings: "Briefings on request", assets: [
        { label: "Brand logos", description: "SVG and PNG, light and dark variants", file: "movrr-logos.zip" },
        { label: "Product screenshots", description: "App UI across key flows, high resolution", file: "movrr-screenshots.zip" },
        { label: "Press photography", description: "Founders, product, and lifestyle. Print ready.", file: "movrr-photography.zip" },
        { label: "Brand guidelines", description: "Typeface, colour palette, and usage rules", file: "movrr-brand-guidelines.pdf" },
      ] },
    },
    help: {
      title: "How can we help?", searchPlaceholder: "Search for answers…", topicsLabel: "Topics", notFound: "Can't find what you need?", contact: "Contact us.",
      topics: [
        { id: "getting-started", category: "Getting started", faqs: [
          { q: "What is MOVRR?", a: "MOVRR is a movement-based rewards platform. You earn rewards when you ride within supported city zones. Brands fund rewards for verified reach among active urban commuters." },
          { q: "How do I join MOVRR?", a: "Download the MOVRR app and create an account. Once verified, start riding and earn from your first kilometre." },
          { q: "Which cities is MOVRR available in?", a: "MOVRR is launching across Europe, starting with Rotterdam and The Hague. New cities are announced before they go live." },
        ] },
        { id: "earning-rewards", category: "Earning rewards", faqs: [
          { q: "How are rewards calculated?", a: "Rewards are earned per verified kilometre. The base rate applies to eligible movement. Sponsored campaigns and community rides can pay an elevated rate." },
          { q: "What counts as a verified kilometre?", a: "Movement is verified through the MOVRR app. Rides must meet speed and duration thresholds. Stationary time and trips outside eligible zones do not count." },
          { q: "When do rewards hit my account?", a: "Pending rewards appear after each ride. Once a campaign closes, rewards are confirmed for redemption, usually within 24–72 hours." },
          { q: "Is there a minimum to cash out?", a: "Yes. The minimum redemption threshold is €5.00. Smaller balances accumulate until the threshold is reached." },
        ] },
        { id: "community-rides", category: "Community rides", faqs: [
          { q: "What are community rides?", a: "Community rides are group routes organised by approved MOVRR riders. They use the same verification rules and can carry elevated campaign rates." },
          { q: "How do I become an approved rider?", a: "Complete enough verified rides, maintain good account standing, and apply through the Community section in the app." },
          { q: "Can I join without being approved?", a: "Yes. Any rider can participate. Approved status is only required to create and lead rides." },
        ] },
        { id: "account-privacy", category: "Account and privacy", faqs: [
          { q: "What data does MOVRR collect?", a: "We collect movement, account, and interaction data needed to verify rides and calculate rewards. Individual location histories are never shared with brands." },
          { q: "Can I delete my account?", a: "Yes. Request deletion from Settings in the app. We process requests within 30 days and confirm by email." },
          { q: "How do I update my payment details?", a: "Go to Settings → Payment in the app. Changes take effect from the next payout cycle." },
        ] },
        { id: "for-brands", category: "For brands", faqs: [
          { q: "How does MOVRR work for brands?", a: "Brands fund campaigns tied to routes, zones, or behaviours and pay for verified engagement rather than estimated impressions." },
          { q: "What reporting do brands receive?", a: "Campaign dashboards show verified reach, route coverage, and engagement by zone in real time and after the campaign." },
        ] },
      ],
    },
    careers: {
      hero: {
        titleLine1: "We're building the platform",
        titleLine2: "cities move on.",
        description:
          "MOVRR is early. The decisions made now shape what MOVRR becomes. We're looking for people who take the long view.",
      },
      valuesLabel: "How we work",
      values: [
        {
          title: "Work that's real.",
          description:
            "The platform verifies movement. The rewards are earned. The reach is authentic. We hold ourselves to the same standard: no theatre, no vague roadmaps.",
        },
        {
          title: "Build it once, build it right.",
          description:
            "We're not optimising for the demo. We're building infrastructure for how cities move, which means we take the unglamorous work as seriously as the visible work.",
        },
        {
          title: "Small team, full ownership.",
          description:
            "Everyone here carries a meaningful part of the platform. There's no layer of people between your work and its impact on the product.",
        },
      ],
      rolesTitle: "Open roles",
      positionsOpen: "positions open",
      roles: [
        { department: "Engineering", title: "Senior Full-Stack Engineer", location: "Rotterdam / Remote", type: "Full-time" },
        { department: "Engineering", title: "Mobile Engineer (React Native)", location: "Rotterdam / Remote", type: "Full-time" },
        { department: "Product", title: "Product Designer", location: "Rotterdam / Remote", type: "Full-time" },
        { department: "Operations", title: "Rider Community Lead", location: "Rotterdam", type: "Full-time" },
        { department: "Growth", title: "Brand Partnerships Manager", location: "Rotterdam / Amsterdam", type: "Full-time" },
      ],
      openApplication: "Don't see what you're looking for?",
      openApplicationCta: "Send us a note anyway.",
    },
    contact: {
      header: {
        titleLine1: "Get in",
        titleLine2: "touch.",
        description:
          "The right contact depends on who you are. Find yours below.",
      },
      paths: [
        {
          audience: "Brands & agencies",
          index: "01",
          heading: "Run a campaign with MOVRR",
          description:
            "Running a campaign or planning one, the team handles brand enquiries directly. Reach, pricing, and campaign structure covered in a single conversation.",
          channel: "hello@movrr.nl",
          action: "Send a message",
          href: "mailto:hello@movrr.nl",
          note: "We respond within one business day.",
        },
        {
          audience: "Riders",
          index: "02",
          heading: "Rider support",
          description:
            "Earnings queries, verification questions, campaign issues: the support team handles all of it, directly.",
          channel: "support@movrr.nl",
          action: "Contact support",
          href: "mailto:support@movrr.nl",
          note: "Response time is typically under 24 hours.",
        },
        {
          audience: "Press & media",
          index: "03",
          heading: "Press enquiries",
          description:
            "Covering MOVRR, movement-based advertising, or urban mobility? The press team responds quickly and the kit is ready.",
          channel: "press@movrr.nl",
          action: "Email press",
          href: "mailto:press@movrr.nl",
          note: "Press kit available on request.",
        },
      ],
      credentialsIntro:
        "Every message lands with the team, not a ticketing system.",
    },
    partners: {
      hero: { titleLine1: "Build on the", titleLine2: "movement layer.", description: "MOVRR is the infrastructure beneath verified urban movement. If your platform touches how people move through cities, we should talk.", imageAlt: "MOVRR platform" },
      typesTitle: "Who we partner with",
      types: [
        { index: "01", title: "Mobility platforms", description: "Every trip becomes an earning moment. MOVRR handles the verification and brand infrastructure — you keep the experience.", fit: "API integration", cta: "Explore the API", href: "mailto:partners@movrr.nl" },
        { index: "02", title: "City and transport authorities", description: "Verified movement data that shows where a city is going — and where it isn't. Use it to design better infrastructure and lead the shift to active travel.", fit: "Data & insights", cta: "Talk to us", href: "mailto:partners@movrr.nl" },
        { index: "03", title: "Fitness and health platforms", description: "Your users already move. Give that movement a reward without rebuilding your product around it.", fit: "SDK + rewards", cta: "Request access", href: "mailto:partners@movrr.nl" },
        { index: "04", title: "Corporate mobility programmes", description: "Tie commute rewards to verified kilometres, not self-reported trips. Incentives that mean something to the people who earn them.", fit: "B2B programme", cta: "Get in touch", href: "mailto:partners@movrr.nl" },
      ],
      contactIntro: "We're selective about partnerships. We'd rather build fewer, deeper integrations than maintain a long list of shallow ones. If the fit seems right, we'll move quickly.",
      process: [
        { step: "01", text: "Send us a note with your platform, use case, and rough scale." },
        { step: "02", text: "We'll respond within two business days. If there's a fit, we'll schedule a 30-minute call." },
        { step: "03", text: "Technical and commercial terms discussed in parallel, with no long procurement cycles." },
        { step: "04", text: "Integration scoped, agreed, and live. We move fast once alignment is there." },
      ],
    },
    accessibility: {
      statement: { titleLine1: "Access is not", titleLine2: "an afterthought.", targetLabel: "Conformance target", target: "WCAG 2.2 Level AA. Ongoing, not a one-time audit." },
      commitmentsLabel: "Our commitments",
      commitments: [
        { id: "01", title: "Keyboard navigation", description: "We design and test website pages and interactive features for keyboard use, with visible focus and no mouse-only controls." },
        { id: "02", title: "Screen reader support", description: "We use semantic HTML, meaningful labels, and ARIA only where native elements do not communicate enough context." },
        { id: "03", title: "Colour contrast", description: "Text and informative interface elements are designed to meet WCAG 2.2 AA contrast requirements." },
        { id: "04", title: "Reduced motion", description: "Website animations respect the prefers-reduced-motion setting while preserving the same information and controls." },
        { id: "05", title: "Focus management", description: "Interactive elements use visible focus indicators, and overlays are designed to preserve a logical keyboard focus order." },
        { id: "06", title: "Text alternatives", description: "Meaningful website images include descriptive alternatives, while decorative images are hidden from assistive technology." },
      ],
      contact: { label: "Found a barrier?", description: "If something on the website creates a barrier — a missing label, navigation issue, or contrast problem — we want to know. Reports go directly to the team.", responseTitle: "What happens next", responseBody: "We aim to acknowledge accessibility reports promptly and share progress while the issue is investigated.", complaintTitle: "Request a review", complaintBeforeLink: "If you are not satisfied with our response, reply to your case and request an internal accessibility review.", standardTitle: "Technical standard", standardBody: "We use WCAG 2.2 Level AA as the target for this website and review accessibility throughout design and engineering work." },
    },
    sitemapPage: {
      title: "Everything in one place.",
      description: "All pages on movrr.nl",
      sections: [
        { id: "01", category: "Platform", description: "How MOVRR works and who it's for", primary: true, links: [{ label: "How it works", href: "/how-it-works" }, { label: "Rewards", href: "/rewards" }, { label: "Brands", href: "/brands" }, { label: "Riders", href: "/riders" }] },
        { id: "02", category: "Company", description: "The team, story, and open roles", primary: true, links: [{ label: "About", href: "/about" }, { label: "Careers", href: "/careers" }, { label: "Press & Media", href: "/press" }, { label: "Partners", href: "/partners" }, { label: "Journal", href: "/blog" }] },
        { id: "03", category: "Support", description: "Help and ways to get in touch", primary: false, links: [{ label: "Help centre", href: "/help" }, { label: "Contact", href: "/contact" }] },
        { id: "04", category: "Legal", description: "Policies, terms, and your rights", primary: false, links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "Cookie Policy", href: "/cookies" }, { label: "Accessibility", href: "/accessibility" }] },
      ],
    },
    privacy: {
      title: "Privacy Policy", effectiveLabel: "Effective", effectiveDate: "1 January 2025", contentsLabel: "Contents", relatedLabel: "Related",
      summary: "How we collect, use, and protect your personal data. Movement and location data is central to MOVRR, and this policy explains how we handle it.",
      sections: [
        { id: "who-we-are", title: "Who we are", paragraphs: ["MOVRR B.V., based in Rotterdam, Netherlands, operates the MOVRR platform and is the controller for the personal data described here.", "Questions about privacy can be sent to privacy@movrr.nl."] },
        { id: "what-we-collect", title: "Data we collect", paragraphs: ["We collect only the data needed to operate, secure, and improve MOVRR."], bullets: ["Rider account details, profile information, device data, ride and reward history", "Movement and location data needed to verify rides", "Brand-partner campaign, billing, and business-contact details", "Website analytics, consent choices, and information submitted through forms"] },
        { id: "movement-data", title: "Movement and location data", paragraphs: ["GPS route, distance, and duration are collected only during an active ride that you explicitly start. Collection continues while the app is closed, minimised, or the screen is off so the ride can be verified safely; Android displays a persistent notification, and collection stops when the ride ends.", "We never track location outside active rides, sell individual route data, or share identifiable location history with brands. Brands receive only aggregated, anonymised metrics such as verified impressions, campaign distance, and zone-level heat data.", "Movement data is processed with your explicit consent. You can withdraw consent in account settings, which prevents future rides from being tracked."] },
        { id: "how-we-use-data", title: "How we use your data", paragraphs: ["We process data to provide the service, perform our contract, meet legal obligations, protect legitimate interests, and act on consent where required.", "We do not sell personal data or use it for automated profiling that produces legal or similarly significant effects."], bullets: ["Verify rides and calculate rewards", "Operate campaigns and deliver verified reach metrics", "Manage accounts, support, and redemptions", "Detect fraud, secure the platform, and improve performance", "Send service messages and consented marketing"] },
        { id: "your-rights", title: "Your rights", paragraphs: ["Under the GDPR you can contact privacy@movrr.nl to exercise your rights. We may verify your identity and respond within 30 days.", "You can also complain to the Dutch Data Protection Authority, the Autoriteit Persoonsgegevens."], bullets: ["Access and receive a copy of your data", "Correct inaccurate data", "Request deletion or restriction", "Object to certain processing", "Receive portable data where applicable", "Withdraw consent at any time without affecting earlier lawful processing"] },
        { id: "data-retention", title: "Data retention", paragraphs: ["We keep personal data only as long as necessary for the stated purpose or as required by law."], bullets: ["Account data while the account is active and for 24 months after closure", "Ride and movement data for 36 months for reward verification and dispute resolution", "Reward redemption and voucher records for 7 years for statutory accounting", "Marketing communication data until you unsubscribe or request deletion"] },
        { id: "changes", title: "Changes to this policy", paragraphs: ["We may update this policy as the platform evolves. Material changes are communicated to registered users by email at least 14 days before they take effect, and the effective date is updated.", "Continued use after an update constitutes acceptance of the revised policy. Contact privacy@movrr.nl with questions."] },
      ],
      relatedLinks: [{ label: "Cookie Policy", href: "/cookies" }, { label: "Terms of Service", href: "/terms" }, { label: "Delete account", href: "/account-deletion" }],
    },
    terms: {
      title: "Terms of Service", effectiveLabel: "Effective", effectiveDate: "1 January 2025", contentsLabel: "Contents", relatedLabel: "Related",
      summary: "The terms governing use of MOVRR by riders earning through verified movement and brands running campaigns.",
      sections: [
        { id: "platform", title: "The platform", paragraphs: ["MOVRR connects cyclists and brands through verified movement. Riders earn rewards for authenticated rides; brands receive consent-based physical campaign exposure and verified reporting.", "By creating an account or using MOVRR, you agree to these terms."] },
        { id: "rider-accounts", title: "Rider accounts", paragraphs: ["You must be at least 18, provide accurate information, protect your credentials, and remain responsible for activity under your account.", "MOVRR may suspend or close accounts that contain false information, breach these terms, or show suspected fraud."] },
        { id: "earning-rewards", title: "Earning and rewards", paragraphs: ["Rewards depend on verified distance, route, and duration. Manipulating or falsifying movement data can lead to permanent suspension.", "Base rates and redemption options appear in the app and may change prospectively. Brand campaigns and sponsored community rides may offer elevated rates. Rewards have no cash value outside the available redemption options."] },
        { id: "brand-campaigns", title: "Brand campaigns", paragraphs: ["Brand partners are also subject to the Brand Partner Agreement. Creative must comply with advertising standards and MOVRR may reject non-compliant material.", "Campaign performance claims must accurately reflect the verified metrics MOVRR provides."] },
        { id: "acceptable-use", title: "Acceptable use", paragraphs: ["You must use MOVRR lawfully and must not interfere with the service or other users."], bullets: ["Do not falsify ride data or generate automated activity", "Do not access another user's data", "Do not upload malicious material or reverse-engineer the app", "Do not infringe rights or use the platform for harmful or unlawful purposes"] },
        { id: "platform-rights", title: "Platform rights and availability", paragraphs: ["MOVRR may modify, suspend, or discontinue features with reasonable notice where practical. Availability is not guaranteed.", "Material changes to these terms will be communicated before they take effect. Continued use after that date constitutes acceptance."] },
        { id: "governing-law", title: "Governing law", paragraphs: ["These terms are governed by the laws of Ireland. Disputes arising under these terms are subject to the exclusive jurisdiction of the courts of Ireland.", "If a provision is unenforceable, the remaining terms continue in full force. Questions can be sent to hello@movrr.nl."] },
      ],
      relatedLinks: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Cookie Policy", href: "/cookies" }],
    },
    cookies: {
      title: "Cookie Policy", effectiveLabel: "Effective", effectiveDate: "1 January 2025", contentsLabel: "Contents", relatedLabel: "Related",
      summary: "How we use cookies on this website, what each category does, and how to manage your preferences.",
      sections: [
        { id: "what-cookies-are", title: "What cookies are", paragraphs: ["Cookies are small text files stored by your browser. Similar technologies can store or read identifiers for the same purposes.", "This policy applies to movrr.nl and should be read with our Privacy Policy."] },
        { id: "cookie-categories", title: "Cookie categories", paragraphs: ["Strictly necessary cookies support security, consent, and core functions and cannot be disabled through our tool.", "Performance and analytics cookies help us understand aggregated use. Functional cookies remember choices. Marketing cookies measure campaign effectiveness. Non-essential categories are used only with consent where required."] },
        { id: "specific-cookies", title: "Cookies we use", paragraphs: ["Our necessary storage includes consent preferences and essential session/security values. Analytics may include privacy-conscious measurement tools configured to minimise data. Functional storage remembers settings such as language.", "The exact providers and retention periods can change as our platform develops; the consent tool reflects the active categories."] },
        { id: "managing-cookies", title: "Managing cookies", paragraphs: ["You can accept, reject, or configure non-essential cookies through the consent interface. You can revisit your choice and can also delete or block cookies in your browser.", "Blocking necessary cookies may prevent parts of the site from working. Provider opt-out tools may offer additional controls."] },
        { id: "changes", title: "Changes to this policy", paragraphs: ["We may update this policy when our technology or legal obligations change. The effective date shows the latest version.", "Contact privacy@movrr.nl with questions about cookies or consent."] },
      ],
      relatedLinks: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }],
    },
    accountDeletion: {
      title: "Delete Your Account", effectiveLabel: "Effective", effectiveDate: "14 July 2026", contentsLabel: "Contents", relatedLabel: "Related",
      summary: "How to delete your MOVRR rider account and linked personal data in the app, or by request if you can no longer sign in.",
      sections: [
        { id: "which-app", title: "Which app this applies to", paragraphs: ["This process applies to the MOVRR rider app, including Android package nl.movrr.app and the corresponding iOS app. MOVRR B.V. in Rotterdam is the data controller."] },
        { id: "delete-in-app", title: "Delete your account from inside the app", paragraphs: ["The fastest route is directly in the MOVRR app. Deletion begins after confirmation."], bullets: ["Open MOVRR and sign in", "Go to Account → Data & Privacy", "Choose Delete account", "Confirm when prompted"] },
        { id: "delete-by-email", title: "Request deletion by email", paragraphs: ["If you cannot sign in, email privacy@movrr.nl with the subject ‘Account deletion request’ from the address linked to your account. We may verify your identity and will confirm completion.", "You do not need to give a reason."] },
        { id: "what-we-delete", title: "What we delete", paragraphs: ["We delete or irreversibly anonymise data that can identify you."], bullets: ["Profile and contact details", "Location, GPS, routes, and ride history", "Campaign data, points balance, and earning history", "Registered devices and notification tokens", "Preferences and settings", "Community rides and uploaded images"] },
        { id: "what-we-keep", title: "What we keep, and why", paragraphs: ["Limited records may remain where law requires them or to protect the platform. They are minimised, pseudonymised where possible, and not used to rebuild your profile."], bullets: ["Redeemed rewards and transaction records required by accounting law", "Security and anti-fraud logs for a proportionate period", "Aggregated anonymous statistics"] },
        { id: "unredeemed-points", title: "Unredeemed MOVRR Points", paragraphs: ["Unredeemed MOVRR Points expire permanently on deletion. They have no cash value and cannot be transferred or paid out.", "Redeem any available balance before deleting your account."] },
        { id: "how-long", title: "How long deletion takes", paragraphs: ["Your account becomes inaccessible when deletion is confirmed or an email request is verified. Personal data is removed from active systems within 30 days.", "Encrypted backup copies expire through normal rotation within 90 days."] },
        { id: "other-rights", title: "Your other privacy rights", paragraphs: ["Deletion is one GDPR right. You can also request access, correction, portability, restriction, or object to processing. The Privacy Policy explains these rights.", "Contact privacy@movrr.nl or complain to the Dutch Data Protection Authority."] },
      ],
      relatedLinks: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }],
    },
  },
} satisfies Dictionary;

export type EnglishDictionary = typeof en;
