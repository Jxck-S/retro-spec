import type { Metadata } from "next";
import { getCars } from "@/lib/data";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = { title: "Cars" };

export default function CarsPage() {
  const cars = getCars();
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Cars</h2>
        <p className="mt-1 text-zinc-400">{cars.length} {cars.length === 1 ? "car" : "cars"} owned</p>
      </div>
      <Timeline items={cars} category="cars" />
    </div>
  );
}
