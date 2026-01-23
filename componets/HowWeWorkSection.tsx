"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedInfluencerImageProps {
  src: string;
  index: number;
}

const influencerImages = [
  "/images/influencer/juan.jpg",
  "/images/influencer2.jpg",
  "/images/influencer3.jpg",
  "/images/influencer4.jpg",
];

function AnimatedInfluencerImage({ src, index }: AnimatedInfluencerImageProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants: Variants = {
    hidden: { x: index % 2 === 0 ? -200 : 200, opacity: 0, scale: 0.8 },
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 1 + index * 0.3 } },
  };

  if (inView) controls.start("visible");

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={`Influencer ${index + 1}`}
      className="absolute top-0 left-1/2 w-48 h-48 object-cover rounded-full shadow-lg"
      style={{ zIndex: -index }}
      initial="hidden"
      animate={controls}
      variants={variants}
    />
  );
}

export default function HowWeWorkSection() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
              Cómo trabajamos en Iskra
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Un proceso estratégico, creativo y enfocado en resultados reales.
            </p>
          </div>
        </ScrollReveal>

        {/* PASOS */}
        <div className="grid md:grid-cols-4 gap-12 relative z-10">
          {[{
            title: "Análisis y estrategia",
            description: "Entendemos tu marca, tu mercado y tus objetivos para construir una estrategia clara desde el inicio."
          }, {
            title: "Concepto creativo",
            description: "Creamos ideas visuales y mensajes que conectan con tu audiencia y fortalecen tu marca."
          }, {
            title: "Ejecución precisa",
            description: "Implementamos la estrategia en los canales correctos con enfoque en impacto y conversión."
          }, {
            title: "Medición y optimización",
            description: "Analizamos resultados, optimizamos campañas y maximizamos el retorno de inversión."
          }].map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center">
                <span className="text-5xl font-bold text-black/10 block mb-4">
                  {`0${index + 1}`}
                </span>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* IMÁGENES DINÁMICAS DE INFLUENCERS */}
        {influencerImages.map((src, index) => (
          <AnimatedInfluencerImage key={index} src={src} index={index} />
        ))}

      </div>
    </section>
  );
}
