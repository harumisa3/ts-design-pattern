import { Account } from "./account";

export class BankSystem {

  // 口座番号をキーに持つ連想配列
  static accountMap: { [key: string]: Account; } = {};

  // 口座情報を取得するメソッド
  static getAccount(accountNumber: string): Account {
    return this.accountMap[accountNumber];
  }

  // 口座情報が存在するかどうかを確認するメソッド
  static existsAccount(accountNumber: string): boolean {
    let account: Account = this.getAccount(accountNumber);
    if(account === null) {
      return false;
    }
    return true;
  }

  // ローンを組めるかどうかをチェックするメソッド
  static isTakeLoan(accountNumber: string): boolean {
    let account: Account = this.getAccount(accountNumber);

    // 返済ステータスをチェック
    if(account.repaymentStatus === 1) {
      // 以上だった場合、ローンは組めない
      return false;
    }
    return true;
  }

  // ローンを組むメソッド
  static takeLoan(accountNumber: string, loanAccount: number): boolean {
    let account: Account = this.getAccount(accountNumber);

    // 預金を増やす
    account.deposit += loanAccount;

    // ローン金額を増やす
    account.loan += loanAccount;
    return true;
  }
}