export interface PageMetadataCopy {
  title: string;
  description: string;
}

export interface CommonDictionary {
  branding: {
    wordmark: string;
    iconAlt: string;
  };
  languageSwitcher: {
    ariaLabel: string;
    englishLabel: string;
    dutchLabel: string;
    englishName: string;
    dutchName: string;
  };
  machineView: {
    selectorLabel: string;
    humanLabel: string;
    machineLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    copyMarkdown: string;
    copiedMarkdown: string;
    copyFailed: string;
    rawMarkdown: string;
    noticeTitle: string;
    noticeParagraphs: string[];
    overviewTitle: string;
    commonTitle: string;
    pagesTitle: string;
    sourcePage: string;
  };
  navigation: {
    howItWorks: string;
    rewards: string;
    brands: string;
    riders: string;
    signIn: string;
    getStarted: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    ctaTitle: string;
    ctaBody: string;
    startEarning: string;
    talkToSales: string;
    tagline: string;
    sectionPlatform: string;
    sectionCompany: string;
    sectionResources: string;
    sectionLegal: string;
    about: string;
    careers: string;
    press: string;
    contact: string;
    help: string;
    blog: string;
    partners: string;
    privacy: string;
    terms: string;
    cookies: string;
    deleteAccount: string;
    accessibility: string;
    sitemap: string;
    copyright: string;
  };
  systemStatus: {
    unavailable: string;
    checking: string;
    operational: string;
    degraded: string;
    disruption: string;
  };
  earlyAccess: {
    ariaLabel: string;
    dismiss: string;
    ctaAriaSuffix: string;
    riders: {
      badge: string;
      variants: Array<{ headline: string; cta: string }>;
    };
    brands: {
      badge: string;
      variants: Array<{ headline: string; cta: string }>;
    };
    partners: {
      badge: string;
      variants: Array<{ headline: string; cta: string }>;
    };
  };
  consent: {
    bannerAria: string;
    title: string;
    body: string;
    manage: string;
    manageAria: string;
    acceptAll: string;
    reject: string;
    preferencesTitle: string;
    preferencesBody: string;
    preferencesAria: string;
    close: string;
    alwaysOn: string;
    cookieSuffix: string;
    save: string;
    categories: Array<{
      key: "necessary" | "analytics" | "marketing";
      label: string;
      description: string;
      required?: true;
    }>;
  };
  notFound: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    backHome: string;
  };
}

export const PAGE_PATHS = {
  home: "/",
  waitlist: "/waitlist",
  howItWorks: "/how-it-works",
  rewards: "/rewards",
  brands: "/brands",
  riders: "/riders",
  about: "/about",
  blog: "/blog",
  press: "/press",
  help: "/help",
  careers: "/careers",
  contact: "/contact",
  partners: "/partners",
  accessibility: "/accessibility",
  sitemapPage: "/sitemap-page",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  accountDeletion: "/account-deletion",
} as const;

export type PageKey = keyof typeof PAGE_PATHS;

export interface HomeCopy {
  hero: {
    imageAlt: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    riderCta: string;
    brandCta: string;
  };
  valueStrip: {
    titleLine1: string;
    titleLine2: string;
    learnMore: string;
    description: string;
    values: Array<{ title: string; description: string }>;
  };
  useCases: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    items: Array<{
      title: string;
      category: string;
      description: string;
      imageAlt: string;
    }>;
  };
  metrics: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    imageAlt: string;
    items: Array<{ value: string; label: string; description: string }>;
  };
  appPreview: {
    imageAlt: string;
    routeName: string;
    routeDetails: string;
  };
  howItWorks: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    steps: Array<{
      number: string;
      label: string;
      title: string;
      description: string;
      side: "left" | "right";
    }>;
  };
  safety: {
    imageAlt: string;
    title: string;
    description: string;
    integrityTitle: string;
    points: Array<{ title: string; description: string }>;
  };
}

