import Image from "next/image";
import { PageHeader } from "@/components/shared/PageHeader";
import Timeline from "@/components/about/Timeline";
import { TeamMember } from "@/components/about/TeamMember";
import CtaSection from "@/components/shared/CtaSection";
import MissionVision from "../../components/about/MissionVision";

export const metadata = {
  title: "About Us | Movrr",
  description:
    "Learn about Movrr's mission to revolutionize outdoor advertising through sustainable bicycle ads.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "Former urban planner with a passion for sustainable transportation and advertising innovation.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Jamie Chen",
      role: "Head of Partnerships",
      bio: "10+ years experience in outdoor advertising and community engagement.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sam Rodriguez",
      role: "Chief Technology Officer",
      bio: "Tech innovator focused on creating seamless experiences for riders and advertisers.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Taylor Kim",
      role: "Sustainability Director",
      bio: "Environmental scientist dedicated to measuring and improving our ecological impact.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  const roadmap = [
    {
      year: "2026",
      title: "Launch Pilot Program",
      description:
        "Kick off pilot campaigns with early riders to refine technology and gather feedback.",
    },
    {
      year: "2027",
      title: "Expand to 3 Cities",
      description:
        "Grow our rider network and brand partnerships across multiple urban areas.",
    },
    {
      year: "2028",
      title: "Launch Full Tech Platform",
      description:
        "Release our routing and analytics platform for optimized ad placements and rider tracking.",
    },
    {
      year: "2029",
      title: "Launch Mobile App",
      description:
        "Release a dedicated mobile app for riders to manage campaigns, schedules, and earnings easily.",
    },
    {
      year: "2030",
      title: "Advanced Analytics Dashboard",
      description:
        "Provide advertisers with detailed insights on campaign performance and rider impact.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="About Movrr"
        description="We connect brands with real-world audiences, using smart, data-powered bike ads that move through the heart of the city."
      />

      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-32 md:py-40 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content - OUTFRONT style */}
            <div className="col-span-12 lg:col-span-6">
              <div className="inline-block border-b-2 border-primary pb-2 mb-6">
                <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                  Our Story
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Movrr was founded in 2020 with a clear insight: traditional
                  outdoor advertising is high-cost, low-impact, and hard to
                  measure in a digital-first world. Static billboards
                  weren&apos;t keeping up with the pace of modern cities.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We built Movrr to change that—turning everyday urban movement
                  into a powerful, intelligent media network. Our platform
                  connects brands with cyclists who move through high-footfall
                  neighborhoods, creating real visibility, measurable
                  performance, and new earning opportunities for riders.
                </p>
              </div>
            </div>
            {/* Image - OUTFRONT style */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative h-[500px] border-2 border-border bg-card overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Movrr team meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MissionVision />

      {/* Timeline */}
      <Timeline milestones={roadmap} />

      {/* Team - OUTFRONT style */}
      <section className="w-full bg-background py-32 md:py-40 border-b-2 border-border">
        {/* OUTFRONT-style full-width container */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
              <div className="inline-block border-b-2 border-primary pb-2 mb-6">
                <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                  Team
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
                Meet Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Join our growing community of brands and riders"
        description="Advertise with impact, or earn money while cycling, discover how Movrr makes it simple and rewarding."
        primaryCta="Get in touch"
        primaryCtaLink="/contact"
        secondaryCta="See how it works"
        secondaryCtaLink="/how-it-works"
      />
    </div>
  );
}
