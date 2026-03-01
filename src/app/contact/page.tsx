"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-20 text-center">
        <p className="section-title">Let&apos;s Connect</p>
        <h1 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Get in Touch
        </h1>
        <div className="decorative-line"></div>
        <p className="text-[#7D7D7D] max-w-xl mx-auto mt-6">
          I&apos;d love to hear about your event or answer any questions about lessons.
          Let&apos;s create something beautiful together!
        </p>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="image-wrapper aspect-[4/3] mb-10">
              <Image
                src="/images/20250506-NaomiGarrett-Talent-11-Web.jpg"
                alt="Naomi Garrett"
                fill
                className="object-cover"
              />
            </div>

            <div className="card">
              <p className="section-title">Service Area</p>
              <p className="text-[#7D7D7D] leading-relaxed mb-8">
                Based in Belleville, I&apos;m available to perform for weddings, special events
                and more throughout Hastings County, Prince Edward County, and surrounding areas.
              </p>

              <p className="section-title">Follow Along</p>
              <a
                href="https://instagram.com/_naomiviolin_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#7D7D7D] hover:text-[#C17B6E] transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm">@_naomiviolin_</span>
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="card text-center py-16">
                <h2 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                  Thank you!
                </h2>
                <p className="text-[#7D7D7D]">
                  I&apos;ll be in touch with you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#7D7D7D] mb-3 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#7D7D7D] mb-3 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#7D7D7D] mb-3 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your event, questions about lessons, or anything else..."
                  />
                </div>

                <button type="submit" className="btn w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
