import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From routine checkups to complete smile makeovers — we offer all
            treatments under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center">

          {/* 1 */}
          <ServiceCard
            image="/images/services/cleaning.avif"
            title="Teeth Cleaning & Whitening"
            desc="Brighten your smile with painless cleaning and professional whitening."
          />

          {/* 2 */}
          <ServiceCard
            image="/images/services/rootcanaltreatment.avif"
            title="Root Canal Treatment"
            desc="Quick, painless, and modern root canal therapy to save your natural tooth."
          />

          {/* 3 */}
          <ServiceCard
            image="/images/services/braces.avif"
            title="Braces & Aligners"
            desc="Metal braces, ceramic, or invisible aligners tailored for perfect alignment."
          />

          {/* 4 */}
          <ServiceCard
            image="/images/services/cosmetic.avif"
            title="Cosmetic Dentistry"
            desc="Smile designing, veneers, and aesthetic corrections for confidence."
          />

          {/* 5 */}
          <ServiceCard
            image="/images/services/implant.avif"
            title="Dental Implants"
            desc="Permanent tooth replacement with advanced implant technology."
          />

          {/* 6 */}
          <ServiceCard
            image="/images/services/kids.avif"
            title="Kids Dentistry"
            desc="Gentle, friendly dental care designed specially for children."
          />

        </div>
      </div>
    </section>
  );
}

/* Card Component */
function ServiceCard({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group">
      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg mb-6 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
