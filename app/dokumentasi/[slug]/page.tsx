import Image from "next/image";
import Navbar from "../../components/Navbar";
import { prisma } from "@/lib/prisma";
export default async function DetailProject({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = await prisma.project.findUnique({
    where: {
        slug,
    },
});

    if (!project) {
        return (
            <main className="min-h-screen bg-slate-50 pt-40">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Project Tidak Ditemukan
                    </h1>

                    <a
                        href="/dokumentasi"
                        className="inline-flex items-center rounded-xl border border-blue-200 bg-white px-4 py-2 font-medium text-blue-600 shadow-sm hover:bg-blue-50"
                    >
                        ← Kembali ke Dokumentasi
                    </a>
                </div>
            </main>
        );
    }
let embedUrl = "";

if (project.youtubeUrl) {
  try {
    const url = new URL(project.youtubeUrl);

    const videoId = url.searchParams.get("v");

    if (videoId) {
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  } catch {
    embedUrl = project.youtubeUrl;
  }
}
    return (

        <>
            <Navbar />
            <main className="min-h-screen bg-slate-50 pt-40">
                <div className="container mx-auto px-6">

                    <div className="mb-6">
                        <a
                            href="/dokumentasi"
                            className="font-medium text-blue-600 hover:text-blue-700"
                        >
                            ← Kembali ke Dokumentasi
                        </a>
                    </div>

                    <h1 className="mb-10 text-center text-5xl font-bold text-slate-900">
                        {project.nama}
                    </h1>

                    <div className="rounded-3xl bg-white p-8 shadow-lg">

                        <Image
                            src={project.thumbnail}
                            alt="gambar"
                            width={1200}
                            height={800}
                            className="
        aspect-[4/3]
        w-full
        rounded-2xl
        object-cover
    "
                        />

                        <div className="mt-8">

                            <h2 className="text-3xl font-bold text-slate-900">
                                Detail Pengerjaan
                            </h2>

                            <div className="mt-8 flex flex-wrap gap-3">

                                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                    {project.pekerjaan}
                                </span>

                                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                                    {project.durasi}
                                </span>

                            </div>

                            <p className="mt-6 whitespace-pre-line text-slate-600">
  {project.deskripsi}
</p>

                            {project.youtubeUrl && (
  <div className="mt-10">
    <h2 className="mb-4 text-3xl font-bold text-slate-900">
      Video Pengerjaan
    </h2>

    <div className="overflow-hidden rounded-3xl">
      <iframe
        className="h-[500px] w-full"
        src={embedUrl}
        title="Video Pengerjaan"
        allowFullScreen
      />
    </div>
  </div>
)}

                        </div>

                        <div className="mt-12 grid gap-8 md:grid-cols-2">

                            <div className="rounded-3xl border border-slate-200 p-4">
                                <div className="mb-4 text-center">
                                    <span className="rounded-full bg-red-100 px-4 py-2 font-semibold text-red-600">
                                        Sebelum
                                    </span>
                                </div>

                                <Image
                                    src={project.beforeImage}
                                    alt="Before"
                                    width={800}
                                    height={600}
                                    className="
                                        aspect-[4/3]
                                        w-full
                                        rounded-2xl
                                        object-cover
                                        "
                                />
                            </div>

                            <div>
                                <div className="mb-4 text-center">
                                    <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-600">
                                        Sesudah
                                    </span>
                                </div>

                                <Image
                                    src={project.afterImage}
                                    alt="gambar"
                                    width={800}
                                    height={600}
                                    className="
                                        aspect-[4/3]
                                        w-full
                                        rounded-2xl
                                        object-cover
                                        "
                                
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </main>
        </>
    );
}