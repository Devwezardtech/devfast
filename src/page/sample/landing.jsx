import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export default function LandingSample() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6">
      {/* Hero */}
      <section className="max-w-5xl mx-auto py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          Startup Landing Page
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A high-converting landing page designed for startups.
          Built to capture leads and explain your product clearly.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Get This Design</Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {["Fast Performance", "Modern UI", "Mobile Ready"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-gray-900 p-6 rounded-2xl"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="text-gray-400 mt-2">
              Optimized for speed, conversions, and user experience.
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold">Want this exact website?</h2>
        <p className="text-gray-400 mt-4">
          Click below and tell me you want the “Startup Landing Page” design.
        </p>
        <a
          href="mailto:youremail@gmail.com?subject=I%20want%20the%20Startup%20Landing%20Page"
        >
          <Button className="mt-6 px-8 py-6 text-lg">
            Book This Design
          </Button>
        </a>
      </section>
    </div>
  );
}
