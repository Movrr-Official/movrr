import { PageHeader } from "@/components/shared/PageHeader";
import { FutureRoles } from "./components/FutureRoles";
import { CompanyValues } from "./components/CompanyValues";
import { WorkingAtMovrr } from "./components/WorkingAtMovrr";
import WaitingList from "./components/WaitingList";
import Benefits from "./components/Benefits";
import OpeningsStatus from "./components/OpeningsStatus";
import { Job } from "@/types/types";
import { JobListings } from "./components/JobListings";

export const metadata = {
  title: "Careers | Movrr",
  description:
    "Join Movrr's mission to revolutionize sustainable advertising. Currently no open positions, but we're always looking for talented individuals to join our team.",
};

// This would typically come from your CMS/database
const jobOpenings: Job[] = [
  // Example job - remove or populate from your actual job data
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build the technology that powers our sustainable advertising platform...",
    requirements: ["5+ years experience", "React/Node.js", "AWS"],
    posted: "2024-01-15",
    atsUrl: "https://jobs.lever.co/movrr/senior-fullstack-engineer", // ATS application URL
    benefits: [
      "Competitive salary",
      "Equity options",
      "Health insurance",
      "Flexible hours",
      "Remote work",
    ],
    responsibilities: [
      "Develop and maintain our web platform",
      "Collaborate with designers and product managers",
      "Optimize performance and scalability",
    ],
  },
];

export default function CareersPage() {
  const hasOpenings = jobOpenings.length > 0;

  return (
    <div>
      <PageHeader
        title="Work Where Purpose Meets Progress"
        description="We're transforming how brands move through the city, one campaign, one rider, one route at a time."
      />

      {/* Current Status */}
      <OpeningsStatus hasOpenings={hasOpenings} />

      {/* Job Listings - Only shows if there are openings */}
      {hasOpenings && <JobListings jobs={jobOpenings} />}

      {/* Future Roles */}
      <FutureRoles />

      {/* Working at Movrr */}
      <WorkingAtMovrr />

      {/* Company Values */}
      <CompanyValues />

      {/* Benefits */}
      <Benefits />

      {/* Waitlist Form */}
      <WaitingList />
    </div>
  );
}
