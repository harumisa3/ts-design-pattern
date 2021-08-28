import { Product } from "./product";

export abstract class Factory {

  abstract createProduct(owner: string): Product;
  abstract registerProduct(product: Product): void;

  create(owner: string): Product {
    const p = this.createProduct(owner);
    this.registerProduct(p);
    return p;
  }
}