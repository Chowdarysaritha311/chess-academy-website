import { prisma } from "@/lib/prisma";
import LeadsTable from "@/components/admin/LeadsTable";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });

  const total = leads.length;
  const newCount = leads.filter((l) => l.status === "new").length;
  const enrolledCount = leads.filter((l) => l.status === "enrolled").length;
  const demoCount = leads.filter((l) => l.source === "demo_booking").length;

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ivory">Leads dashboard</h1>
      <p className="mt-1 font-body text-sm text-ivory/55">
        Every demo booking and registration submitted on the site lands here.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label="Total leads" value={total} />
        <StatCard label="New" value={newCount} />
        <StatCard label="Enrolled" value={enrolledCount} />
        <StatCard label="Demo requests" value={demoCount} />
      </div>

      <div className="mt-10">
        <LeadsTable initialLeads={leads} />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="card-luxe p-5 text-center">
      <p className="font-display text-3xl font-semibold text-gold">{value}</p>
      <p className="mt-1 font-body text-xs text-ivory/55">{label}</p>
    </div>
  );
}
