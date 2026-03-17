import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Pricing = () => {
  const { t } = useTranslation();
  const plansData = t("pricing.plans", { returnObjects: true }) as Array<{
    name: string;
    description: string;
    price: string;
    oldPrice: string;
    popular: boolean;
    features: string[];
  }>;

  return (
    <section id="pricing" className="py-24 relative z-10 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("pricing.titleMain")}{" "}
            <span className="text-gradient">{t("pricing.titleGradient")}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t("pricing.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plansData.map((plan, idx) => (
            <Card
              key={idx}
              glow={plan.popular}
              className={`flex flex-col h-full \${plan.popular ? 'border-sky-500/50 scale-105 z-10' : 'border-white/5 mt-0 md:mt-4 mb-0 md:mb-4'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-sky-500 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {t("pricing.badgePopular")}
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
                  <span className="text-slate-400 text-sm">
                    {t("pricing.currency")}
                  </span>
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
                href={`https://wa.me/573148793121?text=${encodeURIComponent(t("pricing.whatsappText") + " " + plan.name)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-auto block"
              >
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  {t("pricing.ctaPrimary")}
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
