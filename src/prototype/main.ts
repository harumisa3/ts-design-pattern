import { Manager } from "./manager";
import { MessageBox } from "./messageBox";
import { UnderlinePen } from "./underlinePen";

class Main {
  main() {
    const manager = new Manager();

    const pen = new UnderlinePen("-");
    const box1 = new MessageBox("+");
    const box2 = new MessageBox("*");

    manager.register("pen1", pen);
    manager.register("box1", box1);
    manager.register("box2", box2);

    const p1 = manager.create("pen1");
    p1.use("hello");
    const b1 = manager.create("box1");
    b1.use("hello");
    const b2 = manager.create("box2");
    b2.use("hello");
  }
}

new Main().main();