export interface WaitlistCopy {
  hero: {
    wave: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    citiesLabel: string;
    cities: string[];
  };
  form: {
    heading: string;
    introduction: string;
    benefits: Array<{ label: string; note: string }>;
    audienceLabel: string;
    audiences: Array<{
      id: "rider" | "brand" | "partner";
      label: string;
      description: string;
      submitLabel: string;
      namePlaceholder: string;
    }>;
    fields: {
      name: string;
      city: string;
      email: string;
      cityPlaceholder: string;
      emailPlaceholder: string;
      bikeQuestion: string;
      optional: string;
    };
    bikeOptions: Array<{
      id: "own" | "interested" | "planning";
      label: string;
    }>;
    validation: {
      nameRequired: string;
      emailInvalid: string;
      cityRequired: string;
    };
    submitting: string;
    noSpam: string;
    success: {
      eyebrow: string;
      title: string;
      cityPrefix: string;
      cityFallback: string;
      registeredAs: string;
      audienceNames: Record<"rider" | "brand" | "partner", string>;
    };
    errors: {
      invalid: string;
      duplicate: string;
      generic: string;
    };
  };
}

export interface ContactCopy {
  header: { titleLine1: string; titleLine2: string; description: string };
  paths: Array<{
    audience: string;
    index: string;
    heading: string;
    description: string;
    channel: string;
    action: string;
    href: string;
    note: string;
  }>;
  credentialsIntro: string;
}

export interface CareersCopy {
  hero: { titleLine1: string; titleLine2: string; description: string };
  valuesLabel: string;
  values: Array<{ title: string; description: string }>;
  rolesTitle: string;
  positionsOpen: string;
  roles: Array<{
    department: string;
    title: string;
    location: string;
    type: string;
  }>;
  openApplication: string;
  openApplicationCta: string;
}

export interface AboutCopy {
  hero: { titleLine1: string; titleLine2: string; description: string };
  origin: { titleLine1: string; titleLine2: string; body: string };
  beliefsLabel: string;
  beliefs: Array<{ statement: string; elaboration: string }>;
  model: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    ridersLabel: string;
    ridersBody: string;
    ridersCta: string;
    brandsLabel: string;
    brandsBody: string;
    brandsCta: string;
  };
  ctaTitle: string;
  ctaLinks: Array<{
    audience: string;
    label: string;
    description: string;
    href: string;
  }>;
}

export interface AccessibilityCopy {
  statement: { titleLine1: string; titleLine2: string; targetLabel: string; target: string };
  commitmentsLabel: string;
  commitments: Array<{ id: string; title: string; description: string }>;
  contact: {
    label: string;
    description: string;
    responseTitle: string;
    responseBody: string;
    complaintTitle: string;
    complaintBeforeLink: string;
    standardTitle: string;
    standardBody: string;
  };
}

export interface PartnersCopy {
  hero: { titleLine1: string; titleLine2: string; description: string; imageAlt: string };
  typesTitle: string;
  types: Array<{ index: string; title: string; description: string; fit: string; cta: string; href: string }>;
  contactIntro: string;
  process: Array<{ step: string; text: string }>;
}

export interface SitemapCopy {
  title: string;
  description: string;
  sections: Array<{
    id: string;
    category: string;
    description: string;
    primary: boolean;
    links: Array<{ label: string; href: string }>;
  }>;
}

export interface HowItWorksCopy {
  hero: { titleLine1: string; titleLine2: string; description: string; riders: string; forRiders: string; brands: string; forBrands: string };
  riders: { titleLine1: string; titleLine2: string; description: string; steps: Array<{ number: string; title: string; description: string }> };
  brands: { titleLine1: string; titleLine2: string; description: string; steps: Array<{ number: string; title: string; description: string }> };
  platform: { titleLine1: string; titleLine2: string; description: string; pillars: Array<{ number: string; title: string; description: string }> };
  cta: {
    ridersLabel: string; ridersTitleLine1: string; ridersTitleLine2: string; ridersBody: string; ridersCta: string;
    brandsLabel: string; brandsTitleLine1: string; brandsTitleLine2: string; brandsBody: string; brandsCta: string;
  };
}

