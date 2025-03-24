import React, { useState, useEffect } from "react";
import {
  Car,
  Clock,
  Phone,
  Mail,
  MapPin,
  Wrench,
  File as Oil,
  Gauge,
  Calendar,
  Users,
  PenTool as Tool,
  CheckCircle,
  Shield,
  Settings,
  AlertCircle,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("expertise");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "À Propos", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Location", href: "#location" },
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100">
      {/* Navigation */}
      <nav className={`${isNavbarVisible ? "navbar-fixed" : "navbar-hidden"}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a
              href="#hero"
              className="text-xl font-bold text-amber-500 flex items-center gap-2"
            >
              <Car className="w-6 h-6" />
              Auto Excellence
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-stone-300 hover:text-amber-500 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-stone-300 hover:text-amber-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-stone-300 hover:text-amber-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative h-[70vh] bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80")',
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              className="text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Garage Auto Excellence
            </motion.h1>
            <motion.p
              className="text-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Votre spécialiste automobile de confiance depuis 2010
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md transition-all transform hover:scale-105">
                Prendre Rendez-vous
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-stone-800 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatCard
            number="15+"
            text="Ans d'Expérience"
            icon={<Calendar className="w-8 h-8" />}
          />
          <StatCard
            number="500+"
            text="Clients Satisfaits"
            icon={<Users className="w-8 h-8" />}
          />
          <StatCard
            number="100%"
            text="Certifié"
            icon={<CheckCircle className="w-8 h-8" />}
          />
          <StatCard
            number="24/7"
            text="Support Technique"
            icon={<Tool className="w-8 h-8" />}
          />
        </div>
      </section>

      {/* Services and Pricing Section */}
      <section id="services" className="py-16 px-4 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Services et Tarifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Entretien Régulier"
              icon={<Oil className="w-8 h-8" />}
              services={[
                "Vidange d'huile (à partir de 59$)",
                "Changement filtres (30-50$)",
                "Contrôle général (45$)",
                "Équilibrage pneus (25$/roue)",
              ]}
              description="Services d'entretien essentiels pour votre véhicule"
            />
            <PricingCard
              title="Réparations Mécaniques"
              icon={<Wrench className="w-8 h-8" />}
              services={[
                "Freins (150-300$)",
                "Embrayage (700-1200$)",
                "Distribution (400-800$)",
                "Suspension (200-500$)",
              ]}
              description="Réparations mécaniques complètes"
              featured={true}
            />
            <PricingCard
              title="Diagnostic & Électricité"
              icon={<Gauge className="w-8 h-8" />}
              services={[
                "Diagnostic électronique (49$)",
                "Batterie (120-250$)",
                "Alternateur (300-600$)",
                "Démarreur (250-500$)",
              ]}
              description="Services électriques et électroniques"
            />
          </div>
          <div className="mt-12 text-center">
            <p className="text-stone-400 mb-4">
              * Les prix sont donnés à titre indicatif et peuvent varier selon
              le modèle du véhicule
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md transition-all">
              Demander un Devis Personnalisé
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Info Section */}
      <section id="about" className="bg-stone-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <TabButton
              active={activeTab === "expertise"}
              onClick={() => setActiveTab("expertise")}
              text="Notre Expertise"
            />
            <TabButton
              active={activeTab === "engagement"}
              onClick={() => setActiveTab("engagement")}
              text="Nos Engagements"
            />
            <TabButton
              active={activeTab === "equipement"}
              onClick={() => setActiveTab("equipement")}
              text="Équipements"
            />
          </div>

          <div className="bg-stone-700 p-8 rounded-lg">
            {activeTab === "expertise" && (
              <div className="slide-in">
                <h3 className="text-2xl font-bold mb-4">Notre Expertise</h3>
                <p className="text-stone-300">
                  Avec plus de 15 ans d'expérience, notre équipe de mécaniciens
                  certifiés possède l'expertise nécessaire pour intervenir sur
                  toutes les marques et tous les modèles de véhicules. Nous
                  utilisons les dernières technologies de diagnostic pour
                  garantir des réparations précises et efficaces.
                </p>
              </div>
            )}

            {activeTab === "engagement" && (
              <div className="slide-in">
                <h3 className="text-2xl font-bold mb-4">Nos Engagements</h3>
                <ul className="space-y-3 text-stone-300">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-amber-500" />
                    Garantie 2 ans sur toutes nos réparations
                  </li>
                  <li className="flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-amber-500" />
                    Utilisation exclusive de pièces d'origine
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-amber-500" />
                    Devis détaillé et transparent
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "equipement" && (
              <div className="slide-in">
                <h3 className="text-2xl font-bold mb-4">Nos Équipements</h3>
                <p className="text-stone-300">
                  Notre garage est équipé des dernières technologies en matière
                  de diagnostic et de réparation automobile. Nous investissons
                  régulièrement dans de nouveaux équipements pour offrir le
                  meilleur service possible à nos clients.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Horaires et Contact */}
      <section id="contact" className="bg-stone-900 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-stone-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-amber-500">
              <Clock className="w-6 h-6 mr-2" />
              Horaires d'Ouverture
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>8h00 - 18h00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span>9h00 - 16h00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          <div className="bg-stone-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-amber-500">Contact</h3>
            <div className="space-y-4">
              <p className="flex items-center hover:text-amber-500 transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                (012)345-6789
              </p>
              <p className="flex items-center hover:text-amber-500 transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                faux@courriel.com
              </p>
              <p className="flex items-center hover:text-amber-500 transition-colors">
                <MapPin className="w-5 h-5 mr-3" />
                123 Rue de la fausse rue, Québec
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="location" className="py-16 px-4 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Notre Location
          </h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.123456789!2d-71.208221!3d46.813878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896f3e8b8b8b8%3A0x8b8b8b8b8b8b8b8!2sQuébec%2C%20Canada!5e0!3m2!1sen!2sus!4v1647095757814!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Dereck Bélanger - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

function PricingCard({
  icon,
  title,
  services,
  description,
  featured = false,
}: {
  icon: React.ReactNode;
  title: string;
  services: string[];
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`${
        featured ? "bg-amber-900/20 border-2 border-amber-500" : "bg-stone-800"
      } p-8 rounded-lg shadow-xl transition-all hover:transform hover:scale-105`}
    >
      <div className="text-amber-500 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-stone-400 mb-6 text-center">{description}</p>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-stone-300">
            <CheckCircle className="w-5 h-5 mr-2 text-amber-500" />
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatCard({
  number,
  text,
  icon,
}: {
  number: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-stone-700 p-6 rounded-lg text-center transform hover:scale-105 transition-all">
      <div className="text-amber-500 flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-stone-300">{text}</div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  text,
}: {
  active: boolean;
  onClick: () => void;
  text: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-md transition-all ${
        active
          ? "bg-amber-600 text-white"
          : "bg-stone-700 text-stone-300 hover:bg-stone-600"
      }`}
    >
      {text}
    </button>
  );
}

export default App;
