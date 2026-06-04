export default function Footer() {
    return (
        <footer className="bg-slate-900 py-12 text-white" id="kontak">
            <div className="container mx-auto px-6">

                <div className="grid gap-10 lg:grid-cols-3">

                    <div>
                        <h3 className="mb-4 text-2xl font-bold">
                            BENGKEL UWA
                        </h3>

                        <p className="text-slate-300">
                            Spesialis ketok magic, body repair,
                            pengecatan mobil dan poles body profesional.
                        </p>
                    </div>

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

                    <div>
                        <h4 className="mb-4 text-xl font-semibold">
                            Kontak
                        </h4>

                        <ul className="space-y-2 text-slate-300">
                            <li>WhatsApp: 08xxxxxxxxxx</li>
                            <li>Tangerang, Banten</li>
                            <li>Senin - Sabtu</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-400">
                    © 2026 Bengkel UWA. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}