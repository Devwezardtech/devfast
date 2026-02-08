import React from "react";
import { motion } from "framer-motion";

const PrimeNestRealtyLanding = () => {
  const properties = [
    {
      title: "Modern Family House",
      price: "$250,000",
      location: "Tacloban City",
      img: "https://source.unsplash.com/600x400/?house,modern",
    },
    {
      title: "Luxury Condo Unit",
      price: "$180,000",
      location: "Tacloban City",
      img: "https://source.unsplash.com/600x400/?condo,luxury",
    },
    {
      title: "Spacious Townhouse",
      price: "$210,000",
      location: "Tacloban City",
      img: "https://source.unsplash.com/600x400/?townhouse",
    },
  ];

  const testimonials = [
    {
      name: "Angela M.",
      text: "PrimeNest helped us find our dream home fast and stress-free.",
    },
    {
      name: "Robert C.",
      text: "Very professional and responsive agent. Highly recommended!",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">

      {/* HERO */}
      <motion.section
        className="bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">PrimeNest Realty</h1>
        <p className="text-lg md:text-2xl mb-6">
          Find Your Perfect Home in Tacloban City
        </p>
        <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
          View Listings
        </button>
      </motion.section>

      {/* FEATURED PROPERTIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Properties
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-600">{p.location}</p>
                <p className="text-yellow-500 font-bold mt-2">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENT BIO */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Your Agent</h2>
        <img
          src="https://source.unsplash.com/200x200/?businessman,portrait"
          alt="Agent"
          className="mx-auto rounded-full mb-6 shadow-lg"
        />
        <p className="max-w-3xl mx-auto text-gray-700">
          Hi, I’m Alex Rivera, a licensed real estate agent with over 8 years of
          experience helping families and investors find the right property.
          Your dream home starts here.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Testimonials
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">“{t.text}”</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE VISIT */}
      <section className="max-w-xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Schedule a Visit
        </h2>
        <form className="bg-white p-8 rounded-xl shadow-lg grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="date"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition">
            Book Appointment
          </button>
        </form>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Location
        </h2>
        <iframe
          title="Tacloban City"
          src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-72 rounded-xl border-0"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 PrimeNest Realty. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PrimeNestRealtyLanding;
