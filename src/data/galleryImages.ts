export interface GalleryImage {
  src: string;
  title: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "./helm.jpg", title: "At the Helm", alt: "Scout at the helm of a large yacht." },
  { src: "./sunfish.jpg", title: "Lake Travis", alt: "Learning to sail on Sunfish boats" },
  { src: "./sunset.jpg", title: "Red Sky at Night", alt: "Beautiful sunset at Florida Sea Base" },
  { src: "./gale.jpg", title: "Blowing a Gale", alt: "Seamanship during storm force winds" },
  { src: "./snorkel jump.jpg", title: "Snorkel Adventure", alt: "Scouts enjoying snorkeling activities" },
  { src: "./snorkel.jpg", title: "Buddy Check", alt: "Scout Diving on a Coral Reef" }
];