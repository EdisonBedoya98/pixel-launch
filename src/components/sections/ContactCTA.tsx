import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Calendar, MessageSquare, Clock } from "lucide-react";

export const ContactCTA = () => {
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
              ¿Listo para tu nueva{" "}
              <span className="text-gradient">página web</span>?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Conversemos sobre tu proyecto. Te invitamos a una asesoría
              gratuita donde conoceremos tu idea y te guiaremos paso a paso.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a
                href="https://wa.me/573148793121?text=Hola%20Pixel%20Launch,%20quisiera%20agendar%20una%20reuni%C3%B3n"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  icon={<Calendar size={20} />}
                  className="w-full sm:w-auto"
                >
                  Agendar Llamada Gratis
                </Button>
              </a>
              <a href="mailto:hola@pixellaunch.com">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<MessageSquare size={20} />}
                  className="w-full sm:w-auto"
                >
                  Enviar Correo
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-400 border-t border-white/10 pt-8 mt-8">
              <div className="flex items-center justify-center gap-2">
                <Clock size={16} className="text-sky-400" />
                <span>Respuesta en {"<"} 24 horas</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageSquare size={16} className="text-sky-400" />
                <span>Asesoría 100% gratuita</span>
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
                <span>Sin compromisos</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
