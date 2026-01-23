"use client";

import { useState, useEffect } from "react";
import { useChat } from "./ChatContext";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { setOpen } = useChat();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🌊 FONDO GALAXIA (BLUR) */}
      {scrolled && (
        <div
          className="absolute inset-0 animate-liquid"
          style={{
            zIndex: 1,
            background: `
              radial-gradient(circle at 20% 30%, rgba(180,120,255,0.45), transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(120,80,220,0.35), transparent 55%),
              radial-gradient(circle at 50% 70%, rgba(90,40,150,0.35), transparent 65%),
              linear-gradient(120deg, #12001c, #2a063f, #12001c)
            `,
            filter: "blur(50px)",
          }}
        />
      )}

      {/* 🌫️ NEBULOSA */}
      {scrolled && (
        <div
          className="absolute inset-0 animate-nebula"
          style={{
            zIndex: 2,
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(200,140,255,0.35), transparent 55%),
              radial-gradient(circle at 70% 60%, rgba(150,100,255,0.25), transparent 60%)
            `,
            filter: "blur(30px)",
          }}
        />
      )}

      {/* ⭐ ESTRELLAS SUAVES · DESORDENADAS · BORROSAS */}
      {scrolled && (
        <div
          className="absolute inset-0 animate-stars pointer-events-none"
          style={{
            zIndex: 4,
            backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 1px, transparent 2px),
        radial-gradient(circle at 30% 70%, rgba(255,255,255,0.6) 1px, transparent 2px),
        radial-gradient(circle at 55% 40%, rgba(255,255,255,0.5) 1px, transparent 2px),
        radial-gradient(circle at 80% 60%, rgba(255,255,255,0.7) 1px, transparent 2px),
        radial-gradient(circle at 65% 15%, rgba(255,255,255,0.4) 1px, transparent 2px)
      `,
            backgroundSize: "180px 180px",
            opacity: 0.8,
            filter: "blur(1.5px)",
          }}
        />
      )}

      {/* 🧊 VIDRIO (MUY SUAVE, NO TAPA ESTRELLAS) */}
      {scrolled && (
        <div
          className="absolute inset-0 bg-black/10 backdrop-blur-sm"
          style={{ zIndex: 3 }}
        />
      )}

      {/* CONTENIDO */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-2 flex items-center min-h-[64px]">
        {/* LOGO */}
        <div className="flex-1">
          <Image
            src="/images/iskra-logo.png"
            alt="ISKRA"
            width={130}
            height={42}
            priority
            className="object-contain"
          />
        </div>

        {/* MENÚ */}
        <ul className="hidden md:flex gap-12 text-white/90 text-sm tracking-wide">
          <li
            onClick={() =>
              document
                .getElementById("inicio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hover:text-white transition"
          >
            Inicio
          </li>
          <li
            onClick={() =>
              document
                .getElementById("¿Por qué elegirnos?")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hover:text-white transition"
          >
            ¿Por qué elegirnos?
          </li>

          <li
            onClick={() =>
              document
                .getElementById("nosotros")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hover:text-white transition"
          >
            Nosotros
          </li>

          <li
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hover:text-white transition"
          >
            Contáctanos
          </li>
          
        </ul>
        {/* ☰ BOTÓN MOBILE */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* BOTÓN */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setOpen(true)}
            className="relative inline-flex rounded-full p-[2px] overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full spark-border" />
            <span className="relative z-10 rounded-full bg-black/80 px-6 py-2 text-sm text-white font-medium tracking-wide hover:bg-white hover:text-black transition">
              Cotizar
            </span>
          </button>
        </div>
      </nav>
      {/* 📱 MENÚ MOBILE */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full z-40">
          <div className="mx-4 mt-4 rounded-2xl bg-black/80 backdrop-blur-lg p-6 text-white space-y-6 shadow-xl">
            <p
              onClick={() => {
                document
                  .getElementById("inicio")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="cursor-pointer hover:opacity-80"
            >
              Inicio
            </p>

            <p
              onClick={() => {
                document
                  .getElementById("nosotros")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="cursor-pointer hover:opacity-80"
            >
              Nosotros
            </p>

            <p
              onClick={() => {
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="cursor-pointer hover:opacity-80"
            >
              ¿Por qué elegirnos?
            </p>
            <p
              onClick={() => {
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="cursor-pointer hover:opacity-80"
            >
              Contáctanos
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
