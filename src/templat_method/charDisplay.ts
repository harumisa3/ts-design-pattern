import { AbstractDisplay } from "./AbstractDisplay";

export class CharDisplay extends AbstractDisplay {

  private c: string;

  constructor(c: string) {
    super();
    this.c = c;
  }

  open(): void {
    console.log("<<");
  }

  print(): void {
    console.log(this.c);
  }
  close(): void {
    console.log(">>");
  }
}