import React from "react";
import { motion } from "framer-motion";

const ProfessionalServicesLanding = () => {
  const services = [
    { title: "Structural Design", desc: "Safe and efficient building plans for all projects." },
    { title: "Project Management", desc: "On-time and on-budget project supervision." },
    { title: "Consultation", desc: "Expert advice for your engineering needs." },
  ];

  const testimonials = [
    {
      name: "Carlos D.",
      text: "Excellent service and highly professional. Would hire again.",
    },
    {
      name: "Mark S.",
      text: "They helped us complete our project on time with high quality.",
    },
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

         
        <h1 className="text-4xl md:text-6xl font-bold mb-4">John Anderson Engineering</h1>
        <p className="text-lg md:text-2xl mb-6">Professional Engineering & Contracting Services</p>
        <button className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition">
          Book a Consultation
        </button>
      </motion.section>

      {/* Services Offered */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
              <img
                src={`https://randomuser.me/api/portraits/men/${30 + idx}.jpg`}
                alt={s.title}
                className="rounded-full w-24 h-24 mx-auto mt-4"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About / Credentials */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About John Anderson</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          John Anderson is a licensed civil engineer with over 15 years of experience in structural design, project management, and consulting. Certified in multiple construction and engineering disciplines, he ensures projects are executed efficiently and safely.
        </p>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Client Feedback</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment / Booking Form */}
      <section className="bg-gray-200 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Book a Consultation</h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <textarea
            placeholder="Project Details"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            rows={4}
          ></textarea>
          <button className="bg-blue-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition">
            Submit Request
          </button>
        </form>
      </section>

      {/* Contact & Map */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
        <iframe
          title="Engineering Office"
          src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 rounded-xl border-0"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} John Anderson Engineering. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
            <a href="#" className="hover:text-yellow-400 transition">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalServicesLanding;
