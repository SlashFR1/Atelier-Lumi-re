"use client";

import React from "react"

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Let{"'"}s Start a<br />
              <span className="italic">Conversation</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Whether you{"'"}re interested in acquiring a piece, commissioning
              work, or simply learning more about our collection, we{"'"}d love to
              hear from you.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Visit Us
                </p>
                <p className="text-foreground">
                  123 Gallery Lane
                  <br />
                  Arts District, New York
                  <br />
                  NY 10001
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Opening Hours
                </p>
                <p className="text-foreground">
                  Tuesday - Saturday: 10am - 6pm
                  <br />
                  Sunday: 12pm - 5pm
                  <br />
                  Monday: Closed
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Get in Touch
                </p>
                <p className="text-foreground">
                  <a
                    href="mailto:hello@atelierlumiere.com"
                    className="hover:text-muted-foreground transition-colors"
                  >
                    hello@atelierlumiere.com
                  </a>
                  <br />
                  <a
                    href="tel:+12125551234"
                    className="hover:text-muted-foreground transition-colors"
                  >
                    +1 (212) 555-1234
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest uppercase text-muted-foreground mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase text-muted-foreground mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs tracking-widest uppercase text-muted-foreground mb-3"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors cursor-pointer"
                >
                  <option value="" className="bg-background">Select a subject</option>
                  <option value="acquisition" className="bg-background">Artwork Acquisition</option>
                  <option value="commission" className="bg-background">Commission Enquiry</option>
                  <option value="exhibition" className="bg-background">Exhibition Information</option>
                  <option value="press" className="bg-background">Press Enquiry</option>
                  <option value="other" className="bg-background">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-widest uppercase text-muted-foreground mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell us about your enquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-4 text-sm tracking-widest uppercase text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : submitted ? "Sent!" : "Send Message"}</span>
                <span className="w-8 h-[1px] bg-foreground group-hover:w-12 transition-all duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
