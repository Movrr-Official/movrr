type LegacySignupLocation = Pick<Location, "pathname" | "search" | "hash">;

/** Keep this function self-contained: it also runs before React hydrates. */
export function getLegacySignupDestination(
  location: LegacySignupLocation,
): string | null {
  const pathname = location.pathname.replace(/\/+$/, "") || "/";
  if (
    location.hash !== "#signup" ||
    (pathname !== "/" && pathname !== "/nl")
  ) {
    return null;
  }

  const destination = new URL(
    pathname === "/nl" ? "/nl" : "/",
    "https://waitlist.movrr.nl",
  );
  destination.search = location.search;
  destination.hash = "signup";
  return destination.href;
}

export function legacySignupRedirectScript(): string {
  return `(() => {
    const destinationFor = ${getLegacySignupDestination.toString()};
    const redirect = () => {
      const destination = destinationFor(window.location);
      if (destination) window.location.replace(destination);
    };
    window.addEventListener("hashchange", redirect);
    redirect();
  })();`;
}
