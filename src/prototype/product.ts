import { Clonable } from "./clonable";

export interface Product extends Clonable {
  use: (s: string) => void;
  createClone: () => Product;
}