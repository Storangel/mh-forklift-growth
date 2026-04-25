type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F05A00]">
        Blog MH Forklift
      </p>

      <h1 className="text-4xl font-black text-neutral-900">
        Artículo: {slug}
      </h1>

      <p className="mt-6 text-lg text-neutral-700">
        Página dinámica de artículo preparada para el sistema de blog.
      </p>
    </main>
  );
}