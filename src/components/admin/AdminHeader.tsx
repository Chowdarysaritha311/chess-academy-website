"use client";

import { usePathname, useRouter } from "next/navigation";

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="flex items-center justify-between border-b border-gold-muted/20 px-6 py-4 md:px-10">
      <p className="font-display text-base font-semibold">
        Sankar<span className="text-gold">Chess</span>{" "}
        <span className="font-body text-sm font-normal text-ivory/40">/ admin</span>
      </p>
      {!isLogin && (
        <button onClick={handleLogout} className="btn-outline px-4 py-2 text-xs">
          Sign out
        </button>
      )}
    </header>
  );
}
