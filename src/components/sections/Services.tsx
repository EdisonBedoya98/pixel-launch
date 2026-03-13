import { Card } from "../ui/Card";
import { Palette, PenTool, Server, Share2 } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Diseño de Logo",
      description:
        "Identidad visual profesional para tu marca. Logotipo coherente con la identidad de tu empresa.",
      icon: <Palette size={24} className="text-pink-400" />,
      pricing: "Desde: $ 450.000 COP con plan web",
      oldPricing: "Normal: $ 850.000 COP",
    },
    {
      title: "Textos Web y SEO",
      description:
        "Contenido optimizado para Google. Redacción profesional y estratégica para atraer clientes desde buscadores.",
      icon: <PenTool size={24} className="text-orange-400" />,
      pricing: "GRATIS con Plan Grow o Scale",
      oldPricing: "Desde: $ 250.000 COP",
    },
    {
      title: "Web Hosting Premium",
      description:
        "Alojamiento en servidores 99% Uptime. Hosting rápido, seguro y estable con soporte en español.",
      icon: <Server size={24} className="text-cyan-400" />,
      pricing: "GRATIS el primer año con cualquier plan",
      oldPricing: "Desde: $ 300.000 COP",
    },
    {
      title: "Gestión de Redes Sociales",
      description:
        "Impulsa tu presencia digital. Perfiles optimizados y contenido visual que conecta con tu audiencia.",
      icon: <Share2 size={24} className="text-indigo-400" />,
      pricing: "Descuento especial para clientes web",
      oldPricing: "Desde: $ 350.000 COP/Mes",
    },
  ];

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Servicios Complementarios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lleva tu web al{" "}
            <span className="text-gradient">siguiente nivel</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Aprovecha nuestros descuentos especiales al contratar un plan web y
            obtén una solución digital 360°.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="flex gap-6 items-start hover:border-sky-500/30 transition-colors cursor-default"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center shadow-inner">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 text-sm line-through">
                    {service.oldPricing}
                  </span>
                  <span className="text-sky-300 font-medium">
                    {service.pricing}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
