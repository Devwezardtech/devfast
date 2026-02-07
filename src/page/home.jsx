import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, CheckCircle } from "lucide-react";

export default function DevfastLanding() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Devfast 🚀
        </motion.h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Fast, modern websites for startups and small businesses.
          From landing pages to full web apps — built to convert.
        </p>
        <Button className="mt-8 text-lg px-8 py-6 rounded-2xl">
          View Sample Projects
        </Button>
      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {["Landing Pages", "Business Websites", "Web Apps"].map((service) => (
          <Card key={service} className="bg-gray-900 rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <CheckCircle className="mb-4" />
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="text-gray-400 mt-2">
                Clean UI, fast load, mobile‑friendly.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* SAMPLE PROJECTS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Sample Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-gray-900 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Project {item}</h3>
                <p className="text-gray-400 mt-2">
                  Example startup website with modern UI and strong CTA.
                </p>
                <Button className="mt-4 w-full">Select This Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Book an Appointment</h2>
        <p className="text-gray-400 mt-4">
          Click below to email me and let me know what website you need.
        </p>
        <a
          href="mailto:youremail@gmail.com?subject=Website%20Project%20Inquiry"
        >
          <Button className="mt-6 px-8 py-6 rounded-2xl text-lg">
            <Mail className="mr-2" /> Email Devfast
          </Button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Devfast. Built fast. Built right.
      </footer>
    </div>
  );
}
