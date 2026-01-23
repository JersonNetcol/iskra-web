"use client";

import { useChat } from "./ChatContext";

export default function Hero() {
  const { setOpen } = useChat();

  return (
    <section id="inicio" className="relative h-screen w-full">
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

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1
            className="text-4xl md:text-6xl font-semibold leading-tight animate-rise delay-1 text-white"
            style={{
              WebkitTextStroke: "1.5px rgba(0,0,0,0.9)",
              textShadow: "0 4px 20px rgba(0,0,0,0.7)",
            }}
          >
            Estrategia que transforma
            <span className="block">influencia en resultados</span>
          </h1>

          <p className="mt-5 text-base md:text-lg animate-rise delay-2 text-white">
            Marketing de influencia y posicionamiento de marca con criterio
            estratégico.
          </p>

          {/* BOTON */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-rise delay-3">
            <div className="relative inline-block">
              <button
                onClick={() => setOpen(true)}
                className="relative inline-flex rounded-full p-[3px] overflow-hidden group"
              >
                {/* Luz / borde */}
                <span className="absolute inset-0 rounded-full spark-border pointer-events-none" />

                {/* Texto */}
                <span className="relative z-10 rounded-full bg-black/80 px-8 py-3 text-lg text-white font-semibold tracking-wide hover:bg-white hover:text-black transition">
                  Cotizar
                </span>
              </button>
              <button
                onClick={() => setOpen(true)}
                className="relative inline-flex rounded-full p-[3px] overflow-hidden group"
              >
                {/* Luz / borde */}
                <span className="absolute inset-0 rounded-full spark-border pointer-events-none" />

                {/* Texto */}
                <span className="relative z-10 rounded-full bg-black/80 px-8 py-3 text-lg text-white font-semibold tracking-wide hover:bg-white hover:text-black transition">
                  ¿Quieres ser influencer?
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
