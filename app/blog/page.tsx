export const metadata = {
  title: "Blog MH Forklift | Recursos para almacenes e industria",
  description:
    "Artículos, guías y recursos sobre carretillas elevadoras, limpieza industrial, alquiler y eficiencia en almacenes.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F05A00]">
        Blog MH Forklift
      </p>

      <h1 className="text-4xl font-black text-neutral-900 md:text-5xl">
        Recursos para almacenes, industria y logística
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-neutral-700">
        Guías prácticas, comparativas y contenidos técnicos para ayudar a empresas
        a elegir mejor sus equipos de manutención y limpieza industrial.
      </p>
    </main>
  );
}