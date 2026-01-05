import Image from "next/image";
import Link from "next/link";

const appointments = [
  {
    title: "Dental Filling",
    duration: "1 hr 30 min",
    image: "/images/services/cleaning.avif",
  },
  {
    title: "Dental Cleaning",
    duration: "1 hr",
    image: "/images/services/cosmetic.avif",
  },
  {
    title: "Oral Health Consultation",
    duration: "1 hr",
    image: "/images/services/rootcanal.avif",
  },
];

export default function Appointmentpage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Book Your Appointment
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We ensure a smooth, comfortable, and stress-free dental experience —
            starting with your first click.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {appointments.map((item, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <div className="h-px bg-gray-200 my-4" />

                <p className="text-gray-600 mb-6">{item.duration}</p>

                <Link
                  href="/#contact"
                  className="inline-block bg-blue-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
