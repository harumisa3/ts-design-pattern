export class Hero {

  // 最大HP
  private _maxHp: number;

  // 現在のHP
  private _hp: number;

  // 攻撃力
  private _attack: number;

  // コンストラクタ
  constructor(maxHp: number, hp: number, attack: number) {
    this._maxHp = maxHp;
    this._hp = hp;
    this._attack = attack;
  }

  // 最大HPのgetter
  get maxHp(): number {
    return this._maxHp;
  }

  // 最大HPのsetter
  set maxHp(maxHp: number) {
    this._maxHp = maxHp;
  }

  // HPのgetter
  get hp(): number {
    return this._hp;
  }

  // HPのsetter
  set hp(hp: number) {
    this._hp = hp;
  }

  // 攻撃力のgetter
  get attack(): number {
    return this._attack;
  }

  // 攻撃力のsetter
  set attack(attack: number) {
    this._attack = attack;
  }

  toString(): string {
    return "最大HP=" + this._maxHp + ", 現在のHP=" + this._hp + ", 攻撃力=" + this._attack;
  }

}