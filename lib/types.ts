export interface BaseItem {
  id: string;
  released?: string; // "YYYY-MM" — official product launch date
  acquired?: string; // "YYYY-MM" — when you personally got it
  sold?: string;     // "YYYY-MM" — when you sold/stopped using it
  current?: boolean; // set to false if sold but date unknown
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
