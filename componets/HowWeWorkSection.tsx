import ScrollReveal from "./ScrollReveal";

export default function HowWeWorkSection() {
  return (
    <section className="relative bg-white py-32">
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
        <div className="grid md:grid-cols-4 gap-12">

          <ScrollReveal delay={0}>
            <div className="text-center">
              <span className="text-5xl font-bold text-black/10 block mb-4">
                01
              </span>
              <h3 className="text-lg font-semibold mb-3">
                Análisis y estrategia
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entendemos tu marca, tu mercado y tus objetivos para construir
                una estrategia clara desde el inicio.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-center">
              <span className="text-5xl font-bold text-black/10 block mb-4">
                02
              </span>
              <h3 className="text-lg font-semibold mb-3">
                Concepto creativo
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creamos ideas visuales y mensajes que conectan con tu audiencia
                y fortalecen tu marca.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="text-center">
              <span className="text-5xl font-bold text-black/10 block mb-4">
                03
              </span>
              <h3 className="text-lg font-semibold mb-3">
                Ejecución precisa
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Implementamos la estrategia en los canales correctos con enfoque
                en impacto y conversión.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center">
              <span className="text-5xl font-bold text-black/10 block mb-4">
                04
              </span>
              <h3 className="text-lg font-semibold mb-3">
                Medición y optimización
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Analizamos resultados, optimizamos campañas y maximizamos el
                retorno de inversión.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
