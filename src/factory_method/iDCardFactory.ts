import { Factory } from "./factory";
import { IDCard } from "./iDCard";
import { Product } from "./product";

export class IDCardFactory extends Factory {
  private owners: string[] = [];

  createProduct(owner: string): Product {
    return new IDCard(owner);
  }
  registerProduct(product: Product): void {
    this.owners.push((product as IDCard).getOwner());
  }
  public getOwners(): string[] {
    return this.owners;
  }
}