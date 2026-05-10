import type { Metadata } from "next";
import { getLaptops } from "@/lib/data";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = { title: "Laptops" };

export default function LaptopsPage() {
  const laptops = getLaptops();
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Laptops</h2>
        <p className="mt-1 text-zinc-400">{laptops.length} {laptops.length === 1 ? "laptop" : "laptops"} owned</p>
      </div>
      <Timeline items={laptops} category="laptops" />
    </div>
  );
}
