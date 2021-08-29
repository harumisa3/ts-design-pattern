
export class Banner {
  private str: string;

  constructor(str: string) {
    this.str = str;
  }

  public showWithParen(): void {
    console.log("(" + this.str + ")");
  }

  public showWithAster(): void {
    console.log("*" + this.str + "*");
  }
}