"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function EditForm({
  project,
}: {
  project: any;
}) {
  const router = useRouter();

  const [nama, setNama] = useState(project.nama);
  const [pekerjaan, setPekerjaan] = useState(project.pekerjaan);
  const [durasi, setDurasi] = useState(project.durasi);
  const [deskripsi, setDeskripsi] = useState(project.deskripsi);

  const [youtubeUrl, setYoutubeUrl] = useState(
    project.youtubeUrl || ""
  );

  const [thumbnailFile, setThumbnailFile] =
    useState<File | null>(null);

  const [beforeFile, setBeforeFile] =
    useState<File | null>(null);

  const [afterFile, setAfterFile] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit() {
    setLoading(true);

    try {
      let thumbnailUrl = project.thumbnail;
      let beforeUrl = project.beforeImage;
      let afterUrl = project.afterImage;

      if (thumbnailFile) {
        const formData = new FormData();
        formData.append("file", thumbnailFile);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        thumbnailUrl = data.url;
      }

      if (beforeFile) {
        const formData = new FormData();
        formData.append("file", beforeFile);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        beforeUrl = data.url;
      }

      if (afterFile) {
        const formData = new FormData();
        formData.append("file", afterFile);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        afterUrl = data.url;
      }

      const response = await fetch(
        `/api/projects/${project.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            nama,
            pekerjaan,
            durasi,
            deskripsi,
            youtubeUrl,
            thumbnail: thumbnailUrl,
            beforeImage: beforeUrl,
            afterImage: afterUrl,
          }),
        }
      );

      if (response.ok) {
        toast.success(
          "Perubahan berhasil disimpan"
        );

        setTimeout(() => {
          router.push(
            "/admin/dashboard"
          );
          router.refresh();
        }, 1000);
      } else {
        toast.error(
          "Gagal menyimpan perubahan"
        );
      }
    } catch {
      toast.error(
        "Terjadi kesalahan"
      );
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="space-y-6">

      <input
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Nama Mobil"
        className="w-full rounded-xl border p-4 text-slate-900"
      />

      <input
        value={pekerjaan}
        onChange={(e) => setPekerjaan(e.target.value)}
        placeholder="Jenis Pengerjaan"
        className="w-full rounded-xl border p-4 text-slate-900"
      />

      <input
        value={durasi}
        onChange={(e) => setDurasi(e.target.value)}
        placeholder="Durasi"
        className="w-full rounded-xl border p-4 text-slate-900"
      />

      <textarea
        value={deskripsi}
        onChange={(e) =>
          setDeskripsi(e.target.value)
        }
        rows={6}
        placeholder="Deskripsi"
        className="w-full rounded-xl border p-4 text-slate-900"
      />

      <input
        value={youtubeUrl}
        onChange={(e) =>
          setYoutubeUrl(e.target.value)
        }
        placeholder="Link Youtube"
        className="w-full rounded-xl border p-4 text-slate-900"
      />

      <div className="grid gap-6 md:grid-cols-3">

        <div>
          <p className="mb-2 font-semibold text-slate-700">
            Thumbnail
          </p>

          <img
            src={project.thumbnail}
            alt="Thumbnail"
            className="mb-3 h-48 w-full rounded-xl object-cover"
          />

          <input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setThumbnailFile(
      e.target.files?.[0] || null
    )
  }
  className="
    w-full
    text-sm
    text-slate-700
    file:mr-4
    file:rounded-lg
    file:border-0
    file:bg-blue-600
    file:px-4
    file:py-2
    file:text-white
    file:cursor-pointer
    hover:file:bg-blue-700
  "
/>
        </div>

        <div>
          <p className="mb-2 font-semibold text-slate-700">
            Before
          </p>

          <img
            src={project.beforeImage}
            alt="Before"
            className="mb-3 h-48 w-full rounded-xl object-cover"
          />

          <input
  type="file"
  accept="image/*"
  onChange={(e) =>
  setBeforeFile(
    e.target.files?.[0] || null
  )
}
  className="
    w-full
    text-sm
    text-slate-700
    file:mr-4
    file:rounded-lg
    file:border-0
    file:bg-blue-600
    file:px-4
    file:py-2
    file:text-white
    file:cursor-pointer
    hover:file:bg-blue-700
  "
/>
        </div>

        <div>
          <p className="mb-2 font-semibold text-slate-700">
            After
          </p>

          <img
            src={project.afterImage}
            alt="After"
            className="mb-3 h-48 w-full rounded-xl object-cover"
          />

          <input
  type="file"
  accept="image/*"
  onChange={(e) =>
  setAfterFile(
    e.target.files?.[0] || null
  )
}
  className="
    w-full
    text-sm
    text-slate-700
    file:mr-4
    file:rounded-lg
    file:border-0
    file:bg-blue-600
    file:px-4
    file:py-2
    file:text-white
    file:cursor-pointer
    hover:file:bg-blue-700
  "
/>
        </div>

      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="
    rounded-xl
    bg-blue-600
    px-6
    py-3
    text-white
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
      >
        {loading
          ? "Menyimpan..."
          : "Simpan Perubahan"}
      </button>

    </div>
  );
}