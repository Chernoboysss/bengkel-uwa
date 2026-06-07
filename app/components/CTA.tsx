import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-24">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Mobil Penyok, Lecet, atau Cat Kusam?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          Kirim foto kerusakan kendaraan Anda sekarang dan dapatkan
          konsultasi serta estimasi harga secara gratis.
        </p>

        <a
          href="https://wa.me/6285693495820"
          target="_blank"
          className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition hover:scale-105"
        >
          <MessageCircle size={24} />
          Chat WhatsApp Sekarang
        </a>

      </div>
    </section>
  );
}