"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Doorstep() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Doorstep Dentistry
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dental Care & Treatment at your home.  
            Our certified dentists visit you with fully sanitized,
            portable equipment for a stress-free experience.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Know More
          </button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden"
        >
          <Image
            src="/images/doorstep/doorstep.png"
            alt="Doorstep Dental Service"
            width={600}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
