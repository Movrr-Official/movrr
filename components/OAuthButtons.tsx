"use client";

import React from "react";
import { OAuthStrategy } from "@clerk/types";
import { RxGithubLogo } from "react-icons/rx";
import { useSignIn } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export function OAuthButtons() {
  const { signIn } = useSignIn();
  const router = useRouter();

  if (!signIn) return null;

  const signInWith = async (strategy: OAuthStrategy) => {
    try {
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback", // Common Clerk convention
        redirectUrlComplete: "/dashboard", // Redirect to dashboard after successful auth
      });
    } catch (err: unknown) {
      // Type-safe error handling
      if (err instanceof Error) {
        console.error("Authentication error:", err.message);
        // Handle specific error cases if needed
        if ("errors" in err) {
          console.error("Clerk errors:", (err as { errors: unknown[] }).errors);
        }
      } else {
        console.error("Unknown authentication error:", err);
      }
      // Optionally redirect to error page or show toast
      router.push("/sign-in?error=auth_failed");
    }
  };

  return (
    <div className="flex flex-col space-y-3 w-full">
      <Button
        variant="outline"
        className="w-full justify-center border border-muted hover:bg-accent/50 transition-colors"
        onClick={() => signInWith("oauth_google")}
      >
        <div className="flex items-center gap-2">
          <FcGoogle className="h-5 w-5" />
          <span className="text-sm font-medium">Google</span>
        </div>
      </Button>
      <Button
        variant="outline"
        className="w-full justify-center border border-muted hover:bg-accent/50 transition-colors"
        onClick={() => signInWith("oauth_github")}
      >
        <div className="flex items-center gap-2">
          <RxGithubLogo className="h-5 w-5" />
          <span className="text-sm font-medium">GitHub</span>
        </div>
      </Button>
    </div>
  );
}
