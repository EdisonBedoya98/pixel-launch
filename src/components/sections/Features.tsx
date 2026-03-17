import { Card } from "../ui/Card";
import { useTranslation } from "react-i18next";
import {
  Zap,
  HeadphonesIcon,
  BadgePercent,
  LayoutTemplate,
  MessageCircleHeart,
  Search,
} from "lucide-react";

export const Features = () => {
  const { t } = useTranslation();
  const featuresData = t("features.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const icons = [
    <Zap size={24} className="text-amber-400" />,
    <HeadphonesIcon size={24} className="text-sky-400" />,
    <BadgePercent size={24} className="text-emerald-400" />,
    <LayoutTemplate size={24} className="text-violet-400" />,
    <MessageCircleHeart size={24} className="text-rose-400" />,
    <Search size={24} className="text-blue-400" />,
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("features.titleMain")}{" "}
            <span className="text-gradient">{t("features.titleGradient")}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg hover:text-white transition-colors">
            {t("features.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, idx) => (
            <Card
              key={idx}
              className="group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {icons[idx]}
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
