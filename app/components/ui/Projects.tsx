"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLink } from 'lucide-react'; // Assuming Lucide React icons are available

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string; // Placeholder for image URL
  liveDemoUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product catalog, and payment integration.',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: '/placeholder-image-1.jpg', // Replace with actual image path or placeholder
      liveDemoUrl: '#', // Replace with live demo URL
      githubUrl: '#',
    },
    {
      id: 2,
      name: 'Portfolio Website',
      description: 'My personal portfolio website, built with Next.js and Tailwind CSS, showcasing my skills and projects.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      imageUrl: '/placeholder-image-2.jpg', // Replace with actual image path or placeholder
      liveDemoUrl: '#', // Replace with live demo URL
      githubUrl: '#',
    },
    {
      id: 3,
      name: 'Task Management App',
      description: 'A productivity app for managing tasks, with features like due dates, priorities, and collaboration.',
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
      imageUrl: '/placeholder-image-3.jpg', // Replace with actual image path or placeholder
      liveDemoUrl: '#', // Replace with live demo URL
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                {/* Placeholder for project image */}
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400">
                  <span className="text-lg">Project Image Placeholder</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-600 text-purple-700 dark:border-purple-400 dark:text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-4">
                    <Button asChild variant="ghost" className="p-0 h-auto">
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
                        Live Demo
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="ghost" className="p-0 h-auto">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:underline flex items-center gap-1">
                        <GithubIcon className="h-5 w-5" /> GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
