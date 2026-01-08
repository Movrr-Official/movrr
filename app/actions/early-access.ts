import { type NextRequest, NextResponse } from "next/server";
import { mailchimpService } from "@/lib/mailchimp";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, company, role, budget } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const result = await mailchimpService.subscribeEarlyAccess(
      email,
      firstName,
      lastName,
      company,
      role,
      budget
    );

    return NextResponse.json({
      success: true,
      message: "Successfully joined early access program!",
      data: {
        email: result.email_address,
        status: result.status,
      },
    });
  } catch (error) {
    console.error("Early access subscription error:", error);

    if (error instanceof Error) {
      if (error.message.includes("already a list member")) {
        return NextResponse.json({
          success: true,
          message: "You are already registered for early access!",
        });
      }

      return NextResponse.json(
        { error: "Failed to subscribe to early access" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
