import { Card, CardContent } from "@/components/ui/card";

const CookieInformation = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-0 shadow-none">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            Cookies are small text files that are stored on your device when you
            visit our website. They help us provide you with a better experience
            by remembering your preferences, keeping you logged in, and helping
            us understand how you use our platform.
          </p>
          <p className="text-muted-foreground leading-7">
            This Cookie Policy explains what cookies we use, why we use them,
            and how you can control them. By using our website, you consent to
            our use of cookies in accordance with this policy.
          </p>
        </CardContent>
      </Card>

      {/* How We Use Cookies */}
      <Card className="border-0 shadow-none">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>

          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-medium mb-3">
                Platform Functionality
              </h3>
              <p className="text-muted-foreground leading-7">
                We use cookies to keep you logged in, remember your dashboard
                preferences, and maintain your session security. These cookies
                are essential for the platform to work correctly.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-3">
                Performance and Statistics
              </h3>
              <p className="text-muted-foreground leading-7">
                We use statistics cookies to understand how users interact with
                our platform. This helps us identify areas for improvement and
                optimize the user experience. All statistics data is anonymized
                and aggregated.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-3">
                Advertising and Marketing
              </h3>
              <p className="text-muted-foreground leading-7">
                We may use marketing cookies to show you relevant advertisements
                and measure the effectiveness of our marketing campaigns. These
                cookies help us reach potential users who might be interested in
                our platform.
              </p>
            </section>
          </div>
        </CardContent>
      </Card>

      {/* Third-Party Cookies */}
      <Card className="border-0 shadow-none">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            Some cookies on our website are set by third-party services we use
            to enhance your experience. These may include:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Google Analytics:</strong> Helps us understand website
              usage and performance
            </li>
            <li>
              <strong>Payment Processors:</strong> Secure payment processing for
              transactions
            </li>
            <li>
              <strong>Social Media Platforms:</strong> Social sharing and login
              functionality
            </li>
            <li>
              <strong>Customer Support:</strong> Live chat and help desk
              functionality
            </li>
          </ul>

          <p className="text-muted-foreground leading-7 mt-4">
            These third parties have their own privacy policies and cookie
            policies. We recommend reviewing their policies to understand how
            they use cookies.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieInformation;
