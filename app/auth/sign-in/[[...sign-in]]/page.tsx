import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { SignInForm } from "@/components/forms/SignInForm";

export default async function SignInPage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex min-h-screen items-center justify-center">
      <div className="container max-w-7xl">
        <div className="w-full max-w-full px-3 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
          <div className="relative z-0 flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 border border-black/12.5 shadow-xl rounded-2xl border-solid bg-clip-border">
            <div className="text-center p-6">
              <h1 className="text-2xl font-bold tracking-tight">
                Sign into NextUI Template
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Welcome back! Please sign in to continue
              </p>
            </div>
            <div className="flex-auto p-6">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
