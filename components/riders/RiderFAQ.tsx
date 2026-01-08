import React from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MagneticButton } from "@/components/ui/magnetic-button";

const faqs = [
  {
    question: "How much can I earn as a rider?",
    answer:
      "Earnings vary based on your riding habits, location, and campaign demand. Our goal is to build a platform where consistent riders can earn meaningful, flexible income over time.",
  },
  {
    question: "What kind of bicycle do I need?",
    answer:
      "Any bike in good working condition is great — road bike, city bike, fixie, or e-bike. We’ll provide the ad gear and help you mount it safely.",
  },
  {
    question: "Do I have to follow specific routes?",
    answer:
      "Nope! You ride your usual routes. We’ll suggest zones with higher ad visibility, but how and when you ride is up to you. More traffic = more earnings.",
  },
  {
    question: "How do I get paid?",
    answer:
      "We pay weekly through direct deposit or payment apps like PayPal or Venmo. Your pay is based on time spent riding, areas covered, and bonuses from campaigns.",
  },
  {
    question: "Can I choose which ads I carry?",
    answer:
      "Yes! You can set ad preferences based on your values or interests. Just know this may affect how many campaigns are available to you.",
  },
  {
    question: "Is there a minimum time commitment?",
    answer:
      "Nope. Ride when it works for you — mornings, weekends, or all day. Riders who are consistent tend to get access to higher-paying campaigns.",
  },
];

const RiderFAQ = () => {
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
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Frequently Asked Questions
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Everything you need to know about becoming an Movrr rider.
            </p>
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
                Got more questions? We&apos;re here to help you start riding and
                earning with confidence.
              </p>
              <Link href="/contact">
                <MagneticButton
                  variant="default"
                  size="xl"
                  className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                >
                  Talk to Our Team
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiderFAQ;
