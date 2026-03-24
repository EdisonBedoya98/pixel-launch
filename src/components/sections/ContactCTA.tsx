import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Calendar, MessageSquare, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactCTA = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden glass-card border-sky-500/30 p-8 md:p-12 text-center"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-slate-900 to-violet-900/50" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 blur-[100px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 blur-[100px] rounded-full mix-blend-screen" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("contact.titleMain")}{" "}
              <span className="text-gradient">
                {t("contact.titleGradient")}
              </span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              {t("contact.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a
                href={
                  i18n.language.startsWith("en")
                    ? "https://calendly.com/edisonbedoya98/new-meeting"
                    : `https://wa.me/573148793121?text=${encodeURIComponent(
                        t("contact.whatsappText")
                      )}`
                }
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  icon={<Calendar size={20} />}
                  className="w-full sm:w-auto"
                >
                  {t("contact.primaryCTA")}
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-400 border-t border-white/10 pt-8 mt-8">
              <div className="flex items-center justify-center gap-2">
                <Clock size={16} className="text-sky-400" />
                <span>{t("contact.perk1")}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageSquare size={16} className="text-sky-400" />
                <span>{t("contact.perk2")}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{t("contact.perk3")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
