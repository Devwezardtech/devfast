import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function DevfastLanding() {
  const navigate = useNavigate();
  const go = (path) => navigate(path);

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold"
        >
          Devfast 🚀
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          Fast, modern websites for startups and small businesses.
          From landing pages to full web apps — built to convert.
        </motion.p>

        <Button className="mt-8 text-lg px-8 py-6 rounded-2xl">
          View Sample Projects
        </Button>
      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {["Landing Pages", "Business Websites", "Web Apps"].map((service) => (
          <motion.div
            key={service}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="bg-gray-900 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <CheckCircle className="mb-4 text-indigo-500" />
                <h3 className="text-xl font-semibold">{service}</h3>
                <p className="text-gray-400 mt-2">
                  Clean UI, fast load, mobile-friendly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Sample Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Startup Landing Page",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              action: () => go("/project/landing"),
            },
            {
              title: "Business Website",
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
              action: () => go("/project/business"),
            },
            {
              title: "Web App Dashboard",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
              action: () => go("/project/webapp"),
            },
            {
              title: "LoreCafe",
              img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
              action: () => go("/project/lorecafe"),
            },
            {
              title: "Engineer / Contractor",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
              action: () => go("/project/engineer"),
            },
            {
              title: "Event / Webinar",
              img: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
              action: () => go("/project/events/webinar"),
            },
            {
              title: "AutoGalaxy",
              img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
              action: () => go("/project/autogalaxy"),
            },
            {
              title: "Eacha Restaurant",
              img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
              action: () => go("/project/eacha"),
            },
            {
              title: "Tattoo Artist Booking",
              img: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
              action: () => go("/project/inkmaster"),
            },
            {
              title: "UrbanTee",
              img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
              action: () => go("/project/urbanTee"),
            },
            {
              title: "DonLeo Fitness",
              img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
              action: () => go("/project/donLeoFitness"),
            },
            {
              title: "PrimeNest Realty",
              img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
              action: () => go("/project/primeNestRealty"),
            },
          ].map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-44 w-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>
                  <Button
                    onClick={project.action}
                    className="mt-4 w-full"
                  >
                    View This Sample
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Michael Reyes",
              role: "Startup Founder",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              text: "Devfast delivered fast and the design looks premium. My conversion rate improved immediately.",
            },
            {
              name: "Anna Cruz",
              role: "Cafe Owner",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              text: "The website looks professional and my customers love the booking feature.",
            },
            {
              name: "James Lim",
              role: "Real Estate Agent",
              img: "https://randomuser.me/api/portraits/men/65.jpg",
              text: "Clean UI, smooth flow, and very easy to work with. Highly recommended.",
            },
          ].map((t) => (
            <Card key={t.name} className="bg-gray-800 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4 text-sm">
                  “{t.text}”
                </p>
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
        <a href="mailto:youremail@gmail.com">
          <Button className="mt-4 px-6 py-3 rounded-xl">
            <Mail className="mr-2" /> Email Devfast
          </Button>
        </a>
      </section>

      <footer className="text-center py-4 text-gray-700">
        © {new Date().getFullYear()} Devfast. Built fast. Built right.
      </footer>
    </div>
  );
}
