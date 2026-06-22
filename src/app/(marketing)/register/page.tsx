"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { programs } from "@/lib/data";

type FormState = {
  studentName: string;
  parentName: string;
  age: string;
  school: string;
  phone: string;
  email: string;
  experience: string;
  preferredBatch: string;
};

function RegisterForm() {
  const params = useSearchParams();
  const preselect = params.get("program");
  const defaultProgram = programs.find((p) => p.slug === preselect) || programs[0];

  const [form, setForm] = useState<FormState>({
    studentName: "",
    parentName: "",
    age: "",
    school: "",
    phone: "",
    email: "",
    experience: "Beginner — never played",
    preferredBatch: `${defaultProgram.name} — ${defaultProgram.batchTimings}`,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.studentName || !form.parentName || !form.phone) {
      setError("Please fill in student name, parent name, and phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "registration" }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="card-luxe mx-auto flex max-w-xl flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="text-gold" size={36} />
        <p className="font-display text-lg font-semibold text-ivory">Registration received</p>
        <p className="font-body text-sm text-ivory/60">
          Thank you — the academy will confirm {form.studentName}'s seat in the selected batch
          and follow up on {form.phone} shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-luxe mx-auto max-w-2xl space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Student name">
          <input
            value={form.studentName}
            onChange={(e) => update("studentName", e.target.value)}
            className="input-luxe"
            placeholder="Student's full name"
          />
        </Field>
        <Field label="Parent / guardian name">
          <input
            value={form.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            className="input-luxe"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Student age">
          <input
            value={form.age}
            onChange={(e) => update("age", e.target.value)}
            className="input-luxe"
            placeholder="e.g. 9"
            inputMode="numeric"
          />
        </Field>
        <Field label="School">
          <input
            value={form.school}
            onChange={(e) => update("school", e.target.value)}
            className="input-luxe"
            placeholder="Current school"
          />
        </Field>
        <Field label="Phone number">
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input-luxe"
            placeholder="+91 9XXXXXXXXX"
          />
        </Field>
        <Field label="Email (optional)">
          <input
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input-luxe"
            placeholder="parent@email.com"
            type="email"
          />
        </Field>
        <Field label="Chess experience">
          <select
            value={form.experience}
            onChange={(e) => update("experience", e.target.value)}
            className="input-luxe"
          >
            <option>Beginner — never played</option>
            <option>Knows the rules</option>
            <option>Plays casually</option>
            <option>Plays in tournaments</option>
          </select>
        </Field>
        <Field label="Preferred batch">
          <select
            value={form.preferredBatch}
            onChange={(e) => update("preferredBatch", e.target.value)}
            className="input-luxe"
          >
            {programs.map((p) => (
              <option key={p.slug} value={`${p.name} — ${p.batchTimings}`}>
                {p.name} — {p.batchTimings}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {error && <p className="font-body text-sm text-red-400">{error}</p>}

      <button type="submit" disabled={loading} className="btn-gold w-full disabled:opacity-60">
        {loading ? "Submitting…" : "Submit registration"}
      </button>
      <p className="text-center font-body text-xs text-ivory/40">
        No payment required at this stage — the academy will confirm your batch and next steps.
      </p>
    </form>
  );
}

export default function RegisterPage() {
  return (
    <section className="section-pad">
      <SectionHeading
        move="b4"
        kicker="Registration"
        title="Reserve your seat in a batch"
        subtitle="Choose a program and batch below. This reserves your spot — the academy will confirm details and fees before your first paid class."
        align="center"
      />
      <div className="mt-12">
        <Suspense>
          <RegisterForm />
        </Suspense>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-body text-xs text-ivory/55">{label}</span>
      {children}
    </label>
  );
}
