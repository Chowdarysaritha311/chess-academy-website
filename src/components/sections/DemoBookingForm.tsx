"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type FormState = {
  studentName: string;
  parentName: string;
  age: string;
  phone: string;
  email: string;
  experience: string;
  mode: string;
};

const initial: FormState = {
  studentName: "",
  parentName: "",
  age: "",
  phone: "",
  email: "",
  experience: "Beginner — never played",
  mode: "Online",
};

export default function DemoBookingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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

    // TODO: wire this to a real backend, e.g. POST /api/demo-booking
    // which stores the lead in the database and triggers an admin
    // notification + confirmation email. Frontend-only for this phase.
    console.log("Demo booking submitted:", form);

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-luxe flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="text-gold" size={36} />
        <p className="font-display text-lg font-semibold text-ivory">Demo request received</p>
        <p className="font-body text-sm text-ivory/60">
          Thank you, {form.parentName.split(" ")[0] || "there"} — Coach Sankar's team will reach
          out on {form.phone} within 24 hours to confirm a time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-luxe space-y-5 p-6 md:p-8">
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
        <Field label="Preferred mode">
          <select
            value={form.mode}
            onChange={(e) => update("mode", e.target.value)}
            className="input-luxe"
          >
            <option>Online</option>
            <option>Offline (Visakhapatnam)</option>
            <option>Either works</option>
          </select>
        </Field>
      </div>

      {error && <p className="font-body text-sm text-red-400">{error}</p>}

      <button type="submit" className="btn-gold w-full">
        Book my free demo class
      </button>
      <p className="text-center font-body text-xs text-ivory/40">
        No payment required. We'll contact you to schedule the class.
      </p>
    </form>
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
