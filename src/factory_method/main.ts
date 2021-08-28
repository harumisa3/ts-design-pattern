import { IDCardFactory } from "./idCardFactory";

class Main {
  main() {
    const factory = new IDCardFactory();
    const card1 = factory.create("ポケポケ");
    const card2 = factory.create("たけたけ");
    const card3 = factory.create("フリフリ");
    card1.use();
    card2.use();
    card3.use();
  }
}

new Main().main();