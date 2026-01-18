"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Pinterest", href: "#" },
  ];

  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl text-foreground">
              Atelier Lumière
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Contemporary art gallery dedicated to showcasing exceptional works
              by established and emerging artists.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              <Link
                href="#collections"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Collections
              </Link>
              <Link
                href="#about"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Follow Us
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Atelier Lumière. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Large Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden"
        >
          <p className="font-serif text-6xl md:text-8xl lg:text-9xl text-muted/50 text-center select-none">
            Lumière
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
