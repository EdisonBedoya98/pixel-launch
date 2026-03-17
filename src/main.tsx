import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Componentes y Páginas
import { GeoRouter } from "./components/GeoRouter.tsx";
import ColombiaLanding from "./pages/ColombiaLanding.tsx";
import { USALanding } from "./pages/USALanding.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: este es el Gateway que detectará el país y redirigirá */}
        <Route path="/" element={<GeoRouter />} />

        {/* Rutas finales para cada país */}
        <Route path="/co" element={<ColombiaLanding />} />
        <Route path="/us" element={<USALanding />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
