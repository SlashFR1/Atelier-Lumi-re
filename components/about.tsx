"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "200+", label: "Artists Represented" },
    { number: "50+", label: "Exhibitions Curated" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 px-6 lg:px-12 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80"
              alt="Gallery interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              A Space for
              <br />
              <span className="italic">Artistic Dialogue</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                Founded in 2009, Atelier Lumière has established itself as a
                leading voice in contemporary art. Our gallery serves as a
                bridge between established masters and emerging talents, creating
                meaningful conversations through carefully curated exhibitions.
              </p>
              <p>
                We believe that art has the power to transform spaces and lives.
                Our mission is to make exceptional contemporary art accessible
                while supporting artists in their creative journey. Each piece in
                our collection is selected not only for its aesthetic merit but
                for its ability to evoke emotion and spark dialogue.
              </p>
              <p>
                Located in the heart of the cultural district, our 5,000 square
                foot space provides an intimate yet expansive environment for
                experiencing art at its finest.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                  }}
                >
                  <p className="font-serif text-3xl md:text-4xl text-foreground mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
