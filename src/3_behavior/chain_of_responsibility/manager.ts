import { ApprovalPerson } from "./approvalPerson";
import { DecisionRequest } from "./desisionRequest";

export class Manager extends ApprovalPerson {
  // 課長が決済できる稟議書タイプの上限
  private _documentTypeLimit: number;

  // コンストラクタ
  constructor(name: string, documentTypeLimit: number) {
    super(name);
    this._documentTypeLimit = documentTypeLimit;
  }

  // 判定メソッド
  protected judge(request: DecisionRequest): boolean {
    // 稟議書のタイプが上限以下なら課長が決裁する
    if(request.documentType <= this._documentTypeLimit) {
      return true;
    }
    return false;
  }
}