import { Card, CardContent } from "@/components/ui/card";

const BrowserCookieControls = () => {
  return (
    <div className="space-y-8">
      {/* Browser Controls */}
      <Card className="border-0 shadow-none">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Browser Cookie Controls
          </h2>
          <p className="text-muted-foreground leading-7 mb-4">
            Most web browsers allow you to control cookies through their
            settings. You can:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Block all cookies</li>
            <li>Block third-party cookies only</li>
            <li>Delete existing cookies</li>
            <li>Set cookies to expire when you close your browser</li>
            <li>Receive notifications when cookies are set</li>
          </ul>

          <p className="text-muted-foreground leading-7 mt-4">
            Keep in mind that blocking or deleting cookies may affect your
            experience on our website and prevent certain features from working
            properly.
          </p>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold mb-2">Popular Browser Settings:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>
                • <strong>Chrome:</strong> Settings → Privacy and Security →
                Cookies
              </li>
              <li>
                • <strong>Firefox:</strong> Preferences → Privacy & Security →
                Cookies
              </li>
              <li>
                • <strong>Safari:</strong> Preferences → Privacy → Cookies
              </li>
              <li>
                • <strong>Edge:</strong> Settings → Privacy → Cookies
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card>
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Questions About Cookies?
          </h2>
          <p className="text-muted-foreground leading-7">
            If you have questions about our use of cookies or this Cookie
            Policy, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground">
              <strong>Email:</strong> privacy@movrr.nl
              <br />
              <strong>Subject:</strong> Cookie Policy Question
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrowserCookieControls;
