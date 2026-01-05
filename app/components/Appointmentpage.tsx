"use client";

import { motion } from "framer-motion";

const appointments = [
  {
    title: "Dental Filling",
    time: "1 hr 30 min",
    image: "/images/services/cleaning.avif",
  },
  {
    title: "Dental Cleaning",
    time: "1 hr",
    image: "/images/services/cosmetic.avif",
  },
  {
    title: "Oral Health Consultation",
    time: "1 hr",
    image: "/images/services/rootcanaltreatment.avif",
  },
];

export default function Appointmentpage() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Book Your Appointment
        </motion.h2>

        <p className="text-center text-gray-600 mb-16">
          We ensure a smooth, comfortable, and stress-free dental experience.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {appointments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 mb-6">{item.time}</p>

                <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
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
