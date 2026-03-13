import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { ContactCTA } from "./components/sections/ContactCTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-sky-500/30">
      <Navbar />

      <main>
        <Hero />

        <div className="relative">
          {/* Subtle connecting backgrounds between sections */}
          <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-sky-900/10 blur-[150px] -z-10 rounded-full" />
          <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-violet-900/10 blur-[150px] -z-10 rounded-full" />

          <Features />
          <Pricing />
          <Services />
          <Testimonials />
        </div>

        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
