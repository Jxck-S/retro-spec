import { getCars, getPhones, getLaptops } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const cars = getCars();
  const phones = getPhones();
  const laptops = getLaptops();

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
          retro<span className="text-indigo-400">-spec</span>
        </h1>
        <p className="mt-2 text-zinc-400">
          A personal history of everything I&apos;ve owned.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <CategoryCard category="cars" item={cars[0] ?? null} count={cars.length} />
        <CategoryCard category="phones" item={phones[0] ?? null} count={phones.length} />
        <CategoryCard category="laptops" item={laptops[0] ?? null} count={laptops.length} />
      </div>
    </div>
  );
}
