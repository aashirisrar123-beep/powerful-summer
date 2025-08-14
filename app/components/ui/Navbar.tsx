"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer">
        Your Name
      </div>
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={cn(
              'text-lg font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-300',
              activeSection === item.id
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400'
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="md:hidden">
        {/* Mobile menu button will go here */}
      </div>
    </header>
  );
};

export default Navbar;
