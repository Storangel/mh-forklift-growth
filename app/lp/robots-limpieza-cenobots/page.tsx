export const metadata = {
  title: "Robots de Limpieza Industrial CENOBOTS | MH Forklift",
  description:
    "Robots autónomos de limpieza industrial CENOBOTS para almacenes, naves logísticas, centros comerciales e industria.",
};

export default function Page() {
  return (
    <main>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F05A00]">
              Automatización de limpieza industrial
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Robots autónomos de limpieza para grandes superficies
            </h1>

            <p className="mt-6 text-lg text-neutral-300">
              CENOBOTS permite automatizar tareas repetitivas de limpieza en
              almacenes, naves logísticas, industria, centros comerciales y
              espacios de alto tránsito.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/34610941563"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#F05A00] px-7 py-4 text-center font-bold text-white"
              >
                Solicitar información
              </a>

              <a
                href="tel:610941563"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white"
              >
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-8">
            <div className="rounded-2xl bg-white p-8 text-neutral-900">
              <p className="text-sm font-bold uppercase text-[#F05A00]">
                Solución innovadora
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Ideal para empresas que necesitan limpiar más con menos fricción operativa
              </h2>

              <ul className="mt-6 space-y-3 text-neutral-700">
                <li>• Limpieza autónoma programada</li>
                <li>• Reducción de tareas repetitivas</li>
                <li>• Mayor control operativo</li>
                <li>• Imagen moderna e innovadora</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-black text-neutral-900 md:text-4xl">
            Una nueva forma de gestionar la limpieza en entornos profesionales
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Automatización",
                text: "Permite programar tareas de limpieza y liberar al equipo de trabajos repetitivos.",
              },
              {
                title: "Productividad",
                text: "Ayuda a mantener grandes superficies limpias con mayor continuidad operativa.",
              },
              {
                title: "Diferenciación",
                text: "Refuerza la imagen de una empresa moderna, eficiente y orientada a la innovación.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-neutral-900">{item.title}</h3>
                <p className="mt-3 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#F05A00]">
                Aplicaciones
              </p>

              <h2 className="mt-3 text-3xl font-black text-neutral-900">
                Pensado para superficies donde la limpieza no puede parar
              </h2>

              <p className="mt-5 text-neutral-700">
                Los robots CENOBOTS pueden integrarse en rutinas de limpieza de
                espacios amplios, especialmente donde hay recorridos repetitivos,
                alto tránsito o necesidad de mantener una imagen impecable.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Almacenes y centros logísticos",
                "Naves industriales",
                "Centros comerciales",
                "Supermercados y grandes superficies",
                "Estaciones, parkings y zonas comunes",
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

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Quieres valorar si un robot de limpieza encaja en tu instalación?
          </h2>

          <p className="mt-4 text-neutral-300">
            Cuéntanos el tipo de superficie, metros aproximados y frecuencia de limpieza.
          </p>

          <a
            href="https://wa.me/34610941563"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#F05A00] px-8 py-4 font-bold text-white"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}