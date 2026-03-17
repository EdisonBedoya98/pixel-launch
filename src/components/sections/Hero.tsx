import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 blur-[128px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 blur-[128px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-sky-500/30"
        >
          <Sparkles size={16} className="text-sky-400" />
          <span className="text-sm font-medium text-slate-200">
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          {t("hero.titleMain")}{" "}
          <span className="text-gradient">{t("hero.titleGradient")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="#contact">
            <Button size="lg" icon={<ArrowRight size={20} />}>
              {t("hero.primaryCTA")}
            </Button>
          </a>
          <a href="#features">
            <Button variant="ghost" size="lg">
              {t("hero.secondaryCTA")}
            </Button>
          </a>
        </motion.div>

        {/* Social Proof Mini */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center gap-6 text-slate-400 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-sky-500" />
            <span>{t("hero.proofCompanies")}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-sky-500" />
            <span>{t("hero.proofSupport")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
