import React from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MagneticButton } from "@/components/ui/magnetic-button";

const FAQ = () => {
  const faqs = [
    {
      question: "How are advertisements displayed on bicycles?",
      answer:
        "We use lightweight, aerodynamic frames designed to securely attach to bicycles without affecting rider comfort or performance. Ads appear on wheel covers,between frames, baskets, rear racks, or panniers—positioned at eye-level for maximum street visibility.",
    },
    {
      question: "How does Movrr measure ad visibility?",
      answer:
        "Our platform combines GPS tracking, route mapping, and local foot traffic data to estimate impressions. Brands can monitor performance in real time through live dashboards, including reach, dwell time, and zone activity.",
    },
    {
      question: "How much do riders earn?",
      answer:
        "Rider earnings vary by location, campaign, and time on the road. Most use Movrr to earn supplemental income. Riders may also receive bonuses for high-visibility zones, peak hours, or campaign consistency.",
    },
    {
      question: "What kind of ads are allowed on Movrr?",
      answer:
        "We accept campaigns that are legal, respectful, and safe for public display. We do not allow ads promoting tobacco, firearms, adult content, or deceptive claims. Every campaign is reviewed to ensure it meets our platform guidelines before going live.",
    },
    {
      question: "How does Movrr keep riders safe?",
      answer:
        "Safety is a shared responsibility. Our ad equipment is designed to be lightweight, weather-resistant, and non-intrusive, ensuring it doesn’t interfere with your riding experience. Riders are expected to use their own safety gear, such as helmets and lights. While we don’t currently provide insurance, we offer safety guidelines and onboarding materials to help you ride confidently.",
    },
    {
      question: "Where is Movrr currently available?",
      answer:
        "We’re currently operating in our pilot city as we build and refine the Movrr experience. More cities will follow soon. If you’re interested in bringing Movrr to your area—whether as a rider or brand—you can join our waitlist or get in touch with our team.",
    },
  ];

  return (
    <section className="w-full bg-background py-32 md:py-40 border-b-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                FAQ
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="border-2 border-border">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b-2 border-border last:border-b-0"
                  >
                    <AccordionTrigger className="text-left text-lg font-bold py-6 px-8 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed px-8 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* CTA: Still have questions? - OUTFRONT style */}
            <div className="mt-12 text-center">
              <p className="text-xl text-muted-foreground mb-6">
                Still have questions about how Movrr works?
              </p>
              <Link href="/contact" passHref>
                <MagneticButton
                  variant="default"
                  size="xl"
                  className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                >
                  Contact Our Team
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
