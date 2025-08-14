"use client";

import React, { useState } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Skills from './components/ui/Skills';
import Projects from './components/ui/Projects';
import Contact from './components/ui/Contact';
import Footer from './components/ui/Footer';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="hero">
          <Hero setActiveSection={setActiveSection} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
