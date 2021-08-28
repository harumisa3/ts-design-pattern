import { AbstractDisplay } from "./AbstractDisplay";

export class StringDisplay extends AbstractDisplay {
  private str: string;

  constructor(str: string) {
    super();
    this.str = str;
  }


  open(): void {
    this.printLine();
  }
  print(): void {
    console.log(`| ${this.str} |`);
  }
  close(): void {
    this.printLine();
  }

  private printLine() {
    let line = "+";
    for(let i=0; i < this.str.length; i++) {
      line += "-";
    }
    line += "+";
    console.log(line);
  }
}