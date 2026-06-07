import { prisma } from "@/lib/prisma";
import EditForm from "./EditForm";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!project) {
    return (
      <main className="p-10">
        <h1>Project tidak ditemukan</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="mb-8 text-4xl font-bold text-slate-900">
          Edit Dokumentasi
        </h1>

        <EditForm project={project} />

      </div>
    </main>
  );
}