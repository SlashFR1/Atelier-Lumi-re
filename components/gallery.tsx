"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { artworks, collections } from "@/lib/artworks";

function ArtworkCard({
  artwork,
  index,
}: {
  artwork: (typeof artworks)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/artwork/${artwork.id}`}
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
          <Image
            src={artwork.image || "/placeholder.svg"}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-foreground/10 flex items-end p-6"
          >
            <span className="text-sm tracking-widest uppercase text-background">
              View Details
            </span>
          </motion.div>
        </div>

        <div className="space-y-1">
          <h3 className="font-serif text-xl text-foreground group-hover:text-muted-foreground transition-colors">
            {artwork.title}
          </h3>
          <p className="text-sm text-muted-foreground">{artwork.artist}</p>
          <p className="text-sm text-muted-foreground">
            {artwork.medium}, {artwork.year}
          </p>
          <p className="text-sm font-medium text-foreground mt-2">
            {artwork.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function Gallery() {
  const [activeCollection, setActiveCollection] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredArtworks =
    activeCollection === "All"
      ? artworks
      : artworks.filter((a) => a.collection === activeCollection);

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="py-24 md:py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Curated Artworks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each piece in our collection is carefully selected to represent the
            finest in contemporary art, chosen for its artistic merit and
            emotional resonance.
          </p>
        </motion.div>

        {/* Collection Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
        >
          {collections.map((collection) => (
            <button
              type="button"
              key={collection.name}
              onClick={() => setActiveCollection(collection.name)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 pb-1 ${
                activeCollection === collection.name
                  ? "text-foreground border-b border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {collection.name}
              <span className="ml-2 text-xs">({collection.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredArtworks.map((artwork, index) => (
            <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
