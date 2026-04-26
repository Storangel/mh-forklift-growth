import { posts } from "../lib/posts";

export const metadata = {
  title: "Blog MH Forklift | Logística, carretillas y limpieza industrial",
  description:
    "Artículos prácticos sobre carretillas elevadoras, limpieza industrial y optimización de almacenes.",
};

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F05A00]">
          Recursos
        </p>

        <h1 className="text-4xl font-black text-neutral-900 md:text-5xl">
          Blog MH Forklift
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          Guías prácticas y contenido técnico para ayudar a empresas a tomar
          mejores decisiones en logística, maquinaria y limpieza industrial.
        </p>
      </section>

      {/* LISTADO */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-neutral-200 bg-white p-6 transition hover:shadow-md hover:border-neutral-300"
            >
              <h2 className="text-xl font-black text-neutral-900 group-hover:text-[#F05A00]">
                {post.title}
              </h2>

              <p className="mt-3 text-neutral-600">
                {post.description}
              </p>

              <p className="mt-6 text-sm font-bold text-[#F05A00]">
                Leer artículo →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}