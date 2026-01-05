"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-r from-blue-600 to-blue-500 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/hero/hero.avif"
            alt="Dhanra Dental Clinic"
            width={700}
            height={700}
            priority
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Smile Brighter. <br /> Live Better.
          </h1>

          <p className="text-lg text-white/90 mb-8">
            Premium dental care using advanced technology and painless
            procedures — designed for confident, healthy smiles.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Book Appointment
            </button>
            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition">
              Our Services
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
