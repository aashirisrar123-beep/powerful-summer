"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'; // Assuming Lucide React icons are available

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Hello, I'm a Web Developer in London
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-slow">
          Crafting innovative and user-friendly web experiences.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-faster">
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-purple-600"
            onClick={() => setActiveSection('projects')}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            className="bg-white text-purple-600 hover:bg-gray-200"
            onClick={() => setActiveSection('contact')}
          >
            Get in Touch
          </Button>
        </div>
      </div>
      {/* Placeholder for a potential background image or animation */}
      <div className="absolute inset-0 opacity-30 -z-10">
        {/* Example: animated background element */}
      </div>
    </section>
  );
};

export default Hero;
