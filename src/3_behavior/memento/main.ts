import { Gamer } from "./gamer";
import { Hero } from "./hero";
import { Memento } from "./memento";
import * as fs from 'fs';

class Main {
  // ゲームを続けるかどうか
  static play: boolean = true;

  main() {
    console.log("ゲームを始めます");

    // 主人公とゲーマーを作成
    let hero: Hero = new Hero(30, 30, 10);
    let gamer: Gamer = new Gamer(hero, 100);
    console.log(gamer);

    // セーブデータ作成
    let memento: Memento = gamer.createMemento();

    let message: string = "コマンドを入力してください。" + "[f: 敵と戦う, s: セーブ, e: 終了]";

    while(Main.play) {
      if(gamer.hero.hp > 0) {
        console.log(message);

        // コンソール入力
        let line: string = fs.readFileSync("/dev/stdin", "utf8");
        
        if(line === "f") {
          // 敵と戦う場合の処理
          console.log("敵と戦います");
          gamer.fight();
        } else if(line === "s") {
          //セーブの場合の処理
          console.log("セーブします");
          memento = gamer.createMemento();
          console.log(gamer);
          console.log("セーブしました");
        } else if(line === "e") {
          console.log("ゲームを終了しまし");
          break;
        } else {
          console.log("正しい入力を行ってください");
        }
      } else {
        console.log("復帰しましか？" + "[y: 復帰する, n: ゲームを終了する]");

        // コンソール入力
        let line: string =  fs.readFileSync("/dev/stdin", "utf8");
        if (line === "y") {

          // 復帰の場合の処理
          // ゲーマーの状態を戻す
          gamer.restoreMemento(memento);
          console.log(gamer);
        } else if(line === "n") {
          // ゲーム終了の場合の処理
          break;
        } else {
          console.log("正しい入力を行ってください");
        }
      }
    }

  }
}
new Main().main();