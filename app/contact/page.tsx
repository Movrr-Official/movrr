import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiYoutube, FiLinkedin } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

export const metadata = {
  title: "Contact Us | Movrr",
  description:
    "Get in touch with Movrr for inquiries about bicycle advertising, becoming a rider, or partnership opportunities.",
};

const contactMethods = [
  {
    title: "Email Us",
    subtitle: "Questions about advertising, riding, or partnerships?",
    icon: Mail,
    contactLink: "mailto:hello@movrr.nl",
    contactText: "hello@movrr.nl",
    isExternal: true,
  },
  {
    title: "Call Us",
    subtitle: "Talk to our team Monday–Friday, 9am–5pm CET",
    icon: Phone,
    contactLink: "tel:+31201234567",
    contactText: "+31 20 123 4567",
    isExternal: true,
  },
  {
    title: "Location",
    subtitle: "The Hague, Netherlands",
    icon: MapPin,
  },
];

const socialLinks = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: RiTwitterXFill, href: "#", label: "X" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
];

function ContactCard({
  title,
  subtitle,
  icon: Icon,
  contactLink,
  contactText,
  isExternal,
}: {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  contactLink?: string;
  contactText?: string;
  isExternal?: boolean;
}) {
  return (
    <div className="border-2 border-border bg-background p-8 group hover:bg-card/30 transition-colors duration-200">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-black tracking-tight mb-2">{title}</h3>
          <p className="text-base text-muted-foreground mb-3 leading-relaxed">
            {subtitle}
          </p>
          {contactLink &&
            contactText &&
            (isExternal ? (
              <Link
                href={contactLink}
                className="text-base font-bold text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactText}
              </Link>
            ) : (
              <Link
                href={contactLink}
                className="text-base font-bold text-primary hover:underline"
              >
                {contactText}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Have questions or want to learn more? We'd love to hear from you."
      />

      <section className="w-full py-32 md:py-40 bg-background border-b-2 border-border">
        {/* OUTFRONT-style full-width container */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column - Contact Info - OUTFRONT style */}
              <div className="col-span-12 lg:col-span-5">
                <div className="inline-block border-b-2 border-primary pb-2 mb-6">
                  <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                    Contact
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                  Get In Touch
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Whether you're looking to launch impactful urban advertising
                  campaigns, join our rider community to earn on your bike, or
                  explore partnership opportunities, our dedicated team is here
                  to guide you every step of the way.
                </p>

                <div className="grid grid-cols-1 gap-px bg-border mb-8">
                  {contactMethods
                    .slice(0, 2)
                    .map(
                      ({
                        title,
                        subtitle,
                        icon,
                        contactLink,
                        contactText,
                        isExternal,
                      }) => (
                        <ContactCard
                          key={title}
                          title={title}
                          subtitle={subtitle}
                          icon={icon}
                          contactLink={contactLink}
                          contactText={contactText}
                          isExternal={isExternal}
                        />
                      )
                    )}
                </div>

                {/* Location card */}
                <div className="mb-10">
                  <ContactCard
                    title={contactMethods[2].title}
                    subtitle={contactMethods[2].subtitle}
                    icon={contactMethods[2].icon}
                  />
                </div>

                <div className="pt-8 border-t-2 border-border">
                  <h3 className="text-lg font-black tracking-tight mb-6 uppercase">
                    Connect With Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        aria-label={label}
                        className="w-12 h-12 border-2 border-border bg-background hover:bg-card/50 flex items-center justify-center transition-colors duration-200"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Form - OUTFRONT style */}
              <div className="col-span-12 lg:col-span-7">
                <div className="border-2 border-border bg-card p-10 lg:p-12">
                  <div className="inline-block border-b-2 border-primary pb-2 mb-6">
                    <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                      Send Message
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-[1.1]">
                    Send Us a Message
                  </h2>
                  <ContactForm />

                  <div className="mt-10 pt-10 border-t-2 border-border">
                    <h3 className="text-lg font-black tracking-tight mb-6 uppercase">
                      Office Hours
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between pb-4 border-b border-border">
                        <span className="text-base font-bold">
                          Monday - Friday:
                        </span>
                        <span className="text-base text-muted-foreground">
                          9:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between pb-4 border-b border-border">
                        <span className="text-base font-bold">Saturday:</span>
                        <span className="text-base text-muted-foreground">
                          10:00 AM - 2:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base font-bold">Sunday:</span>
                        <span className="text-base text-muted-foreground">
                          Closed
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                      All times are in Central European Time (CET). Response
                      times may vary during weekends and holidays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - OUTFRONT style */}
      <section className="w-full py-32 md:py-40 bg-background border-b-2 border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="border-2 border-border bg-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.263270764289!2d4.30069941580089!3d52.07049767973573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7228ae3e1e7%3A0x7cb9f8fdb68e1a49!2sThe%20Hague!5e0!3m2!1sen!2snl!4v1716382828971!5m2!1sen!2snl"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Movrr Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
