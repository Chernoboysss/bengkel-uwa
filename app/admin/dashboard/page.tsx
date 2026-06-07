import { prisma } from "@/lib/prisma";
import DeleteButton from "./DeleteButton";
import LogoutButton from "./LogoutButton";

export default async function DashboardPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Dashboard Admin
            </h1>

            <p className="mt-2 text-slate-600">
              Kelola dokumentasi Bengkel UWA
            </p>
          </div>

<div className="flex gap-3">

  <a
    href="/admin/projects/create"
    className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white"
  >
    + Tambah Dokumentasi
  </a>

  <LogoutButton />

</div>

        </div>

        <div className="mb-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-lg font-semibold text-slate-700">
            Total Dokumentasi
          </h2>

          <p className="mt-2 text-4xl font-bold text-blue-600">
            {projects.length}
          </p>

        </div>

        <div className="rounded-2xl bg-white shadow">

          {projects.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              Belum ada dokumentasi
            </div>
          ) : (
            projects.map((project) => (
  <div
    key={project.id}
    className="flex items-center justify-between border-b p-6"
  >

    <div className="flex items-center gap-4">

      <img
        src={project.thumbnail}
        alt={project.nama}
        className="h-24 w-32 rounded-xl object-cover"
      />

      <div>

        <h3 className="text-xl font-bold text-slate-900">
          {project.nama}
        </h3>

        <p className="mt-1 text-slate-600">
          {project.pekerjaan}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {project.durasi}
        </p>

      </div>

    </div>

    <div className="flex gap-3">

      <a
  href={`/admin/projects/${project.id}/edit`}
  className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
>
  Edit
</a>

      <DeleteButton id={project.id} />

    </div>

  </div>
))
          )}

        </div>

      </div>

    </main>
  );
}