import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Componentes y Páginas
import "./i18n";
import { GeoRouter } from "./components/GeoRouter.tsx";
import Landing from "./pages/Landing.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: este es el Gateway que detectará el país y redirigirá */}
        <Route path="/" element={<GeoRouter />} />

        {/* Rutas finales para cada idioma/país */}
        <Route path="/es" element={<Landing lang="es" />} />
        <Route path="/en" element={<Landing lang="en" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
