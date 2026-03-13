import { Rocket, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
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
              Creamos páginas web en Colombia que venden, posicionan y hacen
              crecer tu negocio con estándares internacionales.
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
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Diseño Web a Medida
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Tiendas Online
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Optimización SEO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Identidad Visual
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
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
              <li className="text-slate-400">📍 Colombia</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Pixel Launch. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Políticas de Privacidad
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
