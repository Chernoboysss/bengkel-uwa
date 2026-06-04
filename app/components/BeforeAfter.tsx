export default function BeforeAfter() {
    return (
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
  
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Hasil Sebelum & Sesudah
            </h2>
  
            <p className="mt-4 text-slate-600">
              Beberapa contoh hasil pengerjaan Bengkel UWA.
            </p>
          </div>
  
          <div className="grid gap-10">
  
            <div className="rounded-3xl border border-slate-200 p-6 shadow-lg">
  
              <div className="grid gap-6 md:grid-cols-2">
  
                <div>
                  <h3 className="mb-4 text-center font-bold text-red-500">
                    SEBELUM
                  </h3>
  
                  <img
                    src="/images/before-after/before1.jpg"
                    alt="Before"
                    className="h-72 w-full rounded-2xl object-cover"
                  />
                </div>
  
                <div>
                  <h3 className="mb-4 text-center font-bold text-green-600">
                    SESUDAH
                  </h3>
  
                  <img
                    src="/images/before-after/after1.jpg"
                    alt="After"
                    className="h-72 w-full rounded-2xl object-cover"
                  />
                </div>
  
              </div>
  
              <p className="mt-6 text-center text-slate-600">
                Perbaikan penyok pintu dan pengecatan ulang panel kendaraan.
              </p>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }