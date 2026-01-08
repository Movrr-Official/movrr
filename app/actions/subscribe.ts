import { type NextRequest, NextResponse } from "next/server";
import { mailchimpService } from "@/lib/mailchimp";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const result = await mailchimpService.subscribeToNewsletter(
      email,
      firstName,
      lastName
    );

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter!",
      data: {
        email: result.email_address,
        status: result.status,
      },
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    if (error instanceof Error) {
      if (error.message.includes("already a list member")) {
        return NextResponse.json({
          success: true,
          message: "You are already subscribed to our newsletter!",
        });
      }

      return NextResponse.json(
        { error: "Failed to subscribe to newsletter" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
