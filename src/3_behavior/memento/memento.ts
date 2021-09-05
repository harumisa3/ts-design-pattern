import { Hero } from "./hero";

export class Memento {

  // 所持金
  _money: number;

  // 主人公
  _hero: Hero;

  // コンストラクタ
  constructor(money: number, hero: Hero) {
    this._money = money;
    this._hero = hero;
  }

  // 所持金のgetter
  get money(): number {
    return this._money;
  }

  // 主人公のgetter
  get hero(): Hero {
    return this._hero;
  }

  // toString
  toString(): string {
    return "セーブデータ[" + this._hero + ", 所持金=" + this._money + "G:";
  }
}