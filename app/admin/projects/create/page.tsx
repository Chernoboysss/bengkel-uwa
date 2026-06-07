"use client";

import { useState } from "react";

export default function CreateProjectPage() {
    const [nama, setNama] = useState("");
    const [pekerjaan, setPekerjaan] = useState("");
    const [durasi, setDurasi] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");


    const [thumbnail, setThumbnail] =
        useState<File | null>(null);

    const [beforeImage, setBeforeImage] =
        useState<File | null>(null);

    const [afterImage, setAfterImage] =
        useState<File | null>(null);

    const [loading, setLoading] =
        useState(false);

    async function uploadFile(
        file: File
    ) {
        const formData = new FormData();

        formData.append("file", file);

        const res = await fetch(
            "/api/upload",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await res.json();

        return data.url;
    }

    async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  if (
    !thumbnail ||
    !beforeImage ||
    !afterImage
  ) {
    return;
  }

  setLoading(true);

  try {
    const thumbnailUrl =
      await uploadFile(thumbnail);

    const beforeUrl =
      await uploadFile(beforeImage);

    const afterUrl =
      await uploadFile(afterImage);

    const slug =
      nama
        .toLowerCase()
        .replace(/\s+/g, "-") +
      "-" +
      Date.now();

    await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        nama,
        slug,
        pekerjaan,
        durasi,
        deskripsi,
        thumbnail: thumbnailUrl,
        beforeImage: beforeUrl,
        afterImage: afterUrl,
        youtubeUrl,
      }),
    });

    window.location.href =
      "/admin/dashboard";
  } finally {
    setLoading(false);
  }
}

    return (
        <main className="min-h-screen bg-slate-100 p-8">
            <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Tambah Dokumentasi
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Tambahkan hasil pengerjaan terbaru Bengkel UWA
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >

                    {/* Nama Mobil */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Nama Mobil
                        </label>

                        <input
                            type="text"
                            placeholder="Contoh: Toyota Avanza"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className="
                w-full
                rounded-2xl
                border
                border-slate-300
                px-5
                py-4
                text-slate-900
                placeholder:text-slate-400
                focus:border-blue-500
                focus:outline-none
              "
                        />
                    </div>

                    {/* Jenis Pengerjaan */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Jenis Pengerjaan
                        </label>

                        <input
                            type="text"
                            placeholder="Contoh: Ketok Magic Pintu Kiri"
                            value={pekerjaan}
                            onChange={(e) => setPekerjaan(e.target.value)}
                            className="
                w-full
                rounded-2xl
                border
                border-slate-300
                px-5
                py-4
                text-slate-900
                placeholder:text-slate-400
                focus:border-blue-500
                focus:outline-none
              "
                        />
                    </div>

                    {/* Durasi */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Durasi Pengerjaan
                        </label>

                        <input
                            type="text"
                            placeholder="Contoh: 3 Hari"
                            value={durasi}
                            onChange={(e) => setDurasi(e.target.value)}
                            className="
                w-full
                rounded-2xl
                border
                border-slate-300
                px-5
                py-4
                text-slate-900
                placeholder:text-slate-400
                focus:border-blue-500
                focus:outline-none
              "
                        />
                    </div>

                    {/* Deskripsi */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Deskripsi
                        </label>

                        <textarea
                            placeholder="Jelaskan detail pengerjaan..."
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            rows={6}
                            className="
                w-full
                rounded-2xl
                border
                border-slate-300
                px-5
                py-4
                text-slate-900
                placeholder:text-slate-400
                focus:border-blue-500
                focus:outline-none
              "
                        />
                    </div>

                    {/* Upload Section */}
                    <div className="border-t border-slate-200 pt-8">

                        <h2 className="mb-6 text-2xl font-bold text-slate-900">
                            Upload Media
                        </h2>

                        {/* Thumbnail */}
                        <div className="mb-8">
                            <label className="mb-3 block font-medium text-slate-700">
                                Thumbnail
                            </label>

                            <label
                                className="
                  flex
                  h-40
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-dashed
                  border-slate-300
                  bg-slate-50
                  text-slate-500    
                  transition
                  hover:border-blue-500
                  hover:bg-blue-50
                "
                            >
                                Klik untuk upload thumbnail

                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) =>
                                        setThumbnail(
                                            e.target.files?.[0] || null
                                        )
                                    }
                                />
                            </label>
                        </div>

                        {/* Before & After */}
                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-3 block font-medium text-slate-700">
                                    Foto Sebelum
                                </label>

                                <label
                                    className="
                    flex
                    h-40
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-2xl
                    border-2
                    border-dashed
                    border-slate-300
                    bg-slate-50
                    text-slate-500
                    transition
                    hover:border-blue-500
                    hover:bg-blue-50
                  "
                                >
                                    Upload Foto Before

                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) =>
                                            setBeforeImage(
                                                e.target.files?.[0] || null
                                            )
                                        }
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="mb-3 block font-medium text-slate-700">
                                    Foto Sesudah
                                </label>

                                <label
                                    className="
                    flex
                    h-40
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-2xl
                    border-2
                    border-dashed
                    border-slate-300
                    bg-slate-50
                    text-slate-500
                    transition
                    hover:border-blue-500
                    hover:bg-blue-50
                  "
                                >
                                    Upload Foto After

                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) =>
                                            setAfterImage(
                                                e.target.files?.[0] || null
                                            )
                                        }
                                    />
                                </label>
                            </div>

                        </div>

                    </div>

                    {/* Youtube */}
                    <div className="border-t border-slate-200 pt-8">

                        <label className="mb-2 block font-medium text-slate-700">
                            Link Youtube
                        </label>

                        <input
                            type="text"
                            placeholder="https://youtube.com/watch?v=..."
                            value={youtubeUrl}
                            onChange={(e) => setYoutubeUrl(e.target.value)}
                            className="
                w-full
                rounded-2xl
                border
                border-slate-300
                px-5
                py-4
                text-slate-900
                placeholder:text-slate-400
                focus:border-blue-500
                focus:outline-none
              "
                        />
                    </div>

                    {/* Submit */}
                    <button
  type="submit"
  disabled={loading}
  className="
    w-full
    rounded-2xl
    bg-blue-600
    py-4
    text-lg
    font-semibold
    text-white
    transition
    hover:bg-blue-700
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
>
  {loading
    ? "Menyimpan..."
    : "Simpan Dokumentasi"}
</button>

                </form>

            </div>
        </main>
    );
}