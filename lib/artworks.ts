export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  description: string;
  price: string;
  collection: string;
  image: string;
  featured: boolean;
}

export const artworks: Artwork[] = [
  {
    id: "luminous-void-i",
    title: "Luminous Void I",
    artist: "Elena Marchetti",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: "120 x 150 cm",
    description: "A contemplative exploration of light and shadow, this piece invites viewers into a meditative space where form dissolves into pure luminosity. The subtle gradations of color create a sense of infinite depth.",
    price: "Enquire",
    collection: "Ethereal",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    featured: true,
  },
  {
    id: "urban-fragments",
    title: "Urban Fragments",
    artist: "Marcus Chen",
    year: 2023,
    medium: "Mixed media on panel",
    dimensions: "90 x 120 cm",
    description: "This work captures the fragmented nature of urban experience, layering textures and materials to evoke the complexity of modern city life.",
    price: "$8,500",
    collection: "Metropolitan",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
    featured: true,
  },
  {
    id: "serene-passage",
    title: "Serene Passage",
    artist: "Sofia Andersson",
    year: 2024,
    medium: "Acrylic and gold leaf on canvas",
    dimensions: "100 x 80 cm",
    description: "Inspired by Nordic landscapes, this piece combines minimalist aesthetics with rich materiality, creating a portal to tranquil contemplation.",
    price: "$12,000",
    collection: "Ethereal",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
    featured: true,
  },
  {
    id: "temporal-echoes",
    title: "Temporal Echoes",
    artist: "James Okonkwo",
    year: 2023,
    medium: "Bronze sculpture",
    dimensions: "45 x 30 x 25 cm",
    description: "A sculptural meditation on memory and time, this bronze piece features flowing forms that seem to capture moments in motion.",
    price: "$15,500",
    collection: "Sculptures",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featured: false,
  },
  {
    id: "botanical-dreams",
    title: "Botanical Dreams",
    artist: "Yuki Tanaka",
    year: 2024,
    medium: "Watercolor on paper",
    dimensions: "76 x 56 cm",
    description: "Delicate botanical studies rendered with masterful precision, these works blur the line between scientific observation and poetic interpretation.",
    price: "$4,200",
    collection: "Nature Studies",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    featured: true,
  },
  {
    id: "chromatic-field",
    title: "Chromatic Field",
    artist: "Elena Marchetti",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: "180 x 200 cm",
    description: "A monumental exploration of color relationships, this large-scale canvas creates an immersive experience of pure chromatic energy.",
    price: "Enquire",
    collection: "Ethereal",
    image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?w=800&q=80",
    featured: false,
  },
  {
    id: "whispers-of-stone",
    title: "Whispers of Stone",
    artist: "Marcus Chen",
    year: 2024,
    medium: "Marble and steel",
    dimensions: "60 x 40 x 40 cm",
    description: "Combining classical materials with contemporary form, this sculpture speaks to the dialogue between permanence and transformation.",
    price: "$22,000",
    collection: "Sculptures",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    featured: false,
  },
  {
    id: "morning-ritual",
    title: "Morning Ritual",
    artist: "Sofia Andersson",
    year: 2023,
    medium: "Oil and encaustic on wood",
    dimensions: "80 x 100 cm",
    description: "This intimate work captures the quiet beauty of everyday moments, rendered with a luminous technique that gives the surface an almost sacred quality.",
    price: "$9,800",
    collection: "Intimate Moments",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    featured: true,
  },
];

export const collections = [
  { name: "All", count: artworks.length },
  { name: "Ethereal", count: artworks.filter(a => a.collection === "Ethereal").length },
  { name: "Metropolitan", count: artworks.filter(a => a.collection === "Metropolitan").length },
  { name: "Sculptures", count: artworks.filter(a => a.collection === "Sculptures").length },
  { name: "Nature Studies", count: artworks.filter(a => a.collection === "Nature Studies").length },
];

export function getArtwork(id: string): Artwork | undefined {
  return artworks.find(a => a.id === id);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter(a => a.featured);
}
