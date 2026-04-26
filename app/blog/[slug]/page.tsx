import { posts } from "../../lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-4xl font-black text-neutral-900">
            Artículo no encontrado
          </h1>
          <a
            href="/blog"
            className="mt-6 inline-block font-bold text-[#F05A00]"
          >
            Volver al blog
          </a>
        </section>
      </main>
    );
  }

  const isRentalPost = post.slug === "alquiler-carretillas-cuando-conviene";

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-6 py-20">
        <a href="/blog" className="text-sm font-bold text-[#F05A00]">
          ← Volver al blog
        </a>

        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-[#F05A00]">
          Blog MH Forklift
        </p>

        <h1 className="mt-4 text-4xl font-black leading-tight text-neutral-900 md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-neutral-700">
          {post.description}
        </p>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-700">
          {isRentalPost ? (
            <>
              <p>
                Comprar una carretilla elevadora no siempre es la mejor decisión.
                En muchas empresas, especialmente cuando la necesidad es temporal,
                el alquiler permite mantener la operativa sin inmovilizar capital.
              </p>

              <h2 className="pt-6 text-2xl font-black text-neutral-900">
                Cuándo tiene sentido alquilar
              </h2>

              <p>
                El alquiler es especialmente útil en campañas puntuales, aumentos
                de producción, sustituciones por avería, trabajos temporales o
                situaciones donde todavía no está claro si la necesidad será
                permanente.
              </p>

              <h2 className="pt-6 text-2xl font-black text-neutral-900">
                Qué datos conviene revisar antes de elegir equipo
              </h2>

              <p>
                Antes de seleccionar una máquina conviene revisar el tipo de carga,
                la altura de elevación, el entorno de trabajo, el tipo de suelo, los
                turnos de uso y la duración estimada del alquiler.
              </p>

              <h2 className="pt-6 text-2xl font-black text-neutral-900">
                La clave: elegir el equipo adecuado
              </h2>

              <p>
                Una carretilla mal dimensionada puede generar sobrecostes, pérdida
                de productividad o problemas de seguridad. Por eso es importante
                recibir asesoramiento técnico antes de decidir.
              </p>
            </>
          ) : (
            <>
              <p>
                Los robots de limpieza industrial tienen sentido cuando una empresa
                necesita limpiar superficies amplias, repetitivas o con alto tránsito
                de forma más constante y controlada.
              </p>

              <h2 className="pt-6 text-2xl font-black text-neutral-900">
                Dónde aportan más valor
              </h2>

              <p>
                Su mayor potencial está en almacenes, centros logísticos, naves
                industriales, supermercados, parkings, centros comerciales y zonas
                comunes con recorridos repetitivos.
              </p>

              <h2 className="pt-6 text-2xl font-black text-neutral-900">
                Más que una máquina: una mejora operativa
              </h2>

              <p>
                Automatizar la limpieza permite liberar al equipo de tareas
                repetitivas, mejorar la continuidad del servicio y reforzar una
                imagen moderna ante clientes, trabajadores y visitantes.
              </p>

              <h2 className="pt-6 text-2xl font-black text-neutral-900">
                Antes de decidir
              </h2>

              <p>
                Conviene revisar metros aproximados, tipo de superficie, frecuencia
                de limpieza, obstáculos, recorridos y nivel de supervisión necesario.
              </p>
            </>
          )}
        </div>

        <div className="mt-12 rounded-3xl bg-neutral-100 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#F05A00]">
            Siguiente paso
          </p>

          <h2 className="mt-3 text-2xl font-black text-neutral-900">
            ¿Quieres valorar esta solución para tu empresa?
          </h2>

          <p className="mt-3 text-neutral-700">
            Cuéntanos tu caso y te orientamos sobre la opción más adecuada.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href={
                isRentalPost
                  ? "/lp/alquiler-carretillas-valencia"
                  : "/lp/robots-limpieza-cenobots"
              }
              className="rounded-full bg-[#F05A00] px-6 py-3 text-center font-bold text-white"
            >
              Ver solución
            </a>

            <a
              href="https://wa.me/34610941563"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-300 px-6 py-3 text-center font-bold text-neutral-900"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}