import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ContactCTA } from "../components/sections/ContactCTA";

export function USALanding() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-sky-500/30">
      <Navbar />

      <main>
        {/* Aquí puedes crear o reemplazar estos componentes con versiones en Inglés */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Premium Web Design <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-500 to-indigo-500">
                for the US Market
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              We craft high-converting websites optimized for sales and
              performance. Grow your business with our expertise.
            </p>
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
