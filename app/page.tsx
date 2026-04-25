export default function Home() {
  return (
    <main>
      {/* HERO */}
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
            campañas para atraer clientes de forma continua.
          </p>
        </div>
      </section>

      {/* SISTEMA */}
      <section className="bg-white">
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
                text: "Páginas diseñadas para convertir visitas en contactos.",
              },
              {
                title: "Optimización",
                text: "Ajuste continuo de campañas, textos y estructura.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border p-6">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANDINGS */}
      <section className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-black text-neutral-900 md:text-4xl">
            Ejemplo de landings activas
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a
              href="/lp/alquiler-carretillas-valencia"
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-black">
                Alquiler de carretillas en Valencia
              </h3>
              <p className="mt-2 text-neutral-600">
                Captación directa de clientes con necesidad inmediata.
              </p>
            </a>

            <a
              href="/lp/robots-limpieza-cenobots"
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-black">
                Robots de limpieza CENOBOTS
              </h3>
              <p className="mt-2 text-neutral-600">
                Línea de innovación con potencial de campañas específicas.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Esto no es una web. Es un sistema de generación de clientes.
          </h2>

          <p className="mt-6 text-neutral-300">
            Para que funcione, requiere continuidad: contenido, landings y
            optimización constante.
          </p>
        </div>
      </section>
    </main>
  );
}