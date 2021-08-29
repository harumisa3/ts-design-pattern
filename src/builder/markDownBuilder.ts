import { Builder } from "./builder";
const fs = require("fs");

export class MarkDownBuilder extends Builder {
  private buffer: string = "";

  makeTitle(title: string): void {
    this.buffer += `# ${title}\n\n`;
  }
  makeString(str: string): void {
    this.buffer += `${str}\n\n`;
  }
  makeItems(items: string[]): void {
    items.forEach((item) => {
      this.buffer += `- ${item} \n`;
    });

    this.buffer += "\n";
  }

  close(): void {
    this.buffer;
    fs.writeFileSync("output.txt", this.buffer);
  }

  getResult(): string {
    return "output.txt";
  }
}