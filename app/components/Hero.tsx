'use client'; 

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const texts = ['Pooja Tiwari', 'Frontend Developer', 'Programmer', 'Software Engineer'];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100; 

  useEffect(() => {
    const typeEffect = setInterval(() => {
      if (charIndex < texts[textIndex].length) {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typeEffect);
        setTimeout(() => {
          setCharIndex(0);
          setCurrentText('');
          setTextIndex((prev) => (prev + 1) % texts.length); 
        }, 1000); 
      }
    }, typingSpeed);

    return () => clearInterval(typeEffect); 
  }, [charIndex, textIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#121212] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1
              className="text-6xl font-bold mb-4 animate-fade-in-down text-gradient-to-r from-purple-400 to-pink-600"
            >
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {currentText}
              </span>
            </h1>
            <p className="text-lg mb-4">
            Passionate Software Engineer skilled in React.js and Magento development, dedicated to crafting clean, efficient code and driving innovation. Eager to collaborate with dynamic teams and contribute to impactful development projects in both front-end and e-commerce solutions.
            </p>
            <br />
            <a
              href="/poojatiwariresume.pdf" 
              download="My_CV" 
              className="px-6 py-3 bg-[#121212] text-white rounded-lg border-2 border-gradient-to-r from-purple-400 to-pink-600"
            >
              Download CV
            </a>
          </div>

          <div className="relative bg-gradient-to-r from-purple-400 to-pink-600 lg:w-[420px] lg:h-[420px] w-[270px] h-[270px] rounded-full p-[20px] flex items-center justify-center">
            <div className="bg-[#181818] w-full h-full rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/images/profile1.jpeg"
                alt="Pooja Tiwari"
                width={500}
                height={500}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}