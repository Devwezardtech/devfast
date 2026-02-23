import React, { useState } from "react";
import { motion } from "framer-motion";

const UrbanTeeLanding = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "UA Premium Hoodie V3.0 - Midnight Black", front: "/urbantee/urban1.png", back: "/urbantee/urban2.png", desc: "Heavyweight Fleece, 500GSM, Double Layered Hood, Embroidered, Old English design, TopGrade Rubber Print, Luxurious Comfort, Front Pockets, Labelled Tags, Rubber Patching, New Cracked Back Print" },
    { id: 2, name: "UA Premium Hoodie V3.0 - Moon Grey", front: "/urbantee/urban3.png", back: "/urbantee/urban4.png", desc: "Heavyweight Fleece, 500GSM, Double Layered Hood, Embroidered, Old English design, TopGrade Rubber Print, Luxurious Comfort, Front Pockets, Labelled Tags, Rubber Patching, New Cracked Back Print"},
    { id: 3, name: "UA Prime F.C.O. Hoodies Black", front: "/urbantee/urban5.png", back: "/urbantee/urban6.png", desc: "Heavyweight Fleece, 500GSM, Double Layered Hood, Embroidered, Old English design, TopGrade Rubber Print, Luxurious Comfort, Front Pockets, Labelled Tags, Rubber Patching, New Cracked Back Print"},
    { id: 4, name: "UA Prime F.C.O. Hoodies White", front: "/urbantee/urban8.png", back: "/urbantee/urban9.png", desc: "Deep white tone designed for elevated streetwear."},
    { id: 5, name: "UA Plain Sweat Pants - Top Dye Grey", front: "/urbantee/urban10.png", back: "/urbantee/urban11.png", desc: "Elevate your casual wardrobe with the UA Plain Sweat Pants - Fleece Fabric | Top Dye Grey, designed for comfort and style.", price: "$25" },
    { id: 6, name: "UA Prime F.C.O. Sweat Pants Black", front: "/urbantee/urban12.png", back: "/urbantee/urban12.png", desc: "Structured cotton silhouette with a clean modern finish.", price: "$25" },
{ id: 7, name: "UA PRIME SHIRTS - F.C.O. White", front: "/urbantee/urban14.png", back: "/urbantee/urban15.png", desc: "Proudly crafted in Cebu City, Philippines. Available in 2 colorways. 310GSM pure cotton – substantial yet refined softness. Pre-shrunk, shrink-free construction for a consistent fit. Modern tailored cut with a sleek, versatile silhouette. Classic crew neck – timeless and resilient against wear. Front Premium rubber print – durable, crack- and peel-resistant finish. Engineered for breathability and all-day luxurious comfort. UA signature label – a mark of authenticity and Filipino pride. Part of the Back to Basic Collection – A limited release of essentials. Silkscreen back print - heat-cured for strong wash resistance, helping prevent premature fading and keeping the print looking premium over time.", price: "$30" },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden scroll-smooth">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/urbantee/urban16.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-[0.3em] mb-6">
            URBANTEE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Minimal. Timeless. Elevated.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition shadow-2xl">
            Explore Collection
          </button>
        </motion.div>
      </section>

      {/* ================= COLLECTION ================= */}
      <section className="py-32 px-6">
        <h2 className="text-5xl font-bold text-center mb-24 tracking-widest">
          THE COLLECTION
        </h2>

        <div className="max-w-7xl mx-auto space-y-40">

          {products.map((product, idx) => {
            const isReversed = idx % 2 === 1; // odd = reversed
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-20 items-center`}
              >
                {/* IMAGE */}
                <div className={`relative group ${isReversed ? "order-2 md:order-2" : ""}`}>
                  <img
                    src={product.front}
                    alt={`${product.name} Front`}
                    className="rounded-3xl transition duration-700 group-hover:opacity-0"
                  />
                  {product.back && (
                    <img
                      src={product.back}
                      alt={`${product.name} Back`}
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700"
                    />
                  )}
                </div>

                {/* TEXT */}
                <div className={` ${isReversed ? "order-1 md:order-1" : ""}`}>
                  <h3 className="text-4xl font-bold mb-6">{product.name}</h3>
                  <p className="text-gray-400 mb-6">{product.desc}</p>
                  <button
                    className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
                    onClick={() => openModal(product)}
                  >
                    View Product
                  </button>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {modalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-black rounded-2xl p-8 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <img
                src={selectedProduct.front}
                alt={`${selectedProduct.name} Front`}
                className="rounded-xl"
              />
              {selectedProduct.back && (
                <img
                  src={selectedProduct.back}
                  alt={`${selectedProduct.name} Back`}
                  className="rounded-xl"
                />
              )}
            </div>
            <h3 className="text-3xl font-bold mb-4">{selectedProduct.name}</h3>
            <p className="text-gray-400 mb-2">{selectedProduct.desc}</p>
            <p className="text-yellow-400 font-bold text-2xl mb-4">{selectedProduct.price}</p>
          </motion.div>
        </div>
      )}

      {/* ================= CAMPAIGNS AND FOOTER ================= */}
      {/* Keep your original campaign break sections exactly the same */}
      <section
        className="h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/urbantee/urban16.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <h2 className="text-6xl font-extrabold tracking-[0.4em]">
            STREET ESSENCE
          </h2>
        </div>
      </section>

      <section
        className="h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/urbantee/urban14.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <h2 className="text-6xl font-extrabold tracking-[0.4em]">
            MODERN FORM
          </h2>
        </div>
      </section>

      <section
        className="h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/urbantee/urban15.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <h2 className="text-6xl font-extrabold tracking-[0.4em]">
            ELEVATED STREET
          </h2>
        </div>
      </section>

      <footer className="border-t border-white/10 py-4 text-center text-gray-500">
        © 2026 UrbanTee. All Rights Reserved.
      </footer>

    </div>
  );
};

export default UrbanTeeLanding;