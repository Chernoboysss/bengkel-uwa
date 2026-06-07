export default function Footer() {
  return (
    <footer
      className="bg-slate-900 py-12 text-white"
      id="kontak"
    >
      <div className="container mx-auto px-6">

        <div className="grid gap-10 lg:grid-cols-4">

          {/* Tentang */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              BENGKEL UWA
            </h3>

            <p className="text-slate-300">
              Spesialis ketok magic, body repair,
              pengecatan mobil dan poles body
              profesional.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">
              Layanan
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li>Ketok Magic</li>
              <li>Body Repair</li>
              <li>Cat Mobil</li>
              <li>Poles Body</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">
              Kontak
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li>WhatsApp: 085693495820</li>

              <li>
                Kp Jl. Cibuntu Kb. Jeruk, RT.01/RW.04, Cibuntu, Kec. Ciampea, Kabupaten Bogor, Jawa Barat 16620
              </li>

              <li>Setiap Hari 24 Jam</li>
            </ul>
          </div>

          {/* Maps */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">
              Lokasi Bengkel
            </h4>

            <div className="overflow-hidden rounded-2xl border border-slate-700">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.4279792729919!2d106.69248492069121!3d-6.5941282329215705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69dbfc3612b871%3A0xbfdfda0930296703!2sBengkel%20Uwa%20-%20Ketok%20Magic%2C%20Body%20Repair%20%26%20Cat%20Mobil!5e0!3m2!1sid!2sid!4v1780724477612!5m2!1sid!2sid"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-400">
          © 2026 Bengkel UWA. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}