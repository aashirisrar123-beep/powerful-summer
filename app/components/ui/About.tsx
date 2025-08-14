"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MailIcon, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
        <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-900 dark:text-white">Dedicated Web Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                {/* Placeholder for profile picture */}
                <div className="w-48 h-48 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-4xl">
                  JD
                </div>
              </div>
              <div className="md:w-2/3 text-left">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  I am a passionate and results-driven Web Developer based in London, UK.
                  With a strong focus on creating efficient, scalable, and visually appealing web applications,
                  I leverage modern technologies like React, Next.js, and Tailwind CSS to bring ideas to life.
                  My expertise lies in building clean, maintainable code and delivering high-quality solutions
                  that meet client needs and exceed expectations.
                </p>
                <div className="flex flex-col space-y-2 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <span>London, UK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-5 w-5 text-purple-600" />
                    <span>your.email@example.com</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
