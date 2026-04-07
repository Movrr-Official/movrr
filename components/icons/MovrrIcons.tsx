interface IconProps {
  className?: string;
  strokeWidth?: number;
}

// Angular shield with precision internal check — Verified movement
export function VerifiedIcon({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2.5L4 6v5.5c0 5.25 3.5 9.6 8 10.9 4.5-1.3 8-5.65 8-10.9V6L12 2.5z" />
      <polyline points="8.5 11.5 11 14 15.5 9.5" />
    </svg>
  );
}

// Broadcast signal arcs above a transmitter point — Brand activation
export function BroadcastIcon({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8.5 10.5A5 5 0 0 0 15.5 10.5" />
      <path d="M5 7A9 9 0 0 0 19 7" />
      <circle cx="12" cy="15" r="1.5" />
      <line x1="12" y1="16.5" x2="12" y2="21" />
    </svg>
  );
}

// Hexagonal cell with inner location node — Urban network reach
export function UrbanIcon({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2.5L3.5 7v10l8.5 4.5 8.5-4.5V7L12 2.5z" />
      <circle cx="12" cy="11.5" r="2.5" />
    </svg>
  );
}

// Architectural padlock with shackle arc and keyhole marker — Privacy
export function PrivacyIcon({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7.5a4 4 0 0 0 8 0V11" />
      <circle cx="12" cy="16" r="1.5" />
    </svg>
  );
}

// Geometric eye with sharp corners and precise iris — Brand-safe
export function SafeIcon({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12C2 12 6 4 12 4C18 4 22 12 22 12C22 12 18 20 12 20C6 20 2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}
