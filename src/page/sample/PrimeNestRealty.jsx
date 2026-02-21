import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PrimeNestRealtyLanding = () => {
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState(null);

  // Generate 10 properties dynamically
  const properties = Array.from({ length: 10 }, (_, i) => ({
    title: `Luxury Property ${i + 1}`,
    price: `$${(180 + i * 10)},000`,
    location: "Tacloban City",
    img: `/primenestrealty/house${i + 1}.png`,
    hot: i % 3 === 0, // every 3rd property is "HOT"
    gallery: [
      `/primenestrealty/house${i + 1}.png`,
      `/primenestrealty/house${((i + 1) % 10) + 1}.png`,
    ],
  }));

  return (
    <div
      className={`${
        dark
          ? "dark bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black text-gray-100"
          : "bg-white text-gray-900"
      } scroll-smooth font-sans transition-all duration-700`}
    >
      {/* Floating Luxury Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-white/30 dark:border-white/10 px-10 py-4 rounded-full shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex gap-10 items-center transition">
        <a href="#hero" className="hover:opacity-70">Home</a>
        <a href="#properties" className="hover:opacity-70">Properties</a>
        <a href="#contact" className="hover:opacity-70">Contact</a>

        <button
          onClick={() => setDark(!dark)}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:scale-110 transition"
        >
          <span className="text-lg">{dark ? "☀️" : "🌙"}</span>
        </button>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/primenestrealty/house5.png')" }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-5xl"
        >
          <h1 className="text-7xl font-extrabold tracking-tight mb-8">
            PrimeNest Realty
          </h1>
          <p className="text-2xl mb-10">
            Luxury Living Elevated.
          </p>
        </motion.div>
      </section>

      {/* PROPERTIES */}
      <section id="properties" className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-5xl font-bold text-center mb-20">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {properties.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-transparent dark:border-white/10 shadow-xl dark:shadow-[0_0_40px_rgba(0,0,0,0.6)] cursor-pointer transition"
              onClick={() => setSelected(p)}
            >
              {p.hot && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 text-sm rounded-full z-20">
                  HOT DEAL
                </div>
              )}

              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-2 rounded-full font-bold shadow-lg z-20">
                {p.price}
              </div>

              <img
                src={p.img}
                alt={p.title}
                className="h-72 w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="opacity-70">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROPERTY MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white dark:bg-[#111827] dark:border dark:border-white/10 dark:shadow-[0_0_60px_rgba(0,0,0,0.8)] rounded-3xl p-8 max-w-3xl w-full relative transition">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-black/10 dark:bg-white/10"
              >
                ×
              </button>

              <h2 className="text-3xl font-bold mb-6">{selected.title}</h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {selected.gallery.map((img, i) => (
                  <img key={i} src={img} className="rounded-xl" alt="" />
                ))}
              </div>

              <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                Book Viewing
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT */}
      <section id="contact" className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Us</h2>
        <form className="space-y-6">
          <input required placeholder="Full Name" className="w-full p-4 rounded-xl border dark:bg-white/5 dark:border-white/10" />
          <input required type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border dark:bg-white/5 dark:border-white/10" />
          <textarea required placeholder="Message" rows="5" className="w-full p-4 rounded-xl border dark:bg-white/5 dark:border-white/10" />
          <button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12 text-center">
        <p>© 2026 PrimeNest Realty. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PrimeNestRealtyLanding;