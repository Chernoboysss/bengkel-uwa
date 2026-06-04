import {
    MessageCircle,
    Calculator,
    Wrench,
    ShieldCheck,
    Car,
  } from "lucide-react";
  
  export default function Process() {
    return (
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
  
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Proses Pengerjaan
            </h2>
  
            <p className="mt-4 text-slate-600">
              Alur kerja Bengkel UWA yang transparan dan profesional.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
  
            <div className="text-center">
              <MessageCircle
                size={50}
                className="mx-auto mb-4 text-blue-600"
              />
  
              <h3 className="font-bold text-slate-600">
                Konsultasi
              </h3>
  
              <p className="mt-2 text-sm text-slate-600">
                Customer mengirim foto atau datang langsung.
              </p>
            </div>
  
            <div className="text-center">
              <Calculator
                size={50}
                className="mx-auto mb-4 text-blue-600"
              />
  
              <h3 className="font-bold text-slate-600" >
                Estimasi
              </h3>
  
              <p className="mt-2 text-sm text-slate-600">
                Penjelasan biaya dan waktu pengerjaan.
              </p>
            </div>
  
            <div className="text-center ">
              <Wrench
                size={50}
                className="mx-auto mb-4 text-blue-600"
              />
  
              <h3 className="font-bold text-slate-600">
                Perbaikan
              </h3>
  
              <p className="mt-2 text-sm text-slate-600">
                Ketok magic, body repair atau pengecatan.
              </p>
            </div>
  
            <div className="text-center">
              <ShieldCheck
                size={50}
                className="mx-auto mb-4 text-blue-600"
              />
  
              <h3 className="font-bold text-slate-600">
                Quality Check
              </h3>
  
              <p className="mt-2 text-sm text-slate-600">
                Pemeriksaan hasil sebelum diserahkan.
              </p>
            </div>
  
            <div className="text-center">
              <Car
                size={50}
                className="mx-auto mb-4 text-blue-600"
              />
  
              <h3 className="font-bold text-slate-600">
                Serah Terima
              </h3>
  
              <p className="mt-2 text-sm text-slate-600">
                Kendaraan siap digunakan kembali.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }