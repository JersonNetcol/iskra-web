"use client";

import { useChat } from "./ChatContext";

export default function Hero() {
  const { setOpen } = useChat();

  return (
    <section className="relative h-screen w-full">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight animate-rise delay-1">
            Impulsamos marcas
            <span className="block text-white/800">
              con estrategia y creatividad
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/800 animate-rise delay-2">
            Iskra es una agencia de publicidad enfocada en resultados, diseño
            elegante y soluciones inteligentes.
          </p>

          {/* Botón Cotiza Ahora */}
          <div className="mt-12 flex justify-center animate-rise delay-3">
            <button
              onClick={() => setOpen(true)}
              className="relative inline-flex rounded-full p-[2px] overflow-hidden group"
            >
              <span className="absolute inset-0 rounded-full spark-border" />
              <span className="relative z-10 rounded-full bg-black px-10 py-4 text-white font-medium tracking-wide hover:bg-white hover:text-black transition">
                Cotiza ahora
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
