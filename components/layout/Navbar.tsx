import React from "react";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

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
            href="https://github.com/yourusername/template-repo"
            target="_blank"
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <FiGithub className="w-5 h-5" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
