import { Card } from "../ui/Card";
import { useTranslation } from "react-i18next";
import { Palette, PenTool, Server, Share2 } from "lucide-react";

export const Services = () => {
  const { t } = useTranslation();
  const servicesData = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    pricing: string;
    oldPricing: string;
  }>;

  const icons = [
    <Palette size={24} className="text-pink-400" />,
    <PenTool size={24} className="text-orange-400" />,
    <Server size={24} className="text-cyan-400" />,
    <Share2 size={24} className="text-indigo-400" />,
  ];

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("services.titleMain")}{" "}
            <span className="text-gradient">{t("services.titleGradient")}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => (
            <Card
              key={idx}
              className="flex gap-6 items-start hover:border-sky-500/30 transition-colors cursor-default"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center shadow-inner">
                {icons[idx]}
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
