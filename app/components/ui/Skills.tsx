"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; // Assuming Badge component is available

const Skills: React.FC = () => {
  const skillsData = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend', skills: ['Node.js', 'Express.js', 'RESTful APIs'] },
    { category: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'SQL'] },
    { category: 'Tools & Methodologies', skills: ['Git', 'Docker', 'CI/CD', 'Agile', 'Figma'] },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillCategory) => (
            <Card key={skillCategory.category} className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skillCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillCategory.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-2 text-base cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
