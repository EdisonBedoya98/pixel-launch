import { Card } from "../ui/Card";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Testimonials = () => {
  const { t } = useTranslation();
  const testimonialsData = t("testimonials.items", {
    returnObjects: true,
  }) as Array<{
    name: string;
    role: string;
    content: string;
    rating: number;
  }>;

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
            {t("testimonials.titleMain")}{" "}
            <span className="text-gradient">
              {t("testimonials.titleGradient")}
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, idx) => (
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
