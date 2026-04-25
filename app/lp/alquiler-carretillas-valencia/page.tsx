export const metadata = {
  title: "Alquiler de Carretillas Elevadoras en Valencia | MH Forklift",
  description:
    "Alquiler de carretillas elevadoras en Valencia para almacenes, industria y logística. Soluciones flexibles con asesoramiento técnico.",
};

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F05A00]">
              Alquiler industrial en Valencia
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Alquiler de carretillas elevadoras para tu almacén
            </h1>

            <p className="mt-6 text-lg text-neutral-300">
              Soluciones flexibles para cubrir picos de trabajo, campañas,
              sustituciones temporales o necesidades operativas sin invertir en
              maquinaria en propiedad.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/34610941563"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#F05A00] px-7 py-4 text-center font-bold text-white"
              >
                Solicitar disponibilidad
              </a>

              <a
                href="tel:610941563"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white"
              >
                Llamar ahora
              </a>
            </div>
          </div>

          {/* CAJA DERECHA */}
          <div className="rounded-3xl bg-white/10 p-8">
            <div className="rounded-2xl bg-white p-8 text-neutral-900">
              <p className="text-sm font-bold uppercase text-[#F05A00]">
                Respuesta rápida
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Dinos qué necesitas y te orientamos
              </h2>

              <ul className="mt-6 space-y-3 text-neutral-700">
                <li>• Tipo de carga</li>
                <li>• Altura de elevación</li>
                <li>• Duración del alquiler</li>
                <li>• Zona de trabajo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-black text-neutral-900 md:text-4xl">
            Una solución práctica cuando necesitas maquinaria sin complicarte
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Flexibilidad",
                text: "Alquila maquinaria según la duración real de tu necesidad, sin asumir una inversión fija.",
              },
              {
                title: "Asesoramiento",
                text: "Te ayudamos a elegir el equipo adecuado según carga, altura, espacio y entorno de trabajo.",
              },
              {
                title: "Operativa",
                text: "Ideal para campañas, sustituciones, picos de producción o necesidades temporales.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#F05A00]">
                Equipos disponibles
              </p>

              <h2 className="mt-3 text-3xl font-black text-neutral-900">
                Carretillas y equipos para diferentes necesidades
              </h2>

              <p className="mt-5 text-neutral-700">
                Podemos ayudarte con soluciones eléctricas, diésel y equipos de
                almacén según el tipo de trabajo, superficie, altura y carga.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Carretillas elevadoras eléctricas",
                "Carretillas diésel",
                "Transpaletas y apiladores",
                "Soluciones para almacén e industria",
              ].map((text) => (
                <div
                  key={text}
                  className="rounded-2xl bg-neutral-100 p-5 font-bold text-neutral-900"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Necesitas una carretilla para una campaña o trabajo puntual?
          </h2>

          <p className="mt-4 text-neutral-300">
            Contacta con MH Forklift y revisamos la mejor opción según tu caso.
          </p>

          <a
            href="https://wa.me/34610941563"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#F05A00] px-8 py-4 font-bold text-white"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}