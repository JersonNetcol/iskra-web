import ScrollReveal from "./ScrollReveal";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Descubrimos tu marca",
      text:
        "Analizamos tu negocio, tus valores y tu público objetivo para diseñar la estrategia perfecta.",
      color: "bg-pink-500",
    },
    {
      number: "02",
      title: "Diseñamos campañas inteligentes",
      text:
        "Creamos conceptos creativos y soluciones de marketing que conectan con tu audiencia.",
      color: "bg-purple-500",
    },
    {
      number: "03",
      title: "Conectamos con tu público",
      text:
        "Gestionamos influencers y canales adecuados para que tu mensaje llegue con fuerza y rapidez.",
      color: "bg-blue-500",
    },
    {
      number: "04",
      title: "Medimos y optimizamos resultados",
      text:
        "Evaluamos cada campaña, ajustamos estrategias y maximizamos el retorno de inversión.",
      color: "bg-emerald-500",
    },
  ];

  return (
    <section className="py-28 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            ¿Cómo trabajamos en Iskra?
          </h2>
        </ScrollReveal>

        {/* Subtítulo */}
        <ScrollReveal delay={150}>
          <p className="text-center text-lg md:text-xl text-neutral-300 mb-24">
            Impulsamos tu marca paso a paso
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-neutral-700 -translate-x-1/2" />

          <div className="flex flex-col gap-24">
            {steps.map((step, index) => {
              const isRight = index % 2 === 0;

              return (
                <ScrollReveal key={index} delay={index * 150}>
                  <div
                    className={`relative flex ${
                      isRight ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Contenido */}
                    <div
                      className={`w-full md:w-[45%] ${
                        isRight ? "md:pl-20 text-left" : "md:pr-20 text-right"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-black font-bold mb-4 ${step.color}`}
                      >
                        {step.number}
                      </div>

                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
