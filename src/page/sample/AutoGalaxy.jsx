import React, { useState } from "react";
import { motion } from "framer-motion";

const AutoGalaxyProductLanding = () => {
  const [selectedCar, setSelectedCar] = useState(0);

  const cars = [
    {
      name: "Falcon X",
      brand: "Falcon Motors",
      price: "$45,000",
      features: [
        "Electric drivetrain",
        "Autonomous driving mode",
        "Luxury interior",
      ],
      img: "https://source.unsplash.com/600x400/?sports-car,1",
    },
    {
      name: "Aero GT",
      brand: "Aero Cars",
      price: "$60,000",
      features: [
        "Hybrid engine",
        "Advanced infotainment",
        "Sleek aerodynamic design",
      ],
      img: "https://source.unsplash.com/600x400/?sports-car,2",
    },
    {
      name: "Turbo 500",
      brand: "Turbo Motors",
      price: "$72,000",
      features: [
        "V8 engine",
        "Racing suspension",
        "Premium safety features",
      ],
      img: "https://source.unsplash.com/600x400/?sports-car,3",
    },
  ];

  const testimonials = [
    { name: "Alex R.", text: "Amazing cars! The pre-order experience was smooth." },
    { name: "Sophie L.", text: "Falcon X is a dream come true! Love the design." },
  ];

  const faqs = [
    {
      q: "When will the cars be available?",
      a: "All models will be delivered starting June 2026.",
    },
    {
      q: "Can I test drive before pre-order?",
      a: "Yes! Schedule a test drive through our contact form.",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* HERO */}
      <motion.section
        className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white min-h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">AutoGalaxy Car Launch</h1>
        <p className="text-lg md:text-2xl mb-6">
          Discover the latest models from multiple top brands!
        </p>
        <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
          Pre-Order Now
        </button>
      </motion.section>

      {/* CAR SHOWCASE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Latest Models</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition transform ${
                selectedCar === idx ? "border-4 border-yellow-400" : ""
              }`}
              onClick={() => setSelectedCar(idx)}
            >
              <img src={car.img} alt={car.name} className="rounded mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-600">{car.brand}</p>
              <p className="text-yellow-600 font-bold mt-2">{car.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED CAR DETAILS */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{cars[selectedCar].name}</h2>
          <p className="mb-6 text-gray-700">{cars[selectedCar].brand}</p>
          <ul className="mb-6 text-left max-w-md mx-auto">
            {cars[selectedCar].features.map((f, i) => (
              <li key={i} className="mb-2"> {f}</li>
            ))}
          </ul>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
            Pre-Order {cars[selectedCar].name}
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD CAPTURE / PRE-ORDER FORM */}
      <section className="bg-yellow-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Stay Updated / Pre-Order</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg grid gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <button className="bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition">Pre-Order Now</button>
        </form>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <details key={idx} className="bg-white p-4 rounded-xl shadow-lg cursor-pointer">
              <summary className="font-semibold">{f.q}</summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT MAP */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Visit Our Showroom</h2>
        <iframe
          title="AutoGalaxy Location"
          src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-72 rounded-xl border-0"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 AutoGalaxy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AutoGalaxyProductLanding;
