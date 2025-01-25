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

          <div className="md:w-1/2 flex flex-col">
            <p className="text-lg mb-4">
            Software Engineer (SWE) specializing in both Frontend development with React.js and e-commerce development with Magento. Proficient in JavaScript, React, Magento 2, and a variety of frontend and e-commerce tools. Committed to crafting clean, efficient code and driving innovation in every project. Passionate about collaborating with dynamic teams to create impactful solutions and continuously advance in both frontend and e-commerce development.
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
                <li><span className="font-bold">Frontend Development:</span> React, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap</li>
                <li><span className="font-bold">Magento Development:</span> Magento 2.x, PHP, MySQL, Magento theme customization, Module development, Performance optimization</li>
                <li><span className="font-bold">CMS Platforms:</span> Magento 2, WordPress, Shopify</li>
                <li><span className="font-bold">Version Control, DevOps & OS:</span> Git, GitHub, Windows, Linux</li>
                <li><span className="font-bold">Editor/IDE:</span> Visual Studio, Sublime</li>
                <li><span className="font-bold">Tools and Software:</span> Postman, Chrome Dev Tools, MS Excel, MS Word, MS PowerPoint</li>
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
                    <li>Created a project collaboration tool with user account features, profile image uploads, and task assignments.</li>
                    <li>Developed a GitHub Profile Finder application using ReactJS for quick GitHub profile searches and detailed insights.</li>
                   <li>Built a movie search app using React and OMDB API, enhancing UI/UX for better user engagement.</li>
                   <li>Maintained and enhanced an e-commerce platform for artists, focusing on effective artwork showcasing.</li>
                   <li>Maintained and enhanced an e-commerce platform Mimarbaby for baby accessories, focusing on user experience and functionality.</li>
                   <li>Developed a platform AARTIV for artists to showcase and sell artwork with cryptopowered auction capabilities.</li>
                   <li>Designed a mobile phone e-commerce platform for a seamless shopping experience.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
