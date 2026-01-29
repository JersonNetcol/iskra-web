"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ColaboracionesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  /* PARALLAX */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const images = Array.from({ length: 21 }).map(
    (_, i) => `/images/colab-${i + 1}.PNG`,
  );

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* =======================
          HERO
      ======================= */}
      <section
        ref={heroRef}
        className="relative h-[120vh] w-full overflow-hidden"
      >
        {/* Imagen */}
        <motion.div style={{ y: imageY }} className="absolute inset-0">
          <Image
            src="/images/colaboraciones.png" // imagen de influencers
            alt="Colaboraciones Iskra"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10" />

        {/* Glow */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />
        </div>

        {/* Título */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-20 h-full flex items-center justify-center px-6"
        >
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-center">
            Colaboraciones
          </h1>
        </motion.div>
      </section>

      {/* =======================
          CONTENIDO
      ======================= */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/70 max-w-2xl text-lg leading-relaxed"
        >
          Talento con el que hemos desarrollado campañas, estrategias y procesos
          de crecimiento dentro del ecosistema digital.
        </motion.p>

        <div className="mt-24 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={`Colaboración ${i + 1}`}
                width={600}
                height={800}
                className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
