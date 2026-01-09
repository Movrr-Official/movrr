import BrowserCookieControls from "./components/BrowserCookieControls";
import CookieInformation from "./components/CookieInformation";
import CookiePreferenceManager from "./components/CookiePreferenceManager";

const CookiePolicy = () => {
  const lastUpdated = "December 15, 2024";

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg text-muted-foreground/90">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8">
          <CookieInformation />
          <CookiePreferenceManager showSaveButton={true} />
          <BrowserCookieControls />
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
