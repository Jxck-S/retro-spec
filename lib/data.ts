import { readFileSync } from "fs";
import { join } from "path";
import type { Car, Phone, Laptop } from "./types";
import { sortByAcquiredDesc } from "./utils";

function readJson<T>(file: string): T {
  const path = join(process.cwd(), "data", file);
  try {
    return JSON.parse(readFileSync(path, "utf8")) as T;
  } catch {
    return [] as unknown as T;
  }
}

export function getCars(): Car[] {
  return sortByAcquiredDesc(readJson<Car[]>("cars.json"));
}

export function getPhones(): Phone[] {
  return sortByAcquiredDesc(readJson<Phone[]>("phones.json"));
}

export function getLaptops(): Laptop[] {
  return sortByAcquiredDesc(readJson<Laptop[]>("laptops.json"));
}
