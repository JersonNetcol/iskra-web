export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo o nombre de la agencia */}
        <div className="text-2xl font-bold">
          Iskra
        </div>

        {/* Links rápidos */}
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#inicio" className="hover:opacity-70 transition">Inicio</a>
          </li>
          <li>
            <a href="#nosotros" className="hover:opacity-70 transition">Nosotros</a>
          </li>
          <li>
            <a href="#contacto" className="hover:opacity-70 transition">Contacto</a>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-70 transition">🌐</a>
          <a href="#" className="hover:opacity-70 transition">📸</a>
          <a href="#" className="hover:opacity-70 transition">💬</a>
        </div>

      </div>

      {/* Derechos */}
      <div className="mt-8 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} Iskra. Todos los derechos reservados.
      </div>
    </footer>
  );
}
