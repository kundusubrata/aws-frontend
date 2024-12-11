import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN UI Button

const ContactPage = (): React.ReactElement => {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 my-8">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-16">
        We'd love to hear from you! Reach out for business inquiries, feedback,
        or to tell us about your pet iguana.
      </p>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="johndoe@example.com"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Write your message here..."
            />
          </div>

          <Button variant="default" className="w-full py-3">
            Send Message
          </Button>
        </form>
      </div>

      <div className="mt-16 text-center text-gray-600">
        <h2 className="text-2xl font-bold mb-4">
          Our Contact Information
        </h2>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Email:</strong> contact@company.com
        </p>
        <p>
          <strong>Social Media:</strong> @company on every platform
          you’ve never heard of.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
