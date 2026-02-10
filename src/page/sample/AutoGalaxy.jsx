import React, { useState } from "react";
import { motion } from "framer-motion";

const AutoGalaxyBMWLanding = () => {
  const [selectedCar] = useState(0);

  // BMW top models / brand logos (all BMW)
  const topBMWModels = [
    { name: "BMW Logo", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
    { name: "BMW 3 Series", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
    { name: "BMW 5 Series", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
    { name: "BMW 7 Series", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
    { name: "BMW X5", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
    { name: "BMW X3", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
    { name: "BMW M3", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
    { name: "BMW i8", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
    { name: "BMW Z4", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
    { name: "BMW X6", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200" },
  ];

  // BMW cars with working images
  const bmwCars = [
    {
      name: "BMW 3 Series",
      brand: "BMW",
      price: "$45,000",
      features: ["Turbocharged engine", "Sporty interior", "Digital cockpit"],
      img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=400&h=200",
    },
    {
      name: "BMW 5 Series",
      brand: "BMW",
      price: "$60,000",
      features: ["Luxury interior", "Adaptive cruise control", "Premium safety features"],
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=600&h=400",
    },
    {
      name: "BMW X5",
      brand: "BMW",
      price: "$75,000",
      features: ["All-wheel drive", "Advanced infotainment", "Spacious interior"],
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=600&h=400",
    },
    {
      name: "BMW M3",
      brand: "BMW",
      price: "$70,000",
      features: ["V6 engine", "Sport suspension", "High-performance brakes"],
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=600&h=400",
    },
    {
      name: "BMW i8",
      brand: "BMW",
      price: "$140,000",
      features: ["Hybrid engine", "Futuristic design", "Luxury interior"],
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=600&h=400",
    },
  ];

  const testimonials = [
    { name: "Alex R.", text: "BMW cars are simply amazing! The 3 Series is a dream." },
    { name: "Sophie L.", text: "I love the BMW X5 — powerful and comfortable!" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* HERO */}
<motion.section
  className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&w=600&h=400")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Hero content */}
  <div className="relative z-10 flex flex-col justify-center items-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">AutoGalaxy BMW Launch</h1>
    <p className="text-lg md:text-2xl mb-6">
      Discover the latest BMW models from around the world!
    </p>
    <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
      Pre-Order Now
    </button>
  </div>
</motion.section>


      {/* TOP BMW MODELS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Top BMW Models</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {topBMWModels.map((b, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition transform cursor-pointer"
              whileHover={{ scale: 1.08 }}
            >
              <img src={b.img} alt={b.name} className="w-40 h-20 object-cover mb-2"/>
              <p className="font-semibold">{b.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS BMW */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {bmwCars.map((car, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img src={car.img} alt={car.name} className="rounded mb-4 w-full h-48 object-cover"/>
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-600">{car.brand}</p>
              <p className="text-blue-900 font-bold mt-2">{car.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SELECTED BMW DETAILS */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{bmwCars[selectedCar].name}</h2>
          <p className="mb-6">{bmwCars[selectedCar].brand}</p>
          <ul className="mb-6 text-left max-w-md mx-auto list-disc list-inside">
            {bmwCars[selectedCar].features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <p className="text-yellow-400 text-2xl font-bold mb-6">{bmwCars[selectedCar].price}</p>
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
            Pre-Order {bmwCars[selectedCar].name}
          </button>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
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

      {/* CONTACT / PRE-ORDER FORM */}
      <section className="bg-yellow-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Pre-Order / Stay Updated</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg grid gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <button className="bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition">Pre-Order Now</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 AutoGalaxy BMW. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AutoGalaxyBMWLanding;