interface RewardRow { number: string; label?: string; title: string; description: string; detail?: string }
export interface RewardsCopy {
  hero: { titleLine1: string; titleLine2: string; description: string; cta: string; stats: Array<{ value: string; label: string }> };
  mechanics: { titleLine1: string; titleLine2: string; description: string; items: RewardRow[] };
  imageAlt: string;
  tiers: { titleLine1: string; titleLine2: string; items: RewardRow[] };
  cta: { titleLine1: string; titleLine2: string; description: string; primary: string; secondary: string };
}
export interface RidersCopy {
  hero: { titleLine1: string; titleLine2: string; description: string; primary: string; secondary: string; imageAlt: string };
  proposition: { titleLine1: string; titleLine2: string; items: Array<{ title: string; description: string }> };
  earnings: { titleLine1: string; titleLine2: string; items: Array<RewardRow & { note: string }> };
  cta: { titleLine1: string; titleLine2: string; description: string; primary: string; secondary: string };
}
export interface BlogPost { category: string; date: string; readTime: string; title: string; excerpt?: string; href?: string }
export interface BlogCopy {
  titleLine1: string; titleLine2: string; read: string; readArticle: string; imageAlt: string;
  featured: BlogPost & { excerpt: string; href: string };
  secondary: BlogPost[];
  posts: Array<BlogPost & { excerpt: string }>;
  empty: { title: string; description: string };
}
export interface HelpCopy {
  title: string; searchPlaceholder: string; topicsLabel: string; notFound: string; contact: string;
  topics: Array<{ id: string; category: string; faqs: Array<{ q: string; a: string }> }>;
}
export interface PressCopy {
  title: string; facts: Array<{ label: string; value: string }>;
  coverageTitle: string; selectedCoverage: string;
  coverage: Array<{ outlet: string; date: string; headline: string; type: string; href: string }>;
  kit: { label: string; title: string; description: string; briefings: string; assets: Array<{ label: string; description: string; file: string }> };
}
export interface BrandsCopy {
  hero: { titleLine1: string; titleLine2: string; description: string; primary: string; secondary: string; imageAlt: string };
  reach: { titleLine1: string; titleLine2: string; items: Array<{ number: string; title: string; description: string }> };
  formats: Array<{ index: string; tag: string; nameTop: string; nameBottom: string; description: string; useCases: string[]; cta: string; dark: boolean }>;
  campaign: { titleLine1: string; titleLine2: string; description: string; steps: Array<{ number: string; title: string; description: string }> };
  metrics: Array<{ value: string; label: string; description: string }>;
  cta: { titleLine1: string; titleLine2: string; description: string; primary: string; secondary: string };
  estimator: {
    label: string; titleLine1: string; titleLine2: string; description: string; notes: string[]; cityQuestion: string; changeCity: string;
    statuses: Record<"live" | "upcoming" | "planned", string>; country: string; theHague: string;
    scaleQuestionBefore: string; scaleQuestionAfter: string;
    scales: Record<"focused" | "city-wide" | "multi-city", { label: string; description: string }>;
    reachLabel: string; riders: string; zones: string; window: string; weeks: string; monthlyKm: string; talk: string; reset: string; disclaimer: string;
    methodology: string; participation: string; impressions: string; campaignWindow: string; multiplier: string; dataBasis: string;
    activeRidersSuffix: string; impressionsSuffix: string; activationSuffix: string; multiplierSuffix: string; dataBasisValue: string;
  };
}
export interface LegalPageCopy {
  title: string; effectiveLabel: string; effectiveDate: string; summary: string; contentsLabel: string; relatedLabel: string;
  sections: Array<{ id: string; title: string; paragraphs: string[]; bullets?: string[] }>;
  relatedLinks: Array<{ label: string; href: string }>;
}

export interface Dictionary {
  common: CommonDictionary;
  metadata: {
    siteName: string;
    keywords: string[];
    pages: Record<PageKey, PageMetadataCopy>;
  };
  pages: {
    home: HomeCopy;
    waitlist: WaitlistCopy;
    contact: ContactCopy;
    careers: CareersCopy;
    about: AboutCopy;
    accessibility: AccessibilityCopy;
    partners: PartnersCopy;
    sitemapPage: SitemapCopy;
    howItWorks: HowItWorksCopy;
    rewards: RewardsCopy;
    riders: RidersCopy;
    blog: BlogCopy;
    help: HelpCopy;
    press: PressCopy;
    brands: BrandsCopy;
    privacy: LegalPageCopy;
    terms: LegalPageCopy;
    cookies: LegalPageCopy;
    accountDeletion: LegalPageCopy;
  } & Record<
    Exclude<PageKey, "home" | "waitlist" | "contact" | "careers" | "about" | "accessibility" | "partners" | "sitemapPage" | "howItWorks" | "rewards" | "riders" | "blog" | "help" | "press" | "brands" | "privacy" | "terms" | "cookies" | "accountDeletion">,
    Record<string, unknown>
  >;
}
