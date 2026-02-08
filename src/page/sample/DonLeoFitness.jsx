import React from "react";
import { motion } from "framer-motion";

const DonLeoFitnessLanding = () => {
  const programs = [
    { name: "Weight Loss Program", duration: "8 weeks", price: "$150" },
    { name: "Muscle Gain Program", duration: "12 weeks", price: "$200" },
    { name: "Personal Training Session", duration: "1 session", price: "$25" },
  ];

  const testimonials = [
    { name: "Mark D.", text: "Lost 10 lbs in 2 months! DonLeo is amazing." },
    { name: "Sara P.", text: "Gained muscle and confidence. Highly recommend!" },
  ];

  const gymPhotos = [...Array(10)].map(
    (_, i) => `https://source.unsplash.com/400x300/?gym,fitness,${i}`
  );

  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* HERO */}
      <motion.section
        className="bg-gradient-to-r from-green-800 to-teal-700 text-white min-h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">DonLeo Fitness</h1>
        <p className="text-lg md:text-2xl mb-6">Transform Your Body & Mind</p>
        <button className="bg-yellow-400 text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
          Book Session
        </button>
      </motion.section>

      {/* PROGRAMS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-gray-600">{p.duration}</p>
              <p className="text-green-700 font-bold mt-2">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TRAINER */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">About DonLeo</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          DonLeo is a certified personal trainer with 10+ years of experience helping clients achieve their fitness goals. Specializing in weight loss, muscle gain, and functional training.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-yellow-50">
        <h2 className="text-3xl font-bold text-center mb-12">Client Transformations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Gym Gallery</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {gymPhotos.map((img, idx) => (
            <img key={idx} src={img} alt={`Gym ${idx+1}`} className="rounded shadow-lg" />
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="max-w-xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Session</h2>
        <form className="bg-white p-8 rounded-xl shadow-lg grid gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input type="date" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input type="time" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <button className="bg-green-800 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
            Book Session
          </button>
        </form>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
        <iframe
          title="DonLeo Fitness Location"
          src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-72 rounded-xl border-0"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 DonLeo Fitness. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DonLeoFitnessLanding;
