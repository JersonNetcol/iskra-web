"use client";

import { useEffect, useState } from "react";
import { useChat } from "./ChatContext";

/* =========================
   TYPEWRITER COMPONENT
========================= */
function TypewriterText() {
  const text =
    "Marketing de influencia y posicionamiento de marca con criterio estratégico.";

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 35 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <p className="mt-5 text-base md:text-lg text-white">
      {displayedText}
      <span className="ml-1 inline-block w-[2px] h-5 bg-white animate-blink" />
    </p>
  );
}

/* =========================
   HERO
========================= */
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
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
  Agencia de publicidad enfocada en
  <span className="block">influencia y resultados reales</span>
</h1>


          <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            <strong>Iskra</strong> es una{" "}
            <strong>agencia de publicidad y marketing digital</strong>
            especializada en <strong>marketing de influencia</strong>,
            construcción de marca y campañas estratégicas con creadores, actores
            y talentos digitales en Colombia.
          </p>

          {/* ✨ TYPEWRITER */}
          <TypewriterText />

          {/* BOTONES */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-rise delay-3">
            <button
              onClick={() => setOpen(true)}
              className="relative inline-flex rounded-full p-[3px] overflow-hidden group"
            >
              <span className="absolute inset-0 rounded-full spark-border pointer-events-none" />
              <span className="relative z-10 rounded-full bg-black/80 px-8 py-3 text-lg text-white font-semibold tracking-wide hover:bg-white hover:text-black transition">
                Cotizar
              </span>
            </button>

            <button
              onClick={() => setOpen(true)}
              className="relative inline-flex rounded-full p-[3px] overflow-hidden group"
            >
              <span className="absolute inset-0 rounded-full spark-border pointer-events-none" />
              <span className="relative z-10 rounded-full bg-black/80 px-8 py-3 text-lg text-white font-semibold tracking-wide hover:bg-white hover:text-black transition">
                ¿Quieres ser influencer?
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
