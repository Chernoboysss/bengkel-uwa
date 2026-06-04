import {
    Hammer,
    Car,
    Paintbrush,
    Sparkles,
  } from "lucide-react";
  
  export default function Pricing() {
    return (
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
  
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Estimasi Harga
            </h2>
  
            <p className="mt-4 text-slate-600">
              Harga dapat berubah tergantung tingkat kerusakan dan jenis kendaraan.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <Hammer
                size={42}
                className="mb-4 text-blue-600"
              />
  
              <h3 className="font-bold text-slate-900">
                Ketok Magic
              </h3>
  
              <p className="mt-3 text-3xl font-bold text-blue-600">
                Rp300K+
              </p>
  
              <p className="mt-3 text-slate-600">
                Penyok ringan hingga sedang.
              </p>
            </div>
  
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <Car
                size={42}
                className="mb-4 text-blue-600"
              />
  
              <h3 className="font-bold text-slate-900">
                Body Repair
              </h3>
  
              <p className="mt-3 text-3xl font-bold text-blue-600">
                Rp700K+
              </p>
  
              <p className="mt-3 text-slate-600">
                Perbaikan panel kendaraan.
              </p>
            </div>
  
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <Paintbrush
                size={42}
                className="mb-4 text-blue-600"
              />
  
              <h3 className="font-bold text-slate-900">
                Cat Panel
              </h3>
  
              <p className="mt-3 text-3xl font-bold text-blue-600">
                Rp500K+
              </p>
  
              <p className="mt-3 text-slate-600">
                Cat ulang per panel kendaraan.
              </p>
            </div>
  
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <Sparkles
                size={42}
                className="mb-4 text-blue-600"
              />
  
              <h3 className="font-bold text-slate-900">
                Poles Body
              </h3>
  
              <p className="mt-3 text-3xl font-bold text-blue-600">
                Rp200K+
              </p>
  
              <p className="mt-3 text-slate-600">
                Mengembalikan kilau kendaraan.
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }