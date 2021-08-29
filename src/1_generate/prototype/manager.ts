import { Product } from "./product";

export class Manager {
  showcase: { [key: string]: Product } = {};
  register(name: string, proto: Product) {
    this.showcase[name] = proto;
  }

  create(protoName: string): Product {
    const p: Product = this.showcase[protoName];
    return p.createClone();
  }
}