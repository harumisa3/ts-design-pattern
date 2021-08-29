import { Product } from "./product";
import clone from "clone";

export class UnderlinePen implements Product {
  symbol: string;
  constructor(symbol: string) {
    this.symbol = symbol;
  }
  use(s: string): void {
    console.log(`this is underlinepen. ${this.symbol}. ${s}`);
  }
  createClone(): Product {
    return clone<Product>(this);
  }
}