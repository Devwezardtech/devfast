import React, { useState } from "react";
import { motion } from "framer-motion";

const UrbanTeeLanding = () => {
  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedSize, setSelectedSize] = useState("M");

  const colors = ["Red", "Blue", "Black", "White"];
  const sizes = ["S", "M", "L", "XL"];

  const features = [
    "100% Cotton Premium Quality",
    "Available in multiple colors and sizes",
    "Machine washable",
    "Unisex fit for all occasions",
  ];

  const testimonials = [
    { name: "Alex R.", text: "Love my UrbanTee! Super soft and comfortable." },
    { name: "Sophie L.", text: "Great fit and fast shipping." },
  ];

  const faqs = [
    { q: "What material is the T-shirt made of?", a: "100% premium cotton, soft and breathable." },
    { q: "How do I choose the right size?", a: "Refer to our sizing chart for accurate measurements." },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">

      {/* HERO */}
      <motion.section
        className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white min-h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">UrbanTee Classic</h1>
        <p className="text-lg md:text-2xl mb-6">Premium T-Shirt for Every Occasion</p>
        <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
          Buy Now
        </button>
      </motion.section>

      {/* PRODUCT DETAILS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <img src="https://source.unsplash.com/500x500/?tshirt,1" alt="UrbanTee" className="rounded shadow-lg w-full" />
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={`https://source.unsplash.com/100x100/?tshirt,${i}`} alt={`Gallery ${i}`} className="rounded cursor-pointer hover:scale-105 transition transform" />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">UrbanTee Features</h2>
          <ul className="mb-6 list-disc list-inside space-y-2 text-gray-700">
            {features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <p className="text-2xl font-bold mb-4">$25.00</p>

          {/* COLOR SELECTION */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Color:</p>
            <div className="flex gap-2">
              {colors.map((color, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-lg border ${selectedColor === color ? "bg-yellow-400 border-yellow-500" : "bg-white border-gray-300"}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* SIZE SELECTION */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Size:</p>
            <div className="flex gap-2">
              {sizes.map((size, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-lg border ${selectedSize === size ? "bg-yellow-400 border-yellow-500" : "bg-white border-gray-300"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition">
            Add to Cart
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-100">
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

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 UrbanTee. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default UrbanTeeLanding;
