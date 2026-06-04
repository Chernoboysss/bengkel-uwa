import {
    Wrench,
    BadgeDollarSign,
    Zap,
    ShieldCheck,
} from "lucide-react";

export default function WhyChooseUs() {
    return (

        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-6">

                <h2 className="mb-14 text-center text-4xl font-bold text-slate-900">
                    Kenapa Memilih Kami?
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl" >
                        <Wrench
                            size={42}
                            className="mb-4 text-blue-600"
                        />

                        <h3 className="mb-3 text-xl font-bold text-slate-900">
                            Teknisi Berpengalaman
                        </h3>

                        <p className="text-slate-600">
                            Dikerjakan oleh tenaga ahli yang berpengalaman.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
                        <BadgeDollarSign
                            size={42}
                            className="mb-4 text-green-600"
                        />

                        <h3 className="mb-3 text-xl font-bold text-slate-900">
                            Harga Transparan
                        </h3>

                        <p className="text-slate-600">
                            Estimasi harga jelas tanpa biaya tersembunyi.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
                        <Zap
                            size={42}
                            className="mb-4 text-yellow-500"
                        />
                        <h3 className="mb-3 text-xl font-bold text-slate-900">
                            Pengerjaan Cepat
                        </h3>

                        <p className="text-slate-600">
                            Proses pengerjaan efisien dan tepat waktu.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
                        <ShieldCheck
                            size={42}
                            className="mb-4 text-emerald-600"
                        />

                        <h3 className="mb-3 text-xl font-bold text-slate-900">
                            Garansi Hasil
                        </h3>

                        <p className="text-slate-600">
                            Kepuasan pelanggan menjadi prioritas utama.
                        </p>
                    </div>

                </div>

            </div>
        </section>

    );
}