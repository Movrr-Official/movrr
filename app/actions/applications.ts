import { type NextRequest, NextResponse } from "next/server";
import { submitApplication, type ApplicationData } from "@/lib/ats-integration";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const applicationData: ApplicationData = {
      jobId: formData.get("jobId") as string,
      applicantName: formData.get("name") as string,
      applicantEmail: formData.get("email") as string,
      coverLetter: formData.get("coverLetter") as string,
      resume: formData.get("resume") as File,
      customFields: {
        phone: (formData.get("phone") as string | null) || "",
        linkedin: (formData.get("linkedin") as string | null) || "",
        portfolio: (formData.get("portfolio") as string | null) || "",
      },
    };

    // Validate required fields
    if (
      !applicationData.jobId ||
      !applicationData.applicantName ||
      !applicationData.applicantEmail
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Submit to ATS
    const success = await submitApplication(applicationData);

    if (success) {
      // Send confirmation email (implement your email service)
      // await sendApplicationConfirmation(applicationData)

      return NextResponse.json({
        message: "Application submitted successfully",
        success: true,
      });
    } else {
      return NextResponse.json(
        { error: "Failed to submit application" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
