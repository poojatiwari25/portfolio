import React from 'react'; // Add this line

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}