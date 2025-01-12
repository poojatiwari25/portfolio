"use client"; // Add this directive at the top

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_eovi3a9", // Replace with your EmailJS service ID
          "template_b6pjsk9", // Replace with your EmailJS template ID
          form.current,
          "OQ--e92mEANO-V5Uk" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log("Message sent:", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log("Error:", error.text);
            alert("Failed to send the message. Please try again.");
          }
        );
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-[#181818] text-white">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-white-400">Get in Touch</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto bg-[#121212] p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <Input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="!w-full !bg-[#262626] !text-white !placeholder-gray-400 !focus:ring-2 !focus:ring-yellow-400 !focus:outline-none" style={{width:"100%", color:"black"}}
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="!w-full !bg-[#262626] !text-white !placeholder-gray-400 !focus:ring-2 !focus:ring-yellow-400 !focus:outline-none" style={{width:"100%", color:"black"}}
            />
          </div>
          <div className="mb-4">
            <Textarea
              name="message"
              placeholder="Your Message"
              className="!w-full !bg-[#262626] !text-white !placeholder-gray-400 !focus:ring-2 !focus:ring-yellow-400 !focus:outline-none" style={{width:"100%", color:"black"}}
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-pink-600 text-gray-900 hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:outline-none py-2 rounded-lg font-semibold"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
