import Image from "next/image";

export default function Hero() {
    return (
        < section className="bg-gradient-to-br from-sky-100 via-white to-cyan-100" id="home">
            <div className="container mx-auto px-6 pt-44 pb-24">
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    <div>
                        <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-7xl">
                            BENGKEL UWA
                        </h1>

                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                            Solusi terpercaya untuk ketok magic, body repair,
                            pengecatan mobil, dan poles body dengan hasil
                            rapi, cepat, dan bergaransi.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 md:flex-row">
                            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
                                <a
                                    href="https://wa.me/6285693495820" 
                                    target="_blank"
                                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
                                >
                                    Konsultasi Gratis
                                </a>
                            </button>

                            <button className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 hover:bg-blue-50">
                                <a
                                    href="/dokumentasi"
                                    className=""
                                >
                                    Lihat Galeri
                                </a>
                            </button>
                        </div>

                        <div className="mt-14 grid grid-cols-3 gap-6">
                            <div>
                                <h3 className="text-3xl font-bold text-blue-600">
                                    100+
                                </h3>
                                <p className="text-slate-600">
                                    Mobil Diperbaiki
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-blue-600">
                                    5+
                                </h3>
                                <p className="text-slate-600">
                                    Tahun Pengalaman
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-blue-600">
                                    100%
                                </h3>
                                <p className="text-slate-600">
                                    Pelanggan Puas
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/images/hero.png"
                            alt="Mobil Bengkel UWA"
                            width={1200}
                            height={800}
                            priority
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section >
    );
}