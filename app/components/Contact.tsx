"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-4xl font-bold mb-6">Book an Appointment</h2>
          <p className="text-gray-600 mb-6">
            We’re here to help you smile with confidence.
          </p>

          <p className="mb-2"><strong>Phone:</strong> +91 8121288804</p>
          <p className="mb-2"><strong>Email:</strong> dhanradental@gmail.com</p>
          <p className="mb-6">
            <strong>Address:</strong><br />
            #12-260/3, Elite Plaza,<br />
            Innotel Backside Flyover Down,<br />
            Bypass Road, Ramavarappadu Ring,<br />
            Vijayawada – 08
          </p>
        </div>

        <form className="bg-white shadow-md rounded-xl p-8 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-md"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border p-3 rounded-md"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full">
            Submit
          </button>
        </form>

      </div>
    </motion.section>
  );
}
