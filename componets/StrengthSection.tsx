import ScrollReveal from "./ScrollReveal";

export default function StrengthSection() {
  return (
    <section id="¿Por qué elegirnos?" className="bg-zinc-50 py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-gray-400">
              Diferencial Iskra
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Nuestra verdadera fortaleza
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Estrategias de marketing con personas influyentes seleccionadas
              cuidadosamente.
            </p>
          </div>
        </ScrollReveal>

        {/* TARJETAS */}
        <div className="grid md:grid-cols-3 gap-10">
          <ScrollReveal delay={100}>
            <div className="group rounded-3xl border border-gray-200 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-semibold">
                01
              </div>

              <h3 className="text-xl font-semibold mb-2">
                No vendemos influencers
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                ISKRA diseña estrategias con personas influyentes seleccionadas
                cuidadosamente.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="group rounded-3xl border border-gray-200 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-semibold">
                02
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Criterio estratégico
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Nuestro diferencial: análisis profundo, ética y visión de largo
                plazo.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="group rounded-3xl border border-gray-200 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-semibold">
                03
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Estrategias integrales
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Conectamos marcas con personas influyentes de forma ética y
                sostenible.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={400}>
          <div className="group rounded-3xl border border-gray-200 p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white w-full max-w-7xl mx-auto mt-10">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white font-semibold mx-auto">
              💰
            </div>

            <h3 className="text-2xl font-semibold mb-4">Precios justos</h3>

            <p className="text-gray-700 text-base leading-relaxed max-w-4xl mx-auto">
              Trabajamos con tarifas transparentes que cuidan tanto a la marca
              como al creador. Queremos relaciones sostenibles donde todos
              ganen: marcas reciben valor real y los influencers son justamente
              reconocidos por su trabajo. Sin sorpresas ni costos ocultos, todo
              claro desde el inicio.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
