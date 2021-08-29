import { Builder } from "./builder";

export class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  constract(): void {
    this.builder.makeTitle("タイトル");
    this.builder.makeString("これは本文");
    this.builder.makeItems(["りんご", "ごりら", "ラッパ"]);
    this.builder.makeString("これも本文");
    this.builder.makeItems(["プロテイン", "グルタミン", "ケトジェニック"]);
    this.builder.close();
  }
}