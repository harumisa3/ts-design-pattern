import { Print } from "./print";
import { PrintBanner } from "./printBanner";

class Main {
  main() {
    const print:Print = new PrintBanner("bbb");
    print.printStrong();
    print.printWeek();
  }
}

const main = new Main();
main.main();