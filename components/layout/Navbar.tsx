import React from "react";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import UserButton from "../UserButton";

const Navbar = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          NextUI Template
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/docs"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Documentation
          </Link>
          <Link
            href="https://github.com/ggg6r34t/nextui-starter-kit"
            target="_blank"
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <FiGithub className="w-5 h-5" />
          </Link>

          {/* Mode Toggle Button */}
          <ModeToggle />

          {/* User Button */}
          <div className="ml-28">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button
                asChild
                variant="outline"
                className="border-muted hover:bg-accent/50"
              >
                <Link href="/auth/sign-in">Sign In</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
