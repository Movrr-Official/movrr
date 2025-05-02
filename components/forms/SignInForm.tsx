"use client";

import React, { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { ImSpinner8 } from "react-icons/im";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { showErrorToast } from "../CustomToast";
import { signInFormSchema, SignInFormData } from "@/schema";
import { Toaster } from "react-hot-toast";
import { useSignIn } from "@clerk/nextjs";

export function SignInForm() {
  const [isPending, startTransition] = useTransition();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { getValues, trigger, control, handleSubmit } = form;

  const handleEmailSubmit = () => {
    if (getValues("email")) {
      setEmailSubmitted(true);
    } else {
      trigger("email");
    }
  };

  function onSubmit(data: SignInFormData) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        const result = await signIn.create({
          identifier: data.email,
          password: data.password,
        });

        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId });
          setTimeout(() => {
            router.push("/dashboard");
          }, 500); // Redirect to dashboard with a small delay
        } else {
          console.error("Sign in failed", result);
          showErrorToast(
            "Authentication Error",
            "Sign in failed. Please check your credentials and try again."
          );
        }
      } catch (error) {
        console.error("Error during sign in:", error);
        showErrorToast(
          "Authentication Error",
          "An unexpected error occurred. Please try again later."
        );
      }
    });
  }

  return (
    <Form {...form}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {!emailSubmitted ? (
          <>
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      className="bg-background hover:bg-accent/50 focus:bg-accent/30 transition-colors"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="button"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={handleEmailSubmit}
            >
              Continue
            </Button>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between rounded-md border border-muted dark:bg-input/30 dark:border-input bg-accent/20 h-9 px-4 py-2 text-sm">
              <p className="font-medium">{getValues("email")}</p>
              <button
                type="button"
                className="text-primary hover:text-primary/80 font-semibold transition-colors cursor-pointer"
                onClick={() => setEmailSubmitted(false)}
              >
                <Badge
                  variant="outline"
                  className="hover:bg-gray-200/80 dark:hover:bg-gray-800"
                >
                  Change
                </Badge>
              </button>
            </div>
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="bg-background hover:bg-accent/50 focus:bg-accent/30 transition-colors"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              disabled={isPending}
              aria-busy={isPending}
            >
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <ImSpinner8 className="animate-spin h-4 w-4" />
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </>
        )}
      </form>
    </Form>
  );
}
