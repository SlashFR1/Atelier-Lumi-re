"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getArtwork, artworks } from "@/lib/artworks";
import { notFound } from "next/navigation";

function ArtworkDetailContent({ id }: { id: string }) {
  const artwork = getArtwork(id);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!artwork) {
    notFound();
  }

  // Get related artworks
  const relatedArtworks = artworks
    .filter((a) => a.collection === artwork.collection && a.id !== artwork.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <Link
            href="/#collections"
            className="group flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="w-8 h-[1px] bg-muted-foreground group-hover:w-12 group-hover:bg-foreground transition-all duration-300" />
            <span>Back to Gallery</span>
          </Link>
          <Link href="/" className="font-serif text-xl text-foreground">
            Atelier Lumière
          </Link>
        </div>
      </motion.div>

      <div className="pt-24 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className={`relative aspect-[4/5] overflow-hidden bg-muted cursor-zoom-in transition-transform duration-500 ${
                  isZoomed ? "scale-150 cursor-zoom-out z-50" : ""
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Click image to zoom
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pt-12"
            >
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                {artwork.collection}
              </p>

              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                {artwork.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                by {artwork.artist}
              </p>

              <div className="space-y-6 pb-8 border-b border-border mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      Year
                    </p>
                    <p className="text-foreground">{artwork.year}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      Medium
                    </p>
                    <p className="text-foreground">{artwork.medium}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      Dimensions
                    </p>
                    <p className="text-foreground">{artwork.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      Price
                    </p>
                    <p className="text-foreground font-medium">{artwork.price}</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  About This Work
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
                >
                  <span>Enquire About This Piece</span>
                </Link>
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-foreground text-foreground text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors bg-transparent"
                >
                  <span>Share</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Related Works */}
          {relatedArtworks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-24"
            >
              <h2 className="font-serif text-3xl text-foreground mb-8">
                Related Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArtworks.map((related) => (
                  <Link
                    key={related.id}
                    href={`/artwork/${related.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-foreground group-hover:text-muted-foreground transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {related.artist}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ArtworkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <ArtworkDetailContent id={id} />;
}
