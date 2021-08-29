export abstract class AbstractDisplay {
  abstract open(): void;
  abstract print(): void;
  abstract close(): void;

  display() {
    this.open();
    for(let i = 0; i < 5; i++) {
      this.print();
    }
    this.close();
  }
}