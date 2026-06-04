export default function Testimonials() {
    return (
        <section className="bg-white py-24" id="testimoni">
            <div className="container mx-auto px-6">

                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Apa Kata Pelanggan Kami
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Kepuasan pelanggan adalah prioritas utama Bengkel UWA.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
                        <p className="text-slate-600">
                            "Penyok di pintu mobil hilang total. Hasilnya rapi banget dan cepat."
                        </p>

                        <div className="mt-6">
                            <h4 className="font-bold text-slate-900">
                                Andi Saputra
                            </h4>

                            <p className="text-sm text-slate-500">
                                Toyota Avanza
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
                        <p className="text-slate-600">
                            "Cat ulang bumper warnanya presisi, tidak belang sama sekali."
                        </p>

                        <div className="mt-6">
                            <h4 className="font-bold text-slate-900">
                                Rizky Maulana
                            </h4>

                            <p className="text-sm text-slate-500">
                                Honda HR-V
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
                        <p className="text-slate-600">
                            "Pelayanan ramah, harga jelas, hasil pengerjaan memuaskan."
                        </p>

                        <div className="mt-6">
                            <h4 className="font-bold text-slate-900">
                                Dimas Pratama
                            </h4>

                            <p className="text-sm text-slate-500">
                                Mitsubishi Xpander
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}