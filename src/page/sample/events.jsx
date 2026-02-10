import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const speakers = [
  { name: "Alexander Reyes", title: "Business Growth Expert", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Elena Cruz", title: "Marketing Strategist", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Tan", title: "Startup Mentor", img: "https://randomuser.me/api/portraits/men/52.jpg" },
  { name: "Sophia Lim", title: "Digital Marketing Guru", img: "https://randomuser.me/api/portraits/women/65.jpg" },
];

const benefits = [
  "Hands-on Business Growth Workshops",
  "1-on-1 Mentorship Opportunities",
  "Live Case Studies from Successful Entrepreneurs",
  "Networking with Like-Minded Professionals",
  "Actionable Strategies to Scale Your Business",
];

const testimonials = [
  { name: "David P.", text: "Last year’s event boosted my business revenue by 30%!" },
  { name: "Sophia M.", text: "Amazing insights and practical strategies I could apply immediately." },
  { name: "James L.", text: "The mentorship sessions were priceless!" },
];

const faqs = [
  { q: "Where is the event?", a: "Tacloban City Convention Center, Tacloban, Philippines." },
  { q: "Who should attend?", a: "Entrepreneurs, startup founders, business professionals, and marketers." },
  { q: "Is there a dress code?", a: "Business casual is recommended for comfort and professionalism." },
];

const sponsors = [
];



const BusinessEventLanding = () => {
  const [timeLeft, setTimeLeft] = useState(86400); // 24-hour countdown
  const [activeFAQ, setActiveFAQ] = useState(null);

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

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-gray-50 to-gray-100 relative">

      {/* Sticky CTA */}
      <a
        href="#register"
        className="fixed right-6 bottom-6 bg-yellow-400 text-blue-900 font-bold px-6 py-4 rounded-full shadow-xl z-50 hover:bg-yellow-300 transition transform hover:scale-105"
      >
        Register Now
      </a>

      {/* Hero */}
      <motion.section
        className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Alexander's Business Growth Event
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-6 text-gray-200 drop-shadow"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Accelerate your business with top strategies and expert guidance.
        </motion.p>
        <motion.button
          className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-xl shadow-2xl hover:bg-yellow-300 transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          Register Now
        </motion.button>
      </motion.section>

      {/* Event Highlights */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Event Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl text-center hover:shadow-2xl hover:scale-105 transition transform"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="font-semibold text-gray-800">{b}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Meet the Speakers</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {speakers.map((s, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <img src={s.img} alt={s.name} className="rounded-full w-32 h-32 mx-auto mb-4 shadow-md transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-bold text-xl">{s.name}</h3>
              <p className="text-gray-700">{s.title}</p>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="https://linkedin.com" className="text-blue-900 hover:text-yellow-400 font-semibold">LinkedIn</a>
                <a href="https://twitter.com" className="text-blue-900 hover:text-yellow-400 font-semibold">Twitter</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Event Schedule</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["09:00 AM", "11:00 AM", "02:00 PM"].map((time, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition transform"
            >
              <h3 className="font-semibold text-lg mb-2">{time}</h3>
              <p>{idx === 0 ? "Opening Remarks & Keynote" : idx === 1 ? "Workshops & Interactive Sessions" : "Networking & Closing Session"}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Frequently Asked Questions</h2>
        {faqs.map((f, idx) => (
          <div key={idx} className="border-b py-4 cursor-pointer" onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}>
            <h3 className="font-semibold text-lg flex justify-between items-center">
              {f.q} <span>{activeFAQ === idx ? "-" : "+"}</span>
            </h3>
            {activeFAQ === idx && <p className="mt-2 text-gray-700">{f.a}</p>}
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">What Past Attendees Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition transform"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-800 mb-4">"{t.text}"</p>
              <h4 className="font-semibold text-blue-900">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Countdown */}
      <section className="bg-blue-900 text-white text-center py-12">
        <h3 className="text-2xl font-bold mb-4">Hurry! Registration Ends In:</h3>
        <p className="text-3xl font-bold">{formatTime(timeLeft)}</p>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-16 px-6 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">RSVP / Register</h2>
        <form className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl grid gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"/>
          <input type="email" placeholder="Email Address" className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"/>
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"/>
          <button className="bg-blue-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition">Register Now</button>
        </form>
      </section>

      {/* Sponsors */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((s, idx) => <img key={idx} src={s} alt={`Sponsor ${idx}`} className="h-12 object-contain" />)}
        </div>
      </section>

      {/* Location Map */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Location</h2>
        <iframe
          title="Event Location"
          src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 rounded-2xl border-0 shadow-xl"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Alexander Business Event. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <h4 className="hover:text-yellow-400 transition cursor-pointer">Facebook</h4>
            <h4 className="hover:text-yellow-400 transition cursor-pointer">LinkedIn</h4>
            <h4 className="hover:text-yellow-400 transition cursor-pointer">Email</h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessEventLanding;
