import { getCars, getPhones, getLaptops, getConsoles } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const cars = getCars();
  const phones = getPhones();
  const laptops = getLaptops();
  const consoles = getConsoles();

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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CategoryCard category="cars" item={cars[0] ?? null} count={cars.length} />
        <CategoryCard category="phones" item={phones[0] ?? null} count={phones.length} />
        <CategoryCard category="laptops" item={laptops[0] ?? null} count={laptops.length} />
        <CategoryCard category="consoles" item={consoles[0] ?? null} count={consoles.length} />
      </div>
    </div>
  );
}
