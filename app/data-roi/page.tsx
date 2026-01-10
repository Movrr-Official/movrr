import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ROICalculator from "@/components/data-roi/ROICalculator";
import { ResearchBasedProjections } from "@/components/data-roi/ResearchBasedProjections";

export const metadata = {
  title: "Data & Projections - Movrr",
  description:
    "Explore research-based projections for bicycle advertising in the Netherlands. These estimates are based on industry benchmarks and cycling data to help you understand potential campaign impact.",
};

export default function DataRoiPage() {
  return (
    <div>
      <PageHeader
        title="Data-Driven Advertising"
        description="Our approach is grounded in research. Explore the data behind our model and potential projections for bicycle advertising in the Netherlands. These estimates are based on industry benchmarks and cycling data."
      />

      <section
        className="w-full py-32 md:py-40 border-t-2 border-border"
        id="calculator"
      >
        <div className="container max-w-[1400px] xl:px-12">
          <div className="max-w-6xl mx-auto mb-16">
            <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Campaign Projection Tool
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Explore Potential Campaign Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Use our interactive tool to explore research-based projections for
              bicycle advertising campaigns. These estimates are based on
              industry benchmarks and cycling data to help you understand
              potential market impact.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <ResearchBasedProjections />

      <section className="w-full bg-secondary dark:bg-background py-32 md:py-40 border-t-2 border-white/10">
        <div className="container max-w-[1400px] xl:px-12 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white">
            Ready to See the Results?
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Become a launch partner and be among the first to leverage this
            powerful new advertising channel.
          </p>
          <Link href="/#get-started">
            <Button
              size="xl"
              className="group h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
            >
              Become a Launch Partner
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
