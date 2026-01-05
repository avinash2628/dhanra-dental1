"use client";

export default function Contact() {
  return (
    <>
      {/* CONTACT / BOOK APPOINTMENT */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Book an Appointment
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We’re here to help you smile with confidence. Get in touch with us today.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT INFO */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Dhanra Dental
              </h3>
              <p className="text-gray-600 mb-6">
                Dental Aesthetic & Implant Care
              </p>

              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold">Phone:</span> +91 812 128 8804
                </p>
                <p>
                  <span className="font-semibold">Alternate:</span> +91 913 374 3734
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  dhanradental@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  Vijayawada, Andhra Pradesh
                </p>
              </div>

              {/* Clinic Hours */}
              <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  ⏰ Clinic Hours
                </h4>
                <p className="text-gray-700">
                  Mon – Sat: 10:00 AM – 8:00 PM
                </p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BLUE CONTACT BAR */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4 text-lg">
          <p>+91 812 128 8804</p>
          <p>+91 913 374 3734</p>
          <p>dhanradental@gmail.com</p>
          <p className="leading-relaxed">
            #12-260/3, Elite Plaza,<br />
            Innotel Backside Flyover Down,<br />
            Bypass Road, Ramavarappadu Ring,<br />
            Vijayawada - 08
          </p>
        </div>
      </section>
    </>
  );
}
