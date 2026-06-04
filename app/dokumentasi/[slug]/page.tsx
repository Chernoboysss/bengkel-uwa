import Image from "next/image";
import { projects } from "../../data/projects";
import Navbar from "../../components/Navbar";

export default async function DetailProject({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

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
                            src={project.gambar}
                            alt={project.nama}
                            width={1200}
                            height={800}
                            className="h-96 w-full rounded-2xl object-cover"
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

                            <p className="mt-6 text-slate-600">
                                {project.deskripsi}
                            </p>

                        </div>

                        <div className="mt-12 grid gap-8 md:grid-cols-2">

                            <div className="rounded-3xl border border-slate-200 p-4">
                                <div className="mb-4 text-center">
                                    <span className="rounded-full bg-red-100 px-4 py-2 font-semibold text-red-600">
                                        Sebelum
                                    </span>
                                </div>

                                <Image
                                    src={project.before}
                                    alt="Before"
                                    width={800}
                                    height={600}
                                    className="h-72 w-full rounded-2xl object-cover"
                                />
                            </div>

                            <div>
                                <div className="mb-4 text-center">
                                    <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-600">
                                        Sesudah
                                    </span>
                                </div>

                                <Image
                                    src={project.after}
                                    alt="After"
                                    width={800}
                                    height={600}
                                    className="h-72 w-full rounded-2xl object-cover"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </main>
        </>
    );
}