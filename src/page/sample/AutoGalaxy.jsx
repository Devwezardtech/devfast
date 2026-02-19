import React from "react";
import { motion } from "framer-motion";

const cars = [
  {
    name: "Toyota Fortuner 4x2 G AT",
    price: "₱2,030,000",
    img: "/image/car1.png",
  },
  {
    name: "Toyota Hilux Conquest 2.8 4x4 AT",
    price: "₱1,963,000",
    img: "/image/car2.png",
  },
  {
    name: "Toyota Fortuner 2.8 4x4 LTD",
    price: "₱2,656,000",
    img: "/image/car3.png",
  },
  {
    name: "Toyota Corolla Cross 1.8 G CVT",
    price: "₱1,300,000",
    img: "/image/car4.png",
  },
  {
    name: "Isuzu D-Max 3.0 LS-E 4x4 AT",
    price: "$80,000",
    img: "/image/car5.png",
  },
  {
    name: "Toyota Yaris Cross",
    price: "₱1,690,000",
    img: "/image/car6.png",
  },
];

const AutoGalaxyBMWLanding = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* HERO */}
      <motion.section
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage:
            'url("/image/car3.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            AutoGalaxy Toyota
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200">
            Experience Engineering Excellence
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition shadow-xl">
            Explore Models
          </button>
        </div>
      </motion.section>

      {/* BMW COLLECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Toyota Collection 2026
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{car.name}</h3>
                <p className="text-blue-900 font-bold text-lg mb-4">
                  {car.price}
                </p>

                <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-700 mb-4">
              “The Toyota completely changed my driving experience. Pure power.”
            </p>
            <h4 className="font-semibold">— Daniel R.</h4>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-700 mb-4">
              “Toyota made my purchase smooth and professional. Highly recommended!”
            </p>
            <h4 className="font-semibold">— Sophia L.</h4>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Pre-Order Your Toyota
        </h2>

        <form className="max-w-xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
          />

          <button className="bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition">
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center">
        <p>© 2026 AutoGalaxy Toyota. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AutoGalaxyBMWLanding;
