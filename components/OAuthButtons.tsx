"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { useSignIn } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export function OAuthButtons() {
  const { signIn } = useSignIn();

  if (!signIn) return null;

  const signInWith = async (provider: "google" | "github") => {
    try {
      await signIn.authenticateWithRedirect({
        strategy: `oauth_${provider}`,
        redirectUrl: "/dashboard",
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
    }
  };

  return (
    <div className="flex flex-col space-y-3 w-full">
      <Button
        variant="outline"
        className="w-full bg-transparent border border-gray-200 border-solid shadow-none hover:scale-102 leading-5 ease-in-out tracking-tight hover:bg-transparent hover:opacity-75 justify-center transition-colors cursor-pointer"
        onClick={() => signInWith("google")}
      >
        <div className="flex items-center gap-2">
          <FcGoogle className="h-5 w-5" />
          <span className="text-sm font-medium">Google</span>
        </div>
      </Button>
      <Button
        variant="outline"
        className="w-full bg-transparent border border-gray-200 border-solid shadow-none hover:scale-102 leading-5 ease-in-out tracking-tight hover:bg-transparent hover:opacity-75 justify-center transition-colors cursor-pointer"
        onClick={() => signInWith("github")}
      >
        <div className="flex items-center gap-2">
          <RxGithubLogo className="h-5 w-5" />
          <span className="text-sm font-medium">GitHub</span>
        </div>
      </Button>
    </div>
  );
}
