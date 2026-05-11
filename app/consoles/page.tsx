import type { Metadata } from "next";
import { getConsoles } from "@/lib/data";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = { title: "Consoles" };

export default function ConsolesPage() {
  const consoles = getConsoles();
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Consoles</h2>
        <p className="mt-1 text-zinc-400">{consoles.length} {consoles.length === 1 ? "console" : "consoles"} owned</p>
      </div>
      <Timeline items={consoles} category="consoles" />
    </div>
  );
}
