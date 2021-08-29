import { Builder } from "./builder";

export class TextBuilder extends Builder {
  private buffer: string = "";

  makeTitle(title: string): void {
    this.buffer += "===============================\n";
    this.buffer += `「${title}」\n\n`;
  }
  makeString(str: string): void {
    this.buffer += `□${str}\n\n`;
  }
  makeItems(items: string[]): void {
    items.forEach((item) => {
      this.buffer += `- ${item} \n`;
    });
    this.buffer += "\n";
  }

  close(): void {
    this.buffer += "===============================\n";
  }

  getResult(): string {
    return this.buffer;
  }
}