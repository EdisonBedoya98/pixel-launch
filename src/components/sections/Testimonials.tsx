import { Card } from "../ui/Card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Joshua De Abreu",
      role: "Cliente Web Trading",
      content:
        "Sinceramente superó mis expectativas. Desde el diseño hasta la estructura, todo está pensado. La página es rápida, profesional y muy intuitiva. Respondieron mis dudas rápidamente.",
      rating: 5,
    },
    {
      name: "Angela Correa",
      role: "Decortinas e interiores",
      content:
        "Excelente servicio!!! El asesoramiento es muy eficiente, son muy cumplidos y correctos con los tiempos de entrega!!! Tienen mucho conocimiento sobre diseño web. Los recomiendo 100%.",
      rating: 5,
    },
    {
      name: "Andrey Grass",
      role: "Cliente Corporativo",
      content:
        "Antonio es excelente, muy profesional y su trabajo es impecable. Lo contraté sin conocerlo por internet y salió mucho mejor que todos los que conocía 🙏🏼. Recomendado al 1000%.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative z-10 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lo que dicen{" "}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Basado en las excelentes reseñas de quienes ya han confiado en
            nuestro trabajo para impulsar sus negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="relative pt-10">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} />
              </div>
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 to-violet-600 flex items-center justify-center font-bold text-white shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <span className="text-slate-500 text-sm">
                    {testimonial.role}
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
