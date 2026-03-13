import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Web Start",
      description:
        "Ideal para emprendedores y pequeños negocios que buscan presencia digital profesional.",
      price: "$ 1.290.000",
      oldPrice: "$ 1.790.000 Cop",
      popular: false,
      features: [
        "Hasta 5 páginas únicas",
        "2 revisiones de diseño",
        "Dominio .com y hosting por 1 año",
        "Certificado SSL (https)",
        "Diseño 100% responsive",
        "Capacitación personalizada",
        "Integración con WhatsApp",
        "Optimización básica SEO",
        "Entrega en 7 días hábiles",
        "Soporte técnico 30 días gratis",
      ],
    },
    {
      name: "Web Grow",
      description:
        "Pensado para empresas en crecimiento que necesitan destacar y vender online con fuerza.",
      price: "$ 1.690.000",
      oldPrice: "$ 2.190.000 Cop",
      popular: true,
      features: [
        "Todo lo del Plan Start, más:",
        "Hasta 7 páginas adicionales",
        "3 revisiones de diseño",
        "Tienda online básica (e-commerce)",
        "Pasarela de pagos en línea",
        "Optimización SEO avanzada",
        "Módulo de testimonios",
        "Velocidad optimizada (< 3s)",
        "Entrega en 10 días hábiles",
        "Soporte técnico 60 días gratis",
      ],
    },
    {
      name: "Web Scale",
      description:
        "Solución corporativa completa para líderes de mercado que exigen lo mejor.",
      price: "$ 2.750.000",
      oldPrice: "$ 3.250.000 Cop",
      popular: false,
      features: [
        "Todo lo del Plan Grow, más:",
        "Revisiones ilimitadas",
        "SEO completo (on-page y técnico)",
        "Sistema de citas y reservas",
        "Correos empresariales profesionales",
        "Seguridad avanzada",
        "Diseño 100% personalizado",
        "Migración de contenido",
        "Entrega en 20 días hábiles",
        "Soporte técnico 90 días gratis",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative z-10 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Planes <span className="text-gradient">Transparentes</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Precios en pesos colombianos, sin letras pequeñas ni costos ocultos.
            Encuentra el plan perfecto para la etapa actual de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              glow={plan.popular}
              className={`flex flex-col h-full \${plan.popular ? 'border-sky-500/50 scale-105 z-10' : 'border-white/5 mt-0 md:mt-4 mb-0 md:mb-4'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-sky-500 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm h-10">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-slate-500 line-through text-sm block mb-1">
                  {plan.oldPrice}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-sm">COP</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-sky-400 shrink-0 mt-0.5"
                      />
                      <span className="text-slate-300 text-sm leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/573148793121?text=Hola%20Pixel%20Launch,%20estoy%20interesado%20en%20el%20plan%20${plan.name}`}
                target="_blank"
                rel="noreferrer"
                className="mt-auto block"
              >
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Solicitar Plan
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
