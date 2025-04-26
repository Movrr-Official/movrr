import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";

import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              NextUI Template
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              A starter template for your Next.js projects
            </p>
          </div>
          <div className="flex gap-8">
            <Button variant="link" asChild className="text-muted-foreground">
              <Link href="/docs">Documentation</Link>
            </Button>
            <Button variant="link" asChild className="text-muted-foreground">
              <Link href="/examples">Examples</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} NextUI Templates. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FiGithub className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FiExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
