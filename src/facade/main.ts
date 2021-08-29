import { Account } from "./account";
import { BankManager } from "./bankManager";
import { BankSystem } from "./bankSystem";

class Main {
  main() {
    // ==========================
    // 事前にアカウント情報を登録しておく
    // ==========================
    let yamada: Account = new Account(1, "0001", "普通", "山田太郎", 100000,1000000,1);
    let tanaka: Account = new Account(1, "0002", "普通", "田中角栄", 200000,0,0);
    BankSystem.accountMap["0001"] = yamada;
    BankSystem.accountMap["0002"] = tanaka;

    // ==========================
    // 山田太郎のローンを組んでみる
    // ==========================
    let yamadaAccount: string = "0001";
    let yamadaResult: number = BankManager.takeLoan(yamadaAccount, 100000);
    console.log("");
    // ==========================
    // 田中角栄のローンを組んでみる
    // ==========================
    let tanakaAccount: string = "0002";
    let tanakaResult: number = BankManager.takeLoan(tanakaAccount, 100000);
  }
}

new Main().main();