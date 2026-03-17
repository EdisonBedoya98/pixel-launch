// Este componente actúa como un Gateway o Router inteligente.
// Primero detecta el país del visitante usando una API gratuita y luego
// decide qué landing page debe mostrarle.

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function GeoRouter() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a ipapi para detectar el país del usuario (es gratis y no requiere API KEY)
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        // Log para que puedas ver en consola qué país detectó durante tus pruebas
        console.log("📍 País detectado: ", data.country_code);

        if (data.country_code === "US") {
          // Si está en Estados Unidos, lo mandamos a la landing en inglés
          navigate("/en", { replace: true });
        } else {
          // Si está en Colombia (CO) o resto del mundo, landing normal en español
          navigate("/es", { replace: true });
        }
      })
      .catch((err) => {
        console.error(
          "Error detectando ubicación, cargando default (ES):",
          err,
        );
        // En caso de que falle la detección (ej. bloqueadores de red), mandamos la principal
        navigate("/es", { replace: true });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  // Pantalla de carga ultrarrápida para que no parpadee contenido equivocado
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Este componente solo redirige, así que no renderiza nada al finalizar
  return null;
}
