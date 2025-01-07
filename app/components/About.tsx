'use client';

import Image from 'next/image';
import { useState } from "react";

export default function About() {
  const [activeSection, setActiveSection] = useState<string>("skills");

  const handleSectionChange = (section: string) => setActiveSection(section);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-[#121212] text-white">
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="md:w-1/2 flex justify-center">
          <Image
              src="/images/aboutimage.jpg"
              alt="Portrait of the developer"
              width={600}
              height={600}
              className="object-cover rounded-lg"
              priority
           />

          </div>

          {/* Content Section */}
          <div className="md:w-1/2 flex flex-col">
            <p className="text-lg mb-4">
              Software Engineer (SWE) specializing in Frontend development, proficient in JavaScript, React, and a variety of frontend tools. Committed to crafting clean, efficient code and driving innovation in every project. Passionate about collaborating with dynamic teams to create impactful solutions and continuously advance in the field of frontend development.
            </p>

            <div className="flex flex-row justify-start mt-8">
              {["skills", "education", "experience"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`mr-3 font-semibold hover:text-white ${
                    activeSection === section ? "text-white border-b-2 border-primary-500" : "text-[#ADB7BE]"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <div className="mt-8">
              {activeSection === "skills" && (
                <ul className="list-disc pl-5">
                  <li><span className="font-bold">Technologies:</span> JavaScript, React JS, HTML, CSS, Tailwind CSS, Magento 2, PHP</li>
                  <li><span className="font-bold">Version Control, DevOps &amp; OS:</span> Git &amp; GitHub, Windows, Linux</li>
                  <li><span className="font-bold">Editor/IDE:</span> Visual Studio, Sublime</li>
                  <li><span className="font-bold">Tools and Software:</span> Postman, Chrome Dev Tool, MS Excel, MS Word, MS PowerPoint</li>
                  <li><span className="font-bold">Problem Solving:</span> LeetCode, Codechef</li>
                  <li><span className="font-bold">Interpersonal Skills:</span> Teamwork, Leadership, Communication</li>
                </ul>
              )}

              {activeSection === "education" && (
                <ul className="list-disc pl-5">
                  <li>B.E. in Computer Science | Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V) (2018)</li>
                  <li>Higher Secondary Certificate | Maths Group | L.G. Academy (2014)</li>
                  <li>Secondary School Certificate | Maths Group | L.G. Academy (2012)</li>
                </ul>
              )}

              {activeSection === "experience" && (
                <ul className="list-disc pl-5">
                  <li>Developed a GitHub Profile Finder application using ReactJS that allows users to quickly search for GitHub profiles and view details such as name, bio, and repositories.</li>
                  <li>Collaborated with a backend team using Spring Boot to integrate frontend and backend functionalities.</li>
                  <li>Implemented features for detailed location insights and search capabilities by division.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
