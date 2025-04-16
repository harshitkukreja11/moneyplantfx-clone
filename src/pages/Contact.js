// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h3>
              <p className="text-gray-600">
                Have questions? Reach out to us and our support team will get back to you shortly.
              </p>
            </div>

            <div className="text-gray-700 space-y-3">
              <p><strong>Email:</strong> support@moneyplantfx.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> 101 Forex Tower, Business Bay, Mumbai, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white rounded-2xl shadow p-8 space-y-6">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
