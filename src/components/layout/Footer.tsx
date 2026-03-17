import { Rocket, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const servicesItems = t("footer.servicesItems", {
    returnObjects: true,
  }) as string[];
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-sky-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white">
                <Rocket size={18} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Pixel Launch
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.servicesTitle")}
            </h4>
            <ul className="space-y-3">
              {servicesItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail size={16} />
                <a
                  href="mailto:hola@pixellaunch.com"
                  className="hover:text-sky-400 transition-colors"
                >
                  hola@pixellaunch.com
                </a>
              </li>
              <li className="text-slate-400">{t("footer.location")}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
