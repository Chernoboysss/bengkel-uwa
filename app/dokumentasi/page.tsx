import Image from "next/image";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";

export default function DokumentasiPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-slate-50 pt-32">

                <div className="mb-8 text-center">
                    <a
                        href="/"
                        className="rounded-xl bg-blue-600 px-5 py-3 text-white"
                    >
                        ← Kembali ke Beranda
                    </a>
                </div>

                <div className="container mx-auto px-6">

                    <div className="mb-16 text-center">
                        <h1 className="text-5xl font-bold text-slate-900">
                            Dokumentasi Pengerjaan
                        </h1>

                        <p className="mt-4 text-slate-600">
                            Portfolio hasil pengerjaan Bengkel UWA
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

                        {projects.map((project) => (
                            <div
                                key={project.slug}
                                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <Image
                                    src={project.gambar}
                                    alt={project.nama}
                                    width={800}
                                    height={600}
                                    className="h-60 w-full object-cover"
                                />

                                <div className="p-6">

                                    <h2 className="text-2xl font-bold text-slate-900">
                                        {project.nama}
                                    </h2>

                                    <p className="mt-2 text-slate-600">
                                        {project.pekerjaan}
                                    </p>

                                    <div className="mt-4">
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                            {project.durasi}
                                        </span>
                                    </div>

                                    <a
                                        href={`/dokumentasi/${project.slug}`}
                                        className="mt-5 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                                    >
                                        Lihat Detail
                                    </a>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </main>
        </>
    );
}