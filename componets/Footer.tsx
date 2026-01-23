export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* 🌌 Fondo animado tipo galaxia */}
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

      <div
        className="absolute inset-0 -z-10 bg-black/10 backdrop-blur-sm"
        style={{ zIndex: 3 }}
      />

      {/* Contenido del footer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo */}
        <div className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
          ISKRA
        </div>

        {/* Links rápidos */}
        <ul className="flex flex-col sm:flex-row gap-6 text-sm md:text-base text-white/90">
          <li>
            <a href="#inicio" className="hover:text-pink-500 transition-colors">
              Inicio
            </a>
          </li>
          <li>
            <a href="#nosotros" className="hover:text-pink-500 transition-colors">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-pink-500 transition-colors">
              Contacto
            </a>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className="flex gap-4 text-xl md:text-2xl">
          <a href="#" className="hover:text-pink-500 transition-colors">🌐</a>
          <a href="#" className="hover:text-pink-500 transition-colors">📸</a>
          <a href="#" className="hover:text-pink-500 transition-colors">💬</a>
        </div>

      </div>

      {/* Derechos */}
      <div className="mt-12 text-center text-sm text-white/60 pb-6">
        &copy; {new Date().getFullYear()} ISKRA. Todos los derechos reservados.
      </div>
    </footer>
  );
}
