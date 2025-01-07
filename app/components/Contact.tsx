import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-[#181818] text-white">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-white-400">Get in Touch</h2>
        <form className="max-w-md mx-auto bg-[#121212] p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <div className="w-full">
              <Input
                type="text"
                placeholder="Your Name"
                className="!w-full !bg-[#262626] !text-white !placeholder-gray-400 !focus:ring-2 !focus:ring-yellow-400 !focus:outline-none"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="w-full">
              <Input
                type="email"
                placeholder="Your Email"
                className="!w-full !bg-[#262626] !text-white !placeholder-gray-400 !focus:ring-2 !focus:ring-yellow-400 !focus:outline-none"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Your Message"
              className="!w-full !bg-[#262626] !text-white !placeholder-gray-400 !focus:ring-2 !focus:ring-yellow-400 !focus:outline-none"
              rows={4}
              style={{ width: "100%" }}
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
