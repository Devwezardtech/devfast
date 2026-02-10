import React from "react";
import { motion } from "framer-motion";

/* Stable, curated images (NO broken images) */
const menuImages = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
];

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

      {/* HERO */}
      <motion.section
        className="bg-gradient-to-br from-amber-200 via-yellow-300 to-orange-200 text-slate-900 h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">LoreCafe</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-xl">
          Your cozy coffee heaven in Tacloban City ☕
        </p>
        <button className="bg-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
          Reserve a Table
        </button>
      </motion.section>

      {/* MENU */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transition hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <img
                src={menuImages[idx]}
                alt={item.title}
                className="h-48 w-full rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg">
          LoreCafe is a family-owned café in the heart of Tacloban City.  
          We serve handcrafted coffee, fresh pastries, and a warm space
          where friends and families connect.
        </p>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                alt={`Cafe Gallery ${idx}`}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-yellow-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-700 mb-4">“{t.text}”</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact & Location
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            <p className="text-gray-700">
              📍 Tacloban City, Philippines
            </p>
            <p className="text-gray-700">
              ⏰ Mon–Fri: 7AM – 9PM<br />
              Sat–Sun: 8AM – 10PM
            </p>

            {/* Messenger CTA */}
            <a
              href="https://m.me/801311679735475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-600 transition"
            >
              Message Us on Messenger
            </a>
          </div>

          <iframe
            title="LoreCafe Location"
            src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 rounded-2xl border-0 shadow-lg"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-yellow-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} LoreCafe. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-yellow-300 cursor-pointer">Facebook</span>
            <span className="hover:text-yellow-300 cursor-pointer">Instagram</span>
            <span className="hover:text-yellow-300 cursor-pointer">Email</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LoreCafeLanding;
