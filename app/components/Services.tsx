import {
    Hammer,
    Car,
    PaintBucket,
    Sparkles,
} from "lucide-react";

export default function Services() {
    return (
        <section className="bg-white py-24" id="layanan">
            <div className="container mx-auto px-6">

                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Layanan Kami
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Solusi lengkap untuk perbaikan dan perawatan kendaraan Anda.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">

                    <div className="group rounded-3xl border border-slate-200 p-8 transition hover:border-blue-500 hover:shadow-xl">

  <div className="mb-5 flex justify-center">
    <Hammer
      size={48}
      className="text-blue-600"
    />
  </div>

  <h3 className="mb-3 text-center text-xl font-bold text-slate-900">
    Ketok Magic
  </h3>

  <p className="text-center text-slate-600">
    Perbaikan penyok ringan hingga berat dengan hasil presisi.
  </p>

</div>

                    <div className="group rounded-3xl border border-slate-200 p-8 text-center transition hover:border-blue-500 hover:shadow-xl">

  <div className="mb-5 flex justify-center">
    <Car
      size={48}
      className="text-blue-600"
    />
  </div>

  <h3 className="mb-3 text-xl font-bold text-slate-900">
    Body Repair
  </h3>

  <p className="text-slate-600">
    Perbaikan bodi kendaraan akibat benturan atau kecelakaan.
  </p>

</div>

<div className="group rounded-3xl border border-slate-200 p-8 text-center transition hover:border-blue-500 hover:shadow-xl">

  <div className="mb-5 flex justify-center">
    <PaintBucket
      size={48}
      className="text-blue-600"
    />
  </div>

  <h3 className="mb-3 text-xl font-bold text-slate-900">
    Cat Mobil
  </h3>

  <p className="text-slate-600">
    Pengecatan ulang dengan warna presisi dan finishing maksimal.
  </p>

</div>

<div className="group rounded-3xl border border-slate-200 p-8 text-center transition hover:border-blue-500 hover:shadow-xl">

  <div className="mb-5 flex justify-center">
    <Sparkles
      size={48}
      className="text-blue-600"
    />
  </div>

  <h3 className="mb-3 text-xl font-bold text-slate-900">
    Poles Body
  </h3>

  <p className="text-slate-600">
    Mengembalikan kilau kendaraan agar terlihat seperti baru.
  </p>

</div>

                </div>

            </div>
        </section>
    );
}