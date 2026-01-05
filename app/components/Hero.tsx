"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-500">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* LEFT — IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/hero/hero.avif"
              alt="Dhanra Dental Clinic"
              width={520}
              height={520}
              priority
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Smile Brighter.<br />
              Live Better.
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto md:mx-0">
              Premium dental care using advanced technology and painless
              procedures — designed for confident, healthy smiles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold shadow-lg hover:bg-gray-100 transition"
              >
                Book Appointment
              </Link>

              <Link
                href="#services"
                className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Our Services
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
