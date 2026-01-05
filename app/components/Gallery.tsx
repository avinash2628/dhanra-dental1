"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const galleryImages = [
    "/images/gallery/1.jpeg",
    "/images/gallery/2.jpeg",
    "/images/gallery/3.jpeg",
    "/images/gallery/4.jpeg",
    "/images/gallery/5.jpeg",
    "/images/gallery/6.jpeg",
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-14"
      >
        Our Clinic Gallery
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
