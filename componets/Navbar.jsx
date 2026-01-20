"use client";

import { useState, useEffect } from "react";
import { useChat } from "./ChatContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { setOpen } = useChat();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="relative max-w-7xl mx-auto px-6 py-5 flex items-center">
        {/* Botón cotizar a la izquierda */}
        <div className="flex-1">
          <button
            onClick={() => setOpen(true)}
            className="relative inline-flex rounded-full p-[2px] overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full spark-border" />
            <span className="relative z-10 rounded-full bg-black px-6 py-2 text-sm text-white font-medium tracking-wide hover:bg-white hover:text-black transition">
              Cotizar
            </span>
          </button>
        </div>

        {/* Logo centrado */}
        <div className="absolute left-1/2 -translate-x-1/2 text-white font-semibold text-2xl tracking-wide">
          ISKRA
        </div>

        {/* Menú a la derecha */}
        <ul className="flex-1 hidden md:flex justify-end items-center gap-12 text-white text-sm tracking-wide">
          <li className="cursor-pointer hover:opacity-70 transition">Inicio</li>
          <li className="cursor-pointer hover:opacity-70 transition">Nosotros</li>
          <li className="cursor-pointer hover:opacity-70 transition">Contáctanos</li>
        </ul>
      </nav>
    </header>
  );
}
