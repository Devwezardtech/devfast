import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, CheckCircle} from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const developerPhoto = "/developer_photo.png"; 


export default function DevfastLanding() {
  const navigate = useNavigate();
  const go = (path) => navigate(path);

  return (
    <div className="min-h-screen text-slate-900 bg-gradient-to-b from-sky-50 via-white to-slate-50">

      {/* HERO */}
      <section className="text-center py-32 px-6 relative overflow-hidden">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Devfast 🚀
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg"
        >
          Fast, modern websites for startups and small businesses.
          From landing pages to full web apps — built to convert.
        </motion.p>

        <Button className="mt-10 text-lg px-10 py-6 rounded-2xl bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition">
          View Sample Projects
        </Button>
      </section>

      {/* SERVICES */}
<section className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12">
    What I Offer
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        title: "Landing Pages",
        description:
          "High-converting landing pages designed to capture leads and turn visitors into customers.",
      },
      {
        title: "Business Websites",
        description:
          "Professional websites that build trust, showcase your services, and strengthen your brand.",
      },
      {
        title: "Web Applications",
        description:
          "Custom systems and web apps built for performance, scalability, and real business growth.",
      },
    ].map((service) => (
      <motion.div
        key={service.title}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Card className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
          <CardContent className="p-8">
            <CheckCircle className="mb-5 text-blue-500 w-8 h-8" />
            <h3 className="text-xl font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="text-slate-600 mt-3 leading-relaxed">
              {service.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</section>


      {/* PROJECTS */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Sample Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Ecommerce Website / System", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", action: () => window.location.href = "https://mus-ecommerce-shop.onrender.com" },
            { title: "LoreCafe", img: "/lorecafe_image/acafe3.png", action: () => go("/project/lorecafe") },
            { title: "Engineer / Contractor", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e", action: () => go("/project/engineer") },
            { title: "Event / Webinar", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87", action: () => go("/project/events/webinar") },
            { title: "AutoGalaxy", img: "/image/car3.png", action: () => go("/project/autogalaxy") },
            { title: "Eacha Restaurant", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1", action: () => go("/project/eacha") },
            { title: "Tattoo Artist Booking", img: "https://images.unsplash.com/photo-1545235617-9465d2a55698", action: () => go("/project/inkmaster") },
            { title: "UrbanTee", img: "https://images.unsplash.com/photo-1521334884684-d80222895322", action: () => go("/project/urbanTee") },
            { title: "DonLeo Fitness", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", action: () => go("/project/donLeoFitness") },
            { title: "PrimeNest Realty", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa", action: () => go("/project/primeNestRealty") },
          ].map((project) => (
            <motion.div key={project.title} whileHover={{ scale: 1.03 }}>
              <Card className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <Button
                    onClick={project.action}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600"
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
      <section className="py-24 px-6 bg-sky-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Michael Reyes", role: "Startup Founder", img: "https://randomuser.me/api/portraits/men/32.jpg", text: "Devfast delivered fast and the design looks premium. My conversion rate improved immediately." },
            { name: "Anna Cruz", role: "Cafe Owner", img: "https://randomuser.me/api/portraits/women/44.jpg", text: "The website looks professional and my customers love the booking feature." },
            { name: "James Lim", role: "Real Estate Agent", img: "https://randomuser.me/api/portraits/men/65.jpg", text: "Clean UI, smooth flow, and very easy to work with. Highly recommended." },
          ].map((t) => (
            <Card key={t.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 mt-4 text-sm">
                  “{t.text}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    {/* CONTACT */}
<section className="bg-gradient-to-r from-sky-50 to-white py-24 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-slate-900">
      Book an Appointment
    </h2>
    <p className="text-slate-600 mt-4">
      Tell me about your project and I’ll get back to you.
    </p>
<div className="mt-10 grid gap-6 text-left">
   <div>
        <label className="block text-sm font-medium text-slate-700">
          Your Name
        </label>
        <input
          type="text"
          name="Name"
          required
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          type="email"
          name="Email"
          required
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="client@gmail.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Project Details
        </label>
        <textarea
          name="Message"
          rows="5"
          required
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tell me what kind of website you need..."
        />
      </div>

<div className="w-full items-center justify-center flex">

</div>
     
  <a
  href="https://m.me/801311679735475"
  target="_blank"
  rel="noopener noreferrer"
>

        <div className="w-full items-center justify-center flex">
          <Button className="py-4 px-8 text-lg rounded-xl bg-blue-500 hover:bg-blue-600 shadow-md flex items-center gap-2">
          <Mail className="mr-2" />
          Send Inquiry
        </Button>

        </div>
        
      </a>

</div>
  </div>
</section>

{/* MEET THE DEVELOPER */}
 <section className="py-24 px-6 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
         Developer
        </h2>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <motion.img
            src={developerPhoto}
            alt="Ejemar Maloloy-on"
            className="w-44 h-44 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Developer Info */}
          <div className="text-left md:text-left flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Ejemar Maloloy-on
            </h3>
            <p className="text-slate-600 mb-2 font-medium">Full-Stack Web Developer</p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              I build fast, modern, and high-converting websites for startups and small businesses. 
              Your project is my priority.
            </p>

            {/* Portfolio & Email Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <a
                href="https://devwezardtech.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition shadow-md"
              >
                <span className="mr-2">Portfolio</span>
                <CheckCircle className="w-4 h-4" />
              </a>

              <a
                href="mailto:ejemarmaloloyon007@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-slate-900 rounded-xl font-semibold hover:bg-gray-300 transition shadow-md"
              >
                <Mail className="mr-2 w-4 h-4" />
                Email Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <div href="https://github.com/Devwezardtech" target="_blank" rel="noopener noreferrer" className="w-6 h-6 text-gray-700 hover:text-black transition">
              </div>
              <div href="https://www.linkedin.com/in/ejemarmaloloyon/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 text-blue-600 hover:text-blue-800 transition">
              </div>
            </div>

            <p className="mt-4 text-slate-500 text-sm">📞 +63 970 450 5022</p>
          </div>
        </motion.div>
      </div>
    </section>




      <footer className="text-center py-6 text-slate-400 text-sm">
        © {new Date().getFullYear()} Devfast. Built fast. Built right.
      </footer>
    </div>
  );
}
