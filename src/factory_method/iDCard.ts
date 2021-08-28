import { Product } from "./product";

export class IDCard extends Product {
  private owner: string;
  
  constructor(owner: string) {
    super();
    console.log(owner+"のカードを作ります。");
    this.owner = owner;
  }

  use(): void {
    console.log(this.owner + "のカードを使います。");
  }
  getOwner(): string {
    return this.owner;
  }

}