import { Hero } from "./hero";
import { Memento } from "./memento";

export class Gamer {

  // 主人公
  private _hero: Hero;

  // 所持金
  private _money: number;

  // 乱数
  private _random: number = Math.floor(Math.random() * 10);

  // コンストラクタ
  constructor(hero: Hero, money: number) {
    this._hero = hero;
    this._money = money;
  }

  // 主人公のgetter
  get hero(): Hero {
    return this._hero;
  }

  // 敵と戦うメソッド
  fight(): void {
    // 敵のHP(1〜10)
    let enemyHp: number = this._random;
    let result: boolean = true;

    while(result) {
      // 敵からの攻撃
      let enemyAttack: number = Math.floor(Math.random() * 10);

      // 主人公のHPを減らす
      this._hero.hp = this._hero.hp - enemyAttack;

      // お金を獲得(10〜20G)
      let getMoney: number = Math.floor(Math.random() * 20);
      console.log("敵が" + getMoney + "Gを落としました。");
      this._money = this._money + getMoney;

      // 現在の状態を表示
      console.log(this);
      break;
    }
  }

  // メメントを作成するメソッド(セーブ用)
  createMemento(): Memento {
    let saveHero: Hero = new Hero(this._hero.maxHp, this._hero.hp, this._hero.attack);
    let memento: Memento = new Memento(this._money, saveHero);

    return memento;
  }

  // メメントから戻すメソッド(復帰用)
  restoreMemento(memento: Memento): void {
    this._money = memento.money;
    this._hero = memento.hero;
  }

  toString(): string {
    return "現在の状態[" + this._hero + ",所持金=" + this._money + "G]";
  }


}