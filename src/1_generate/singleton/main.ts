import { Singleton } from "./singleton";

class Main {
  public main() {
    let instance = Singleton.getInstance();

    instance.greet();
  }
}
(new Main()).main();