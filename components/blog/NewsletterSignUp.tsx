import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSignUp = () => {
  return (
    <section className="w-full bg-card border-y-2 border-border py-12 md:py-24">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Stay updated with the latest insights, case studies, and news from
                Movrr.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-none border-2 border-border bg-background h-12 px-4 text-sm focus-visible:border-primary focus-visible:ring-0"
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-bold text-sm h-12 px-6"
              >
                Subscribe
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignUp;
