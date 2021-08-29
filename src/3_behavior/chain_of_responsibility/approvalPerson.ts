import { DecisionRequest } from "./desisionRequest";

export abstract class ApprovalPerson {

  // 各担当者の名前
  private _name: string;

  // たらい回し先
  private _next: ApprovalPerson;

  // コンストラクタ
  constructor(name: string) {
    this._name = name;
  }

  // たらい回し先の設定
  setNext(next: ApprovalPerson): ApprovalPerson {
    this._next = next;
    return next;
  }

  // 決裁メソッド
  decision(request: DecisionRequest): void {
    if(this.judge(request)) {
      this.done(request);
    } else if(this._next != null) {
      // 次の決裁者が決裁をする
      this._next.decision(request);
    } else {
      // 誰も決済できず
      this.fail(request);
    }
  }

  // 判定メソッド
  protected abstract judge(request: DecisionRequest): boolean;

  // 決裁完了
  protected done(request: DecisionRequest): void {
    console.log(request + "is decisioned by" + this._name);
  }

  // 決済できず
  protected fail(request: DecisionRequest): void {
    console.log(request + "is not decisioned");
  }
}