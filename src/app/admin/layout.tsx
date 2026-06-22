import type { Metadata } from "next";
import AdminHeader from "@/components/admin/AdminHeader";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-onyx text-ivory">
      <AdminHeader />
      <main className="px-6 py-10 md:px-10">{children}</main>
    </div>
  );
}
