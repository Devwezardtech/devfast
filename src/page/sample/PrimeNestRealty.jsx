import React from "react";
import { motion } from "framer-motion";

const PrimeNestRealtyLanding = () => {
  const properties = [
    {
      title: "Modern Family House",
      price: "$250,000",
      location: "Tacloban City",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Luxury Condo Unit",
      price: "$180,000",
      location: "Tacloban City",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      title: "Spacious Townhouse",
      price: "$210,000",
      location: "Tacloban City",
      img: "https://images.unsplash.com/photo-1598228723793-52759bba239c",
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
<section
  className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d')",
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Soft Gradient Fade (Bottom) */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 px-6 max-w-4xl"
  >
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
      PrimeNest Realty
    </h1>

    <p className="text-xl md:text-2xl text-gray-200 mb-8">
      Discover Elegant Homes & Luxury Living in Tacloban City
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      <button className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition shadow-xl">
        View Listings
      </button>

      <button className="border border-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition">
        Contact Agent
      </button>
    </div>
  </motion.div>
</section>


      {/* FEATURED PROPERTIES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {properties.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-500">{p.location}</p>
                <p className="text-yellow-500 font-bold mt-3 text-lg">
                  {p.price}
                </p>
                <button className="mt-5 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AGENT SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            alt="Agent"
            className="rounded-2xl shadow-xl"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6">Meet Your Agent</h2>
            <p className="text-gray-600 leading-relaxed">
              Hi, I’m Alex Rivera, a licensed real estate expert with over 8 years
              of experience helping families and investors secure the right
              property. I’m committed to guiding you every step of the way.
            </p>
            <button className="mt-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              Contact Agent
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-100 py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-700 mb-4 text-lg">“{t.text}”</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <button className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition shadow-xl">
            Schedule a Visit
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 PrimeNest Realty. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PrimeNestRealtyLanding;
