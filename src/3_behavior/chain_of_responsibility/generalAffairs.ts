import { ApprovalPerson } from "./approvalPerson";
import { DecisionRequest } from "./desisionRequest";

export class GeneralAffairs extends ApprovalPerson {
  
  // コンストラクタ
  constructor(name: string) {
    super(name);
  }

  // 判定メソッド
  // 庶務は決済できないので常にfalseを返す
  protected judge(request: DecisionRequest): boolean {
    return false;
  }
}