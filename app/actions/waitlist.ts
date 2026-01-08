import { type NextRequest, NextResponse } from "next/server";
import { mailchimpService } from "@/lib/mailchimp";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, company, interests } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const result = await mailchimpService.joinWaitlist(
      email,
      firstName,
      lastName,
      company,
      interests
    );

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
      data: {
        email: result.email_address,
        status: result.status,
      },
    });
  } catch (error) {
    console.error("Waitlist join error:", error);

    if (error instanceof Error) {
      if (error.message.includes("already a list member")) {
        return NextResponse.json({
          success: true,
          message: "You are already on our waitlist!",
        });
      }

      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
