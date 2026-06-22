"use client";

import { useState } from "react";
import type { Lead } from "@prisma/client";

const statuses = ["new", "contacted", "enrolled", "closed"];

export default function LeadsTable({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [filter, setFilter] = useState("all");

  async function updateStatus(id: string, status: string) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  }

  async function removeLead(id: string) {
    if (!confirm("Delete this lead permanently?")) return;
    setLeads((prev) => prev.filter((l) => l.id !== id));
    await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
  }

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {["all", ...statuses].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`rounded-sm border px-3 py-1.5 font-body text-xs capitalize transition-colors ${
              filter === s
                ? "border-gold text-gold"
                : "border-gold-muted/30 text-ivory/55 hover:border-gold-muted/60"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-sm border border-gold-muted/20">
        <table className="w-full text-left font-body text-sm">
          <thead className="bg-charcoal/60 text-ivory/50">
            <tr>
              <th className="whitespace-nowrap px-4 py-3">Student</th>
              <th className="whitespace-nowrap px-4 py-3">Parent</th>
              <th className="whitespace-nowrap px-4 py-3">Phone</th>
              <th className="whitespace-nowrap px-4 py-3">Source</th>
              <th className="whitespace-nowrap px-4 py-3">Batch</th>
              <th className="whitespace-nowrap px-4 py-3">Date</th>
              <th className="whitespace-nowrap px-4 py-3">Status</th>
              <th className="whitespace-nowrap px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gold-muted/10">
            {filtered.map((lead) => (
              <tr key={lead.id}>
                <td className="whitespace-nowrap px-4 py-3 text-ivory">{lead.studentName}</td>
                <td className="whitespace-nowrap px-4 py-3 text-ivory/70">{lead.parentName}</td>
                <td className="whitespace-nowrap px-4 py-3 text-ivory/70">
                  <a href={`tel:${lead.phone}`} className="hover:text-gold">{lead.phone}</a>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-ivory/50 capitalize">
                  {lead.source.replace("_", " ")}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-ivory/50">
                  {lead.preferredBatch || "—"}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-ivory/50">
                  {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                  })}
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <select
                    value={lead.status}
                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                    className="input-luxe py-1.5 text-xs capitalize"
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <button
                    onClick={() => removeLead(lead.id)}
                    className="font-body text-xs text-ivory/35 hover:text-red-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-ivory/40">
                  No leads in this category yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
