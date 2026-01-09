export interface CookieType {
  name: string;
  key: string;
  required: boolean;
  description: string;
  examples: string;
}

export const cookieTypes: CookieType[] = [
  {
    name: "Essential Cookies",
    key: "essential",
    required: true,
    description:
      "These cookies are necessary for the website to function properly. They enable basic features like page navigation, account access, and secure areas. The website cannot function properly without these cookies.",
    examples: "Authentication tokens, session management, security features",
  },
  {
    name: "Statistics Cookies",
    key: "statistics",
    required: false,
    description:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.",
    examples: "Google Analytics, page views, user behavior tracking",
  },
  {
    name: "Marketing Cookies",
    key: "marketing",
    required: false,
    description:
      "These cookies are used to deliver personalized advertisements and track the effectiveness of our advertising campaigns. They may be set by our advertising partners.",
    examples: "Facebook Pixel, Google Ads, retargeting pixels",
  },
  {
    name: "Preference Cookies",
    key: "preferences",
    required: false,
    description:
      "These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.",
    examples: "Language settings, theme preferences, dashboard layout",
  },
];
