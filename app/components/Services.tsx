"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { title: "Braces & Aligners", image: "/images/services/braces.avif" },
  { title: "Teeth Cleaning", image: "/images/services/cleaning.avif" },
  { title: "Cosmetic Dentistry", image: "/images/services/cosmetic.avif" },
  { title: "Dental Implants", image: "/images/services/implant.avif" },
  { title: "Kids Dentistry", image: "/images/services/kids.avif" },
  { title: "Root Canal Treatment", image: "/images/services/rootcanaltreatment.avif" },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Dental Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
