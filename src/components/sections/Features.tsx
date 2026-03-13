import { Card } from "../ui/Card";
import {
  Zap,
  HeadphonesIcon,
  BadgePercent,
  LayoutTemplate,
  MessageCircleHeart,
  Search,
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Rendimiento Total",
      description:
        "Páginas web rápidas y seguras. Sitios optimizados que cargan en menos de 3 segundos, adaptados a celulares, tablets y computadores.",
      icon: <Zap size={24} className="text-amber-400" />,
    },
    {
      title: "Soporte Constante",
      description:
        "Acompañamiento local permanente. Equipo en Medellín disponible para mantenimiento y asistencia continua. Tu página nunca se detiene.",
      icon: <HeadphonesIcon size={24} className="text-sky-400" />,
    },
    {
      title: "Precio Justo",
      description:
        "Planes transparentes en pesos colombianos. Sin letras pequeñas ni costos ocultos. Precios competitivos para empresas en Colombia.",
      icon: <BadgePercent size={24} className="text-emerald-400" />,
    },
    {
      title: "Diseño Estratégico",
      description:
        "Páginas que venden y posicionan. No solo creamos páginas bonitas, diseñamos estrategias digitales que generan resultados reales.",
      icon: <LayoutTemplate size={24} className="text-violet-400" />,
    },
    {
      title: "Atención Cercana",
      description:
        "Comunicación directa y personalizada. Te acompañamos en todo el proceso con reuniones presenciales o virtuales. Servicio local con estándares internacionales.",
      icon: <MessageCircleHeart size={24} className="text-rose-400" />,
    },
    {
      title: "SEO Integrado",
      description:
        "Optimizadas para Google desde el día 1. Todas nuestras páginas incluyen optimización SEO para que tus clientes te encuentren fácilmente.",
      icon: <Search size={24} className="text-blue-400" />,
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Razones para <span className="text-gradient">elegirnos</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg hover:text-white transition-colors">
            Nos enfocamos en entregar proyectos con la más alta calidad técnica
            y de diseño, asegurando que tu inversión genere retornos reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
