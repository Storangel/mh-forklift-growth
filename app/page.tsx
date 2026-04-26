export default function Home() {
  return (
    <main>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F05A00]">
            Sistema de captación digital
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Cómo MH Forklift puede generar leads con SEO y landings
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Este entorno demuestra cómo estructurar contenido, páginas y
            campañas para atraer clientes potenciales de forma continua.
          </p>
        </div>
      </section>

      <section className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-black text-neutral-900 md:text-4xl">
            Un sistema basado en contenido + conversión
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Contenido SEO",
                text: "Artículos que captan búsquedas reales de clientes potenciales.",
              },
              {
                title: "Landings",
                text: "Páginas diseñadas para convertir visitas en contactos comerciales.",
              },
              {
                title: "Optimización",
                text: "Ajuste continuo de campañas, textos, estructura y conversiones.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-[#F05A00]">
            Demo activa
          </p>

          <h2 className="mt-3 text-3xl font-black text-neutral-900 md:text-4xl">
            Ejemplos de landings preparadas para captar leads
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a
              href="/lp/alquiler-carretillas-valencia"
              className="rounded-3xl bg-neutral-100 p-8 transition hover:bg-neutral-200"
            >
              <h3 className="text-2xl font-black text-neutral-900">
                Alquiler de carretillas en Valencia
              </h3>
              <p className="mt-3 text-neutral-700">
                Captación directa para empresas con necesidad inmediata de
                maquinaria.
              </p>
            </a>

            <a
              href="/lp/robots-limpieza-cenobots"
              className="rounded-3xl bg-neutral-100 p-8 transition hover:bg-neutral-200"
            >
              <h3 className="text-2xl font-black text-neutral-900">
                Robots de limpieza CENOBOTS
              </h3>
              <p className="mt-3 text-neutral-700">
                Página específica para una línea innovadora con potencial de
                campañas SEO/SEM.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#F05A00]">
                Escalable por líneas de negocio
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Cada producto puede tener su propio ecosistema digital
              </h2>

              <p className="mt-5 text-neutral-300">
                Una landing, varios artículos de apoyo, campañas de Google Ads,
                contenido para firmas de email y publicaciones en LinkedIn.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-neutral-900">
              <h3 className="text-xl font-black">Ejemplo CENOBOTS</h3>
              <ul className="mt-5 space-y-3 text-neutral-700">
                <li>• Landing específica</li>
                <li>• Artículos educativos</li>
                <li>• Campaña SEM</li>
                <li>• Apoyo comercial para el equipo de ventas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F05A00] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Esto no es una web. Es un sistema de generación de clientes.
          </h2>

          <p className="mt-4 text-white/90">
            Para que funcione de verdad, necesita continuidad: contenido,
            landings, campañas y medición.
          </p>
        </div>
      </section>
    </main>
  );
}