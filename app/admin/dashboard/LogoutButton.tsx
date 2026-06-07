"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const response = await fetch(
      "/api/admin/logout",
      {
        method: "POST",
      }
    );

    if (response.ok) {
      router.push("/admin/login");
      router.refresh();
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white"
    >
      Logout
    </button>
  );
}