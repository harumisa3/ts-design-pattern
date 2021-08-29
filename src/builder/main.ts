import { Director } from "./director";
import { MarkDownBuilder } from "./markDownBuilder";
import { TextBuilder } from "./textBuilder";
const fs = require("fs");

class Main {
  main() {
    {
      const textBuilder = new TextBuilder();
      const director = new Director(textBuilder);
      director.constract();
      const result = textBuilder.getResult();
      console.log(result);
    }

    {
      const markDownBuilder = new MarkDownBuilder();
      const director = new Director(markDownBuilder);
      director.constract();
      const result = markDownBuilder.getResult();
      console.log(result);
      fs.readFile(result, "utf-8", (_err: any, data: any) => {
        console.log(data);
      });
    }
  }
}
new Main().main();