import { BankSystem } from "./bankSystem";

export class BankManager {

  // 正常終了のコード値
  static SUCCESS: number = 0;
  // 異常終了
  static ERROR: number = 1;

  // ローンを組むインターフェース(API)
  // 0: 正常終了
  // 1: 異常終了
  static takeLoan(accountNumber: string, loanAccount: number): number {
    // ==========================
    // 口座の存在チェック
    // ==========================
    let existsAccount: boolean = BankSystem.existsAccount(accountNumber);
    if (existsAccount === false) {
      console.log("口座情報が存在しません");
      return this.ERROR;
    }
    // ==========================
    // 返済ステータスのチェック
    // ==========================
    let checkRepaymentStatus: boolean = BankSystem.isTakeLoan(accountNumber);
    if (checkRepaymentStatus === false ){
      console.log("返済が滞ってるため、新規ローンを組めません");
      return this.ERROR;
    }
    // ==========================
    // ローンを組む
    // ==========================
    let takeLoan: boolean = BankSystem.takeLoan(accountNumber, loanAccount);
    if (takeLoan === false ) {
      console.log("ローンを組むのに失敗しました");
      return this.ERROR;
    }

    console.log("ローンを組みました");
    return this.SUCCESS;
  } 
}