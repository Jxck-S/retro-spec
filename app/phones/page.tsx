import type { Metadata } from "next";
import { getPhones } from "@/lib/data";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = { title: "Phones" };

export default function PhonesPage() {
  const phones = getPhones();
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Phones</h2>
        <p className="mt-1 text-zinc-400">{phones.length} {phones.length === 1 ? "phone" : "phones"} owned</p>
      </div>
      <Timeline items={phones} category="phones" />
    </div>
  );
}
