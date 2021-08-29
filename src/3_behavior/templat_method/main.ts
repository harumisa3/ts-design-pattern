import { AbstractDisplay } from "./AbstractDisplay"
import { CharDisplay } from "./charDisplay";
import { StringDisplay } from "./stringDisplay";

class Main {
  main() {
    const displays: AbstractDisplay[] = [];
    displays.push(new CharDisplay("c"));
    displays.push(new StringDisplay("hello"));
    displays.push(new StringDisplay("こんにちは"));

    for (const display in displays) {
      displays[display].display();
    }
  }
}

new Main().main();