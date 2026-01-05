"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/dhanra-logo.avif"
            alt="Dhanra Dental Logo"
            width={180}
            height={60}
            priority
            className="object-contain"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="flex gap-8 text-sm font-medium text-gray-700">
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#gallery" className="hover:text-blue-600 transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
          <Link
            href="/appointment"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Book Appointment
          </Link>
        </nav>

      </div>
    </header>
  );
}
