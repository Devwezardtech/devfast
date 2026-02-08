import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BusinessEventLanding = () => {
  const [timeLeft, setTimeLeft] = useState(86400); // 24-hour countdown for registration urgency

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
  };

  const speakers = [
    { name: "Alexander Reyes", title: "Business Growth Expert", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Elena Cruz", title: "Marketing Strategist", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  ];

  const benefits = [
    "Learn proven business growth strategies.",
    "Network with like-minded professionals.",
    "Get actionable insights for your startup.",
  ];

  const testimonials = [
    { name: "David P.", text: "Last year’s event boosted my business revenue by 30%!" },
    { name: "Sophia M.", text: "Amazing insights and practical strategies I could apply immediately." },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* Hero Section */}
      <motion.section
        className="bg-blue-900 text-white h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Alexander's Business Growth Event</h1>
        <p className="text-lg md:text-2xl mb-6">Accelerate your business with top strategies and expert guidance.</p>
        <button className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition">
          Register Now
        </button>
        <p className="mt-4 text-lg">Location: Tacloban City</p>
      </motion.section>

      {/* Event Details */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Event Schedule</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold mb-2">09:00 AM</h3>
            <p>Opening Remarks & Keynote</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold mb-2">11:00 AM</h3>
            <p>Workshops & Interactive Sessions</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold mb-2">02:00 PM</h3>
            <p>Networking & Closing Session</p>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Speakers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {speakers.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform">
              <img src={s.img} alt={s.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="font-semibold text-xl">{s.name}</h3>
              <p className="text-gray-600">{s.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Attend?</h2>
        <ul className="grid md:grid-cols-3 gap-8 text-center">
          {benefits.map((b, idx) => (
            <li key={idx} className="bg-yellow-50 p-6 rounded-xl shadow-lg">
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* Registration Form */}
      <section className="bg-gray-200 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">RSVP / Register</h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg grid gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
          <button className="bg-blue-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition">Register Now</button>
        </form>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Past Attendees Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="bg-blue-900 text-white text-center py-12">
        <h3 className="text-2xl font-bold mb-4">Hurry! Registration Ends In:</h3>
        <p className="text-3xl font-bold">{formatTime(timeLeft)}</p>
      </section>

      {/* Contact & Map */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Location</h2>
        <iframe
          title="Event Location"
          src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 rounded-xl border-0"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Alexander Business Event. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
           <h4 className="hover:text-yellow-400 transition" >Faceboojk</h4>
         <h4 className="hover:text-yellow-400 transition" >LinkedIn</h4>
         <h4 className="hover:text-yellow-400 transition" >Email</h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessEventLanding;
