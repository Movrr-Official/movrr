"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, BarChart3, Users, Megaphone, Cog } from "lucide-react";

export function FutureRoles() {
  const futureRoles = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      department: "Engineering",
      roles: [
        "Full-Stack Developer",
        "Mobile App Developer",
        "DevOps Engineer",
        "Data Engineer",
      ],
      description:
        "Build the technology that powers our platform and rider network.",
      skills: ["React", "Node.js", "Python", "AWS", "React Native"],
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      department: "Design",
      roles: ["Product Designer", "UX Researcher", "Brand Designer"],
      description:
        "Create beautiful, intuitive experiences for riders and advertisers.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      department: "Product & Analytics",
      roles: ["Product Manager", "Data Analyst", "Growth Product Manager"],
      description:
        "Drive product strategy and use data to optimize our platform.",
      skills: ["SQL", "Analytics", "A/B Testing", "Product Strategy"],
    },
    {
      icon: <Megaphone className="h-6 w-6 text-primary" />,
      department: "Marketing & Sales",
      roles: [
        "Growth Marketing Manager",
        "Account Executive",
        "Content Marketing Manager",
      ],
      description: "Help brands discover the power of bicycle advertising.",
      skills: ["Digital Marketing", "Sales", "Content Creation", "CRM"],
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      department: "Operations",
      roles: [
        "City Operations Manager",
        "Rider Success Manager",
        "Supply Chain Coordinator",
      ],
      description:
        "Ensure smooth operations across our growing network of cities.",
      skills: ["Operations", "Project Management", "Customer Success"],
    },
    {
      icon: <Cog className="h-6 w-6 text-primary" />,
      department: "Business Development",
      roles: [
        "Partnership Manager",
        "Business Development Rep",
        "Government Relations",
      ],
      description:
        "Build relationships with brands, cities, and strategic partners.",
      skills: [
        "Partnership Development",
        "Negotiation",
        "Relationship Building",
      ],
    },
  ];

  return (
    <section className="w-full py-32 md:py-40 border-t-2 border-border">
      <div className="container max-w-[1400px] xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Future Opportunities
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              {`Roles Driving the Future of Mobility Media`}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {`As Movrr expands its approach to urban media, we're building a team
              of innovators and creators. Explore the key roles we plan to hire
              for and join our waitlist to be the first to know when these
              exciting opportunities become available.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {futureRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none rounded-none bg-background p-8 hover:bg-card/50 transition-colors duration-200">
                  <CardHeader className="p-0 pb-6 border-b-2 border-border mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
                        {role.icon}
                      </div>
                      <CardTitle className="text-xl font-black">{role.department}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.05em] mb-3">Potential Roles:</h4>
                        <div className="space-y-2">
                          {role.roles.map((roleName, roleIndex) => (
                            <div
                              key={roleIndex}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-foreground">{roleName}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.05em] mb-3">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="text-xs border-2 border-border rounded-none"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="border-2 border-border bg-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-black mb-4">{`Don't See Your Role?`}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {`Even if you don't see the perfect role, we want to hear from you.
                Join our talent waitlist to share your skills and passions, and be
                considered for future opportunities tailored just for you.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
