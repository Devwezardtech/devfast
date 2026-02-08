import React from "react";
import { motion } from "framer-motion";

const LoreCafeLanding = () => {
  const services = [
    { title: "Breakfast Specials", desc: "Freshly brewed coffee and pastries." },
    { title: "Lunch Menu", desc: "Delicious sandwiches and local dishes." },
    { title: "Cafe Drinks", desc: "Smoothies, teas, and specialty coffees." },
  ];

  const testimonials = [
    { name: "Juan D.", text: "Best coffee in Tacloban! Cozy place to relax." },
    { name: "Maria S.", text: "Friendly staff and amazing pastries!" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* Hero */}
      <motion.section
        className="bg-yellow-600 text-white h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">LoreCafe</h1>
        <p className="text-lg md:text-2xl mb-6">Your cozy coffee spot in Tacloban City.</p>
        <button className="bg-white text-yellow-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Reserve a Table
        </button>
      </motion.section>

      {/* Services / Products */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <img src={`https://source.unsplash.com/300x200/?coffee,${idx}`} alt={item.title} className="rounded mt-4" />
            </div>
          ))}
        </div>
      </section>

      {/* About / Story */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          LoreCafe is a family-owned cafe in the heart of Tacloban City. We pride ourselves on fresh ingredients, excellent coffee, and a cozy atmosphere for friends and family.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, idx) => (
            <img key={idx} src={`https://source.unsplash.com/400x300/?cafe,${idx}`} alt={`Gallery ${idx}`} className="rounded shadow-lg" />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-yellow-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Reviews</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Map */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact & Location</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form className="bg-white p-6 rounded-xl shadow-lg grid gap-4">
            <input type="text" placeholder="Your Name" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" />
            <input type="email" placeholder="Your Email" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" />
            <textarea placeholder="Message" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" rows={4}></textarea>
            <button className="bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">Send Message</button>
          </form>
          <iframe
            title="LoreCafe Location"
            src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 rounded-xl border-0"
          ></iframe>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Opening Hours</h2>
        <p className="text-gray-700">Mon-Fri: 7:00 AM - 9:00 PM</p>
        <p className="text-gray-700">Sat-Sun: 8:00 AM - 10:00 PM</p>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-600 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} LoreCafe. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-200 transition">Facebook</a>
            <a href="#" className="hover:text-gray-200 transition">Instagram</a>
            <a href="#" className="hover:text-gray-200 transition">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoreCafeLanding;
