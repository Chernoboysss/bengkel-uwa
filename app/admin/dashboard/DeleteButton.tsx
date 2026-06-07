"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DeleteButton({
  id,
}: {
  id: number;
}) {
  const router = useRouter();

  const [showModal, setShowModal] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  async function handleDelete() {
    setLoading(true);

    try {
      const response = await fetch(
        `/api/projects/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success(
          "Dokumentasi berhasil dihapus"
        );

        router.refresh();
      } else {
        toast.error(
          "Gagal menghapus dokumentasi"
        );
      }
    } catch {
      toast.error(
        "Terjadi kesalahan"
      );
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  }

  return (
    <>
      <button
        onClick={() =>
          setShowModal(true)
        }
        className="rounded-lg bg-red-500 px-4 py-2 text-white"
      >
        Hapus
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

            <h2 className="text-xl font-bold text-slate-900">
              Hapus Dokumentasi
            </h2>

            <p className="mt-3 text-slate-600">
              Data yang dihapus tidak bisa
              dikembalikan lagi.
            </p>

            <div className="mt-6 flex justify-end gap-3">

              <button
                onClick={() =>
                  setShowModal(false)
                }
                disabled={loading}
                className="rounded-xl border px-4 py-2 text-slate-700"
              >
                Batal
              </button>

              <button
                onClick={handleDelete}
                disabled={loading}
                className="rounded-xl bg-red-600 px-4 py-2 text-white disabled:opacity-50"
              >
                {loading
                  ? "Menghapus..."
                  : "Hapus"}
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}