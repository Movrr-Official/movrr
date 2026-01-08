import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  ExternalLink,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Job } from "@/types/types";
import { MagneticButton } from "@/components/ui/magnetic-button";

// This would typically come from your CMS/database
const jobData: Record<string, Job> = {
  "senior-fullstack-engineer": {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salaryRange: "$120,000 - $160,000",
    posted: "2024-01-15",
    atsUrl: "https://jobs.lever.co/movrr/senior-fullstack-engineer",
    description:
      "Join our engineering team to build the technology platform that powers sustainable bicycle advertising across cities worldwide.",
    responsibilities: [
      "Design and develop scalable web applications using React, Node.js, and modern technologies",
      "Build and maintain APIs that serve our mobile apps and web platform",
      "Collaborate with product and design teams to implement new features",
      "Optimize application performance and ensure high availability",
      "Mentor junior engineers and contribute to technical decision-making",
      "Work with data teams to implement analytics and reporting features",
    ],
    requirements: [
      "5+ years of experience in full-stack web development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Knowledge of database design and optimization (PostgreSQL, MongoDB)",
      "Experience with API design and microservices architecture",
      "Familiarity with DevOps practices and CI/CD pipelines",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and collaboration skills",
    ],
    niceToHave: [
      "Experience with React Native or mobile development",
      "Knowledge of geospatial data and mapping technologies",
      "Background in advertising technology or marketplace platforms",
      "Experience with real-time data processing",
      "Contributions to open-source projects",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible PTO and work-from-anywhere policy",
      "$2,000 annual learning and development budget",
      "Top-tier equipment and home office setup allowance",
      "Quarterly team retreats in exciting locations",
      "Bike purchase and maintenance stipend",
    ],
  },
};

interface JobPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: JobPageProps) {
  const { slug } = await Promise.resolve(params);

  const job = jobData[slug];

  if (!job) {
    return {
      title: "Job Not Found | Movrr Careers",
    };
  }

  return {
    title: `${job.title} | Movrr Careers`,
    description: job.description,
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await Promise.resolve(params);

  const job = jobData[slug];

  if (!job) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "full-time":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "part-time":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "contract":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "internship":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="py-12 md:py-24">
      {/* Header */}
      <section className="bg-muted/60 py-12 border-b">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Button variant="ghost" asChild className="rounded-full mb-6">
              <Link href="/careers">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Careers
              </Link>
            </Button>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Posted {formatDate(job.posted)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className={getTypeColor(job.type)}>{job.type}</Badge>
                  {job.salaryRange && (
                    <Badge variant="outline">{job.salaryRange}</Badge>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                {job.atsUrl ? (
                  <Link
                    href={job.atsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MagneticButton size="lg">
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </Link>
                ) : (
                  <Link href="/contact">
                    <MagneticButton size="lg">Apply Now</MagneticButton>
                  </Link>
                )}
                <MagneticButton variant="outline" size="lg">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Job
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>

              {/* Responsibilities */}
              <Card>
                <CardHeader>
                  <CardTitle>{`What You'll Do`}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.responsibilities.map(
                      (responsibility: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {responsibility}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>{`What We're Looking For`}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">
                      Required Qualifications
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map(
                        (requirement: string, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">
                              {requirement}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {job.niceToHave && job.niceToHave.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h4 className="font-medium mb-3">Nice to Have</h4>
                        <ul className="space-y-2">
                          {job.niceToHave.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Ready to Apply?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Join our mission to revolutionize sustainable advertising.
                  </p>
                  {job.atsUrl ? (
                    <Link
                      href={job.atsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MagneticButton className="w-full">
                        Apply Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </MagneticButton>
                    </Link>
                  ) : (
                    <Link href="/contact">
                      <MagneticButton className="w-full">
                        Apply Now
                      </MagneticButton>
                    </Link>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {`We're an equal opportunity employer committed to diversity
                    and inclusion.`}
                  </p>
                </CardContent>
              </Card>

              {/* Job Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Job Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium">Department</div>
                    <div className="text-sm text-muted-foreground">
                      {job.department}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">
                      {job.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Employment Type</div>
                    <div className="text-sm text-muted-foreground">
                      {job.type}
                    </div>
                  </div>
                  {job.salaryRange && (
                    <div>
                      <div className="text-sm font-medium">Salary Range</div>
                      <div className="text-sm text-muted-foreground">
                        {job.salaryRange}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium">Posted</div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(job.posted)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Share */}
              <Card>
                <CardHeader>
                  <CardTitle>Share This Job</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                    >
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                    >
                      Copy Link
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
