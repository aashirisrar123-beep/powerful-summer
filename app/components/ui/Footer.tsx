"use client";

import React from 'react';
import { GithubIcon, LinkedinIcon } from 'lucide-react'; // Assuming Lucide React icons are available

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400">
      <div className="container mx-auto text-center flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
        <div>
          © {currentYear} Your Name. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          {/* Add other social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
