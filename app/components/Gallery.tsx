export default function Gallery() {
    return (
        <section className="bg-slate-50 py-24" id="galeri">
            <div className="container mx-auto px-6">

                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Hasil Pengerjaan
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Beberapa contoh hasil perbaikan kendaraan di Bengkel UWA.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {/* Card 1 */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                        <img
                            src="/images/repairbody.png"
                            alt="Perbaikan Penyok Pintu"
                            className="h-64 w-full object-cover"
                            />

                        <div className="p-6">
                            <h3 className="font-bold text-slate-900">
                                Perbaikan Penyok Pintu
                            </h3>

                            <p className="mt-2 text-slate-600">
                                Hasil rapi tanpa terlihat bekas kerusakan.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                        <img
                            src="/images/catbody.jpg"
                            alt="Cat Ulang Body"
                            className="h-64 w-full object-cover"
                            />

                        <div className="p-6">
                            <h3 className="font-bold text-slate-900">
                                Cat Ulang Body
                            </h3>

                            <p className="mt-2 text-slate-600">
                                Finishing halus dan warna merata.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                        <img
                            src="/images/repairpenyok.jpg"
                            alt="Body Repair"
                            className="h-64 w-full object-cover"
                        />

                        <div className="p-6">
                            <h3 className="font-bold text-slate-900">
                                Body Repair
                            </h3>

                            <p className="mt-2 text-slate-600">
                                Kendaraan kembali seperti kondisi semula.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}