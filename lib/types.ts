export interface BaseItem {
  id: string;
  acquired: string; // "YYYY-MM"
  sold?: string;
  notes?: string;
  image?: string; // relative to public/images/, e.g. "cars/civic.jpg"
}

export interface Car extends BaseItem {
  make: string;
  model: string;
  year: number;
  trim?: string;
  color?: string; // hex string for color swatch
  mileageIn?: number;
  mileageOut?: number;
}

export interface Phone extends BaseItem {
  brand: string;
  model: string;
  storage?: string;
  color?: string;
}

export interface Laptop extends BaseItem {
  brand: string;
  model: string;
  year: number;
  chip?: string;
  ram?: string;
  storage?: string;
  color?: string;
}

export type Category = "cars" | "phones" | "laptops";
export type AnyItem = Car | Phone | Laptop;
